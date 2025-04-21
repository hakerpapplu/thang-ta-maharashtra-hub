import { useState } from "react";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";

const Tournaments = () => {
  // Mock data for upcoming tournaments
  const upcomingTournaments = [
    {
      id: 1,
      title: "Maharashtra State Championship 2025",
      date: "June 15-17, 2025",
      location: "Pune Sports Complex",
      registrationOpen: true,
      categories: ["Junior", "Senior", "Masters"],
      description: "The premier Thang-Ta competition in Maharashtra featuring the state's top martial artists competing for state honors."
    },
    {
      id: 2,
      title: "Inter-District Tournament",
      date: "August 8-10, 2025",
      location: "Nagpur Indoor Stadium",
      registrationOpen: true,
      categories: ["Under-18", "Open"],
      description: "Districts across Maharashtra compete in team and individual events to determine the strongest district in Thang-Ta."
    },
    {
      id: 3,
      title: "National Qualifier Series",
      date: "September 22-24, 2025",
      location: "Mumbai University Sports Complex",
      registrationOpen: false,
      categories: ["All Categories"],
      description: "Qualification tournament for the National Thang-Ta Championship. Top performers will represent Maharashtra at the national level."
    }
  ];

  // Mock data for past tournaments
  const pastTournaments = [
    {
      id: 101,
      title: "Winter Championship 2024",
      date: "January 12-14, 2024",
      location: "Aurangabad Sports Arena",
      winners: {
        junior: "Rahul Patil (Pune)",
        senior: "Anjali Sharma (Mumbai)",
        masters: "Prakash Deshmukh (Nagpur)"
      }
    },
    {
      id: 102,
      title: "Youth Festival Tournament",
      date: "March 5-7, 2024",
      location: "Kolhapur District Stadium",
      winners: {
        "under-15": "Vikram Singh (Nashik)",
        "under-18": "Priya Jadhav (Thane)"
      }
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-thangta-black text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555597673-b21d5c935865')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 flex flex-col items-center justify-center text-center">
          <h1 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Tournaments & <span className="text-thangta-gold">Competitions</span>
          </h1>
          <p className="max-w-2xl text-lg mb-8 animate-fade-in opacity-90">
            Participate in official Thang-Ta tournaments across Maharashtra and showcase your skills on the competitive stage.
          </p>
        </div>
      </section>

      {/* Upcoming Tournaments */}
      <section className="py-16 bg-thangta-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl font-bold text-thangta-dark mb-2">Upcoming Tournaments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Register and prepare for these upcoming official competitions organized by the All Maharashtra Thang-Ta Association.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingTournaments.map((tournament) => (
              <Card key={tournament.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-thangta-dark text-white pb-3">
                  <CardTitle className="font-cinzel">{tournament.title}</CardTitle>
                  <CardDescription className="text-gray-200">
                    {tournament.date} • {tournament.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-4">{tournament.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-thangta-dark mb-2">Categories:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tournament.categories.map((category) => (
                        <span key={category} className="bg-thangta/10 text-thangta-dark px-3 py-1 rounded-full text-sm">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  {tournament.registrationOpen ? (
                    <Button asChild className="w-full bg-thangta hover:bg-thangta-dark">
                      <a href="#registration">Register Now</a>
                    </Button>
                  ) : (
                    <Button disabled className="w-full bg-gray-400 cursor-not-allowed">
                      Registration Closed
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="registration" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl font-bold text-thangta-dark mb-2">Tournament Registration</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fill out the form below to register for an upcoming tournament. Our team will contact you with further details.
            </p>
          </div>

          <RegistrationForm />
        </div>
      </section>

      {/* Past Tournaments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl font-bold text-thangta-dark mb-2">Past Tournaments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Results and highlights from our previous competitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastTournaments.map((tournament) => (
              <Card key={tournament.id} className="overflow-hidden border-none shadow-md">
                <CardHeader className="bg-gray-100 pb-3">
                  <CardTitle className="font-cinzel text-thangta-dark">{tournament.title}</CardTitle>
                  <CardDescription>
                    {tournament.date} • {tournament.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-thangta-dark mb-3">Winners:</h4>
                  <ul className="space-y-2">
                    {Object.entries(tournament.winners).map(([category, winner]) => (
                      <li key={category} className="flex justify-between">
                        <span className="capitalize">{category}:</span>
                        <span className="font-medium">{winner}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full border-thangta text-thangta hover:bg-thangta hover:text-white">
                    <a href="#">View Full Results</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tournament Guidelines */}
      <section className="py-16 bg-thangta-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl font-bold text-thangta-dark mb-2">Tournament Guidelines</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Important information for all participants regarding rules, equipment, and scoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-cinzel text-xl font-bold mb-4 text-thangta-dark">Eligibility & Registration</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-thangta mr-2">•</span>
                  <span>Participants must be registered members of the All Maharashtra Thang-Ta Association.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-thangta mr-2">•</span>
                  <span>Age categories are determined as of the first day of the tournament.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-thangta mr-2">•</span>
                  <span>Registration fees must be paid in full before the registration deadline.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-thangta mr-2">•</span>
                  <span>Weight categories will be strictly enforced with official weigh-ins on the day before competition.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-thangta mr-2">•</span>
                  <span>Medical clearance may be required for certain categories.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-cinzel text-xl font-bold mb-4 text-thangta-dark">Rules & Equipment</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-thangta mr-2">•</span>
                  <span>All competitions follow the official Thang-Ta rulebook as approved by the National Federation.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-thangta mr-2">•</span>
                  <span>Participants must wear the official Thang-Ta uniform during competitions.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-thangta mr-2">•</span>
                  <span>Safety equipment including headgear, chest protectors, and gloves are mandatory for combat events.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-thangta mr-2">•</span>
                  <span>Weapons used in competitions must meet official specifications and will be inspected before use.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-thangta mr-2">•</span>
                  <span>Scoring is conducted by a panel of certified judges using electronic scoring systems.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button asChild className="bg-thangta hover:bg-thangta-dark">
              <a href="#">Download Complete Rulebook</a>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

const RegistrationForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    weight: "",
    district: "",
    tournament: "",
    category: "",
    experience: "",
    message: "",
    agreeTerms: false,
  });

  const [formProgress, setFormProgress] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setForm({ ...form, [name]: target.checked });
    } else {
      setForm({ ...form, [name]: value });
    }
    
    // Calculate form progress
    const filledFields = Object.values(form).filter(val => val !== "" && val !== false).length;
    const totalFields = Object.keys(form).length;
    setFormProgress(Math.round((filledFields / totalFields) * 100));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md text-center">
        <h3 className="font-cinzel text-2xl font-bold mb-4 text-thangta-dark">Registration Submitted!</h3>
        <p className="text-gray-700 mb-6">
          Thank you for registering for the tournament. We have received your information and will contact you shortly with further details.
        </p>
        <Button onClick={() => setSubmitted(false)} className="bg-thangta hover:bg-thangta-dark">
          Register Another Participant
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">Registration Progress</span>
          <span className="text-sm font-medium text-thangta">{formProgress}%</span>
        </div>
        <Progress value={formProgress} className="h-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <Label htmlFor="name" className="text-gray-700">Full Name</Label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-thangta focus:ring focus:ring-thangta focus:ring-opacity-50"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-gray-700">Email Address</Label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-thangta focus:ring focus:ring-thangta focus:ring-opacity-50"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-thangta focus:ring focus:ring-thangta focus:ring-opacity-50"
          />
        </div>

        <div>
          <Label htmlFor="age" className="text-gray-700">Age</Label>
          <input
            id="age"
            name="age"
            type="number"
            min="5"
            max="70"
            value={form.age}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-thangta focus:ring focus:ring-thangta focus:ring-opacity-50"
          />
        </div>

        <div>
          <Label htmlFor="weight" className="text-gray-700">Weight (kg)</Label>
          <input
            id="weight"
            name="weight"
            type="number"
            min="20"
            max="150"
            step="0.1"
            value={form.weight}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-thangta focus:ring focus:ring-thangta focus:ring-opacity-50"
            placeholder="Enter your weight in kg"
          />
        </div>

        <div>
          <Label htmlFor="district" className="text-gray-700">District</Label>
          <input
            id="district"
            name="district"
            value={form.district}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-thangta focus:ring focus:ring-thangta focus:ring-opacity-50"
            placeholder="Your district in Maharashtra"
          />
        </div>

        <div>
          <Label htmlFor="tournament" className="text-gray-700">Tournament</Label>
          <select
            id="tournament"
            name="tournament"
            value={form.tournament}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-thangta focus:ring focus:ring-thangta focus:ring-opacity-50"
          >
            <option value="">Select Tournament</option>
            <option value="state-championship">Maharashtra State Championship 2025</option>
            <option value="inter-district">Inter-District Tournament</option>
          </select>
        </div>

        <div>
          <Label htmlFor="category" className="text-gray-700">Category</Label>
          <select
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-thangta focus:ring focus:ring-thangta focus:ring-opacity-50"
          >
            <option value="">Select Category</option>
            <option value="junior">Junior (Under 15)</option>
            <option value="youth">Youth (15-18)</option>
            <option value="senior">Senior (18-35)</option>
            <option value="masters">Masters (35+)</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <Label htmlFor="experience" className="text-gray-700">Years of Experience</Label>
        <input
          id="experience"
          name="experience"
          type="number"
          min="0"
          max="50"
          value={form.experience}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-thangta focus:ring focus:ring-thangta focus:ring-opacity-50"
        />
      </div>

      <div className="mb-6">
        <Label htmlFor="message" className="text-gray-700">Additional Information</Label>
        <Textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-thangta focus:ring focus:ring-thangta focus:ring-opacity-50"
          placeholder="Any special requirements or information you'd like to share"
          rows={4}
        />
      </div>

      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <Checkbox
            id="agreeTerms"
            name="agreeTerms"
            checked={form.agreeTerms}
            onCheckedChange={(checked) => setForm({ ...form, agreeTerms: checked as boolean })}
            required
          />
        </div>
        <div className="ml-3 text-sm">
          <Label htmlFor="agreeTerms" className="text-gray-700">
            I agree to the tournament rules and consent to the processing of my personal data for registration purposes.
          </Label>
        </div>
      </div>

      <Button type="submit" className="w-full bg-thangta hover:bg-thangta-dark">
        Submit Registration
      </Button>
    </form>
  );
};

export default Tournaments;
