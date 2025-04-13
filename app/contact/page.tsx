'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
import Footer from "@/components/footer";
import emailjs from '@emailjs/browser';
import Background from '@/components/background';

export default function Contact() {
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("0fFYaRJSmrQA5reEA");
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    try {
      // Use the direct form element from the event
      const form = e.target as HTMLFormElement;
      
      const result = await emailjs.sendForm(
        'service_7rc3v4p',
        'template_mogz8z6',
        form,
        '0fFYaRJSmrQA5reEA'
      );

      if (result.text === 'OK') {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus("error");
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-transparent">
      <Background />
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-[#666666] dark:text-[#a7a7a7] hover:text-[#1e0e62] dark:hover:text-[#00d8ff] mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#666666] dark:text-[#a7a7a7] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] text-[#1e0e62] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00d8ff]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#666666] dark:text-[#a7a7a7] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] text-[#1e0e62] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00d8ff]"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#666666] dark:text-[#a7a7a7] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] text-[#1e0e62] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00d8ff]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#666666] dark:text-[#a7a7a7] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] text-[#1e0e62] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00d8ff]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitStatus === "success" && (
                  <p className="text-green-500 text-center">Message sent successfully!</p>
                )}

                {submitStatus === "error" && (
                  <p className="text-red-500 text-center">{errorMessage}</p>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-[#666666] dark:text-[#a7a7a7] mb-8">
                  Feel free to reach out if you want to collaborate on a project, have a question, or just want to connect!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="text-[#00d8ff]" size={24} />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:daksh7march2005@gmail.com" className="text-[#666666] dark:text-[#a7a7a7] hover:text-[#1e0e62] dark:hover:text-[#00d8ff]">
                      daksh7march2005@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="text-[#00d8ff]" size={24} />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a href="tel:+916280504839" className="text-[#666666] dark:text-[#a7a7a7] hover:text-[#1e0e62] dark:hover:text-[#00d8ff]">
                      +91 62805 04839
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="text-[#00d8ff]" size={24} />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-[#666666] dark:text-[#a7a7a7]">
                      Ludhiana, Punjab, India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 