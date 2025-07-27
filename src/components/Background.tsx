import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, Clock } from "lucide-react"

const timeline = [
  {
    period: "2023 - Present",
    title: "Computer Science Student",
    organization: "University Name",
    description: "Pursuing Bachelor's degree in Computer Science with focus on AI and Robotics",
    type: "education"
  },
  {
    period: "2023 - Present",
    title: "Research Assistant",
    organization: "Robotics Lab",
    description: "Working on autonomous navigation systems for mobile robots",
    type: "involvement"
  },
  {
    period: "2024",
    title: "Software Development Intern",
    organization: "Tech Company",
    description: "Developed full-stack web applications using React and Node.js",
    type: "involvement"
  },
  {
    period: "2019 - 2023",
    title: "High School Graduate",
    organization: "High School Name",
    description: "Graduated with honors, Captain of Robotics Team",
    type: "before"
  }
]

const getIcon = (type: string) => {
  switch (type) {
    case "education": return GraduationCap
    case "involvement": return Users
    case "before": return Clock
    default: return Clock
  }
}

const getTypeLabel = (type: string) => {
  switch (type) {
    case "education": return "Education"
    case "involvement": return "Current Involvement"
    case "before": return "Before College"
    default: return ""
  }
}

// Placeholder photos - replace with actual gallery photos
const galleryPhotos = [
  "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400"
]

export function Background() {
  return (
    <section id="background" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">My Background</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The journey that led me to where I am today
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8 mb-20">
          {timeline.map((item, index) => {
            const Icon = getIcon(item.type)
            return (
              <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 border-l-4 border-l-accent">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <Badge variant="outline" className="text-xs w-fit">
                          {getTypeLabel(item.type)}
                        </Badge>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                        <span className="font-medium">{item.organization}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{item.period}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 pl-16">
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Photo Gallery */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center">Photo Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryPhotos.map((photo, index) => (
              <div 
                key={index}
                className="aspect-square rounded-lg overflow-hidden group cursor-pointer shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <img 
                  src={photo} 
                  alt={`Gallery photo ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}