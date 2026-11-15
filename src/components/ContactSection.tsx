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
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-midnight transition hover:border-royalGold hover:text-royalGold dark:border-white/10 dark:bg-slate-900 dark:text-white"
              >
                <Icon size={16} />
                {label}
                <ArrowUpRight size={14} />
              </a>
            ))}
            <a
              href={cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-full bg-royalGold px-4 py-2.5 text-sm font-semibold text-midnight transition hover:brightness-95"
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
