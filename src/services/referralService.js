import prisma from "../config/prismaClient.js";
import transporter from "../config/emailConfig.js";

 
export const processReferral = async (data) => {
  const { friendName, friendEmail, friendPhone, vertical, yourName, yourEmail, yourPhone } = data;

  // Validate required fields
  const requiredFields = {
    friendName: "Friend's name is required",
    friendEmail: "Friend's email is required",
    friendPhone: "Friend's phone number is required",
    vertical: "Vertical is required",
    yourName: "Your name is required",
    yourEmail: "Your email is required",
    yourPhone: "Your phone number is required",
  };

  const missingFields = Object.entries(requiredFields)
    .filter(([field]) => !data[field])
    .map(([_, message]) => message);

  if (missingFields.length > 0) {
    throw new Error(missingFields.join(", "));
  }

  // Save data to the database
  const referral = await prisma.referral.create({
    data: { friendName, friendEmail, friendPhone, vertical, yourName, yourEmail, yourPhone },
  });

  // Send email notification
  await sendReferralEmail(friendEmail, yourName, friendName, vertical);

  return { message: "Referral submitted successfully!", referral };
};

// Function to send referral email
const sendReferralEmail = async (friendEmail, yourName, friendName, vertical) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: friendEmail,
      subject: "You've Been Referred! 🎉",
      html: `
        <div>
          <h1>Hi ${friendName}!</h1>
          <p>${yourName} has referred you to our ${vertical} program.</p>
          <p>We'll contact you shortly to provide more details.</p>
          <p>Best regards,<br/>The Referral Team</p>
        </div>
      `,
    });
    console.log("✅ Referral email sent successfully!");
  } catch (error) {
    console.error("❌ Email sending failed:", error);
  }
};
