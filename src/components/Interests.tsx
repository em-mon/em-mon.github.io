import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Code, BarChart3 } from "lucide-react"

const interests = [
  {
    title: "Robotics",
    icon: Bot,
    description: "Building intelligent systems that interact with the physical world",
    skills: ["ROS", "Arduino", "Computer Vision", "Control Systems", "Sensors", "Actuators"],
    color: "robotics"
  },
  {
    title: "Software Engineering",
    icon: Code,
    description: "Developing scalable and efficient software solutions",
    skills: ["Python", "JavaScript", "React", "Node.js", "Git", "Agile", "Testing"],
    color: "software"
  },
  {
    title: "Data Science",
    icon: BarChart3,
    description: "Extracting insights and patterns from complex datasets",
    skills: ["Machine Learning", "Pandas", "NumPy", "SQL", "Visualization", "Statistics"],
    color: "data"
  }
]

export function Interests() {
  return (
    <section id="interests" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Career Interests</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring the cutting-edge technologies that shape our future
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {interests.map((interest, index) => {
            const Icon = interest.icon
            return (
              <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 border-0 shadow-card">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{interest.title}</CardTitle>
                  <CardDescription className="text-base">
                    {interest.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">Skills & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {interest.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="text-xs px-3 py-1 hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}