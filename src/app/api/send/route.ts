import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const { name, subject, email, message } = await req.json();

    if (!name || !subject || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        {
          status: 400,
        },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const destinationEmail = process.env.MY_EMAIL;

    if (!resendApiKey || !destinationEmail) {
      return new Response(
        JSON.stringify({ error: 'Email service is not configured' }),
        {
          status: 500,
        },
      );
    }

    const resend = new Resend(resendApiKey);
    const emailResponse = await resend.emails.send({
      from: 'onboarding@resend.dev', // Ganti dengan domain verifikasi dari Resend
      to: destinationEmail,
      subject: `Pesan dari Web A.N.I: ${subject}`,
      html: `<p><strong>Nama:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Pesan:</strong> ${message}</p>`,
    });

    return new Response(
      JSON.stringify({ success: true, data: emailResponse }),
      {
        status: 200,
      },
    );
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Unknown error occurred';
    return new Response(
      JSON.stringify({ success: false, error: message }),
      {
        status: 500,
      },
    );
  }
}
