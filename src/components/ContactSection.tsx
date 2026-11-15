import { ArrowUpRight, Download, Facebook, Linkedin, Mail, MessageCircle, Phone } from 'lucide-react';
import { profile } from '../data/profile';

interface ContactSectionProps {
  cvUrl: string;
}

const contacts = [
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
  { label: 'WhatsApp', href: `https://wa.me/${profile.whatsapp}`, icon: MessageCircle },
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'Facebook', href: profile.facebook, icon: Facebook }
];

export function ContactSection({ cvUrl }: ContactSectionProps) {
  return (
    <div className="glass-card p-6 sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h3 className="font-display text-3xl font-semibold text-midnight dark:text-white">Get in touch</h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            I welcome conversations around strategic partnerships, financial inclusion, youth entrepreneurship, and sustainable banking opportunities.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {contacts.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group inline-flex min-h-12 items-center gap-2.5 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-midnight shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-royalGold hover:bg-royalGold/5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royalGold focus-visible:ring-offset-2 dark:border-white/15 dark:bg-slate-900 dark:text-white dark:hover:bg-royalGold/10 dark:focus-visible:ring-offset-slate-900"
              >
                <Icon size={18} strokeWidth={2.25} className="text-royalGold transition-transform group-hover:scale-110" aria-hidden="true" />
                {label}
                <ArrowUpRight size={15} className="text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            ))}
            <a
              href={cvUrl}
              download
              className="inline-flex min-h-12 items-center gap-2.5 rounded-xl bg-royalGold px-4 py-3 text-sm font-bold text-midnight shadow-sm transition duration-200 hover:-translate-y-0.5 hover:brightness-95 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royalGold focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-slate-900/60">
          <div className="space-y-4 text-sm text-slate-700 dark:text-slate-200">
            <div className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 text-royalGold" />
              <div>
                <p className="font-semibold">Mobile</p>
                <a href={`tel:${profile.mobile}`} className="link-underline text-midnight dark:text-white">{profile.mobile}</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 text-royalGold" />
              <div>
                <p className="font-semibold">Email</p>
                <a href={`mailto:${profile.email}`} className="link-underline text-midnight dark:text-white">{profile.email}</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-royalGold">📍</span>
              <div>
                <p className="font-semibold">Address</p>
                <p>{profile.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
