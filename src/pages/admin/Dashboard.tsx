
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Calendar, 
  Award, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  ChevronDown, 
  Home,
  BarChart,
  FileText,
  User,
  Edit
} from "lucide-react";

// Mock data for dashboard stats
const dashboardStats = {
  totalMembers: 1256,
  activeTournaments: 3,
  pendingRegistrations: 42,
  contactQueries: 18
};

// Mock data for recent registrations
const recentRegistrations = [
  { id: 1, name: "Amit Sharma", district: "Pune", date: "2025-04-20", status: "Pending" },
  { id: 2, name: "Priya Deshmukh", district: "Mumbai", date: "2025-04-19", status: "Approved" },
  { id: 3, name: "Rahul Patil", district: "Nagpur", date: "2025-04-18", status: "Pending" },
  { id: 4, name: "Neha Singh", district: "Thane", date: "2025-04-17", status: "Approved" },
  { id: 5, name: "Vikram Jadhav", district: "Aurangabad", date: "2025-04-16", status: "Pending" }
];

// Mock data for upcoming tournaments
const upcomingTournaments = [
  { id: 1, name: "Maharashtra State Championship 2025", date: "2025-06-15", location: "Pune", registrations: 124 },
  { id: 2, name: "Thang-Ta Youth Tournament", date: "2025-07-22", location: "Mumbai", registrations: 87 },
  { id: 3, name: "Western Maharashtra Regional Tournament", date: "2025-08-10", location: "Kolhapur", registrations: 54 }
];

