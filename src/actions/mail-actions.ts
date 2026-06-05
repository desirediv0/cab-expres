"use server";

import { sendEmail, generateEmailTemplate } from "@/lib/mail";

export async function submitCabBooking(formData: FormData) {
  const data = {
    formName: "Cab Booking",
    pickupCity: formData.get("pickupCity") as string,
    destinationCity: formData.get("destinationCity") as string,
    travelDate: formData.get("travelDate") as string,
    phoneNumber: formData.get("phoneNumber") as string,
  };

  const html = generateEmailTemplate(data.formName, data);
  const result = await sendEmail({
    to: "admin@cabexpress.com",
    subject: "New Cab Booking Inquiry",
    html,
  });

  return result;
}

export async function submitCabInquiry(formData: FormData) {
  const data = {
    formName: "Cab Inquiry",
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
    service: formData.get("service") as string,
    message: formData.get("message") as string,
  };

  const html = generateEmailTemplate(data.formName, data);
  const result = await sendEmail({
    to: "admin@cabexpress.com",
    subject: "New Cab Inquiry",
    html,
  });

  return result;
}

export async function submitHolidayInquiry(formData: FormData) {
  const data = {
    formName: "Holiday Inquiry",
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
    packageName: formData.get("packageName") as string,
    message: formData.get("message") as string,
  };

  const html = generateEmailTemplate(data.formName, data);
  const result = await sendEmail({
    to: "admin@cabexpress.com",
    subject: "New Holiday Package Inquiry",
    html,
  });

  return result;
}

export async function submitContact(formData: FormData) {
  const data = {
    formName: "Contact Form",
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };

  const html = generateEmailTemplate(data.formName, data);
  const result = await sendEmail({
    to: "admin@cabexpress.com",
    subject: `Contact: ${data.subject}`,
    html,
  });

  return result;
}

export async function submitPartnerRegistration(data: {
  name: string;
  companyName: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  vehicleType: string;
  numberOfVehicles: string;
  description?: string;
}) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>New Partner Registration - CabExpress</title>
      </head>
      <body style="font-family: Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #eee;">
          <div style="background: #000000; padding: 20px; text-align: center;">
            <h1 style="margin: 0; color: #FFC107; font-size: 24px;">CabExpress Partner Network</h1>
          </div>
          <div style="padding: 30px;">
            <h2 style="margin-top: 0; color: #333; border-bottom: 2px solid #FFC107; padding-bottom: 10px;">Partner Inquiry Received</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 40%;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Company:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.companyName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">City:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.city}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">State:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.state}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Vehicle Type:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.vehicleType}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Number Of Vehicles:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.numberOfVehicles}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Business Description:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.description || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold;">Submission Time:</td>
                <td style="padding: 10px;">${new Date().toLocaleString("en-IN")}</td>
              </tr>
            </table>
          </div>
          <div style="background: #000; padding: 20px; text-align: center; font-size: 12px; color: #fff;">
            <p style="margin: 0;">© ${new Date().getFullYear()} CabExpress. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  return await sendEmail({
    to: "admin@cabexpress.com",
    subject: "New Partner Registration - CabExpress",
    html,
  });
}