
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ArrowRight, Trophy, Users, Clock, Filter, X } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for tournaments
const upcomingTournaments = [
  {
    id: 1,
    title: "Maharashtra State Championship 2025",
    date: "June 15-17, 2025",
    location: "Pune Sports Complex, Pune",
    categories: ["Men", "Women", "Under-18", "Veterans"],
    registrationDeadline: "May 30, 2025",
    description: "The annual state championship featuring competitions in various categories and age groups. This premier event brings together the best Thang-Ta practitioners from across Maharashtra.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    status: "Open for Registration"
  },
  {
    id: 2,
    title: "Thang-Ta Youth Tournament",
    date: "July 22-23, 2025",
    location: "Mumbai Indoor Stadium, Mumbai",
    categories: ["Under-14", "Under-18"],
    registrationDeadline: "July 5, 2025",
    description: "A specialized tournament for young martial artists to showcase their skills and gain competitive experience in a supportive environment.",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
    status: "Open for Registration"
  },
  {
    id: 3,
    title: "Western Maharashtra Regional Tournament",
    date: "August 10-11, 2025",
    location: "Kolhapur Sports Arena, Kolhapur",
    categories: ["Men", "Women", "Mixed Teams"],
    registrationDeadline: "July 25, 2025",
    description: "Regional level competition for practitioners from Western Maharashtra districts including Kolhapur, Sangli, Satara, and Solapur.",
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
    status: "Registration Opening Soon"
  }
];

const pastTournaments = [
  {
    id: 101,
    title: "Maharashtra State Championship 2024",
    date: "June 12-14, 2024",
    location: "Nagpur Sports Complex, Nagpur",
    categories: ["Men", "Women", "Under-18", "Veterans"],
    winners: {
      men: "Rahul Deshmukh (Pune)",
      women: "Anjali Patil (Mumbai)",
      under18: "Vikram Singh (Nagpur)",
      veterans: "Prakash Jadhav (Aurangabad)"
    },
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    results: "Available"
  },
  {
    id: 102,
    title: "Inter-District Championship 2024",
    date: "April 5-7, 2024",
    location: "Aurangabad Indoor Stadium, Aurangabad",
    categories: ["District Teams"],
    winners: {
      overall: "Pune District",
      runnerUp: "Mumbai District"
    },
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
    results: "Available"
  },
  {
    id: 103,
    title: "Winter Tournament 2023",
    date: "December 15-17, 2023",
    location: "Amravati Sports Complex, Amravati",
    categories: ["Men", "Women", "Mixed"],
    winners: {
      men: "Suresh Wagh (Amravati)",
      women: "Priya Mane (Pune)",
      mixed: "Team Vidarbha"
    },
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
    results: "Available"
  }
];

