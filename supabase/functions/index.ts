const resendApiKey = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

interface EmailPayload {
  from: string;
  to: string[];
  subject: string;
  html: string;
  reply_to?: string;
}

async function sendEmail(payload: EmailPayload) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  
  if (!response.ok) {
    return { error: data };
  }
  
  return { data };
}

Deno.serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!resendApiKey) {
      throw new Error("Email service is not configured (missing API key).");
    }

    const { name, email, phone, message }: ContactFormRequest = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields." }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const safePhone = typeof phone === "string" ? phone.trim().slice(0, 30) : "";

    console.log("Received contact form submission:", { name, email });

    // Send notification email to business
    const businessEmailResult = await sendEmail({
      from: "WorxAds Contact <onboarding@resend.dev>",
      to: ["suppliers.find.marketing.shop@gmail.com"],
      reply_to: email,
      subject: `Mesaj nou de contact de la ${name}`,
      html: `
        <h2>Mesaj nou din formularul de contact</h2>
        <p><strong>Nume:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${safePhone ? `<p><strong>Telefon:</strong> ${safePhone}</p>` : ""}
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `,
    });

    if (businessEmailResult.error) {
      console.error("Failed to send business email:", businessEmailResult.error);
      return new Response(
        JSON.stringify({
          error: businessEmailResult.error.message || "Failed to send notification email.",
        }),
        {
          status: 502,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Business email sent:", businessEmailResult.data);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
