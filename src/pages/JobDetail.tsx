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
  },
  2: {
    id: 2,
    title: "Product Manager",
    company: "InnovateLabs",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130k - $170k",
    posted: "1 day ago",
    description: "Lead product strategy and execution for our SaaS platform serving enterprise clients.",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&crop=center",
    featured: false,
    fullDescription: `We are looking for an experienced Product Manager to join InnovateLabs and drive the strategic direction of our enterprise SaaS platform. You will work closely with engineering, design, and sales teams to deliver products that delight our customers.

As a Product Manager, you'll be responsible for defining product roadmaps, conducting market research, and ensuring successful product launches. You'll need to balance customer needs with business objectives while maintaining a clear vision for the product's future.

This is an excellent opportunity for someone who wants to make a significant impact on a growing company and help shape the future of enterprise software solutions.`,
    requirements: [
      "3+ years of product management experience",
      "Experience with SaaS products and enterprise customers",
      "Strong analytical and data-driven decision making skills",
      "Excellent communication and presentation abilities",
      "Experience with agile development methodologies",
      "Understanding of user experience design principles",
      "MBA or equivalent business experience preferred",
      "Track record of successful product launches"
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Equity participation in a fast-growing company",
      "Comprehensive health and wellness benefits",
      "Flexible work schedule and remote options",
      "Annual learning and development budget",
      "Modern office space in Manhattan",
      "Regular team outings and company events",
      "Opportunity to work with cutting-edge technologies"
    ],
    companyInfo: {
      name: "InnovateLabs",
      size: "100-500 employees",
      industry: "Software",
      founded: "2018",
      website: "https://innovatelabs.com",
      description: "InnovateLabs develops innovative SaaS solutions for enterprise clients, focusing on productivity and workflow optimization tools."
    }
  },
  3: {
    id: 3,
    title: "UX Designer",
    company: "DesignStudio",
    location: "Remote",
    type: "Contract",
    salary: "$80k - $100k",
    posted: "3 days ago",
    description: "Create beautiful and intuitive user experiences for mobile and web applications.",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop&crop=center",
    featured: false,
    fullDescription: `DesignStudio is seeking a talented UX Designer to join our remote team and help create exceptional user experiences for our diverse portfolio of mobile and web applications.

You will be responsible for conducting user research, creating wireframes and prototypes, and collaborating with development teams to bring designs to life. We value creativity, attention to detail, and a user-centered approach to design.

This contract position offers the flexibility of remote work while providing opportunities to work on exciting projects for clients across various industries.`,
    requirements: [
      "3+ years of UX design experience",
      "Proficiency in design tools (Figma, Sketch, Adobe Creative Suite)",
      "Strong portfolio showcasing mobile and web projects",
      "Experience with user research and usability testing",
      "Understanding of design systems and component libraries",
      "Knowledge of HTML/CSS fundamentals",
      "Excellent communication and collaboration skills",
      "Ability to work independently in a remote environment"
    ],
    benefits: [
      "Competitive hourly rate",
      "Fully remote work environment",
      "Flexible schedule and project-based work",
      "Access to premium design tools and software",
      "Opportunity to work with diverse clients",
      "Professional development opportunities",
      "Collaborative and creative team culture",
      "Potential for long-term partnership"
    ],
    companyInfo: {
      name: "DesignStudio",
      size: "10-50 employees",
      industry: "Design & Creative",
      founded: "2020",
      website: "https://designstudio.com",
      description: "DesignStudio is a creative agency specializing in user experience design for digital products and services."
    }
  },
  4: {
    id: 4,
    title: "Data Scientist",
    company: "DataTech",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110k - $140k",
    posted: "1 week ago",
    description: "Analyze complex datasets and build machine learning models to drive business insights.",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center",
    featured: true,
    fullDescription: `DataTech is looking for a Data Scientist to join our analytics team in Austin. You will work with large datasets to uncover insights that drive strategic business decisions and develop machine learning models to solve complex problems.

In this role, you'll collaborate with cross-functional teams to identify opportunities for data-driven solutions, build predictive models, and communicate findings to stakeholders at all levels of the organization.

We offer a dynamic work environment where you can apply cutting-edge techniques in machine learning and statistics to real-world business challenges.`,
    requirements: [
      "Master's degree in Data Science, Statistics, or related field",
      "3+ years of experience in data analysis and machine learning",
      "Proficiency in Python, R, and SQL",
      "Experience with machine learning frameworks (scikit-learn, TensorFlow, PyTorch)",
      "Strong statistical analysis and modeling skills",
      "Experience with big data tools (Spark, Hadoop)",
      "Excellent data visualization skills",
      "Strong business acumen and communication skills"
    ],
    benefits: [
      "Competitive salary with annual bonuses",
      "Comprehensive health, dental, and vision coverage",
      "401(k) with company matching",
      "Flexible PTO and sabbatical opportunities",
      "Professional conference and training budget",
      "State-of-the-art office in downtown Austin",
      "Free lunch and snacks",
      "Team building activities and social events"
    ],
    companyInfo: {
      name: "DataTech",
      size: "200-500 employees",
      industry: "Data & Analytics",
      founded: "2016",
      website: "https://datatech.com",
      description: "DataTech provides advanced analytics and machine learning solutions to help businesses make data-driven decisions."
    }
  },
  5: {
    id: 5,
    title: "DevOps Engineer",
    company: "CloudSolutions",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$100k - $130k",
    posted: "4 days ago",
    description: "Build and maintain scalable cloud infrastructure using AWS and Kubernetes.",
    logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop&crop=center",
    featured: false,
    fullDescription: `CloudSolutions is seeking a DevOps Engineer to help build and maintain our cloud infrastructure. You will work with AWS services, Kubernetes, and modern DevOps tools to ensure our applications run smoothly and scale efficiently.

You'll be responsible for automating deployment processes, monitoring system performance, and implementing security best practices. This role offers the opportunity to work with cutting-edge cloud technologies and contribute to the reliability of our platform.

Join our team in Seattle and help us deliver world-class cloud solutions to our clients.`,
    requirements: [
      "3+ years of DevOps or cloud infrastructure experience",
      "Strong experience with AWS services (EC2, S3, RDS, Lambda)",
      "Proficiency with Kubernetes and container orchestration",
      "Experience with Infrastructure as Code (Terraform, CloudFormation)",
      "Knowledge of CI/CD pipelines and automation tools",
      "Scripting skills in Python, Bash, or similar languages",
      "Understanding of monitoring and logging tools",
      "Strong troubleshooting and problem-solving skills"
    ],
    benefits: [
      "Competitive salary and equity options",
      "Comprehensive healthcare benefits",
      "Unlimited PTO policy",
      "Professional development budget",
      "Remote work flexibility",
      "Modern office space in Seattle",
      "Free coffee and team lunches",
      "Regular tech talks and learning sessions"
    ],
    companyInfo: {
      name: "CloudSolutions",
      size: "50-100 employees",
      industry: "Cloud Services",
      founded: "2019",
      website: "https://cloudsolutions.com",
      description: "CloudSolutions helps businesses migrate to and optimize their cloud infrastructure for better performance and cost efficiency."
    }
  },
  6: {
    id: 6,
    title: "Mobile Developer",
    company: "AppVentures",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$70k - $90k",
    posted: "5 days ago",
    description: "Develop cross-platform mobile applications using React Native and Flutter.",
    logo: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=400&fit=crop&crop=center",
    featured: false,
    fullDescription: `AppVentures is looking for a Mobile Developer to join our team on a part-time basis. You will work on developing cross-platform mobile applications using React Native and Flutter for our diverse client portfolio.

This role is perfect for someone who wants to work on multiple projects while maintaining work-life balance. You'll have the opportunity to work with the latest mobile development technologies and contribute to apps used by thousands of users.

We offer a flexible schedule and the chance to work with a creative team passionate about mobile innovation.`,
    requirements: [
      "2+ years of mobile development experience",
      "Proficiency in React Native and/or Flutter",
      "Experience with mobile app deployment (App Store, Google Play)",
      "Knowledge of native mobile development (iOS/Android) is a plus",
      "Understanding of mobile UI/UX best practices",
      "Experience with RESTful APIs and backend integration",
      "Familiarity with version control systems (Git)",
      "Strong attention to detail and quality"
    ],
    benefits: [
      "Competitive part-time hourly rate",
      "Flexible working hours",
      "Opportunity to work on diverse projects",
      "Access to latest mobile development tools",
      "Collaborative and supportive team environment",
      "Potential for full-time conversion",
      "Professional growth opportunities",
      "Creative freedom in project approach"
    ],
    companyInfo: {
      name: "AppVentures",
      size: "10-25 employees",
      industry: "Mobile Development",
      founded: "2021",
      website: "https://appventures.com",
      description: "AppVentures specializes in creating innovative mobile applications for startups and established businesses across various industries."
    }
  }
};

const JobDetail = () => {
  const { id } = useParams();
  const jobId = id ? parseInt(id, 10) : null;
  const job = jobId ? jobData[jobId as keyof typeof jobData] : null;

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
