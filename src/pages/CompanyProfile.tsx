import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Users, Calendar, Globe, Building, Briefcase, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample company data
const companyData = {
  techcorp: {
    name: "TechCorp",
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=400&fit=crop&crop=center",
    cover: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=400&fit=crop&crop=center",
    tagline: "Building the future of technology",
    description: "TechCorp is a leading technology company that builds innovative software solutions for businesses worldwide. We're committed to creating products that make a positive impact on society and empowering teams to do their best work.",
    industry: "Technology",
    size: "500-1000 employees",
    founded: "2015",
    location: "San Francisco, CA",
    website: "https://techcorp.com",
    rating: 4.5,
    reviewCount: 127,
    culture: [
      "Innovation-driven",
      "Collaborative",
      "Work-life balance",
      "Continuous learning",
      "Diversity & inclusion"
    ],
    benefits: [
      "Competitive salary and equity",
      "Comprehensive health insurance",
      "Flexible remote work",
      "Unlimited PTO",
      "Professional development budget",
      "Modern office spaces",
      "Catered meals",
      "Mental health support"
    ],
    openJobs: [
      {
        id: 1,
        title: "Senior Frontend Developer",
        department: "Engineering",
        type: "Full-time",
        location: "San Francisco, CA",
        posted: "2 days ago"
      },
      {
        id: 2,
        title: "Product Manager",
        department: "Product",
        type: "Full-time",
        location: "Remote",
        posted: "1 week ago"
      },
      {
        id: 3,
        title: "DevOps Engineer",
        department: "Engineering",
        type: "Full-time",
        location: "San Francisco, CA",
        posted: "3 days ago"
      }
    ],
    team: [
      {
        name: "Sarah Chen",
        role: "CEO & Co-founder",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Marcus Johnson",
        role: "CTO & Co-founder",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Emily Rodriguez",
        role: "VP of Engineering",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "David Kim",
        role: "Head of Design",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      }
    ]
  },
  innovatelabs: {
    name: "InnovateLabs",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&crop=center",
    cover: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=400&fit=crop&crop=center",
    tagline: "Innovation through collaboration",
    description: "InnovateLabs is a software company focused on creating cutting-edge SaaS solutions for enterprise clients. We combine creativity with technical excellence to deliver products that transform how businesses operate.",
    industry: "Software",
    size: "500-1000 employees",
    founded: "2018",
    location: "New York, NY",
    website: "https://innovatelabs.com",
    rating: 4.6,
    reviewCount: 89,
    culture: [
      "Innovation-first",
      "Team collaboration",
      "Customer-centric",
      "Agile mindset",
      "Professional growth"
    ],
    benefits: [
      "Stock options",
      "Health & dental insurance",
      "Remote work flexibility",
      "Learning budget",
      "Gym membership",
      "Team retreats",
      "Flexible hours"
    ],
    openJobs: [
      {
        id: 4,
        title: "Full Stack Developer",
        department: "Engineering",
        type: "Full-time",
        location: "New York, NY",
        posted: "1 day ago"
      },
      {
        id: 5,
        title: "UI/UX Designer",
        department: "Design",
        type: "Full-time",
        location: "Remote",
        posted: "3 days ago"
      }
    ],
    team: [
      {
        name: "Alex Morgan",
        role: "CEO",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Lisa Wang",
        role: "CTO",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      }
    ]
  },
  designstudio: {
    name: "DesignStudio",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop&crop=center",
    cover: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=400&fit=crop&crop=center",
    tagline: "Crafting beautiful experiences",
    description: "DesignStudio is a creative design agency specializing in user experience and interface design. We help companies create digital products that users love and businesses thrive on.",
    industry: "Design",
    size: "50-200 employees",
    founded: "2020",
    location: "Remote",
    website: "https://designstudio.com",
    rating: 4.9,
    reviewCount: 45,
    culture: [
      "Creative freedom",
      "Remote-first",
      "Design thinking",
      "Work-life balance",
      "Continuous learning"
    ],
    benefits: [
      "Competitive salary",
      "Full remote work",
      "Design tools budget",
      "Flexible schedule",
      "Mental health support",
      "Conference attendance"
    ],
    openJobs: [
      {
        id: 6,
        title: "Senior Product Designer",
        department: "Design",
        type: "Full-time",
        location: "Remote",
        posted: "2 days ago"
      }
    ],
    team: [
      {
        name: "Maya Patel",
        role: "Creative Director",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=150&h=150&fit=crop&crop=face"
      }
    ]
  },
  datatech: {
    name: "DataTech",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center",
    cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop&crop=center",
    tagline: "Data-driven solutions",
    description: "DataTech provides advanced analytics and machine learning solutions to help businesses make smarter decisions. Our team of data scientists and engineers work on cutting-edge AI technologies.",
    industry: "Data Science",
    size: "200-500 employees",
    founded: "2016",
    location: "Austin, TX",
    website: "https://datatech.com",
    rating: 4.7,
    reviewCount: 112,
    culture: [
      "Data-driven",
      "Research-focused",
      "Innovation",
      "Collaboration",
      "Continuous improvement"
    ],
    benefits: [
      "Equity participation",
      "Premium healthcare",
      "Research budget",
      "Conference speaking",
      "Flexible PTO",
      "Modern workspace"
    ],
    openJobs: [
      {
        id: 7,
        title: "Data Scientist",
        department: "Data Science",
        type: "Full-time",
        location: "Austin, TX",
        posted: "1 week ago"
      },
      {
        id: 8,
        title: "Machine Learning Engineer",
        department: "Engineering",
        type: "Full-time",
        location: "Austin, TX",
        posted: "4 days ago"
      }
    ],
    team: [
      {
        name: "Dr. James Liu",
        role: "Chief Data Officer",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Rachel Kim",
        role: "Head of AI Research",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      }
    ]
  },
  cloudsolutions: {
    name: "CloudSolutions",
    logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop&crop=center",
    cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop&crop=center",
    tagline: "Powering the cloud revolution",
    description: "CloudSolutions is a leading cloud infrastructure provider offering scalable, secure, and reliable cloud services to businesses of all sizes. We help companies modernize their IT infrastructure.",
    industry: "Cloud Computing",
    size: "1000+ employees",
    founded: "2014",
    location: "Seattle, WA",
    website: "https://cloudsolutions.com",
    rating: 4.5,
    reviewCount: 203,
    culture: [
      "Scale mindset",
      "Security first",
      "Customer success",
      "Technical excellence",
      "Global thinking"
    ],
    benefits: [
      "Competitive compensation",
      "Stock options",
      "Comprehensive benefits",
      "Professional development",
      "Sabbatical program",
      "Global opportunities"
    ],
    openJobs: [
      {
        id: 9,
        title: "Cloud Architect",
        department: "Engineering",
        type: "Full-time",
        location: "Seattle, WA",
        posted: "5 days ago"
      },
      {
        id: 10,
        title: "Site Reliability Engineer",
        department: "Operations",
        type: "Full-time",
        location: "Seattle, WA",
        posted: "1 week ago"
      }
    ],
    team: [
      {
        name: "Robert Zhang",
        role: "VP of Engineering",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Sarah Thompson",
        role: "Director of Cloud Services",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=150&h=150&fit=crop&crop=face"
      }
    ]
  },
  appventures: {
    name: "AppVentures",
    logo: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=400&fit=crop&crop=center",
    cover: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=400&fit=crop&crop=center",
    tagline: "Mobile-first innovation",
    description: "AppVentures creates innovative mobile applications for various industries. We specialize in iOS and Android development, delivering user-friendly apps that solve real-world problems.",
    industry: "Mobile Apps",
    size: "100-500 employees",
    founded: "2019",
    location: "Los Angeles, CA",
    website: "https://appventures.com",
    rating: 4.4,
    reviewCount: 67,
    culture: [
      "Mobile-first",
      "User-centric design",
      "Rapid prototyping",
      "Cross-platform expertise",
      "Startup mentality"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Device budget",
      "Flexible work",
      "Team building events",
      "Professional growth"
    ],
    openJobs: [
      {
        id: 11,
        title: "iOS Developer",
        department: "Mobile Development",
        type: "Full-time",
        location: "Los Angeles, CA",
        posted: "3 days ago"
      },
      {
        id: 12,
        title: "Android Developer",
        department: "Mobile Development",
        type: "Full-time",
        location: "Los Angeles, CA",
        posted: "1 week ago"
      }
    ],
    team: [
      {
        name: "Carlos Martinez",
        role: "Head of Mobile",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      {
        name: "Jessica Chen",
        role: "Lead iOS Developer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      }
    ]
  }
};

const CompanyProfile = () => {
  const { name } = useParams();
  const company = companyData[name as keyof typeof companyData];

  if (!company) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Company not found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            ← Back to jobs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to jobs</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Follow Company</Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                View Jobs
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Cover Section */}
      <div className="relative">
        <div 
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${company.cover})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative -mt-16">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-24 h-24 rounded-lg object-cover border-4 border-white shadow-lg"
                />
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">{company.name}</h1>
                      <p className="text-lg text-gray-600 mt-1">{company.tagline}</p>
                      <div className="flex items-center mt-2 space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {company.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {company.size}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Founded {company.founded}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="text-lg font-semibold">{company.rating}</span>
                        <span className="text-gray-600">({company.reviewCount} reviews)</span>
                      </div>
                      <a 
                        href={company.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 text-sm flex items-center mt-1"
                      >
                        <Globe className="w-4 h-4 mr-1" />
                        Visit website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="jobs">Jobs ({company.openJobs.length})</TabsTrigger>
            <TabsTrigger value="culture">Culture</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {/* About */}
                <Card>
                  <CardHeader>
                    <h2 className="text-xl font-semibold">About {company.name}</h2>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{company.description}</p>
                  </CardContent>
                </Card>

                {/* Culture Values */}
                <Card>
                  <CardHeader>
                    <h2 className="text-xl font-semibold">Our Culture</h2>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {company.culture.map((value, index) => (
                        <Badge key={index} variant="secondary" className="text-sm">
                          {value}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                {/* Quick Stats */}
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Company Stats</h3>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Industry:</span>
                      <span className="font-medium">{company.industry}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Company size:</span>
                      <span className="font-medium">{company.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Founded:</span>
                      <span className="font-medium">{company.founded}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Open positions:</span>
                      <span className="font-medium">{company.openJobs.length}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Benefits */}
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Benefits & Perks</h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {company.benefits.slice(0, 5).map((benefit, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    {company.benefits.length > 5 && (
                      <p className="text-sm text-gray-500 mt-2">
                        +{company.benefits.length - 5} more benefits
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="jobs" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {company.openJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{job.title}</h3>
                        <p className="text-sm text-gray-600">{job.department}</p>
                      </div>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Briefcase className="w-4 h-4 mr-2" />
                        Posted {job.posted}
                      </div>
                    </div>
                    <Button asChild className="w-full">
                      <Link to={`/job/${job.id}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="culture" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <h2 className="text-xl font-semibold">Our Values</h2>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {company.culture.map((value, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-4">
                        <h3 className="font-medium text-gray-900">{value}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          We believe in {value.toLowerCase()} as a core part of our company culture.
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h2 className="text-xl font-semibold">Work Environment</h2>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <img
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=300&fit=crop"
                      alt="Office environment"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <p className="text-gray-700">
                      Our modern offices are designed to foster collaboration and creativity. 
                      We provide flexible workspaces, quiet zones for focused work, and 
                      recreational areas for team bonding.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold">Meet Our Leadership Team</h2>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {company.team.map((member, index) => (
                    <div key={index} className="text-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                      />
                      <h3 className="font-medium text-gray-900">{member.name}</h3>
                      <p className="text-sm text-gray-600">{member.role}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CompanyProfile;
