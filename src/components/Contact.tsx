import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

const contactLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/yourprofile",
    description: "Connect with me professionally"
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/yourusername",
    description: "Check out my code"
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:your.email@example.com",
    description: "Send me a message"
  },
  {
    name: "Handshake",
    icon: ExternalLink,
    url: "https://handshake.com/profile",
    description: "View my career profile"
  }
]

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card-hover transition-all duration-300 cursor-pointer border-0 shadow-card hover:scale-105"
              >
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                      <Icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-accent transition-colors">
                      {link.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <CardDescription className="text-sm">
                      {link.description}
                    </CardDescription>
                  </CardContent>
                </a>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-16 space-y-6">
          <div className="w-16 h-px bg-border mx-auto"></div>
          <p className="text-muted-foreground">
            Ready to make something amazing together?
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <a href="mailto:your.email@example.com">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}