
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const trainingSystems = [
    {
      name: "Thang-Lairol",
      description: "The traditional sword training system that emphasizes precise weapon handling, defensive and offensive movements with the traditional sword."
    },
    {
      name: "Ta-Khousaba",
      description: "Focuses on spear techniques and movements, teaching practitioners how to effectively use the spear in various combat scenarios."
    },
    {
      name: "Cheibi",
      description: "Training in the use of the traditional short blade, focusing on close-combat techniques and swift striking patterns."
    },
    {
      name: "Chungoi",
      description: "Shield training that accompanies sword techniques, teaching defensive maneuvers and counter-attacks."
    },
    {
      name: "Sarit-Sarat",
      description: "Unarmed combat techniques focusing on strikes, blocks, and grappling movements derived from the armed practice."
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-thangta-black text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493962853295-0fd70327578a')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              About <span className="text-thangta-gold">Thang-Ta</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 animate-fade-in opacity-90">
              Discover the ancient martial art of Manipur and the mission of the All Maharashtra Thang-Ta Association.
            </p>
          </div>
        </div>
      </section>

      {/* What is Thang-Ta */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="font-cinzel text-3xl font-bold text-thangta-dark mb-6">What is Thang-Ta?</h2>
              <p className="text-gray-700 mb-4">
                Thang-Ta, also known as Huyen Lallong, is an ancient martial art form that originated in Manipur, a northeastern state of India. The name "Thang-Ta" comes from the Manipuri words for sword (Thang) and spear (Ta), which are the primary weapons used in this martial art form.
              </p>
              <p className="text-gray-700 mb-4">
                As a traditional combat system, Thang-Ta encompasses both armed and unarmed fighting techniques. It combines ritualistic elements with practical combat applications, making it both a martial art and a cultural heritage.
              </p>
              <p className="text-gray-700 mb-4">
                The practice includes various forms (pung), techniques with weapons, acrobatic movements, and breathing exercises, all designed to develop physical prowess, mental discipline, and spiritual growth.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2" 
                  alt="Traditional Thang-Ta Demonstration" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-white font-medium">Traditional Thang-Ta demonstration showcasing precision and skill</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History and Heritage */}
      <section className="py-16 bg-thangta-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl font-bold text-thangta-dark mb-3">History & Heritage</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The rich tradition of Thang-Ta dates back several centuries and remains an integral part of Manipuri culture.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-cinzel text-xl font-bold mb-4 text-thangta">Ancient Origins</h3>
                <p className="text-gray-700 mb-4">
                  Thang-Ta originated in Manipur during the reign of King Pakhangba in 33 AD. It developed as a warfare technique essential for the kingdom's defense and was practiced extensively by the Meitei warriors.
                </p>
                <p className="text-gray-700">
                  Over centuries, it evolved into a sophisticated combat system that integrates physical techniques with strategic thinking and spiritual practices, reflecting the cultural values of the Manipuri people.
                </p>
              </div>
              <div>
                <h3 className="font-cinzel text-xl font-bold mb-4 text-thangta">Modern Revival</h3>
                <p className="text-gray-700 mb-4">
                  After a period of decline during colonial rule, Thang-Ta has experienced a revival in the post-independence era, with efforts to preserve and promote this martial art as a cultural heritage.
                </p>
                <p className="text-gray-700">
                  Today, Thang-Ta is recognized by the Indian government as a traditional sport and is included in various national martial arts competitions, helping to ensure its continued practice and evolution.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="font-cinzel text-2xl font-bold mb-6 text-thangta-dark">Training Systems in Thang-Ta</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trainingSystems.map((system, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-cinzel font-bold text-lg mb-3 text-thangta">{system.name}</h4>
                  <p className="text-gray-600">{system.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Association */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl font-bold text-thangta-dark mb-3">Our Association</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The All Maharashtra Thang-Ta Association is dedicated to promoting and preserving the ancient martial art across the state.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h3 className="font-cinzel text-xl font-bold mb-4 text-thangta">Mission & Vision</h3>
              <p className="text-gray-700 mb-4">
                Our mission is to promote the ancient martial art of Thang-Ta throughout Maharashtra, creating awareness about its cultural significance while training practitioners in its authentic techniques.
              </p>
              <p className="text-gray-700 mb-6">
                We envision a future where Thang-Ta is recognized, respected, and practiced widely across Maharashtra, fostering physical discipline, mental fortitude, and cultural appreciation among practitioners of all ages.
              </p>

              <h3 className="font-cinzel text-xl font-bold mb-4 text-thangta">Our Objectives</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                <li>Establish training centers across all districts of Maharashtra</li>
                <li>Organize regular competitions at district, regional, and state levels</li>
                <li>Develop standardized curriculum and certification programs</li>
                <li>Facilitate cultural exchange with Manipur to maintain authenticity</li>
                <li>Create opportunities for practitioners to participate in national events</li>
                <li>Document and preserve traditional techniques and their applications</li>
              </ul>
            </div>
            <div className="md:w-1/2 space-y-6">
              <div className="bg-thangta-cream p-6 rounded-lg">
                <h3 className="font-cinzel text-xl font-bold mb-4 text-thangta">Leadership</h3>
                <p className="text-gray-700 mb-4">
                  Our association is led by experienced masters and practitioners who have dedicated their lives to the preservation and promotion of Thang-Ta. The executive committee comprises experts from various districts of Maharashtra, ensuring broad representation and diverse perspectives.
                </p>
              </div>

              <div className="bg-thangta-cream p-6 rounded-lg">
                <h3 className="font-cinzel text-xl font-bold mb-4 text-thangta">Affiliation</h3>
                <p className="text-gray-700 mb-4">
                  The All Maharashtra Thang-Ta Association is affiliated with the Thang-Ta Federation of India and recognized by the Maharashtra Olympic Association, ensuring that our practices adhere to national standards and providing our members with opportunities to participate in official competitions.
                </p>
              </div>

              <div className="bg-thangta-cream p-6 rounded-lg">
                <h3 className="font-cinzel text-xl font-bold mb-4 text-thangta">Community Impact</h3>
                <p className="text-gray-700 mb-4">
                  Beyond martial training, we engage with communities through cultural programs, school demonstrations, and youth development initiatives. Our association actively works to make Thang-Ta accessible to people from all backgrounds and promote its benefits for physical and mental well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-thangta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cinzel text-3xl font-bold text-white mb-4">Become Part of Our Journey</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Join the All Maharashtra Thang-Ta Association and help us preserve and promote this ancient martial art across the state.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-thangta hover:bg-thangta-cream">
              <Link to="/register">Join Today</Link>
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

export default About;