// Mock data for recent contact queries
const recentQueries = [
  { id: 1, name: "Arjun Mehta", email: "arjun@example.com", subject: "Training Inquiry", date: "2025-04-20", status: "Unread" },
  { id: 2, name: "Sonal Kapoor", email: "sonal@example.com", subject: "Tournament Registration Issue", date: "2025-04-19", status: "Replied" },
  { id: 3, name: "Karan Shinde", email: "karan@example.com", subject: "Membership Question", date: "2025-04-18", status: "Unread" }
];

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Header */}
      <div className="bg-thangta md:hidden text-white sticky top-0 z-40 flex items-center justify-between p-4">
        <div className="flex items-center">
          <button onClick={toggleMobileMenu} className="mr-3">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <span className="font-cinzel font-bold">Admin Panel</span>
        </div>
        <div className="flex items-center space-x-3">
          <button className="rounded-full bg-white/20 p-1">
            <MessageSquare className="h-5 w-5" />
          </button>
          <button className="rounded-full bg-white/20 p-1">
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      {/* Mobile Sidebar Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={toggleMobileMenu}>
          <div className="absolute left-0 top-0 bottom-0 w-64 bg-thangta-black text-white p-4" onClick={e => e.stopPropagation()}>
            <div className="mb-6 pb-6 border-b border-white/10">
              <h2 className="font-cinzel text-xl font-bold text-white">
                Thang-Ta Admin
              </h2>
            </div>
            
            <nav className="space-y-1">
              <Link to="/admin" className="flex items-center space-x-3 px-3 py-2 rounded-md bg-white/10 text-white font-medium">
                <BarChart className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
              <Link to="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-white/80 hover:bg-white/10 hover:text-white">
                <Users className="h-5 w-5" />
                <span>Members</span>
              </Link>
              <Link to="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-white/80 hover:bg-white/10 hover:text-white">
                <Calendar className="h-5 w-5" />
                <span>Tournaments</span>
              </Link>
              <Link to="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-white/80 hover:bg-white/10 hover:text-white">
                <Award className="h-5 w-5" />
                <span>Achievements</span>
              </Link>
              <Link to="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-white/80 hover:bg-white/10 hover:text-white">
                <MessageSquare className="h-5 w-5" />
                <span>Contact Queries</span>
              </Link>
              <Link to="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-white/80 hover:bg-white/10 hover:text-white">
                <FileText className="h-5 w-5" />
                <span>Content</span>
              </Link>
              <Link to="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-white/80 hover:bg-white/10 hover:text-white">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
            </nav>
            
            <div className="absolute bottom-4 left-0 right-0 px-4">
              <div className="border-t border-white/10 pt-4">
                <div className="flex items-center mb-4">
                  <div className="h-8 w-8 rounded-full bg-thangta mr-3 flex items-center justify-center">
                    <User className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Admin User</p>
                    <p className="text-xs text-white/60">admin@example.com</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                  <LogOut className="h-4 w-4 mr-2" />
                  <span>Logout</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Desktop Layout */}
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside 
          className={`bg-thangta-black text-white fixed inset-y-0 left-0 z-50 transition-all duration-300 transform ${
            sidebarOpen ? "translate-x-0 w-64" : "translate-x-0 w-20"
          } hidden md:block`}
        >
          <div className={`flex flex-col h-full p-4`}>
            <div className="flex justify-between items-center mb-10">
              {sidebarOpen ? (
                <h2 className="font-cinzel text-xl font-bold text-white">
                  Thang-Ta Admin
                </h2>
              ) : (
                <h2 className="font-cinzel text-xl font-bold text-white">TTA</h2>
              )}
              <Button 
                variant="ghost" 
                className="h-8 w-8 p-0 text-white/80 hover:text-white hover:bg-white/10" 
                onClick={toggleSidebar}
              >
                <ChevronDown className={`h-5 w-5 transform ${sidebarOpen ? 'rotate-0' : 'rotate-180'}`} />
              </Button>
            </div>
            
            <nav className="flex-1 space-y-1">
              <Link 
                to="/admin" 
                className={`flex items-center space-x-3 px-3 py-2 rounded-md bg-white/10 text-white font-medium ${
                  !sidebarOpen && "justify-center"
                }`}
              >
                <BarChart className="h-5 w-5" />
                {sidebarOpen && <span>Dashboard</span>}
              </Link>
              <Link 
                to="#" 
                className={`flex items-center space-x-3 px-3 py-2 rounded-md text-white/80 hover:bg-white/10 hover:text-white ${
                  !sidebarOpen && "justify-center"
                }`}
              >
                <Users className="h-5 w-5" />
                {sidebarOpen && <span>Members</span>}
              </Link>
              <Link 
                to="#" 
                className={`flex items-center space-x-3 px-3 py-2 rounded-md text-white/80 hover:bg-white/10 hover:text-white ${
                  !sidebarOpen && "justify-center"
                }`}
              >
                <Calendar className="h-5 w-5" />
                {sidebarOpen && <span>Tournaments</span>}
              </Link>
              <Link 
                to="#" 
                className={`flex items-center space-x-3 px-3 py-2 rounded-md text-white/80 hover:bg-white/10 hover:text-white ${
                  !sidebarOpen && "justify-center"
                }`}
              >
                <Award className="h-5 w-5" />
                {sidebarOpen && <span>Achievements</span>}
              </Link>
              <Link 
                to="#" 
                className={`flex items-center space-x-3 px-3 py-2 rounded-md text-white/80 hover:bg-white/10 hover:text-white ${
                  !sidebarOpen && "justify-center"
                }`}
              >
                <MessageSquare className="h-5 w-5" />
                {sidebarOpen && <span>Contact Queries</span>}
              </Link>
              <Link 
                to="#" 
                className={`flex items-center space-x-3 px-3 py-2 rounded-md text-white/80 hover:bg-white/10 hover:text-white ${
                  !sidebarOpen && "justify-center"
                }`}
              >
                <FileText className="h-5 w-5" />
                {sidebarOpen && <span>Content</span>}
              </Link>
              <Link 
                to="#" 
                className={`flex items-center space-x-3 px-3 py-2 rounded-md text-white/80 hover:bg-white/10 hover:text-white ${
                  !sidebarOpen && "justify-center"
                }`}
              >
                <Settings className="h-5 w-5" />
                {sidebarOpen && <span>Settings</span>}
              </Link>
            </nav>
            
            <div className="mt-auto pt-4 border-t border-white/10">
              {sidebarOpen ? (
                <div className="flex items-center mb-4">
                  <div className="h-8 w-8 rounded-full bg-thangta mr-3 flex items-center justify-center">
                    <User className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Admin User</p>
                    <p className="text-xs text-white/60">admin@example.com</p>
                  </div>
                </div>
              ) : (
                <div className="flex justify-center mb-4">
                  <div className="h-8 w-8 rounded-full bg-thangta flex items-center justify-center">
                    <User className="h-4 w-4" />
                  </div>
                </div>
              )}
              <Button 
                variant="outline" 
                className={`w-full border-white/20 text-white hover:bg-white/10 ${
                  !sidebarOpen && "p-2 justify-center"
                }`}
              >
                <LogOut className="h-4 w-4 mr-2" />
                {sidebarOpen && <span>Logout</span>}
              </Button>
            </div>
          </div>
        </aside>
        
        {/* Main Content */}
        <main className={`flex-1 overflow-auto transition-all duration-300 ${
          sidebarOpen ? "md:ml-64" : "md:ml-20"
        }`}>
          {/* Top Header */}
          <div className="hidden md:flex justify-between items-center px-6 py-4 bg-white border-b">
            <div className="flex items-center space-x-2">
              <Link to="/" className="text-gray-500 hover:text-thangta flex items-center">
                <Home className="h-5 w-5 mr-1" />
                <span className="text-sm">View Website</span>
              </Link>
              <span className="text-gray-300">|</span>
              <div className="text-gray-600 text-sm">
                Welcome back, <span className="font-medium">Admin</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-thangta relative">
                <MessageSquare className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-thangta text-white rounded-full text-xs flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="text-gray-500 hover:text-thangta">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Dashboard Content */}
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Overview of the All Maharashtra Thang-Ta Association</p>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-gray-500 text-sm font-medium">Total Members</h3>
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">{dashboardStats.totalMembers}</div>
                <div className="mt-2 text-xs text-green-600 flex items-center">
                  <span>+12% from last month</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-gray-500 text-sm font-medium">Active Tournaments</h3>
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">{dashboardStats.activeTournaments}</div>
                <div className="mt-2 text-xs text-purple-600 flex items-center">
                  <span>Next event: Jun 15, 2025</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-gray-500 text-sm font-medium">Pending Registrations</h3>
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <User className="h-5 w-5 text-amber-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">{dashboardStats.pendingRegistrations}</div>
                <div className="mt-2 text-xs text-amber-600 flex items-center">
                  <span>Requires review</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-gray-500 text-sm font-medium">Contact Queries</h3>
                  <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-red-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">{dashboardStats.contactQueries}</div>
                <div className="mt-2 text-xs text-red-600 flex items-center">
                  <span>5 unread messages</span>
                </div>
              </div>
            </div>
            
            {/* Recent Registrations */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-8">
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <h2 className="font-bold text-lg text-gray-900">Recent Registrations</h2>
                <Button variant="outline" className="text-thangta border-thangta hover:bg-thangta hover:text-white">
                  View All
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        District
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Registration Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentRegistrations.map((registration) => (
                      <tr key={registration.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">{registration.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {registration.district}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {registration.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            registration.status === "Approved" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-yellow-100 text-yellow-800"
                          }`}>
                            {registration.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex space-x-2">
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <Edit className="h-4 w-4 text-gray-500" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Tournaments and Contact Queries */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Upcoming Tournaments */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-between items-center p-6 border-b border-gray-100">
                  <h2 className="font-bold text-lg text-gray-900">Upcoming Tournaments</h2>
                  <Button variant="outline" className="text-thangta border-thangta hover:bg-thangta hover:text-white">
                    Manage
                  </Button>
                </div>
                <div className="p-6">
                  {upcomingTournaments.map((tournament) => (
                    <div key={tournament.id} className="mb-6 last:mb-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-gray-900">{tournament.name}</h3>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{tournament.date}</span>
                            <span className="mx-2">•</span>
                            <span>{tournament.location}</span>
                          </div>
                        </div>
                        <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                          {tournament.registrations} Registrations
                        </div>
                      </div>
                      <div className="mt-3 flex justify-end space-x-2">
                        <Button variant="outline" size="sm" className="text-gray-600 border-gray-300">
                          Details
                        </Button>
                        <Button variant="outline" size="sm" className="text-thangta border-thangta hover:bg-thangta hover:text-white">
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Recent Contact Queries */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-between items-center p-6 border-b border-gray-100">
                  <h2 className="font-bold text-lg text-gray-900">Recent Contact Queries</h2>
                  <Button variant="outline" className="text-thangta border-thangta hover:bg-thangta hover:text-white">
                    View All
                  </Button>
                </div>
                <div className="p-6">
                  {recentQueries.map((query) => (
                    <div key={query.id} className="mb-6 last:mb-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-medium text-gray-900">{query.name}</h3>
                            <span className={`ml-2 inline-block w-2 h-2 rounded-full ${
                              query.status === "Unread" ? "bg-red-500" : "bg-green-500"
                            }`}></span>
                          </div>
                          <div className="text-sm text-gray-500 mt-1">{query.email}</div>
                          <div className="text-sm font-medium mt-1">{query.subject}</div>
                        </div>
                        <div className="text-xs text-gray-500">{query.date}</div>
                      </div>
                      <div className="mt-3 flex justify-end space-x-2">
                        <Button variant="outline" size="sm" className="text-gray-600 border-gray-300">
                          View
                        </Button>
                        <Button variant="outline" size="sm" className="text-thangta border-thangta hover:bg-thangta hover:text-white">
                          Reply
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h2 className="font-bold text-lg text-gray-900 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                <Button variant="outline" className="flex flex-col items-center justify-center h-24 text-gray-700 border-gray-200">
                  <User className="h-6 w-6 mb-2" />
                  <span>Add Member</span>
                </Button>
                <Button variant="outline" className="flex flex-col items-center justify-center h-24 text-gray-700 border-gray-200">
                  <Calendar className="h-6 w-6 mb-2" />
                  <span>Create Event</span>
                </Button>
                <Button variant="outline" className="flex flex-col items-center justify-center h-24 text-gray-700 border-gray-200">
                  <Award className="h-6 w-6 mb-2" />
                  <span>Add Achievement</span>
                </Button>
                <Button variant="outline" className="flex flex-col items-center justify-center h-24 text-gray-700 border-gray-200">
                  <FileText className="h-6 w-6 mb-2" />
                  <span>Edit Content</span>
                </Button>
                <Button variant="outline" className="flex flex-col items-center justify-center h-24 text-gray-700 border-gray-200">
                  <MessageSquare className="h-6 w-6 mb-2" />
                  <span>Send Update</span>
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
