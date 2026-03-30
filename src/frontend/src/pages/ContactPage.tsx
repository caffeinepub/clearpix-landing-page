import { CheckCircle, Clock, Mail, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbdpolgq";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          _replyto: form.email,
          _subject: `[ClearPix Support] ${form.subject}`,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-black pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 bg-[#FF3A5C]/10 border border-[#FF3A5C]/20 text-[#FF3A5C] text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
          <MessageSquare className="w-3.5 h-3.5" />
          Support
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
          Contact Us
        </h1>
        <p className="text-gray-400 text-lg">
          We&apos;re here to help. Send us a message and we&apos;ll get back to
          you as soon as possible.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-1 flex flex-col gap-4"
        >
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-[#FF3A5C]/10 flex items-center justify-center mb-4">
              <Mail className="w-5 h-5 text-[#FF3A5C]" />
            </div>
            <h3 className="text-white font-semibold mb-1">Email Us</h3>
            <p className="text-gray-400 text-sm mb-3">
              Our support team is ready to help.
            </p>
            <a
              href="mailto:support@eleganceme.info"
              className="text-[#FF3A5C] text-sm font-medium hover:underline"
            >
              support@eleganceme.info
            </a>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-[#FF3A5C]/10 flex items-center justify-center mb-4">
              <Clock className="w-5 h-5 text-[#FF3A5C]" />
            </div>
            <h3 className="text-white font-semibold mb-1">Response Time</h3>
            <p className="text-gray-400 text-sm">
              We typically respond within 24 hours on business days.
            </p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-2"
        >
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[360px] gap-5"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-400 text-sm">
                  Thank you for reaching out. Our support team will get back to
                  you within 24 hours.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="text-[#FF3A5C] text-sm font-medium hover:underline mt-2"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#FF3A5C]/50 focus:ring-1 focus:ring-[#FF3A5C]/30 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#FF3A5C]/50 focus:ring-1 focus:ring-[#FF3A5C]/30 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-1.5"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#FF3A5C]/50 focus:ring-1 focus:ring-[#FF3A5C]/30 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your issue or question in detail..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#FF3A5C]/50 focus:ring-1 focus:ring-[#FF3A5C]/30 transition-colors resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Please try again or email us directly at
                  support@eleganceme.info
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-[#FF3A5C] hover:bg-[#e02347] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#FF3A5C]/25 text-sm"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
