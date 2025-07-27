import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"
import profilePhoto from "@/assets/profile-photo.jpg"

export function Hero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('interests')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-6">
          <Avatar className="w-32 h-32 mx-auto ring-4 ring-muted">
            <AvatarImage src={profilePhoto} alt="Profile photo" />
            <AvatarFallback className="text-2xl bg-accent text-accent-foreground">CS</AvatarFallback>
          </Avatar>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Computer Science Student passionate about exploring the intersection of 
              <span className="text-accent font-medium"> Robotics</span>, 
              <span className="text-software font-medium"> Software Engineering</span>, and 
              <span className="text-data font-medium"> Data Science</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
          <Button variant="outline" size="lg" onClick={scrollToNextSection}>
            Learn More
            <ArrowDown className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}