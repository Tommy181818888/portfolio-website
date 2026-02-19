import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', services: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // Replace {YOUR_FORM_ID} with your Formspree form id
      const res = await fetch('https://formspree.io/f/{YOUR_FORM_ID}', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          services: form.services,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', services: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };
  return (
    <div className="min-h-screen pt-20">
      <section className="py-12 px-4">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto p-6 neon-glass"
          >
            <h1 className="text-2xl font-medium text-text-primary mb-2">Contact</h1>
            <p className="text-text-secondary text-sm mb-4">Reach out for projects, freelancing, or collaboration — I work on analytics, web apps, and product design.</p>

            <div className="flex items-start gap-3 mb-4">
              <img src="src/Pictures/Profile.jpeg" alt="Amit Shetty" className="w-14 h-14 rounded-full object-cover border border-border" />
              <div>
                <div className="font-medium text-text-primary">Amit Shetty</div>
                <div className="text-text-muted text-sm">Data Analyst • Web Developer • UI / Product Designer / Degital Marketing / Deep Researcher</div>
              </div>
            </div>

            <div className="space-y-3 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-text-muted" />
                <a href="tel:+918722454878" className="hover:underline">+91 87224 54878</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-text-muted" />
                <a href="mailto:amitsha1817@gmail.com?subject=Project%20Inquiry" className="hover:underline">amitsha1817@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-text-muted" />
                <span>Karnataka, India</span>
              </div>

              <div>
                <strong className="text-text-primary">Availability:</strong>
                <span className="ml-2">Freelance · Contract · Part-time</span>
              </div>

              <div>
                <strong className="text-text-primary">Services I offer:</strong>
                <ul className="list-disc list-inside mt-1 text-text-secondary">
                  <li>Data analysis & visualization — PPT, dashboards, reports, KPI tracking</li>
                 
                  <li>Web development (React, TypeScript, responsive UIs)</li>
                  <li>UI / product design, prototyping and user flows</li>
                  <li>Dashboard creation (Tableau, Power BI, custom React dashboards)</li>
                  <li>Video generation & editing for social and product demos</li>
                  <li>Digital marketing support — analytics, SEO, campaign tracking</li>
                </ul>
              </div>

              <div className="text-text-secondary text-xs mt-3">
                Prefer a proposal? Email me with a brief description of your project and timelines — I’ll reply with availability and a preliminary scope.
              </div>
            </div>

          </motion.div>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="max-w-md mx-auto mt-8 p-6 neon-glass"
          >
            <h2 className="text-lg font-medium text-text-primary mb-2">Send a message</h2>
            <p className="text-text-secondary text-sm mb-4">Fill this form and I will get back to you with availability and a proposal.</p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="w-full p-2 rounded-md border border-border bg-transparent text-text-primary" required />
              <input name="email" value={form.email} onChange={handleChange} placeholder="Your email" type="email" className="w-full p-2 rounded-md border border-border bg-transparent text-text-primary" required />
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="w-full p-2 rounded-md border border-border bg-transparent text-text-primary" />
              <select name="services" value={form.services} onChange={handleChange} className="w-full p-2 rounded-md border border-border bg-transparent text-text-primary">
                <option value="">Service interested in (optional)</option>
                <option>Data analysis & dashboards</option>
                <option>Machine learning</option>
                <option>Web development (React/TS)</option>
                <option>UI / product design</option>
                <option>Video generation / editing</option>
                <option>Digital marketing / analytics</option>
              </select>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Brief project details" className="w-full p-2 rounded-md border border-border bg-transparent text-text-primary" />

              <div className="flex items-center gap-3">
                <button type="submit" disabled={status === 'sending'} className="px-4 py-2 rounded-md bg-accent-pink text-white hover:opacity-95 transition">
                  {status === 'sending' ? 'Sending...' : 'Send message'}
                </button>
                {status === 'success' && <span className="text-sm text-green-500">Message sent — thank you!</span>}
                {status === 'error' && <span className="text-sm text-red-500">Send failed. Try again later.</span>}
              </div>
              <p className="text-xs text-text-muted">Note: replace the Formspree form ID in the code with your own to enable submissions.</p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
