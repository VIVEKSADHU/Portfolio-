# EmailJS Setup Instructions for Vivek's Portfolio

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up with your Gmail account (viveksadhu369@gmail.com)
3. Verify your email address

## Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" 
4. Connect your Gmail account (viveksadhu369@gmail.com)
5. Copy the **Service ID** (e.g., "service_abc123")

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Hello Vivek,

You have received a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Copy the **Template ID** (e.g., "template_xyz789")

## Step 4: Get Public Key
1. Go to "Account" > "General"
2. Copy your **Public Key** (e.g., "user_abcdefghij")

## Step 5: Update Your Code
Replace these values in `src/components/Contact.jsx`:

```javascript
emailjs.sendForm(
  'service_abc123', // Replace with your Service ID
  'template_xyz789', // Replace with your Template ID
  form.current,
  'user_abcdefghij' // Replace with your Public Key
)
```

## Step 6: Test the Form
1. Fill out your contact form
2. Check your Gmail inbox
3. You should receive the message!

## Security Note
The public key is safe to use in frontend code. EmailJS handles the secure email sending.