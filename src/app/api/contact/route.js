import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { fullname, institution, email, phone, message } =
      await request.json();

    if (!fullname || !institution || !email || !phone || !message) {
      return Response.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "mail.privateemail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Rawdatee Landing Page" <${process.env.MAIL_USER}>`,
      to: "contact@rawdatee.com",
      subject: `New Inquiry from ${fullname}`,
      text: `
Full Name: ${fullname}
Institution: ${institution}
Email: ${email}
Phone: ${phone}
Message:
${message}
      `,
      html: `
        <h2>New Kindergarten Owner Inquiry</h2>
        <p><strong>Full Name:</strong> ${fullname}</p>
        <p><strong>Institution:</strong> ${institution}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Email error:", error);
    return Response.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
