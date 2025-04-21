
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

// List of Maharashtra districts
const districts = [
  "Select your district",
  "Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", 
  "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", 
  "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", 
  "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", 
  "Washim", "Yavatmal"
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    district: "Select your district",
    subject: "",
    message: ""
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    // Reset form after successful submission
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        district: "Select your district",
        subject: "",
        message: ""
      });
    }, 5000);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-thangta-black text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              <span className="text-thangta-gold">Contact</span> Us
            </h1>
            <p className="text-lg md:text-xl mb-8 animate-fade-in opacity-90">
              Get in touch with the All Maharashtra Thang-Ta Association for inquiries, registrations, or information.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Address */}
            <div className="flex flex-col items-center text-center p-8 bg-thangta-cream rounded-lg transition-transform hover:scale-105 duration-300">
              <div className="h-14 w-14 bg-thangta rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-cinzel text-xl font-bold mb-3 text-thangta-dark">Our Address</h3>
              <p className="text-gray-600">
                123 Martial Arts Way<br />
                Shivaji Nagar, Pune<br />
                Maharashtra, India - 411005
              </p>
            </div>
            
            {/* Contact Details */}
            <div className="flex flex-col items-center text-center p-8 bg-thangta-cream rounded-lg transition-transform hover:scale-105 duration-300">
              <div className="h-14 w-14 bg-thangta rounded-full flex items-center justify-center mb-4">
                <Phone className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-cinzel text-xl font-bold mb-3 text-thangta-dark">Contact Details</h3>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Phone:</span> +91 98765 43210
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Email:</span> info@maharashtrathangta.org
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Membership Inquiries:</span> membership@maharashtrathangta.org
              </p>
            </div>
            
            {/* Working Hours */}
            <div className="flex flex-col items-center text-center p-8 bg-thangta-cream rounded-lg transition-transform hover:scale-105 duration-300">
              <div className="h-14 w-14 bg-thangta rounded-full flex items-center justify-center mb-4">
                <Clock className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-cinzel text-xl font-bold mb-3 text-thangta-dark">Working Hours</h3>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Sunday:</span> Closed
              </p>
            </div>
          </div>

          {/* Map and Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Map */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-cinzel text-2xl font-bold mb-4 text-thangta-dark">Our Location</h3>
              <div className="aspect-video rounded-lg overflow-hidden border border-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.92836883746!2d73.7929316118042!3d18.52459859958622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1682354278232!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="All Maharashtra Thang-Ta Association Location"
                ></iframe>
              </div>
              <div className="mt-4">
                <h4 className="font-cinzel text-lg font-bold mb-2 text-thangta-dark">Getting Here</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-thangta mr-2">•</span>
                    <span>10 minutes from Pune Railway Station</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-thangta mr-2">•</span>
                    <span>15 minutes from Pune Airport</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-thangta mr-2">•</span>
                    <span>Public transport: Bus routes 123, 456 stop nearby</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-cinzel text-2xl font-bold mb-4 text-thangta-dark">Send Us a Message</h3>
              
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-600 mb-6">Thank you for contacting us. We'll get back to you soon.</p>
                  <Button
                    onClick={() => setFormSubmitted(false)}
                    className="bg-thangta hover:bg-thangta-dark"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="district">District</Label>
                      <select
                        id="district"
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-thangta focus:border-transparent"
                        required
                      >
                        {districts.map((district) => (
                          <option key={district} value={district}>
                            {district}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter message subject"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message here..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-thangta hover:bg-thangta-dark">
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* District Representatives */}
      <section className="py-16 bg-thangta-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl font-bold text-thangta-dark mb-4">District Representatives</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Contact our district representatives for local inquiries and training opportunities.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="font-cinzel text-xl font-bold text-thangta-dark mb-4">Regional Contacts</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Representative</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Districts Covered</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Email</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">Western Maharashtra</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">Sanjay Kamble</td>
                      <td className="px-6 py-4 whitespace-nowrap">Pune, Kolhapur, Satara, Sangli, Solapur</td>
                      <td className="px-6 py-4 whitespace-nowrap">western@maharashtrathangta.org</td>
                      <td className="px-6 py-4 whitespace-nowrap">+91 98765 12345</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">Konkan Region</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">Anjali Patil</td>
                      <td className="px-6 py-4 whitespace-nowrap">Mumbai, Thane, Raigad, Ratnagiri, Sindhudurg</td>
                      <td className="px-6 py-4 whitespace-nowrap">konkan@maharashtrathangta.org</td>
                      <td className="px-6 py-4 whitespace-nowrap">+91 98765 23456</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">Vidarbha Region</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">Vikram Deshmukh</td>
                      <td className="px-6 py-4 whitespace-nowrap">Nagpur, Amravati, Akola, Buldhana, Washim, Yavatmal</td>
                      <td className="px-6 py-4 whitespace-nowrap">vidarbha@maharashtrathangta.org</td>
                      <td className="px-6 py-4 whitespace-nowrap">+91 98765 34567</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">Marathwada Region</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">Priya Jadhav</td>
                      <td className="px-6 py-4 whitespace-nowrap">Aurangabad, Jalna, Beed, Osmanabad, Nanded, Latur</td>
                      <td className="px-6 py-4 whitespace-nowrap">marathwada@maharashtrathangta.org</td>
                      <td className="px-6 py-4 whitespace-nowrap">+91 98765 45678</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">Northern Maharashtra</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">Rahul Sharma</td>
                      <td className="px-6 py-4 whitespace-nowrap">Nashik, Dhule, Jalgaon, Nandurbar, Ahmednagar</td>
                      <td className="px-6 py-4 whitespace-nowrap">northern@maharashtrathangta.org</td>
                      <td className="px-6 py-4 whitespace-nowrap">+91 98765 56789</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl font-bold text-thangta-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to commonly asked questions about the All Maharashtra Thang-Ta Association.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-thangta-cream p-6 rounded-lg">
              <h3 className="font-cinzel text-lg font-bold mb-3 text-thangta">How can I join the Thang-Ta training?</h3>
              <p className="text-gray-700">
                You can join by contacting your nearest training center or district representative. Alternatively, you can fill out the contact form on this page, and we'll guide you through the process.
              </p>
            </div>
            
            <div className="bg-thangta-cream p-6 rounded-lg">
              <h3 className="font-cinzel text-lg font-bold mb-3 text-thangta">What is the membership fee?</h3>
              <p className="text-gray-700">
                Membership fees vary based on the level of training and district. Basic membership starts at ₹1,000 per year, which includes registration with the state association and some training benefits.
              </p>
            </div>
            
            <div className="bg-thangta-cream p-6 rounded-lg">
              <h3 className="font-cinzel text-lg font-bold mb-3 text-thangta">Is there an age limit for Thang-Ta training?</h3>
              <p className="text-gray-700">
                We offer training programs for different age groups, starting from age 6. We have specialized junior programs (6-14), youth programs (15-18), adult programs (18+), and seniors programs (40+).
              </p>
            </div>
            
            <div className="bg-thangta-cream p-6 rounded-lg">
              <h3 className="font-cinzel text-lg font-bold mb-3 text-thangta">How can I register for tournaments?</h3>
              <p className="text-gray-700">
                Tournament registrations are announced on our website and through district representatives. You can register online through our tournaments page or submit forms through your local training center.
              </p>
            </div>
            
            <div className="bg-thangta-cream p-6 rounded-lg">
              <h3 className="font-cinzel text-lg font-bold mb-3 text-thangta">Do I need to purchase special equipment?</h3>
              <p className="text-gray-700">
                Beginners are provided with basic training equipment. As you progress, you'll need to acquire your own training weapons and gear. The association can assist with sourcing authentic equipment.
              </p>
            </div>
            
            <div className="bg-thangta-cream p-6 rounded-lg">
              <h3 className="font-cinzel text-lg font-bold mb-3 text-thangta">How can I become a certified coach?</h3>
              <p className="text-gray-700">
                To become a certified coach, you need to complete the advanced training levels, participate in the coach training program, and pass certification examinations. Contact us for more details on coach certification pathways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-thangta-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cinzel text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter to receive updates about upcoming tournaments, events, 
            and news from the All Maharashtra Thang-Ta Association.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                placeholder="Enter your email address"
                className="bg-white/10 text-white placeholder:text-white/60 border-white/20 focus:border-white"
              />
              <Button className="bg-thangta-gold text-black hover:bg-thangta-gold/80">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-white/60 mt-3">
              We respect your privacy. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 bg-thangta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cinzel text-3xl font-bold text-white mb-4">Join Our Community</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Become a part of Maharashtra's growing Thang-Ta community. Whether you're interested in training, 
            competing, or supporting the preservation of this ancient martial art, we welcome your participation.
          </p>
          <Button asChild size="lg" className="bg-white text-thangta hover:bg-thangta-cream">
            <Link to="/register">Register Now</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
