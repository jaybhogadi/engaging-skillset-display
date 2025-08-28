
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

// This type allows us to update the coding profiles later
interface CodingProfile {
  platform: string;
  username: string;
  score: number;
  rank: string;
  problems: number;
  url: string;
  badgeColor: "default" | "secondary" | "destructive" | "outline";
}

const CodingPlatforms: React.FC = () => {
  // State for coding profiles (can be updated later via a form or API)
  const [codingProfiles, setCodingProfiles] = useState<CodingProfile[]>([
    {
      platform: "LeetCode",
      username: "jaibhogadi",
      score: 1850,
      rank: "Guardian",
      problems: 300,
      url: "https://leetcode.com/u/jaibhogadi/",
      badgeColor: "default"
    },
    {
      platform: "HackerRank",
      username: "jaibhogadi",
      score: 1650,
      rank: "5 Star",
      problems: 120,
      url: "https://www.hackerrank.com/profile/jaibhogadi",
      badgeColor: "outline"
    },
    {
      platform: "Codechef",
      username: "jaybhogadi",
      score: 1420,
      rank: "Specialist",
      problems: 93,
      url: "https://www.codechef.com/users/jaybhogadi",
      badgeColor: "secondary"
    },
    {
      platform: "Codeforces",
      username: "jaybhogadi",
      score: 1420,
      rank: "Specialist",
      problems: 30,
      url: "https://codeforces.com/profile/jaybhogadi",
      badgeColor: "secondary"
    },
  ]);
  

  return (
    <section id="coding-platforms" className="section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Coding Profiles</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Track my progress on various competitive programming platforms. I enjoy solving
            algorithmic problems and participating in coding contests.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {codingProfiles.map((profile, index) => (
            <Card key={index} className="overflow-hidden border-t-4" style={{ borderTopColor: 'var(--accent)' }}>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    {profile.platform}
                  </CardTitle>
                  {/* <Badge variant={profile.badgeColor}>{profile.rank}</Badge> */}
                </div>
                <p className="text-sm text-muted-foreground">@{profile.username}</p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      {/* <span>Score</span> */}
                      {/* <span className="font-medium">{profile.score}</span> */}
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      {/* <div 
                        className="h-full bg-accent" 
                        style={{ width: `${Math.min(100, (profile.score / 3000) * 100)}%` }}
                      ></div> */}
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>Problems Solved</span>
                    <span className="font-medium">{profile.problems}</span>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <a href={profile.url} target="_blank" rel="noopener noreferrer">
                      View Profile
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingPlatforms;
