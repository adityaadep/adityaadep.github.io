"use client"

import { useState } from "react"
import { GeometricBackground } from "@/components/geometric-background"
import { ProfileHeader } from "@/components/profile-header"
import { Navigation } from "@/components/navigation"
import { AboutSection } from "@/components/about-section"
import { ResumeSection } from "@/components/resume-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />
      case "resume":
        return <ResumeSection />
      case "portfolio":
        return <PortfolioSection />
      case "blog":
        return <BlogSection />
      case "contact":
        return <ContactSection />
      default:
        return <AboutSection />
    }
  }

  return (
    <div className="min-h-screen bg-background relative">
      {/* Geometric Background Decoration */}
      <GeometricBackground />

      {/* Mobile Navigation - Fixed at bottom */}
      <div className="lg:hidden">
        <Navigation 
          activeSection={activeSection} 
          onSectionChange={setActiveSection}
          variant="mobile"
        />
      </div>

      {/* Centered Container */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pb-20 lg:pb-0">
        {/* Profile Header */}
        <ProfileHeader />

        {/* Main Content Area */}
        <div className="relative z-10 py-6">
          <div className="flex gap-6">
            {/* Desktop Sidebar Navigation */}
            <div className="hidden lg:block">
              <Navigation 
                activeSection={activeSection} 
                onSectionChange={setActiveSection}
                variant="desktop"
              />
            </div>

            {/* Content Section */}
            <main className="flex-1 bg-card rounded-2xl p-6 md:p-8 border border-border/40 shadow-lg shadow-black/40">
              {renderSection()}
            </main>
          </div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 py-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Aditya Adep. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
