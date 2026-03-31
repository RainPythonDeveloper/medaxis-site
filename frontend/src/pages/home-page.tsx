import { HeroSection } from "@/components/sections/hero-section"
import { CompanySection } from "@/components/sections/company-section"
import { InfoSection } from "@/components/sections/info-section"
import { SolutionsSection } from "@/components/sections/solutions-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ContactSection } from "@/components/sections/contact-section"

export function HomePage() {
  return (
    <>
      <HeroSection />
      <CompanySection />
      <InfoSection />
      <SolutionsSection />
      <ServicesSection />
      <ContactSection />
    </>
  )
}
