import { useState, ChangeEvent, FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2, MessageCircle, Mail, Phone, ExternalLink } from 'lucide-react';
import { ContactFormData, Language } from '../types';
import { UI_TEXT, PERSONAL_INFO } from '../data';

interface ContactSectionProps {
  language: Language;
}

export default function ContactSection({ language }: ContactSectionProps) {
  const t = UI_TEXT[language].contact;

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setStatusMessage(t.errorRequired);
      return;
    }

    setStatus('submitting');
    setStatusMessage('');

    const targetEmail = PERSONAL_INFO.email;
    const emailSubject = encodeURIComponent(
      formData.subject.trim() 
        ? `[Contato Portfolio] ${formData.subject.trim()}`
        : `[Contato Portfolio] Mensagem de ${formData.fullName.trim()}`
    );

    const emailBody = encodeURIComponent(
      `Olá Minrage,\n\nVocê recebeu uma nova mensagem através do formulário de contato do seu portfólio:\n\n` +
      `----------------------------------------\n` +
      `Nome: ${formData.fullName.trim()}\n` +
      `E-mail: ${formData.email.trim()}\n` +
      `Telefone/WhatsApp: ${formData.mobile.trim() || 'Não informado'}\n` +
      `Assunto: ${formData.subject.trim() || 'Geral'}\n` +
      `----------------------------------------\n\n` +
      `Mensagem:\n${formData.message.trim()}\n\n` +
      `----------------------------------------\n` +
      `Enviado a partir de: Portfolio Web\n`
    );

    // Primary: Web Gmail compose window
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(targetEmail)}&su=${emailSubject}&body=${emailBody}`;
    
    // Standard mailto URI fallback
    const mailtoUrl = `mailto:${targetEmail}?subject=${emailSubject}&body=${emailBody}`;

    setTimeout(() => {
      // Open Gmail compose in a new tab/window
      try {
        const opened = window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');
        if (!opened || opened.closed || typeof opened.closed === 'undefined') {
          // Fallback to mailto protocol
          window.location.href = mailtoUrl;
        }
      } catch {
        window.location.href = mailtoUrl;
      }

      setStatus('success');
      setStatusMessage(t.success(formData.fullName));
      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        subject: '',
        message: '',
      });
    }, 600);
  };

  return (
    <section id="contact" className="relative w-full bg-[#0e141c] py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 w-full flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-xl mb-16">
          <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#00eeff] uppercase tracking-widest">
            {t.badge}
          </span>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#f1f4ff] mt-2">
            {t.titleStart} <span className="text-[#00eeff]">{t.titleHighlight}</span>
          </h2>
          <div className="w-16 h-1 bg-[#00eeff] mx-auto mt-3 rounded-full shadow-[0_0_8px_#00eeff]"></div>
        </div>

        {/* Contact Form Container */}
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="w-full max-w-3xl flex flex-col gap-4"
        >
          {/* Status feedback alerts */}
          {status === 'success' && (
            <div
              id="contact-success-alert"
              className="p-4 rounded-xl bg-[#00eeff]/10 border border-[#00eeff]/40 text-[#d7fbff] flex items-center gap-3 text-sm font-['Outfit'] animate-fade-in"
            >
              <CheckCircle className="w-5 h-5 text-[#00eeff] shrink-0" />
              <span>{statusMessage}</span>
            </div>
          )}

          {status === 'error' && (
            <div
              id="contact-error-alert"
              className="p-4 rounded-xl bg-[#93000a]/20 border border-[#ffb4ab]/40 text-[#ffdad6] flex items-center gap-3 text-sm font-['Outfit'] animate-fade-in"
            >
              <AlertCircle className="w-5 h-5 text-[#ffb4ab] shrink-0" />
              <span>{statusMessage}</span>
            </div>
          )}

          {/* Row 1: Full Name & Email Address */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <input
                id="contact-input-fullname"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={t.fullName}
                required
                className="w-full px-5 py-4 rounded-xl bg-[#252a33] text-[#f1f4ff] placeholder:text-[#849495] border border-[#30353e]/60 focus:outline-none focus:border-[#00eeff] focus:ring-1 focus:ring-[#00eeff] focus:shadow-[0_0_15px_rgba(0,238,255,0.35)] transition-all font-['Outfit'] text-sm"
              />
            </div>

            <div className="flex flex-col">
              <input
                id="contact-input-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.email}
                required
                className="w-full px-5 py-4 rounded-xl bg-[#252a33] text-[#f1f4ff] placeholder:text-[#849495] border border-[#30353e]/60 focus:outline-none focus:border-[#00eeff] focus:ring-1 focus:ring-[#00eeff] focus:shadow-[0_0_15px_rgba(0,238,255,0.35)] transition-all font-['Outfit'] text-sm"
              />
            </div>
          </div>

          {/* Row 2: Mobile Number & Email Subject */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <input
                id="contact-input-mobile"
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleChange}
                placeholder={t.mobile}
                className="w-full px-5 py-4 rounded-xl bg-[#252a33] text-[#f1f4ff] placeholder:text-[#849495] border border-[#30353e]/60 focus:outline-none focus:border-[#00eeff] focus:ring-1 focus:ring-[#00eeff] focus:shadow-[0_0_15px_rgba(0,238,255,0.35)] transition-all font-['Outfit'] text-sm"
              />
            </div>

            <div className="flex flex-col">
              <input
                id="contact-input-subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t.subject}
                required
                className="w-full px-5 py-4 rounded-xl bg-[#252a33] text-[#f1f4ff] placeholder:text-[#849495] border border-[#30353e]/60 focus:outline-none focus:border-[#00eeff] focus:ring-1 focus:ring-[#00eeff] focus:shadow-[0_0_15px_rgba(0,238,255,0.35)] transition-all font-['Outfit'] text-sm"
              />
            </div>
          </div>

          {/* Row 3: Your Message */}
          <div className="flex flex-col">
            <textarea
              id="contact-input-message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder={t.message}
              required
              className="w-full px-5 py-4 rounded-xl bg-[#252a33] text-[#f1f4ff] placeholder:text-[#849495] border border-[#30353e]/60 resize-none focus:outline-none focus:border-[#00eeff] focus:ring-1 focus:ring-[#00eeff] focus:shadow-[0_0_15px_rgba(0,238,255,0.35)] transition-all font-['Outfit'] text-sm"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-4">
            <button
              id="contact-submit-btn"
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center gap-3 px-10 py-3.5 rounded-full bg-[#00eeff] text-[#00363b] font-['Space_Grotesk'] text-base font-bold shadow-[0_0_20px_rgba(0,238,255,0.45)] hover:shadow-[0_0_35px_rgba(0,238,255,0.85)] hover:scale-105 active:scale-95 disabled:opacity-75 disabled:hover:scale-100 transition-all duration-300 cursor-pointer"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{t.sending}</span>
                </>
              ) : (
                <>
                  <span>{t.sendMessage}</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Direct Contact Cards (WhatsApp & Gmail) */}
        <div id="contact-direct-channels" className="w-full max-w-3xl mt-12 pt-10 border-t border-[#30353e]/60">
          <p className="text-center font-['Space_Grotesk'] text-xs uppercase tracking-widest text-[#849495] mb-6 font-semibold">
            {t.directChannelsTitle}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* WhatsApp Direct Card */}
            <a
              id="contact-channel-whatsapp"
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-[#1b2029] border border-[#25D366]/30 hover:border-[#25D366] hover:shadow-[0_0_20px_rgba(37,211,102,0.25)] transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:scale-110 group-hover:bg-[#25D366] group-hover:text-[#0e141c] transition-all">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#25D366] uppercase tracking-wide flex items-center gap-1.5">
                  WhatsApp Direct <ExternalLink className="w-3 h-3" />
                </span>
                <span className="font-['Outfit'] text-sm sm:text-base font-semibold text-[#f1f4ff]">
                  {PERSONAL_INFO.phoneDisplay}
                </span>
                <span className="font-['Outfit'] text-xs text-[#849495]">
                  {t.directWhatsApp}
                </span>
              </div>
            </a>

            {/* Gmail Direct Card */}
            <a
              id="contact-channel-gmail"
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PERSONAL_INFO.email)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-[#1b2029] border border-[#EA4335]/30 hover:border-[#EA4335] hover:shadow-[0_0_20px_rgba(234,67,53,0.25)] transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-[#EA4335]/10 flex items-center justify-center text-[#EA4335] group-hover:scale-110 group-hover:bg-[#EA4335] group-hover:text-[#ffffff] transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#ff8a7a] uppercase tracking-wide flex items-center gap-1.5">
                  Gmail Direct <ExternalLink className="w-3 h-3" />
                </span>
                <span className="font-['Outfit'] text-sm sm:text-base font-semibold text-[#f1f4ff] truncate max-w-[210px] sm:max-w-none">
                  {PERSONAL_INFO.email}
                </span>
                <span className="font-['Outfit'] text-xs text-[#849495]">
                  {t.directEmail}
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
