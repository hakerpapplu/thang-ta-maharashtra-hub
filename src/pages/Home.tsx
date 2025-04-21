
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Calendar, Trophy, Bell } from "lucide-react";

const Home = () => {
  // Mock data for upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "State Championship 2025",
      date: "June 15-17, 2025",
      location: "Pune Sports Complex",
      description: "Join the annual Maharashtra State Thang-Ta Championship featuring competitions in various categories."
    },
    {
      id: 2,
      title: "Summer Training Camp",
      date: "May 5-15, 2025",
      location: "Nagpur Training Center",
      description: "Intensive 10-day training camp for advanced practitioners led by Master Instructors."
    },
    {
      id: 3,
      title: "Youth Tournament",
      date: "July 22-23, 2025",
      location: "Mumbai Indoor Stadium",
      description: "Tournament for aspiring martial artists under 18 years of age."
    }
  ];

  // Mock data for news updates
  const newsUpdates = [
    {
      id: 1,
      title: "Association Secures New Training Facility in Nashik",
      date: "April 10, 2025",
      summary: "The All Maharashtra Thang-Ta Association has inaugurated a new state-of-the-art training facility in Nashik to serve practitioners in the region."
    },
    {
      id: 2,
      title: "Maharashtra Team Wins 5 Gold Medals at National Championship",
      date: "March 25, 2025",
      summary: "Our state team has achieved remarkable success at the 2025 National Thang-Ta Championship, claiming 5 gold, 3 silver, and 4 bronze medals."
    },
    {
      id: 3,
      title: "New Certification Program for Coaches Announced",
      date: "March 15, 2025",
      summary: "The association has developed a comprehensive certification program for coaches to standardize teaching methodologies."
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-thangta-black text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center justify-center text-center">
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            All Maharashtra<br /><span className="text-thangta-gold">Thang-Ta</span> Association
          </h1>
          <p className="max-w-2xl text-lg md:text-xl mb-8 animate-fade-in opacity-90">
            Preserving and promoting the ancient martial art of Manipur across Maharashtra,
            developing martial artists of excellence and honor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button asChild size="lg" className="bg-thangta hover:bg-thangta-dark">
              <Link to="/about">Learn About Thang-Ta</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Join Our Association</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Blocks */}
      <section className="py-16 bg-thangta-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Training Programs */}
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:scale-105 animate-scale-in">
              <div className="mb-4 h-12 w-12 rounded-full bg-thangta/10 flex items-center justify-center">
                <Trophy className="h-6 w-6 text-thangta" />
              </div>
              <h3 className="font-cinzel text-xl font-bold mb-3 text-thangta-dark">Training Programs</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive training programs for all ages and skill levels, from beginners to advanced practitioners.
              </p>
              <Link to="/about" className="text-thangta font-medium hover:text-thangta-light flex items-center">
                <span>View Programs</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            {/* Tournaments */}
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:scale-105 animate-scale-in [animation-delay:200ms]">
              <div className="mb-4 h-12 w-12 rounded-full bg-thangta/10 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-thangta" />
              </div>
              <h3 className="font-cinzel text-xl font-bold mb-3 text-thangta-dark">Tournaments</h3>
              <p className="text-gray-600 mb-4">
                Regular state-level competitions and opportunities to participate in national championships.
              </p>
              <Link to="/tournaments" className="text-thangta font-medium hover:text-thangta-light flex items-center">
                <span>View Tournaments</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            {/* Certification */}
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:scale-105 animate-scale-in [animation-delay:400ms]">
              <div className="mb-4 h-12 w-12 rounded-full bg-thangta/10 flex items-center justify-center">
                <Bell className="h-6 w-6 text-thangta" />
              </div>
              <h3 className="font-cinzel text-xl font-bold mb-3 text-thangta-dark">Certification</h3>
              <p className="text-gray-600 mb-4">
                Official certification programs for practitioners, coaches, and judges across Maharashtra.
              </p>
              <Link to="/about" className="text-thangta font-medium hover:text-thangta-light flex items-center">
                <span>Learn More</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl font-bold text-thangta-dark mb-2">Upcoming Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest tournaments, seminars, and training camps across Maharashtra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-thangta-dark text-white py-3 px-4">
                  <div className="font-cinzel text-lg font-semibold">{event.title}</div>
                </div>
                <div className="p-5">
                  <div className="flex items-start mb-3">
                    <Calendar className="h-5 w-5 text-thangta mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">{event.date}</div>
                      <div className="text-gray-500 text-sm">{event.location}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                  <Button asChild variant="outline" className="w-full border-thangta text-thangta hover:bg-thangta hover:text-white">
                    <Link to="/tournaments">View Details</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild className="bg-thangta hover:bg-thangta-dark">
              <Link to="/tournaments">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl font-bold text-thangta-dark mb-2">Latest News</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest developments from the All Maharashtra Thang-Ta Association.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {newsUpdates.map((news) => (
              <div key={news.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-5">
                  <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                  <h3 className="font-cinzel font-bold text-lg mb-3 text-thangta-dark">{news.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{news.summary}</p>
                  <Button asChild variant="link" className="px-0 text-thangta hover:text-thangta-light">
                    <a href="#">Read More</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" className="border-thangta text-thangta hover:bg-thangta hover:text-white">
              <a href="#">View All News</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-thangta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cinzel text-3xl font-bold text-white mb-4">Join Our Growing Community</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Become a part of the All Maharashtra Thang-Ta Association and contribute to the preservation 
            and promotion of this ancient martial art across the state.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-thangta hover:bg-thangta-cream">
              <Link to="/register">Register Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
