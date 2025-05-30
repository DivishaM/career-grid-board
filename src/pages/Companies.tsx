
import { Link } from "react-router-dom";
import { Search, MapPin, Briefcase, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Sample companies data
const sampleCompanies = [
  {
    id: 1,
    name: "TechCorp",
    location: "San Francisco, CA",
    industry: "Technology",
    employees: "1000-5000",
    rating: 4.8,
    openJobs: 15,
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=400&fit=crop&crop=center",
    description: "Leading technology company building next-generation web applications and cloud solutions.",
    featured: true,
  },
  {
    id: 2,
    name: "InnovateLabs",
    location: "New York, NY",
    industry: "Software",
    employees: "500-1000",
    rating: 4.6,
    openJobs: 8,
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&crop=center",
    description: "Innovative software company focused on SaaS solutions for enterprise clients.",
    featured: false,
  },
  {
    id: 3,
    name: "DesignStudio",
    location: "Remote",
    industry: "Design",
    employees: "50-200",
    rating: 4.9,
    openJobs: 5,
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop&crop=center",
    description: "Creative design studio specializing in user experience and interface design.",
    featured: false,
  },
  {
    id: 4,
    name: "DataTech",
    location: "Austin, TX",
    industry: "Data Science",
    employees: "200-500",
    rating: 4.7,
    openJobs: 12,
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center",
    description: "Data science company providing analytics and machine learning solutions.",
    featured: true,
  },
  {
    id: 5,
    name: "CloudSolutions",
    location: "Seattle, WA",
    industry: "Cloud Computing",
    employees: "1000+",
    rating: 4.5,
    openJobs: 20,
    logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop&crop=center",
    description: "Leading cloud infrastructure provider with global reach and cutting-edge technology.",
    featured: false,
  },
  {
    id: 6,
    name: "AppVentures",
    location: "Los Angeles, CA",
    industry: "Mobile Apps",
    employees: "100-500",
    rating: 4.4,
    openJobs: 7,
    logo: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=400&fit=crop&crop=center",
    description: "Mobile app development company creating innovative solutions for various industries.",
    featured: false,
  },
];

const Companies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <Link to="/" className="text-xl font-bold text-gray-900">JobBoard</Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Jobs</Link>
              <Link to="/companies" className="text-blue-600 font-medium">Companies</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Sign In</Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">Post Job</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Top Companies</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore companies that are hiring and find your perfect workplace
          </p>
          
          {/* Search Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search companies..."
                  className="pl-10 h-12 text-lg border-gray-200 focus:border-blue-500"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Location..."
                  className="pl-10 h-12 text-lg border-gray-200 focus:border-blue-500"
                />
              </div>
              <Button className="h-12 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900">
              {sampleCompanies.length} Companies
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleCompanies.map((company) => (
              <Card key={company.id} className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{company.name}</h4>
                        <div className="flex items-center text-sm text-gray-500 mb-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          {company.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                          {company.rating}
                        </div>
                      </div>
                    </div>
                    {company.featured && (
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                        Featured
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm mb-4">{company.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Briefcase className="w-4 h-4 mr-2 text-gray-400" />
                      {company.industry}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-gray-400" />
                      {company.employees} employees
                    </div>
                    <div className="flex items-center text-sm text-green-600 font-medium">
                      {company.openJobs} open positions
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button asChild className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Link to={`/company/${company.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        View Company
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm">Follow</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">JobBoard</h3>
              </div>
              <p className="text-gray-400">Find your dream job with the best companies worldwide.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Job Seekers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Browse Jobs</Link></li>
                <li><Link to="/companies" className="hover:text-white transition-colors">Companies</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Advice</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Employers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Post a Job</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 JobBoard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Companies;
