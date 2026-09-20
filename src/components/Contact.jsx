import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Copy, Check, Loader2, AlertCircle } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";

// Long addresses should wrap after the @, never mid-domain.
function breakableEmail(address) {
  const [user, domain] = address.split("@");
  if (!domain) return address;
  return (
    <>
      {user}@<wbr />
      {domain}
    </>
  );
}

export default function Contact() {
  const { email, phone, location } = portfolioData.personalInfo;
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", company: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [copied, setCopied] = useState(false);

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    if (status === "error") setStatus("idle");
  };

  // Opens the visitor's mail client with everything filled in. Only offered as a
  // fallback when the POST cannot go through (e.g. running outside Netlify).
  const mailtoFallback = () => {
    const subject = encodeURIComponent(
      form.subject || `Portfolio enquiry from ${form.name}`
    );
    const body = encodeURIComponent(
      [form.message, "", "--", form.name, form.email].join("\n")
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  // Posted to Netlify Forms, which stores the submission and emails it on.
  // No API key ships in the bundle and no mail client is opened.
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": "contact", ...form }).toString(),
      });
      if (!response.ok) throw new Error(`Form POST failed: ${response.status}`);
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "", company: "" });
    } catch {
      setStatus("error");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked; the address is visible on screen either way.
    }
  };

  const details = [
    { icon: Mail, label: "Email", value: email, href: `mailto:${email}`, copyable: true },
    { icon: Phone, label: "Phone", value: phone, href: `tel:${phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Location", value: location, href: null },
  ];

  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          subtitle="I'm open to internships, freelance work and full-time roles. Drop a message and I'll get back to you."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="min-w-0 lg:col-span-2 space-y-4"
          >
            {details.map((detail) => (
              <div
                key={detail.label}
                className="surface flex items-center gap-3.5 p-5 shadow-soft transition-colors hover:border-brand-300 dark:hover:border-brand-700"
              >
                <span className="grid place-items-center h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br from-brand-500/15 to-accent-500/15 text-brand-600 dark:text-brand-400">
                  <detail.icon size={19} />
                </span>

                <div className="min-w-0 flex-1">
                  <span className="block text-xs uppercase tracking-wider text-slate-500">
                    {detail.label}
                  </span>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="block text-sm sm:text-[15px] font-medium leading-snug text-slate-800 dark:text-slate-200 break-words hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                    >
                      {detail.copyable ? breakableEmail(detail.value) : detail.value}
                    </a>
                  ) : (
                    <span className="block text-sm sm:text-[15px] font-medium leading-snug text-slate-800 dark:text-slate-200 break-words">
                      {detail.value}
                    </span>
                  )}
                </div>

                {detail.copyable && (
                  <button
                    type="button"
                    onClick={copyEmail}
                    title={copied ? "Copied" : "Copy email address"}
                    aria-label={copied ? "Email address copied" : "Copy email address"}
                    className="grid place-items-center h-9 w-9 shrink-0 rounded-lg text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                  </button>
                )}
              </div>
            ))}

            <SocialLinks
              containerClassName="flex gap-3 pt-2"
              iconSize={19}
              className="grid place-items-center h-11 w-11 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-white hover:border-transparent hover:bg-gradient-to-br hover:from-brand-600 hover:to-accent-600 transition-all duration-300"
            />
          </motion.div>

          {/* Form */}
          <motion.form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="company"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="min-w-0 lg:col-span-3 surface p-7 sm:p-9 shadow-soft"
          >
            <input type="hidden" name="form-name" value="contact" />
            {/* Honeypot: real people never see this, bots fill it in. */}
            <p className="hidden">
              <label>
                Company
                <input
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={update("company")}
                />
              </label>
            </p>

            <div className="grid sm:grid-cols-2 gap-5 [&>*]:min-w-0">
              <label className="block">
                <span className="block text-sm font-medium mb-2">Your name</span>
                <input
                  type="text"
                  required
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Ananya Krishnan"
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-500 dark:text-white"
                />
              </label>

              <label className="block">
                <span className="block text-sm font-medium mb-2">Your email</span>
                <input
                  type="email"
                  required
                  name="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="ananya.krishnan@company.com"
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-500 dark:text-white"
                />
              </label>
            </div>

            <label className="block mt-5">
              <span className="block text-sm font-medium mb-2">Subject</span>
              <input
                type="text"
                required
                name="subject"
                value={form.subject}
                onChange={update("subject")}
                placeholder="Flutter developer role at Acme"
                className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-500 dark:text-white"
              />
            </label>

            <label className="block mt-5">
              <span className="block text-sm font-medium mb-2">Message</span>
              <textarea
                required
                rows={6}
                name="message"
                value={form.message}
                onChange={update("message")}
                placeholder="Hi Narayanan, we're hiring a Flutter developer at..."
                className="w-full resize-y rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-500 dark:text-white"
              />
            </label>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={17} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={17} />
                    Send message
                  </>
                )}
              </button>

              {status === "sent" && (
                <motion.p
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  role="status"
                  className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400"
                >
                  <Check size={16} />
                  Thanks — your message is on its way.
                </motion.p>
              )}
            </div>

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
                className="mt-4 flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4"
              >
                <AlertCircle size={18} className="mt-0.5 shrink-0 text-amber-500" />
                <div className="text-sm">
                  <p className="font-medium text-slate-800 dark:text-slate-200">
                    That did not go through.
                  </p>
                  <p className="mt-1 text-slate-600 dark:text-slate-400">
                    Send it by email instead, or write to{" "}
                    <a
                      href={`mailto:${email}`}
                      className="font-medium text-brand-600 dark:text-brand-400 hover:underline underline-offset-4"
                    >
                      {email}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={mailtoFallback}
                    className="mt-3 inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-xs font-semibold hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  >
                    <Mail size={14} />
                    Open in email app
                  </button>
                </div>
              </motion.div>
            )}

            {status === "idle" && (
              <p className="mt-3 text-xs text-slate-500">
                Sent straight to my inbox — no email app required.
              </p>
            )}

          </motion.form>
        </div>
      </div>
    </section>
  );
}
