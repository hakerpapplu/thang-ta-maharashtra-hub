
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Medal, Award, Trophy } from "lucide-react";

const Achievements = () => {
  // Mock data for state level achievements
  const stateAchievements = [
    {
      id: 1,
      title: "State Championship Overall Champions",
      year: "2024",
      location: "Pune",
      description: "The Maharashtra Thang-Ta team secured the overall championship with 12 gold, 8 silver, and 10 bronze medals.",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a"
    },
    {
      id: 2,
      title: "Best Technical Performance Award",
      year: "2023",
      location: "Nagpur",
      description: "Our women's team received special recognition for technical excellence in the Thang-La demonstration category.",
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2"
    },
    {
      id: 3,
      title: "Youngest Achievement Award",
      year: "2023",
      location: "Mumbai",
      description: "12-year-old Aryan Patil became the youngest gold medalist in the junior weapons category.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
    }
  ];

  // Mock data for national level achievements
  const nationalAchievements = [
    {
      id: 1,
      title: "National Championship - Team Gold",
      year: "2024",
      location: "Delhi",
      description: "Maharashtra Thang-Ta team won the overall championship at the National Games, securing 7 gold medals.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
    },
    {
      id: 2,
      title: "Individual Champions in Multiple Categories",
      year: "2023",
      location: "Imphal",
      description: "Three Maharashtra athletes won gold medals in their respective individual categories at the National Thang-Ta Championship.",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a"
    }
  ];

  // Mock data for international achievements
  const internationalAchievements = [
    {
      id: 1,
      title: "International Martial Arts Festival - Silver Medal",
      year: "2024",
      location: "Singapore",
      description: "The Maharashtra team secured silver medals in the International Martial Arts Festival's traditional weapons demonstration category.",
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2"
    }
  ];

  // Notable athletes
  const notableAthletes = [
    {
      id: 1,
      name: "Rajesh Patil",
      district: "Pune",
      achievements: "5x State Champion, 2x National Gold Medalist",
      specialization: "Sword Combat",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    },
    {
      id: 2,
      name: "Anjali Sharma",
      district: "Mumbai",
      achievements: "3x State Champion, National Silver Medalist, International Bronze Medalist",
      specialization: "Unarmed Combat",
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2"
    },
    {
      id: 3,
      name: "Vikram Jadhav",
      district: "Nagpur",
      achievements: "4x State Champion, National Champion, Coach of Junior Team",
      specialization: "Spear Combat",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a"
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-thangta-black text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Our <span className="text-thangta-gold">Achievements</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 animate-fade-in opacity-90">
              Celebrating excellence in Thang-Ta across Maharashtra and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Tabs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="state" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
              <TabsTrigger value="state">State Level</TabsTrigger>
              <TabsTrigger value="national">National Level</TabsTrigger>
              <TabsTrigger value="international">International</TabsTrigger>
            </TabsList>
            
            <TabsContent value="state">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stateAchievements.map((achievement) => (
                  <Card key={achievement.id} className="overflow-hidden border-gray-200 hover:shadow-md transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={achievement.image} 
                        alt={achievement.title}
                        className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className="bg-thangta text-white">{achievement.year}</Badge>
                        <div className="flex items-center">
                          <Trophy className="h-5 w-5 text-thangta-gold mr-1" />
                          <span className="text-sm">State Level</span>
                        </div>
                      </div>
                      <h3 className="font-cinzel text-xl font-bold mb-2 text-thangta-dark">{achievement.title}</h3>
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{achievement.location}</span>
                      </div>
                      <p className="text-gray-600">{achievement.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="national">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {nationalAchievements.map((achievement) => (
                  <Card key={achievement.id} className="overflow-hidden border-gray-200 hover:shadow-md transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={achievement.image} 
                        alt={achievement.title}
                        className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className="bg-blue-600 text-white">{achievement.year}</Badge>
                        <div className="flex items-center">
                          <Medal className="h-5 w-5 text-blue-600 mr-1" />
                          <span className="text-sm">National Level</span>
                        </div>
                      </div>
                      <h3 className="font-cinzel text-xl font-bold mb-2 text-thangta-dark">{achievement.title}</h3>
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{achievement.location}</span>
                      </div>
                      <p className="text-gray-600">{achievement.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="international">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {internationalAchievements.map((achievement) => (
                  <Card key={achievement.id} className="overflow-hidden border-gray-200 hover:shadow-md transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={achievement.image} 
                        alt={achievement.title}
                        className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className="bg-green-600 text-white">{achievement.year}</Badge>
                        <div className="flex items-center">
                          <Award className="h-5 w-5 text-green-600 mr-1" />
                          <span className="text-sm">International Level</span>
                        </div>
                      </div>
                      <h3 className="font-cinzel text-xl font-bold mb-2 text-thangta-dark">{achievement.title}</h3>
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{achievement.location}</span>
                      </div>
                      <p className="text-gray-600">{achievement.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Notable Athletes Section */}
      <section className="py-16 bg-thangta-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl font-bold text-thangta-dark mb-4">Notable Athletes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Celebrating the outstanding practitioners who have brought recognition to Maharashtra Thang-Ta.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {notableAthletes.map((athlete) => (
              <div key={athlete.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105 duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={athlete.image} 
                    alt={athlete.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-cinzel text-xl font-bold mb-1 text-thangta-dark">{athlete.name}</h3>
                  <p className="text-gray-500 mb-3">{athlete.district} District</p>
                  <div className="mb-3">
                    <span className="font-medium text-sm text-thangta">Specialization:</span>
                    <span className="ml-2">{athlete.specialization}</span>
                  </div>
                  <div>
                    <span className="font-medium text-sm text-thangta">Achievements:</span>
                    <p className="mt-1 text-gray-600">{athlete.achievements}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl font-bold text-thangta-dark mb-4">Our Success in Numbers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A summary of our achievements over the years in Thang-Ta competitions at various levels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-thangta-cream p-8 rounded-lg">
              <div className="text-4xl font-bold text-thangta mb-2">75+</div>
              <div className="font-cinzel font-medium text-gray-700">State Level Medals</div>
              <p className="text-sm text-gray-500 mt-2">Since 2020</p>
            </div>
            
            <div className="bg-thangta-cream p-8 rounded-lg">
              <div className="text-4xl font-bold text-thangta mb-2">25+</div>
              <div className="font-cinzel font-medium text-gray-700">National Level Medals</div>
              <p className="text-sm text-gray-500 mt-2">Since 2020</p>
            </div>
            
            <div className="bg-thangta-cream p-8 rounded-lg">
              <div className="text-4xl font-bold text-thangta mb-2">5</div>
              <div className="font-cinzel font-medium text-gray-700">International Recognitions</div>
              <p className="text-sm text-gray-500 mt-2">Since 2020</p>
            </div>
            
            <div className="bg-thangta-cream p-8 rounded-lg">
              <div className="text-4xl font-bold text-thangta mb-2">12</div>
              <div className="font-cinzel font-medium text-gray-700">Master Instructors</div>
              <p className="text-sm text-gray-500 mt-2">Nationally Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Year-wise Achievement Records */}
      <section className="py-16 bg-thangta-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl font-bold text-thangta-gold mb-4">Achievement Timeline</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Tracing our journey of excellence in Thang-Ta over the years.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-thangta-gold/30"></div>
            
            {/* 2024 */}
            <div className="relative mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="z-10 bg-thangta-gold text-black font-bold py-1 px-6 rounded-full">2024</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-thangta-gold/20 animate-fade-in">
                  <h3 className="font-cinzel text-xl font-bold mb-3 text-thangta-gold">State Championship</h3>
                  <p className="text-gray-300 mb-3">
                    Achieved overall championship with 12 gold, 8 silver, and 10 bronze medals.
                  </p>
                  <div className="flex space-x-2">
                    <Badge className="bg-thangta-gold text-black">Gold x12</Badge>
                    <Badge className="bg-gray-400 text-black">Silver x8</Badge>
                    <Badge className="bg-amber-700 text-white">Bronze x10</Badge>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-thangta-gold/20 animate-fade-in">
                  <h3 className="font-cinzel text-xl font-bold mb-3 text-thangta-gold">National Games</h3>
                  <p className="text-gray-300 mb-3">
                    Maharashtra Thang-Ta team secured 7 gold medals at the National Games.
                  </p>
                  <div className="flex space-x-2">
                    <Badge className="bg-thangta-gold text-black">Gold x7</Badge>
                    <Badge className="bg-gray-400 text-black">Silver x3</Badge>
                    <Badge className="bg-amber-700 text-white">Bronze x5</Badge>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 2023 */}
            <div className="relative mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="z-10 bg-thangta-gold text-black font-bold py-1 px-6 rounded-full">2023</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-thangta-gold/20 animate-fade-in">
                  <h3 className="font-cinzel text-xl font-bold mb-3 text-thangta-gold">Women's Team Excellence</h3>
                  <p className="text-gray-300 mb-3">
                    Special recognition for technical excellence in the Thang-La demonstration category.
                  </p>
                  <Badge className="bg-purple-500 text-white">Special Recognition</Badge>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-thangta-gold/20 animate-fade-in">
                  <h3 className="font-cinzel text-xl font-bold mb-3 text-thangta-gold">National Championship</h3>
                  <p className="text-gray-300 mb-3">
                    Three Maharashtra athletes won gold medals in their respective individual categories.
                  </p>
                  <div className="flex space-x-2">
                    <Badge className="bg-thangta-gold text-black">Gold x3</Badge>
                    <Badge className="bg-gray-400 text-black">Silver x5</Badge>
                    <Badge className="bg-amber-700 text-white">Bronze x4</Badge>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 2022 */}
            <div className="relative">
              <div className="flex items-center justify-center mb-6">
                <div className="z-10 bg-thangta-gold text-black font-bold py-1 px-6 rounded-full">2022</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-thangta-gold/20 animate-fade-in">
                  <h3 className="font-cinzel text-xl font-bold mb-3 text-thangta-gold">Revival of State Championship</h3>
                  <p className="text-gray-300 mb-3">
                    Post-pandemic revival with participation from all 36 districts of Maharashtra.
                  </p>
                  <Badge className="bg-green-500 text-white">Milestone Achievement</Badge>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-thangta-gold/20 animate-fade-in">
                  <h3 className="font-cinzel text-xl font-bold mb-3 text-thangta-gold">Coach Certification Program</h3>
                  <p className="text-gray-300 mb-3">
                    Successfully trained and certified 25 coaches from across Maharashtra.
                  </p>
                  <Badge className="bg-blue-500 text-white">Development Milestone</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-thangta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cinzel text-3xl font-bold text-white mb-4">Join Our Winning Tradition</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Become part of our Thang-Ta community and train with the best. Develop your skills and represent Maharashtra on national and international platforms.
          </p>
          <Button asChild size="lg" className="bg-white text-thangta hover:bg-thangta-cream">
            <a href="/contact">Contact Us Today</a>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Achievements;
