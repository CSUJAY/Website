// AETHERA FORM GATEWAY SERVER (Final Full Corrected ES Module Code with Diagnostics)

import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

// --- ES Module Fixes for __dirname ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// ----------------------------------------------------

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // To parse JSON bodies from POST requests

// --- Configuration ---
// Your email for sending and receiving notifications
const CONTACT_EMAIL = process.env.EMAIL_USER; 
const CONTACT_PASSWORD = process.env.EMAIL_PASS;
const RECEIVING_EMAIL = "aetherameeting@gmail.com"; 

if (!CONTACT_EMAIL || !CONTACT_PASSWORD) {
    console.error("CRITICAL: EMAIL_USER or EMAIL_PASS not set in Vercel Environment Variables. Forms will fail.");
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: CONTACT_EMAIL, pass: CONTACT_PASSWORD }
});

// --- DIAGNOSTIC STEP: Verify Transporter Connection on Server Startup ---
transporter.verify(function(error, success) {
  if (error) {
    console.error("--- CRITICAL NODEMAILER ERROR ---");
    console.error("Transporter verification failed. Check Vercel EMAIL_PASS secret.");
    console.error(error); // Log the full error to Vercel console
    console.error("-----------------------------------");
  } else {
    console.log("Nodemailer Transporter is successfully verified and ready to send.");
  }
});
// ------------------------------------------------------------------------

// --- NEW FORM HANDLING ENDPOINT (API) ---
app.post('/api/handle-form', async (req, res) => {
    try {
        const { formType, name, email, company, message } = req.body;
        console.log(`[FORM] Received new submission: ${formType} from ${email}`);
        
        let subject, body;

        if (formType === 'contact') {
            subject = `NEW SECURE DEMO REQUEST: ${company || name}`;
            body = `
                A new Secure Demonstration Request has been received:
                
                Name: ${name}
                Company: ${company || 'N/A'}
                Sender Email: ${email}
                Message: ${message}
            `;
        } else if (formType === 'newsletter') {
             subject = `NEW NEWSLETTER SUBSCRIPTION: ${email}`;
             body = `New email subscriber: ${email}`;
        } else {
             return res.status(400).json({ success: false, error: "Invalid form type." });
        }

        await transporter.sendMail({
            from: `"Aethera Form Gateway" <${CONTACT_EMAIL}>`,
            to: RECEIVING_EMAIL, 
            subject: subject,
            text: body
        });
        
        console.log(`[FORM] Notification sent for ${formType}.`);
        res.json({ success: true, message: "Submission successful." });
    } catch (err) {
        // IMPROVED ERROR LOGGING FOR THE 500 RESPONSE
        console.error(`[FORM] Submission failed (500): ${err.message}. Check Nodemailer setup.`);
        res.status(500).json({ success: false, error: "Mail Gateway Failure. Check Vercel secrets and log for invalid login." });
    }
});
// ------------------------------------

// --- Static File Serving (for your Vite/React files) ---

// Assuming 'dist' is your build output folder
app.use(express.static(path.join(__dirname, 'dist'))); 

// FIX: Catch-all route to serve index.html for all client-side routes
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Aethera Form Gateway Listening on http://localhost:${PORT}`);
});