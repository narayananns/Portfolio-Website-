import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const { email, phone, location, socials } = portfolioData.personalInfo;

  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-blue-600 dark:bg-blue-900/50 rounded-2xl p-8 md:p-16 text-center text-white relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-blue-100 mb-12 max-w-2xl mx-auto text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
            <a
              href={`mailto:${email}`}
              className="flex items-center justify-center gap-3 text-white/90 hover:text-white transition-colors"
            >
              <div className="p-3 bg-white/10 rounded-full">
                <Mail size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs text-blue-200 uppercase tracking-wider">Email Me</p>
                <p className="font-medium">{email}</p>
              </div>
            </a>

            <div className="flex items-center justify-center gap-3 text-white/90">
               <div className="p-3 bg-white/10 rounded-full">
                <Phone size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs text-blue-200 uppercase tracking-wider">Call Me</p>
                <p className="font-medium">{phone}</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 text-white/90">
               <div className="p-3 bg-white/10 rounded-full">
                <MapPin size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs text-blue-200 uppercase tracking-wider">Location</p>
                <p className="font-medium">{location}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-110"
                aria-label={social.name}
              >
                <social.icon size={24} className="text-white" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
