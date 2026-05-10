import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const result = await emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    );

    console.log(result.text);

    alert("Message sent successfully ✅");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    alert("Something went wrong ❌");
  }
};
  return (
    <section
      id="contact"
      className="relative bg-slate-900 text-white py-24 px-6 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-20 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold">Get In Touch</h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Open to opportunities, collaborations, and freelance work. Let's
            build something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            {/* Email */}
            <a
              href="mailto:sshivanissinha9@gmail.com"
              className="bg-slate-800/60 border border-slate-700 hover:border-cyan-400 rounded-2xl p-5 flex items-center gap-4 transition"
            >
              <Mail className="text-cyan-400" />
              <div>
                <h4 className="font-semibold">Email Me</h4>
                <p className="text-gray-400 text-sm">
                  sshivanissinha9@gmail.com
                </p>
              </div>
            </a>

            {/* Github */}
            <a
              href="https://github.com/chiragha"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-800/60 border border-slate-700 hover:border-cyan-400 rounded-2xl p-5 flex items-center gap-4 transition"
            >
              <Github className="text-cyan-400" />
              <div>
                <h4 className="font-semibold">GitHub</h4>
                <p className="text-gray-400 text-sm">View my repositories</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shivani-sinha-shiv/"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-800/60 border border-slate-700 hover:border-cyan-400 rounded-2xl p-5 flex items-center gap-4 transition"
            >
              <Linkedin className="text-cyan-400" />
              <div>
                <h4 className="font-semibold">LinkedIn</h4>
                <p className="text-gray-400 text-sm">
                  Let's connect professionally
                </p>
              </div>
            </a>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-slate-800/60 border border-slate-700 rounded-3xl p-8"
          >
            <div className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 outline-none resize-none focus:border-cyan-400"
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 py-3 rounded-xl font-semibold"
              >
                Send Message
                <Send size={18} />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
