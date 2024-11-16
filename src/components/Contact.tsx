"use client";

import React from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative min-h-screen bg-gray-900 bg-blend-color-burn">
      <div className="bg-center0 absolute inset-0 bg-cover">
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-b backdrop-blur-sm"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24">
        <div className="space-y-4">
          <h1 className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            Contact
          </h1>
          <div className="h-1 w-24 rounded-full bg-amber-400"></div>
        </div>

        <div className="mx-auto mt-4 grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-gray-800/50 p-8 backdrop-blur-sm">
            <h2 className="mb-8 text-3xl font-bold text-amber-400">
              Your Connection Matters
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 text-amber-400" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-200">
                    Address
                  </h3>
                  <p className="text-gray-400">Jl. Putri Tunggal No.9-43,</p>
                  <p className="text-gray-400">
                    Harjamukti, Kec. Cimanggis, Kota Depok,{" "}
                  </p>
                  <p className="text-gray-400">Jawa Barat</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-6 w-6 text-amber-400" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-200">Phone</h3>
                  <p className="text-gray-400">+62 21 69696969</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-6 w-6 text-amber-400" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-200">Email</h3>
                  <p className="text-gray-400">info@samarasa.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="mb-4 text-xl font-bold text-gray-200">
                SAMARASA COFFEE SHOP
              </h3>
            </div>
          </div>

          <div className="rounded-2xl bg-gray-800/50 p-8 backdrop-blur-sm">
            <h2 className="mb-6 text-2xl font-bold text-amber-400">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-lg border border-gray-600 bg-gray-700/50 px-4 py-3 text-gray-200 placeholder-gray-400 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-lg border border-gray-600 bg-gray-700/50 px-4 py-3 text-gray-200 placeholder-gray-400 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
                  />
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-lg border border-gray-600 bg-gray-700/50 px-4 py-3 text-gray-200 placeholder-gray-400 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
                  />
                </div>

                <div className="relative">
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full rounded-lg border border-gray-600 bg-gray-700/50 px-4 py-3 text-gray-200 placeholder-gray-400 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-semibold text-gray-900 transition duration-200 hover:bg-amber-400"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
