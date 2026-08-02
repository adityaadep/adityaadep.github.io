"use client"

import { Briefcase, GraduationCap, Zap, Code2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const experience = [
  {
    title: "Executive DevOps Engineer",
    company: "Ventura Securitites Ltd",
    location: "Thane, Mumbai, India",
    period: "Nov 2024 - Present",
    description: [
      "High Availability & Linux Administration: Owned and administered production Ubuntu Linux servers, tuning system performance and hardening security to sustain 99.9% uptime for critical trading applications.",
      "AWS Cloud & Networking: Architected and administered EC2-centric AWS infrastructure spanning ALB, Auto Scaling Groups, RDS, API Gateway, Lambda, SQS, and SNS; designed VPC networking with Transit Gateway and Site-to-Site VPN tunnels to unify on-prem and cloud connectivity, and configured NAT Gateways and routing for secure, reliable traffic flow.",
      "Containerization & Orchestration: Deployed containerized microservices using Docker and Kubernetes manifests (Deployments, Services, ConfigMaps), managing environment-specific releases via Helm charts on Amazon EKS/ECS, cutting manual deployment steps by 80% and improving release consistency across 12+ services.",
      "Infrastructure as Code: Provisioned AWS infrastructure using Terraform and CloudFormation, and standardized server configuration with Ansible, cutting environment provisioning time from 4 hours to 15 minutes and eliminating 90% of manual configuration errors.",
      "CI/CD Pipeline Engineering: Built production-grade, end-to-end CI/CD pipelines using Jenkins and GitHub Actions covering build, pre-build and post-build security scanning, and SonarQube quality gates, taking release deployment from fully manual to zero-touch and cutting release turnaround time from 3 hours to 10 minutes.",
      "Security & Reverse Proxy: Configured and maintained NGINX reverse proxies with TLS 1.3 encryption, securing traffic routing across multiple critical production services.",
      "Monitoring & Observability: Stood up centralized logging, Alerting and monitoring using Prometheus, Grafana, Loki, and Node Exporter, improving system visibility and cutting troubleshooting time by 50%.",
      "Cost Optimization & Performance: Conducted cloud resource audits and rolled out VPC endpoints, right-sizing, and scaling optimizations that lowered data transfer costs and slashed overall AWS spend by 50%."
    ],
  },
  {
    title: " Associate Software Engineer",
    company: "BNP Paribas India Solutions Pvt. Ltd.",
    location: "Mumbai, India",
    period: "2022 - 2024",
    description: [
     "CI/CD & Process Automation: Engineered robust Jenkins pipelines from scratch using Maven, accelerating developer release velocity by 35% and reclaiming 6+ engineering hours weekly via automated Python/Bash infrastructure scripts.",
 "DevSecOps & Security Enforcement: Spearheaded pipeline security by embedding SonarQube quality gates and Fortify static analysis scans, eliminating 98% of critical vulnerabilities before deployment across 40+ microservices.",
 "Container & Artifact Optimization: Authored multi-stage Dockerfiles that slashed container image sizes by 60%, while managing over 5,000+ dependencies within Nexus/Artifactory at 99.9% availability." ,
"Git Governance & Version Control: Orchestrated Git and Bitbucket strategies for 35+ engineers, establishing strict Gitflow branching policies that reduced code integration conflicts by 45%.",
"Incident Management & RCA: Headed deep-dive production incident replications and system log analyses, authoring detailed Root Cause Analysis (RCA) documentation that reduced MTTR by 40%.",
"Used Nexus /Artifactory for artifact management ,Performed security checks for vulnerabilities on source code using fortify scans.",
    ],
  },
]

const education = [
  {
    degree: "Masters in Computer Applications",
    institution: "Bharati Vidyapeeth's Institute of Management and Information Technology ",
    period: "2020 - 2022",
    description: "GPA: 9.33 / 10.00",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Mumbai",
    period: "2017 - 2020",
    description: "GPA: 9.08/10.00 .",
  },
]

const skills = [
  { name: "Google Cloud Platform", level: 75 },
  { name: "Amazon Web Services", level: 80 },
  { name: "Linux Environment", level: 85 },
  { name: "Network Administrator", level: 70 },
  { name: "Infrastructure as Code", level: 75 },
  { name: "Automation and Scripting", level: 80 },
  { name: "CI/CD", level: 85 },
  { name: "Git", level: 90 },
]

const codeSkills = [
  { name: "Docker", level: 85 },
  { name: "Kubernetes", level: 80 },
  { name: "Jenkins", level: 75 },
  { name: "Terraform", level: 80 },
  { name: "Helm Charts", level: 70 },
  { name: "Kong API Gateway", level: 65 },
  { name: "Nginx", level: 80 },
  { name: "Prometheus", level: 75 },
  { name: "Grafana", level: 80 },
  { name: "Ansible", level: 70 },
]

function getSkillLevel(level: number): string {
  if (level >= 85) return "Advanced"
  if (level >= 65) return "Intermediate"
  return "Beginner"
}

function SkillBar({ name, level }: { name: string; level: number }) {
  const skillLevel = getSkillLevel(level)
  
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-9 bg-secondary rounded-full overflow-hidden relative">
        <div 
          className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full transition-all duration-500 flex items-center"
          style={{ width: `${level}%` }}
        >
          <span className="text-xs font-medium text-primary-foreground pl-3 whitespace-nowrap">
            {name}
          </span>
        </div>
      </div>
      <span className="text-xs font-medium text-primary bg-primary/20 px-2.5 py-1 rounded-full min-w-[90px] text-center">
        {skillLevel}
      </span>
    </div>
  )
}

export function ResumeSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-2 tracking-tight">Resume</h2>
      <div className="w-12 h-1 bg-gradient-to-r from-primary to-blue-400 mb-8 rounded-full" />

      {/* Experience */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
          <Briefcase className="size-5 text-primary" />
          Experience
        </h3>
        
        <div className="relative border-l-2 border-primary/30 pl-6 space-y-8">
          {experience.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[30px] size-3 rounded-full bg-primary shadow-lg shadow-primary/30" />
              <div className="mb-2">
                <span className="text-muted-foreground text-sm">{item.company}</span>
                <span className="text-muted-foreground text-sm"> as </span>
                <span className="font-semibold text-foreground">{item.title}</span>
              </div>
              <p className="text-primary text-sm font-medium">{item.location}</p>
              <p className="text-muted-foreground text-sm mb-3">{item.period}</p>
              <ul className="space-y-1.5">
                {item.description.map((desc, i) => (
                  <li key={i} className="text-muted-foreground text-sm leading-relaxed">
                    - {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
          <GraduationCap className="size-5 text-primary" />
          Education
        </h3>
        
        <div className="relative border-l-2 border-primary/30 pl-6">
          {education.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[30px] size-3 rounded-full bg-primary shadow-lg shadow-primary/30" />
              <div className="text-sm text-muted-foreground mb-1">{item.period}</div>
              <h4 className="font-semibold text-foreground">{item.degree}</h4>
              <p className="text-primary text-sm mb-2">{item.institution}</p>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
          <Zap className="size-5 text-primary" />
          Skills
        </h3>
        
        <Card className="bg-secondary/50 border border-border/30 shadow-sm">
          <CardContent className="p-5 space-y-3">
            {skills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Code Skills */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
          <Code2 className="size-5 text-primary" />
          Code Skills
        </h3>
        
        <Card className="bg-secondary/50 border border-border/30 shadow-sm">
          <CardContent className="p-5 space-y-3">
            {codeSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