// Tournament Registration Form component
const TournamentRegistrationForm = ({ tournament, onClose }: { tournament: any, onClose: () => void }) => {
  const districts = [
    "Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", 
    "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", 
    "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", 
    "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", 
    "Washim", "Yavatmal"
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-cinzel text-2xl font-bold text-thangta-dark">Register for {tournament.title}</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="h-6 w-6" />
        </button>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-thangta focus:border-transparent"
              placeholder="Enter your full name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input 
              type="email" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-thangta focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input 
              type="tel" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-thangta focus:border-transparent"
              placeholder="Enter your phone number"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input 
              type="number" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-thangta focus:border-transparent"
              placeholder="Enter your age"
              min="5"
              max="70"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-thangta focus:border-transparent" required>
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">District</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-thangta focus:border-transparent" required>
              <option value="">Select your district</option>
              {districts.map((district) => (
                <option key={district} value={district.toLowerCase()}>
                  {district}
                </option>
              ))}
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Experience Level</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-thangta focus:border-transparent" required>
              <option value="">Select experience level</option>
              <option value="beginner">Beginner (0-2 years)</option>
              <option value="intermediate">Intermediate (3-5 years)</option>
              <option value="advanced">Advanced (6+ years)</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-thangta focus:border-transparent" required>
              <option value="">Select category</option>
              {tournament.categories.map((category: string) => (
                <option key={category} value={category.toLowerCase()}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Previous Tournament Experience</label>
          <textarea 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-thangta focus:border-transparent"
            rows={3}
            placeholder="Briefly describe your previous tournament experience"
          ></textarea>
        </div>
        
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            className="mt-1 focus:ring-thangta h-4 w-4 text-thangta border-gray-300 rounded"
            required
          />
          <label className="text-sm text-gray-700">
            I acknowledge that I have read and agree to the tournament rules and guidelines. I certify that the information provided is accurate.
          </label>
        </div>
        
        <div className="flex justify-end space-x-3">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button className="bg-thangta hover:bg-thangta-dark">Submit Registration</Button>
        </div>
      </form>
    </div>
  );
};

const Tournaments = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [selectedTournament, setSelectedTournament] = useState<any>(null);

  const handleRegisterClick = (tournament: any) => {
    setSelectedTournament(tournament);
    setShowRegistrationForm(true);
  };

  const closeRegistrationForm = () => {
    setShowRegistrationForm(false);
    setSelectedTournament(null);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-thangta-black text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="max-w-3xl">
            <h1 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              <span className="text-thangta-gold">Tournaments</span> & Events
            </h1>
            <p className="text-lg md:text-xl mb-8 animate-fade-in opacity-90">
              Participate in competitive events across Maharashtra and showcase your Thang-Ta skills.
            </p>
          </div>
        </div>
      </section>

      {/* Tournaments Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <Tabs defaultValue="upcoming" className="w-full" onValueChange={setActiveTab}>
              <div className="flex justify-between items-center mb-6">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="upcoming">Upcoming Tournaments</TabsTrigger>
                  <TabsTrigger value="past">Past Tournaments</TabsTrigger>
                </TabsList>
                <div className="hidden md:flex items-center space-x-2 text-gray-500">
                  <Filter className="h-4 w-4" />
                  <span className="text-sm">Filter</span>
                </div>
              </div>

              <TabsContent value="upcoming" className="mt-0">
                {showRegistrationForm && selectedTournament ? (
                  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                      <TournamentRegistrationForm 
                        tournament={selectedTournament}
                        onClose={closeRegistrationForm}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {upcomingTournaments.map((tournament) => (
                      <Card key={tournament.id} className="overflow-hidden border-gray-200 hover:shadow-md transition-shadow">
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={tournament.image} 
                            alt={tournament.title}
                            className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="font-cinzel text-xl text-thangta-dark">{tournament.title}</CardTitle>
                              <CardDescription className="mt-1">{tournament.status}</CardDescription>
                            </div>
                            <Badge className="bg-thangta text-white hover:bg-thangta-dark">
                              {tournament.status === "Open for Registration" ? "Open" : "Coming Soon"}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-start space-x-2">
                            <Calendar className="h-5 w-5 text-thangta shrink-0 mt-0.5" />
                            <div>
                              <div className="font-medium">{tournament.date}</div>
                              <div className="text-sm text-gray-500">Registration Deadline: {tournament.registrationDeadline}</div>
                            </div>
                          </div>
                          <div className="flex items-start space-x-2">
                            <MapPin className="h-5 w-5 text-thangta shrink-0 mt-0.5" />
                            <span>{tournament.location}</span>
                          </div>
                          <div>
                            <div className="font-medium mb-1">Categories:</div>
                            <div className="flex flex-wrap gap-2">
                              {tournament.categories.map((category, index) => (
                                <span 
                                  key={index}
                                  className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                                >
                                  {category}
                                </span>
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm">{tournament.description}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between pt-2">
                          <Button variant="outline" className="text-thangta">
                            View Details
                          </Button>
                          <Button 
                            className="bg-thangta hover:bg-thangta-dark"
                            onClick={() => handleRegisterClick(tournament)}
                            disabled={tournament.status !== "Open for Registration"}
                          >
                            Register Now
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="past" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {pastTournaments.map((tournament) => (
                    <Card key={tournament.id} className="overflow-hidden border-gray-200 hover:shadow-md transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={tournament.image} 
                          alt={tournament.title}
                          className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="font-cinzel text-xl text-thangta-dark">{tournament.title}</CardTitle>
                            <CardDescription className="mt-1">Completed Event</CardDescription>
                          </div>
                          <Badge className="bg-gray-500 hover:bg-gray-600">Past</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-start space-x-2">
                          <Calendar className="h-5 w-5 text-thangta shrink-0 mt-0.5" />
                          <span>{tournament.date}</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <MapPin className="h-5 w-5 text-thangta shrink-0 mt-0.5" />
                          <span>{tournament.location}</span>
                        </div>
                        <div>
                          <div className="font-medium mb-1">Winners:</div>
                          <div className="space-y-1 text-sm">
                            {Object.entries(tournament.winners).map(([category, winner]) => (
                              <div key={category} className="flex items-center">
                                <Trophy className="h-4 w-4 text-thangta-gold mr-2" />
                                <span className="capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}: </span>
                                <span className="font-medium ml-1">{winner}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between pt-2">
                        <Button variant="outline" className="text-thangta">
                          <Link to="#">View Photos</Link>
                        </Button>
                        <Button variant="outline" className="text-thangta">
                          <Link to="#">Full Results</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Tournament Calendar */}
      <section className="py-16 bg-thangta-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl font-bold text-thangta-dark mb-3">Tournament Calendar</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Plan your participation in Thang-Ta events throughout the year across Maharashtra.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="font-cinzel text-xl font-bold text-thangta-dark mb-4">2025 Tournament Schedule</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registration</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">District Selection Trials - Western Region</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">April 10-12, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap">Kolhapur</td>
                      <td className="px-6 py-4 whitespace-nowrap">March 25, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Coming Soon</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">District Selection Trials - Northern Region</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">April 24-26, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap">Nashik</td>
                      <td className="px-6 py-4 whitespace-nowrap">April 10, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Coming Soon</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">District Selection Trials - Eastern Region</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">May 8-10, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap">Nagpur</td>
                      <td className="px-6 py-4 whitespace-nowrap">April 22, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Coming Soon</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">Summer Training Camp</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">May 5-15, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap">Nagpur</td>
                      <td className="px-6 py-4 whitespace-nowrap">April 20, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Open Soon</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">Maharashtra State Championship 2025</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">June 15-17, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap">Pune</td>
                      <td className="px-6 py-4 whitespace-nowrap">May 30, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Open</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">Thang-Ta Youth Tournament</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">July 22-23, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap">Mumbai</td>
                      <td className="px-6 py-4 whitespace-nowrap">July 5, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Open</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">Western Maharashtra Regional Tournament</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">August 10-11, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap">Kolhapur</td>
                      <td className="px-6 py-4 whitespace-nowrap">July 25, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Coming Soon</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">Maharashtra Team Selection for Nationals</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">September 5-7, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap">Pune</td>
                      <td className="px-6 py-4 whitespace-nowrap">August 20, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">Invitation Only</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">Winter Tournament 2025</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">December 12-14, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap">Aurangabad</td>
                      <td className="px-6 py-4 whitespace-nowrap">November 25, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Coming Soon</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Rules & Guidelines */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl font-bold text-thangta-dark mb-3">Tournament Rules & Guidelines</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Understand the rules and regulations that govern Thang-Ta competitions in Maharashtra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-thangta/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-thangta" />
                  </div>
                  <CardTitle className="font-cinzel">Eligibility Criteria</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-thangta mr-2">•</span>
                    <span>Participants must be registered members of the All Maharashtra Thang-Ta Association</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-thangta mr-2">•</span>
                    <span>Age categories must be strictly adhered to with proper documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-thangta mr-2">•</span>
                    <span>Participants must represent their registered district</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-thangta mr-2">•</span>
                    <span>Medical fitness certificate is mandatory for all participants</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-thangta/10 flex items-center justify-center">
                    <Trophy className="h-5 w-5 text-thangta" />
                  </div>
                  <CardTitle className="font-cinzel">Competition Rules</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-thangta mr-2">•</span>
                    <span>All competitions follow the official National Thang-Ta Federation rulebook</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-thangta mr-2">•</span>
                    <span>Participants must wear approved traditional attire during competitions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-thangta mr-2">•</span>
                    <span>Safety equipment is mandatory for all combat categories</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-thangta mr-2">•</span>
                    <span>Judging criteria includes technique, precision, power, and adherence to form</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-thangta/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-thangta" />
                  </div>
                  <CardTitle className="font-cinzel">Registration Process</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-thangta mr-2">•</span>
                    <span>Registration deadlines must be strictly observed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-thangta mr-2">•</span>
                    <span>Registration fees are non-refundable except in case of event cancellation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-thangta mr-2">•</span>
                    <span>All required documentation must be submitted during registration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-thangta mr-2">•</span>
                    <span>Late registrations may be accepted with additional fees at the organizer's discretion</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-thangta text-thangta hover:bg-thangta hover:text-white">
              <a href="#">Download Complete Tournament Rulebook</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-16 bg-thangta-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cinzel text-3xl font-bold mb-4">Ready to Participate?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Register for upcoming tournaments and showcase your Thang-Ta skills. Join us in celebrating 
            and promoting this ancient martial art across Maharashtra.
          </p>
          <Button asChild size="lg" className="bg-thangta hover:bg-thangta-dark">
            <Link to="#">
              View Upcoming Tournaments
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Tournaments;
