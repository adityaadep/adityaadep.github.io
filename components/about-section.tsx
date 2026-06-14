import { Cloud, Server, Shield, Code, Terminal, Container, GitBranch, Activity } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Terminal,
    title: "DevOps Engineering",
    description: "Building CI/CD pipelines, automating deployments, and implementing Infrastructure as Code with Terraform & Ansible.",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Designing scalable, secure cloud infrastructure on AWS, GCP, and Azure with cost optimization.",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: Activity,
    title: "Site Reliability",
    description: "Ensuring 99.9% uptime through monitoring, alerting, and incident response with Prometheus & Grafana.",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Container,
    title: "Container Orchestration",
    description: "Managing Kubernetes clusters, Docker containers, and microservices at scale.",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
  },
]

export function AboutSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-2 tracking-tight">About Me</h2>
      <div className="w-12 h-1 bg-gradient-to-r from-primary to-cyan-400 mb-8 rounded-full" />
      
      <p className="text-muted-foreground leading-relaxed mb-10">
      DevOps Engineer with 4+ years of hands-on experience supporting production applications on AWS and Linux- based
environments. Strong focus on CI/CD automation, containerized deployments, monitoring, and infrastructure reliability.
Experienced in application-side Kubernetes deployments, Docker-based workflows, and EC2-centric AWS architectures, with
emphasis on cost optimization, security hardening, and operational stability.
      </p>

      <h3 className="text-xl font-semibold text-foreground mb-6">What I&apos;m Doing</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <Card key={service.title} className="bg-secondary/50 border border-border/30 hover:border-primary/40 transition-all hover:shadow-md hover:shadow-primary/5 group">
            <CardContent className="p-5 flex gap-4">
              <div className="shrink-0">
                <div className={`size-12 rounded-lg ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <service.icon className={`size-6 ${service.color}`} />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1 tracking-tight">{service.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
