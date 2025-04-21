
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Medal, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// Mock data
const coaches = [
  {
    id: 1,
    name: "Rajesh Sharma",
    district: "Pune",
    experience: "15+ years",
    specialization: "Sword & Spear Combat",
    certification: "National Level Certified Coach",
    achievements: "Former National Champion, Coach of State Team",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: 2,
    name: "Anjali Patil",
    district: "Mumbai",
    experience: "12 years",
    specialization: "Unarmed Combat Techniques",
    certification: "International Certified Instructor",
    achievements: "2x National Gold Medalist, International Bronze Medalist",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a"
  },
  {
    id: 3,
    name: "Vikram Deshmukh",
    district: "Nagpur",
    experience: "20+ years",
    specialization: "Traditional Forms & Demonstration",
    certification: "Master Instructor, Certified Judge",
    achievements: "Technical Director of Maharashtra Thang-Ta Association",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
  },
  {
    id: 4,
    name: "Priya Jadhav",
    district: "Aurangabad",
    experience: "10 years",
    specialization: "Youth Training & Development",
    certification: "National Level Certified Coach",
    achievements: "Developed state's youth program, Coach of Junior Team",
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2"
  }
];

const seniorTrainees = [
  {
    id: 1,
    name: "Amit Kulkarni",
    district: "Pune",
    age: 28,
    level: "Advanced",
    achievements: "3x State Gold Medalist, National Bronze Medalist",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a"
  },
  {
    id: 2,
    name: "Sonali Mane",
    district: "Mumbai",
    age: 25,
    level: "Advanced",
    achievements: "State Champion 2023, National Team Member",
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2"
  },
  {
    id: 3,
    name: "Rahul Joshi",
    district: "Nagpur",
    age: 30,
    level: "Advanced",
    achievements: "5x District Champion, State Silver Medalist",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
  },
  {
    id: 4,
    name: "Meera Shah",
    district: "Kolhapur",
    age: 26,
    level: "Advanced",
    achievements: "2x State Champion, Emerging Coach",
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2"
  },
  {
    id: 5,
    name: "Sanjay Pawar",
    district: "Nashik",
    age: 32,
    level: "Advanced",
    achievements: "State Team Captain, Technical Specialist",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: 6,
    name: "Deepika Raut",
    district: "Amravati",
    age: 24,
    level: "Advanced",
    achievements: "Rising Star Award 2023, Weapons Specialist",
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2"
  }
];

const juniorTrainees = [
  {
    id: 1,
    name: "Aryan Patil",
    district: "Pune",
    age: 16,
    level: "Intermediate",
    achievements: "Junior State Champion 2024, National Camp Selection",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a"
  },
  {
    id: 2,
    name: "Neha Singh",
    district: "Mumbai",
    age: 15,
    level: "Intermediate",
    achievements: "Junior Girls Champion, Most Promising Athlete Award",
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2"
  },
  {
    id: 3,
    name: "Rohan Kamble",
    district: "Nagpur",
    age: 17,
    level: "Intermediate",
    achievements: "Junior Team Captain, 2x District Champion",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
  },
  {
    id: 4,
    name: "Ananya Deshpande",
    district: "Solapur",
    age: 14,
    level: "Intermediate",
    achievements: "Youngest State Medalist, Technical Excellence Award",
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2"
  }
];

// List of Maharashtra districts
const districts = [
  "All Districts",
  "Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", 
  "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", 
  "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", 
  "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", 
  "Washim", "Yavatmal"
];

