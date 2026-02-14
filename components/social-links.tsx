import { FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa"
import { FileText } from "lucide-react"
import { cn } from "@/lib/utils"

const socialLinks = [
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/robcurtis",
    user: "linkedin.com/in/robcurtis",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    url: "https://github.com/RobACurtis",
    user: "github.com/RobACurtis",
    icon: FaGithub,
  },
  {
    label: "CodePen",
    url: "https://codepen.io/robcurtisdev",
    user: "codepen.io/robcurtisdev",
    icon: FaCodepen,
  },
  {
    label: "Resume",
    url: "/images/robcurtis-resume.pdf",
    user: "robcurtis-resume.pdf",
    icon: FileText,
  },
  // {
  //   label: "Email",
  //   url: "mailto:hello@robcurtis.dev",
  //   user: "hello@robcurtis.dev",
  //   icon: Mail,
  // },
]

interface SocialLinksProps {
  size?: "sm" | "md"
  showLabels?: boolean
  className?: string
}

export function SocialLinks({ size = "md", showLabels = true, className }: SocialLinksProps) {
  const iconSize = size === "sm" ? "h-4 w-4" : "h-5 w-5"
  const textSize = size === "sm" ? "text-xs" : "text-sm"

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {socialLinks.map((link) => {
        const isResume = link.label === "Resume"
        return (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <link.icon className={iconSize} />
            {showLabels && (
              <span className={cn(textSize, !isResume && "hidden sm:inline")}>
                {link.label}
              </span>
            )}
          </a>
        )
      })}
    </div>
  )
}

export { socialLinks }
