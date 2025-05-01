
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
                  <CardTitle>System Engineer</CardTitle>
                  <CardDescription>Tata Consultancy Services (TCS) • 2023-Present</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                  Collaborated with team members to develop an AI-powered chatbot in Webex<br></br>
Designed and implemented an agentic workflow - driven POC Inventory management system<br></br>
Integrated the AI-powered chatbot into pre-existing dashboards

                  </p>
                </CardContent>
              </Card>
              
              {/* <Card>
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
              </Card> */}
            </div>
          </TabsContent>
          
          <TabsContent value="education">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Bachelor of Technology (B.Tech) in Information Technology</CardTitle>
                  <CardDescription>VNRVJIET • 2019 - 2023</CardDescription>
                  <CardDescription>CGPA 9.36</CardDescription>
                </CardHeader>
                <CardContent>
                <p>
                    Studied algorithms, data structures, Computer Networks, Operating Systems and software development.
                    Participated in coding competitions and hackathons.
  
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Class XII (Intermediate)</CardTitle>
                  <CardDescription>Sri Chaitanya Junior College • 2017-2019</CardDescription>
                  <CardDescription>CGPA 9.82</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                  Major in Mathematics, Physics, Chemistry
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Class X (SSC)</CardTitle>
                  <CardDescription>Scholars E.M High School • 2016-2017</CardDescription>
                  <CardDescription>CGPA 10</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                  
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
                  When I'm not infront of my laptop, you can find me in the gym,chilling with my friends,
                   or attending tech meetups.
                  I'm passionate about creating technology that makes people's lives easier
                  and more enjoyable.
                </p>
                <p className="mb-6">
                  I believe in continuous learning and regularly take online courses to stay
                  up-to-date with the latest technologies and best practices in development.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="outline">Crafting</Button>
                  <Button size="sm" variant="outline">Hiking</Button>
                  <Button size="sm" variant="outline">Cooking</Button>
                  <Button size="sm" variant="outline">Swimming</Button>
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
