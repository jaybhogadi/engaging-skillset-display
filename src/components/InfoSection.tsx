
import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const InfoSection: React.FC = () => {
  return (
    <section id="information" className="section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <Tabs defaultValue="experience" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 w-full mb-8">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="personal">Personal</TabsTrigger>
          </TabsList>
          
          <TabsContent value="experience">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Senior Developer</CardTitle>
                  <CardDescription>Company Name • 2022-Present</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Led development of web applications using React and TypeScript. 
                    Collaborated with designers and product managers to create intuitive user interfaces.
                    Implemented CI/CD pipelines and mentored junior developers.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Frontend Developer</CardTitle>
                  <CardDescription>Company Name • 2019-2022</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Developed responsive web applications using modern JavaScript frameworks.
                    Worked in an agile team to deliver features on time and within scope.
                    Optimized application performance and implemented accessibility standards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="education">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Master's in Computer Science</CardTitle>
                  <CardDescription>University Name • 2017-2019</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Focused on web technologies and software engineering principles.
                    Completed thesis on optimizing React application performance.
                    Graduate with honors, GPA 3.8/4.0
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Bachelor's in Computer Science</CardTitle>
                  <CardDescription>University Name • 2013-2017</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Studied algorithms, data structures, and software development.
                    Participated in coding competitions and hackathons.
                    Minor in UI/UX Design.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>A Bit More About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  When I'm not coding, you can find me hiking in nearby mountains, 
                  experimenting with new recipes in the kitchen, or attending tech meetups.
                  I'm passionate about creating technology that makes people's lives easier
                  and more enjoyable.
                </p>
                <p className="mb-6">
                  I believe in continuous learning and regularly take online courses to stay
                  up-to-date with the latest technologies and best practices in web development.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="outline">Photography</Button>
                  <Button size="sm" variant="outline">Hiking</Button>
                  <Button size="sm" variant="outline">Cooking</Button>
                  <Button size="sm" variant="outline">Reading</Button>
                  <Button size="sm" variant="outline">Travel</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default InfoSection;
