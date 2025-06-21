import nodemailer from "nodemailer";
import { google } from "googleapis";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

// Load the HTML file
const emailBody = fs.readFileSync(path.join(process.cwd(), "public", "index.html"), "utf-8");

// Setup Google OAuth2 credentials
const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
const CLIENT_SECRET = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
const REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI 
const REFRESH_TOKEN = process.env.NEXT_PUBLIC_GOOGLE_REFRESH_TOKEN 

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

// Set the refresh token
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export async function POST(req) {
  const { email } = await req.json();
  try {
    // Get a fresh access token
    const { token } = await oAuth2Client.getAccessToken();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "idanshoppermail@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: token,
      },
    });

    // Mail options
    const mailOptions = {
      from: "IDAN SHOPPER 😊 <idanshoppermail@gmail.com>",
      to: email,
      subject: "IDANSHOPPER EXPERIENCE",
      text: "Welcome to the world that is Idanshopper",
      html: emailBody,
      attachments: [
        {
          filename: "welcome.png",
          path: path.join(process.cwd(), "public", "images", "Welcome-image.png"),
          cid: "welcome@idan",
        },
      ],
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent:", result);
    return NextResponse.json({ message: "Email sent", result });

  } catch (error) {
    console.error("Sending failed:", error);
    return NextResponse.json({ message: "Failed to send email", error: error.message }, { status: 500 });
  }
}
