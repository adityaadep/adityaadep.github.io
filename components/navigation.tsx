"use client"

import React from "react"

import { User, FileText, FolderOpen, BookOpen, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"

type NavItem = {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const navItems: NavItem[] = [
  { id: "about", label: "ABOUT", icon: User },
  { id: "resume", label: "RESUME", icon: FileText },
  { id: "portfolio", label: "PORTFOLIO", icon: FolderOpen },
  { id: "blog", label: "BLOG", icon: BookOpen },
  { id: "contact", label: "CONTACT", icon: MessageSquare },
]

type NavigationProps = {
  activeSection: string
  onSectionChange: (section: string) => void
  variant: "mobile" | "desktop"
}

export function Navigation({ activeSection, onSectionChange, variant }: NavigationProps) {
  if (variant === "mobile") {
    return (
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 border-t border-border/40 shadow-2xl shadow-black/50 backdrop-blur-md">
        <div className="flex justify-center gap-1 p-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  "flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="size-5" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            )
          })}
        </div>
      </nav>
    )
  }

  return (
    <aside className="flex flex-col gap-2 w-28 shrink-0">
      {navItems.map((item) => {
        const Icon = item.icon
        const isActive = activeSection === item.id
        return (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={cn(
              "flex flex-col items-center gap-2 py-4 px-2 rounded-xl transition-all",
              isActive 
                ? "bg-card text-primary shadow-lg shadow-primary/10 border border-primary/20" 
                : "text-muted-foreground hover:text-foreground hover:bg-card/50"
            )}
          >
            <Icon className="size-6" />
            <span className="text-xs font-medium tracking-wide">{item.label}</span>
          </button>
        )
      })}
    </aside>
  )
}
