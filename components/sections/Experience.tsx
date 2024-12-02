import { Card, CardContent, CardHeader } from "@/components/ui/card";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Company Name",
    period: "2022 - Present",
    description: "Led the development of multiple web applications using React and Next.js. Implemented modern UI/UX designs and improved application performance.",
  },
  {
    title: "Full Stack Developer",
    company: "Previous Company",
    period: "2020 - 2022",
    description: "Developed and maintained full-stack applications using Node.js and React. Collaborated with cross-functional teams to deliver high-quality solutions.",
  },
  {
    title: "Junior Developer",
    company: "First Company",
    period: "2018 - 2020",
    description: "Started my journey in web development, working on various frontend projects and learning backend technologies.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        
        <div className="grid gap-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;