const Trainees = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("All Districts");
  const [activeTab, setActiveTab] = useState("coaches");
  
  // Filter functions
  const filterBySearch = (item: any) => {
    if (searchTerm === "") return true;
    return item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
           item.district.toLowerCase().includes(searchTerm.toLowerCase());
  };
  
  const filterByDistrict = (item: any) => {
    if (selectedDistrict === "All Districts") return true;
    return item.district === selectedDistrict;
  };
  
  // Apply filters
  const filteredCoaches = coaches.filter(filterBySearch).filter(filterByDistrict);
  const filteredSeniorTrainees = seniorTrainees.filter(filterBySearch).filter(filterByDistrict);
  const filteredJuniorTrainees = juniorTrainees.filter(filterBySearch).filter(filterByDistrict);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-thangta-black text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Our <span className="text-thangta-gold">Trainees & Coaches</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 animate-fade-in opacity-90">
              Meet the dedicated practitioners and coaches preserving and elevating the art of Thang-Ta across Maharashtra.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-thangta-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search by name or district..."
                className="pl-10 bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/3">
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-thangta"
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
              >
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Trainees and Coaches Tabs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="coaches" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
              <TabsTrigger value="coaches">Coaches</TabsTrigger>
              <TabsTrigger value="senior">Senior Trainees</TabsTrigger>
              <TabsTrigger value="junior">Junior Trainees</TabsTrigger>
            </TabsList>
            
            {/* Coaches Tab */}
            <TabsContent value="coaches">
              {filteredCoaches.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {filteredCoaches.map((coach) => (
                    <Card key={coach.id} className="overflow-hidden border-gray-200 hover:shadow-md transition-shadow">
                      <div className="h-64 overflow-hidden">
                        <img 
                          src={coach.image} 
                          alt={coach.name}
                          className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-cinzel text-xl font-bold text-thangta-dark">{coach.name}</h3>
                          <Badge className="bg-thangta text-white">Coach</Badge>
                        </div>
                        <div className="flex items-center text-gray-500 text-sm mb-4">
                          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                          <span>{coach.district}</span>
                        </div>
                        <div className="space-y-2 mb-4">
                          <div>
                            <span className="font-medium text-sm text-thangta">Experience:</span>
                            <span className="ml-2">{coach.experience}</span>
                          </div>
                          <div>
                            <span className="font-medium text-sm text-thangta">Specialization:</span>
                            <span className="ml-2">{coach.specialization}</span>
                          </div>
                          <div>
                            <span className="font-medium text-sm text-thangta">Certification:</span>
                            <span className="ml-2">{coach.certification}</span>
                          </div>
                        </div>
                        <div>
                          <span className="font-medium text-sm text-thangta">Achievements:</span>
                          <p className="mt-1 text-gray-600 text-sm">{coach.achievements}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <User className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No coaches found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </TabsContent>
            
            {/* Senior Trainees Tab */}
            <TabsContent value="senior">
              {filteredSeniorTrainees.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredSeniorTrainees.map((trainee) => (
                    <Card key={trainee.id} className="overflow-hidden border-gray-200 hover:shadow-md transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={trainee.image} 
                          alt={trainee.name}
                          className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-cinzel text-xl font-bold text-thangta-dark">{trainee.name}</h3>
                          <Badge className="bg-blue-600 text-white">{trainee.level}</Badge>
                        </div>
                        <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                            <span>{trainee.district}</span>
                          </div>
                          <div>Age: {trainee.age}</div>
                        </div>
                        <div>
                          <div className="flex items-start mb-1">
                            <Medal className="h-4 w-4 text-thangta mr-2 flex-shrink-0 mt-0.5" />
                            <span className="font-medium text-sm text-thangta">Achievements:</span>
                          </div>
                          <p className="text-gray-600 text-sm">{trainee.achievements}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <User className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No senior trainees found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </TabsContent>
            
            {/* Junior Trainees Tab */}
            <TabsContent value="junior">
              {filteredJuniorTrainees.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredJuniorTrainees.map((trainee) => (
                    <Card key={trainee.id} className="overflow-hidden border-gray-200 hover:shadow-md transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={trainee.image} 
                          alt={trainee.name}
                          className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-cinzel text-xl font-bold text-thangta-dark">{trainee.name}</h3>
                          <Badge className="bg-green-600 text-white">{trainee.level}</Badge>
                        </div>
                        <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                            <span>{trainee.district}</span>
                          </div>
                          <div>Age: {trainee.age}</div>
                        </div>
                        <div>
                          <div className="flex items-start mb-1">
                            <Medal className="h-4 w-4 text-thangta mr-2 flex-shrink-0 mt-0.5" />
                            <span className="font-medium text-sm text-thangta">Achievements:</span>
                          </div>
                          <p className="text-gray-600 text-sm">{trainee.achievements}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <User className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No junior trainees found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Training Centers Section */}
      <section className="py-16 bg-thangta-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl font-bold text-thangta-dark mb-4">Our Training Centers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover Thang-Ta training centers across Maharashtra where our coaches train dedicated practitioners.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="font-cinzel text-xl font-bold text-thangta-dark mb-4">Major Training Centers</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Center Name</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Head Coach</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Programs</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">Maharashtra Thang-Ta Academy</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">Pune</td>
                      <td className="px-6 py-4 whitespace-nowrap">Rajesh Sharma</td>
                      <td className="px-6 py-4 whitespace-nowrap">All levels, Competitive Training</td>
                      <td className="px-6 py-4 whitespace-nowrap">academy@maharashtrathangta.org</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">Mumbai Thang-Ta Center</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">Mumbai</td>
                      <td className="px-6 py-4 whitespace-nowrap">Anjali Patil</td>
                      <td className="px-6 py-4 whitespace-nowrap">Beginners, Intermediate, Advanced</td>
                      <td className="px-6 py-4 whitespace-nowrap">mumbai@maharashtrathangta.org</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">Vidarbha Thang-Ta Training Center</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">Nagpur</td>
                      <td className="px-6 py-4 whitespace-nowrap">Vikram Deshmukh</td>
                      <td className="px-6 py-4 whitespace-nowrap">All levels, Coach Training</td>
                      <td className="px-6 py-4 whitespace-nowrap">nagpur@maharashtrathangta.org</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">Marathwada Thang-Ta Institute</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">Aurangabad</td>
                      <td className="px-6 py-4 whitespace-nowrap">Priya Jadhav</td>
                      <td className="px-6 py-4 whitespace-nowrap">Youth Training, Beginners, Intermediate</td>
                      <td className="px-6 py-4 whitespace-nowrap">aurangabad@maharashtrathangta.org</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">Western Maharashtra Thang-Ta Center</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">Kolhapur</td>
                      <td className="px-6 py-4 whitespace-nowrap">Sanjay Kamble</td>
                      <td className="px-6 py-4 whitespace-nowrap">All levels, Traditional Focus</td>
                      <td className="px-6 py-4 whitespace-nowrap">kolhapur@maharashtrathangta.org</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching System Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl font-bold text-thangta-dark mb-4">Our Coaching System</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn about the structured training approach we use to develop Thang-Ta practitioners across all levels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-thangta-cream p-8 rounded-lg">
              <h3 className="font-cinzel text-xl font-bold mb-4 text-thangta">Beginner Level</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-thangta font-bold mr-2">•</span>
                  <span>Basic stances and movements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-thangta font-bold mr-2">•</span>
                  <span>Introduction to weapon handling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-thangta font-bold mr-2">•</span>
                  <span>Fundamental striking techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-thangta font-bold mr-2">•</span>
                  <span>Physical conditioning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-thangta font-bold mr-2">•</span>
                  <span>Historical and cultural understanding</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-thangta-cream p-8 rounded-lg">
              <h3 className="font-cinzel text-xl font-bold mb-4 text-thangta">Intermediate Level</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-thangta font-bold mr-2">•</span>
                  <span>Advanced weapon techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-thangta font-bold mr-2">•</span>
                  <span>Combat applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-thangta font-bold mr-2">•</span>
                  <span>Traditional forms (pung)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-thangta font-bold mr-2">•</span>
                  <span>Partner training drills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-thangta font-bold mr-2">•</span>
                  <span>Competition preparation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-thangta-cream p-8 rounded-lg">
              <h3 className="font-cinzel text-xl font-bold mb-4 text-thangta">Advanced Level</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-thangta font-bold mr-2">•</span>
                  <span>Master weapon techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-thangta font-bold mr-2">•</span>
                  <span>Complex combat scenarios</span>
                </li>
                <li className="flex items-start">
                  <span className="text-thangta font-bold mr-2">•</span>
                  <span>Multiple weapons training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-thangta font-bold mr-2">•</span>
                  <span>Demonstration choreography</span>
                </li>
                <li className="flex items-start">
                  <span className="text-thangta font-bold mr-2">•</span>
                  <span>Teaching methodology</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="font-cinzel text-2xl font-bold mb-6 text-thangta-dark">Belt/Rank System</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm w-48">
                <div className="h-3 bg-white border border-gray-300 mb-2"></div>
                <div className="font-medium">White Belt</div>
                <p className="text-sm text-gray-500">Beginner Level</p>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm w-48">
                <div className="h-3 bg-yellow-200 mb-2"></div>
                <div className="font-medium">Yellow Belt</div>
                <p className="text-sm text-gray-500">Foundation Level</p>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm w-48">
                <div className="h-3 bg-green-500 mb-2"></div>
                <div className="font-medium">Green Belt</div>
                <p className="text-sm text-gray-500">Intermediate Level</p>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm w-48">
                <div className="h-3 bg-blue-500 mb-2"></div>
                <div className="font-medium">Blue Belt</div>
                <p className="text-sm text-gray-500">Advanced Level</p>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm w-48">
                <div className="h-3 bg-thangta mb-2"></div>
                <div className="font-medium">Red Belt</div>
                <p className="text-sm text-gray-500">Expert Level</p>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm w-48">
                <div className="h-3 bg-black mb-2"></div>
                <div className="font-medium">Black Belt</div>
                <p className="text-sm text-gray-500">Master Level</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 bg-thangta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cinzel text-3xl font-bold text-white mb-4">Become a Thang-Ta Practitioner</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Join our training centers across Maharashtra and learn this ancient martial art from our expert coaches. 
            Whether you're a beginner or experienced martial artist, we have programs for all levels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-thangta hover:bg-thangta-cream">
              <Link to="/contact">Enroll Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Trainees;
