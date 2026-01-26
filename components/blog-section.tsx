import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const blogPosts = [
  {
    title: "Getting Started with Kubernetes on AWS EKS",
    excerpt: "A comprehensive guide to deploying and managing Kubernetes clusters on Amazon EKS...",
    date: "2024-01-15",
    category: "DevOps",
    slug: "kubernetes-aws-eks",
  },
  {
    title: "Terraform Best Practices for Multi-Cloud",
    excerpt: "Learn how to structure your Terraform code for managing infrastructure across multiple cloud providers...",
    date: "2024-01-10",
    category: "Cloud",
    slug: "terraform-multi-cloud",
  },
  {
    title: "Implementing GitOps with ArgoCD",
    excerpt: "A step-by-step guide to implementing GitOps workflows using ArgoCD for Kubernetes deployments...",
    date: "2024-01-05",
    category: "DevOps",
    slug: "gitops-argocd",
  },
]

export function BlogSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-2">Blog</h2>
      <div className="w-12 h-1 bg-primary mb-8" />

      <div className="space-y-4">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="bg-secondary/50 border border-border/30 hover:border-primary/40 transition-all group hover:shadow-md hover:shadow-primary/5">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-medium">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="size-3" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
              >
                Read more
                <ArrowRight className="size-3" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
