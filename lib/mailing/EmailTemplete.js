

  
export const CUSTOMER_ORDER_EMAIL_TEMPLETE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{Tunda Emails}</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right,rgba(186, 34, 39, 1),rgba(229, 47, 114, 1)); padding: 20px; text-align: center;">
    <h2 style="color: white; margin: 0;">Customer Orders </h2>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>This is the message from the customer:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 18px; font-weight: bold; letter-spacing: 5px; color: #3f41c7ff;">{message}</span>
    </div>
    <h4>PHONE:{phone}</h4>
    
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is email is from a customer, kindly reach out to them as soon as possible</p>
  </div>
</body>
</html>
`;

export const CUSTOMER_AUTO_REPLY = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirmation Email</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right,rgb(12, 58, 14),rgb(9, 70, 12)); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Tunda Hotel</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,{name}</p>
    <p>Thank you for contacting Tunda Hotel:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 16px; font-weight: bold; letter-spacing: 5px; color: #dde6ddff;"> We will get back to you as soon as possible</span>
    </div>
    <p>We value your time .</p>
    <p>Follow us in our socila media:.</p>
    <h3>Facebook: TUNDA HOTEL</h3>
    <h3> X:  @tunda_hotel</h3>
    <h3>Tiktok:  Tunda hotel01</h3>
    <p>If you didn't contact us, please ignore this email.</p>
    <p>Best regards,<br>Tunda Hotel Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>`


