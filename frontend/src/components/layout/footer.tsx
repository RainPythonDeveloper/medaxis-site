import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react"
import { Container } from "@/components/shared/container"
import { Logo } from "@/components/shared/logo"
import { InstagramIcon, FacebookIcon, LinkedInIcon, YouTubeIcon } from "@/components/shared/social-icons"
import { footerColumns, footerContacts } from "@/data/navigation"

const socialLinks = [
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "#" },
  { icon: YouTubeIcon, label: "YouTube", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-[#1A1614] text-warm-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(198,107,84,0.05),transparent_50%)]" />

      <Container className="relative py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Logo variant="white" />
            <p className="text-warm-gray-300/70 leading-relaxed">
              Ведущий поставщик медицинского оборудования в Казахстане и Центральной Азии
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-warm-gray-300 hover:bg-[#C66B54] hover:border-[#C66B54] hover:text-white transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-sm text-warm-gray-300/70 hover:text-[#C66B54] transition-colors duration-300"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contacts Column */}
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
                Контакты
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="h-4 w-4 text-[#C66B54]" />
                  </div>
                  <span className="text-warm-gray-300/70">{footerContacts.address}</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="h-4 w-4 text-[#C66B54]" />
                  </div>
                  <a href="tel:88001234567" className="text-warm-gray-300/70 hover:text-[#C66B54] transition-colors">
                    {footerContacts.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="h-4 w-4 text-[#C66B54]" />
                  </div>
                  <a href="mailto:info@medaxis.kz" className="text-warm-gray-300/70 hover:text-[#C66B54] transition-colors">
                    {footerContacts.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-warm-gray-600">&copy; 2025 MedAxis. Все права защищены.</p>
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-warm-gray-600 hover:text-warm-gray-300 transition-colors duration-300">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-warm-gray-600 hover:text-warm-gray-300 transition-colors duration-300">
              Условия использования
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
