import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, Wrench } from "lucide-react"

const currentProjects = [
  {
    name: "Autonomous Robot Navigation",
    description: "Developing a SLAM-based navigation system for indoor mobile robots using ROS and computer vision",
    date: "Sept 2024 - Present",
    skills: ["ROS", "Python", "OpenCV", "SLAM"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    name: "Smart Campus App",
    description: "Full-stack mobile app for campus navigation and resource management with real-time data",
    date: "Aug 2024 - Present", 
    skills: ["React Native", "Node.js", "MongoDB", "Socket.io"],
    githubUrl: "#",
    demoUrl: "#"
  }
]

const pastProjects = [
  {
    name: "Machine Learning Stock Predictor",
    description: "Built a predictive model using LSTM networks to forecast stock prices with 85% accuracy",
    date: "May 2024",
    skills: ["Python", "TensorFlow", "Pandas", "APIs"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    name: "IoT Home Automation",
    description: "Created a smart home system using Arduino and sensors for remote monitoring and control",
    date: "Feb 2024",
    skills: ["Arduino", "C++", "ESP32", "React"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    name: "Data Visualization Dashboard",
    description: "Interactive dashboard for analyzing university enrollment trends using D3.js and Python",
    date: "Dec 2023",
    skills: ["D3.js", "Python", "Flask", "SQL"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    name: "Robotic Arm Controller",
    description: "Designed and programmed a 6-DOF robotic arm for precise object manipulation tasks",
    date: "Oct 2023",
    skills: ["Arduino", "Kinematics", "C++", "3D Printing"],
    githubUrl: "#",
    demoUrl: "#"
  }
]

type ProjectCardProps = {
  project: {
    name: string
    description: string
    date: string
    skills: string[]
    githubUrl: string
    demoUrl: string
  }
  isActive?: boolean
}

function ProjectCard({ project, isActive = false }: ProjectCardProps) {
  return (
    <Card className="group hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg mb-2 group-hover:text-accent transition-colors">
              {project.name}
            </CardTitle>
            <CardDescription className="text-base leading-relaxed">
              {project.description}
            </CardDescription>
          </div>
          {isActive && (
            <div className="flex-shrink-0">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="pt-0 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{project.date}</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Wrench className="w-4 h-4" />
              <span>Skills & Tools</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex gap-2 pt-4">
          <Button size="sm" variant="outline" className="flex-1" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
          <Button size="sm" className="flex-1" asChild>
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              View
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Projects & Experiences</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building solutions that matter and learning along the way
          </p>
        </div>

        {/* Current Projects */}
        <div className="space-y-8 mb-16">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-bold">Currently Working On</h3>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {currentProjects.map((project, index) => (
              <ProjectCard key={index} project={project} isActive={true} />
            ))}
          </div>
        </div>

        {/* Past Projects */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold">Past Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {pastProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}