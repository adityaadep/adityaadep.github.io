"use client"

import { useState } from "react"
import { ExternalLink, Github, Award, Calendar } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const categories = ["All", "DevOps", "Cloud", "Web", "Certificates"]

const projects = [
  {
    title: "Kubernetes Auto-Scaler",
    description: "Custom Kubernetes HPA controller with predictive scaling based on ML models.",
    category: "DevOps",
    tech: ["Go", "Kubernetes", "Python", "TensorFlow"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Infrastructure as Code",
    description: "Terraform modules for multi-cloud deployment across AWS, GCP, and Azure.",
    category: "Cloud",
    tech: ["Terraform", "AWS", "GCP", "Azure"],
    github: "https://github.com",
  },
  {
    title: "CI/CD Pipeline Generator",
    description: "Automated pipeline generator supporting GitHub Actions, GitLab CI, and Jenkins.",
    category: "DevOps",
    tech: ["Node.js", "Docker", "GitHub Actions"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Cloud Cost Optimizer",
    description: "Dashboard for monitoring and optimizing cloud infrastructure costs.",
    category: "Cloud",
    tech: ["React", "Node.js", "AWS SDK", "Charts"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Developer Portfolio",
    description: "Modern portfolio website built with Next.js and Tailwind CSS.",
    category: "Web",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Monitoring Stack",
    description: "Pre-configured monitoring stack with Prometheus, Grafana, and AlertManager.",
    category: "DevOps",
    tech: ["Prometheus", "Grafana", "Docker", "Helm"],
    github: "https://github.com",
  },
]

const certificates = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Coursera",
    date: "2024",
    credentialId: "AWS-SAA-XXXXX",
    link: "https://www.coursera.org/account/accomplishments/specialization/FBOG8IXMQV0Y",
  },
  {
    name: "DevOps on AWS",
    issuer: "Coursera",
    date: "2024",
    credentialId: "AWS-SAA-XXXXX",
    link: "https://www.coursera.org/account/accomplishments/specialization/V2QW0FVRIN9P",
  }
  // {
  //   name: "Google Cloud Associate Cloud Engineer",
  //   issuer: "Google Cloud",
  //   date: "2023",
  //   credentialId: "GCP-ACE-XXXXX",
  //   link: "https://cloud.google.com/certification",
  // },
  // {
  //   name: "Certified Kubernetes Administrator",
  //   issuer: "Cloud Native Computing Foundation",
  //   date: "2023",
  //   credentialId: "CKA-XXXXX",
  //   link: "https://www.cncf.io/certification/cka/",
  // },
  // {
  //   name: "HashiCorp Terraform Associate",
  //   issuer: "HashiCorp",
  //   date: "2023",
  //   credentialId: "TF-XXXXX",
  //   link: "https://www.hashicorp.com/certification",
  // },
  // {
  //   name: "Docker Certified Associate",
  //   issuer: "Docker Inc.",
  //   date: "2022",
  //   credentialId: "DCA-XXXXX",
  //   link: "https://www.docker.com/certification",
  // },
  // {
  //   name: "Linux Foundation System Administrator",
  //   issuer: "Linux Foundation",
  //   date: "2022",
  //   credentialId: "LFCS-XXXXX",
  //   link: "https://training.linuxfoundation.org/certification/",
  // },
]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All"
    ? projects
    : activeCategory === "Certificates"
    ? []
    : projects.filter((p) => p.category === activeCategory)

  const showCertificates = activeCategory === "All" || activeCategory === "Certificates"

  return (
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-2 tracking-tight">Portfolio</h2>
      <div className="w-12 h-1 bg-gradient-to-r from-primary to-blue-400 mb-8 rounded-full" />

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "secondary"}
            size="sm"
            onClick={() => setActiveCategory(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {filteredProjects.map((project) => (
            <Card key={project.title} className="bg-secondary/50 border border-border/30 hover:border-primary/40 transition-all group hover:shadow-md hover:shadow-primary/5">
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="size-4" />
                    </Link>
                    {project.demo && (
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`View ${project.title} demo`}
                      >
                        <ExternalLink className="size-4" />
                      </Link>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs rounded bg-primary/10 text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Certificates Section */}
      {showCertificates && (
        <div>
          {activeCategory === "All" && (
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Award className="size-5 text-primary" />
              Certifications
            </h3>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificates.map((cert) => (
              <Card key={cert.name} className="bg-secondary/50 border border-border/30 hover:border-primary/40 transition-all group hover:shadow-md hover:shadow-primary/5">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Award className="size-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                          {cert.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </div>
                    <Link
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`View ${cert.name} credential`}
                    >
                      <ExternalLink className="size-4" />
                    </Link>
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="size-3" />
                      {cert.date}
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">
                      {cert.credentialId}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
