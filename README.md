This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables Setup

To enable the contact form email functionality, you need to set up Gmail SMTP:

1. **Create a `.env.local` file** in the root directory

2. **Set up Gmail App Password:**
   - Go to [Google Account](https://myaccount.google.com/)
   - Enable **2-Step Verification** (if not already enabled)
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Other (Custom name)" → Enter "Portfolio Contact Form"
   - Click "Generate"
   - Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)

3. **Add to `.env.local`:**
   ```env
   GMAIL_USER=vinujak777@gmail.com
   GMAIL_APP_PASSWORD=your-16-character-app-password-here
   CONTACT_TO_EMAIL=vinujak777@gmail.com
   SMTP_FROM=vinujak777@gmail.com
   ```

   **Note:** Remove spaces from the app password when adding it to `.env.local`

4. **Restart the development server** after adding environment variables

The contact form will now send emails to `vinujak777@gmail.com` when submitted.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
