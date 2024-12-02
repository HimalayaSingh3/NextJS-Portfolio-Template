import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              I'm a full-stack developer with a passion for creating elegant solutions to complex problems. With over X years of experience in web development, I specialize in building scalable applications using modern technologies.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing.
            </p>
          </div>

          <div className="grid gap-4">
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <Code2 className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold">Clean Code</h3>
                  <p className="text-sm text-muted-foreground">Writing maintainable and efficient code</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <Palette className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold">UI/UX Focus</h3>
                  <p className="text-sm text-muted-foreground">Creating intuitive user experiences</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <Rocket className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold">Performance</h3>
                  <p className="text-sm text-muted-foreground">Optimizing for speed and efficiency</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;