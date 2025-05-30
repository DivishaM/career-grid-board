
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Briefcase, Clock, DollarSign, Users, Calendar, Heart, Share2, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Sample job data (in a real app, this would come from your API)
const jobData = {
  1: {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $160k",
    posted: "2 days ago",
    description: "Join our team building next-generation web applications using React and TypeScript.",
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=400&fit=crop&crop=center",
    featured: true,
    fullDescription: `We are seeking a talented Senior Frontend Developer to join our dynamic team at TechCorp. You will be responsible for developing and maintaining high-quality web applications using modern JavaScript frameworks and libraries.

In this role, you will collaborate closely with our design and backend teams to create intuitive, responsive user interfaces that provide exceptional user experiences. You'll be working on cutting-edge projects that serve millions of users worldwide.

We're looking for someone who is passionate about frontend development, stays up-to-date with the latest technologies, and enjoys working in a fast-paced, collaborative environment.`,
    requirements: [
      "5+ years of experience in frontend development",
      "Expert knowledge of React, TypeScript, and modern JavaScript",
      "Strong understanding of HTML5, CSS3, and responsive design",
      "Experience with state management libraries (Redux, Zustand, etc.)",
      "Familiarity with testing frameworks (Jest, React Testing Library)",
      "Knowledge of build tools and bundlers (Webpack, Vite, etc.)",
      "Experience with version control systems (Git)",
      "Strong problem-solving and debugging skills"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "Flexible work arrangements and remote work options",
      "Unlimited PTO and mental health days",
      "Professional development budget ($3,000/year)",
      "Top-tier equipment and home office setup",
      "Catered meals and snacks in office",
      "Team building events and company retreats"
    ],
    companyInfo: {
      name: "TechCorp",
      size: "500-1000 employees",
      industry: "Technology",
      founded: "2015",
      website: "https://techcorp.com",
      description: "TechCorp is a leading technology company that builds innovative software solutions for businesses worldwide. We're committed to creating products that make a positive impact on society."
    }
  }
  // Add more job data as needed
};

const JobDetail = () => {
  const { id } = useParams();
  const job = jobData[id as keyof typeof jobData];

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Job not found</h1>
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
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Save Job
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Header */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
                      <Link to={`/company/${job.company.toLowerCase()}`} className="text-lg text-blue-600 hover:text-blue-700 font-medium">
                        {job.company}
                      </Link>
                      <div className="flex items-center mt-2 space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.posted}
                        </div>
                      </div>
                    </div>
                  </div>
                  {job.featured && (
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                      Featured
                    </Badge>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Briefcase className="w-4 h-4 mr-2" />
                    {job.type}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign className="w-4 h-4 mr-2" />
                    {job.salary}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    {job.companyInfo.size}
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Job Description */}
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold text-gray-900">Job Description</h2>
              </CardHeader>
              <CardContent>
                <div className="prose prose-gray max-w-none">
                  {job.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold text-gray-900">Requirements</h2>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold text-gray-900">Benefits & Perks</h2>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Section */}
            <Card className="sticky top-6">
              <CardContent className="p-6">
                <Button className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 mb-4">
                  Apply Now
                </Button>
                <Button variant="outline" className="w-full">
                  Apply with LinkedIn
                </Button>
                <Separator className="my-4" />
                <div className="text-sm text-gray-600 space-y-2">
                  <p className="flex justify-between">
                    <span>Application deadline:</span>
                    <span className="font-medium">Jan 31, 2024</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Expected start date:</span>
                    <span className="font-medium">Feb 15, 2024</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-900">About {job.company}</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <p className="text-sm text-gray-700">{job.companyInfo.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Industry:</span>
                      <span className="font-medium">{job.companyInfo.industry}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Founded:</span>
                      <span className="font-medium">{job.companyInfo.founded}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Company size:</span>
                      <span className="font-medium">{job.companyInfo.size}</span>
                    </div>
                  </div>
                  
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/company/${job.company.toLowerCase()}`}>
                      <Building className="w-4 h-4 mr-2" />
                      View Company Profile
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Similar Jobs */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-900">Similar Jobs</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Frontend Developer", company: "StartupCo", location: "Remote", salary: "$90k-120k" },
                    { title: "React Developer", company: "WebTech", location: "NYC", salary: "$100k-130k" },
                    { title: "UI Engineer", company: "DesignLab", location: "LA", salary: "$110k-140k" }
                  ].map((similarJob, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-b-0 pb-3 last:pb-0">
                      <h4 className="font-medium text-gray-900 hover:text-blue-600 cursor-pointer">
                        {similarJob.title}
                      </h4>
                      <p className="text-sm text-gray-600">{similarJob.company}</p>
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>{similarJob.location}</span>
                        <span>{similarJob.salary}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
