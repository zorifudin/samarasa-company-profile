// app/contact/page.tsx
import { Metadata } from "next";
import ContactForm from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with us for any inquiries or support",
};

export default function ContactPage() {
  return <ContactForm />;
}
