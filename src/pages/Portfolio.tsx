import { useQuery } from "@tanstack/react-query";
import { User, Briefcase, Code, Cog, Award, Calendar, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Alert, AlertDescription } from "../components/ui/alert";
import { ProfileSidebar } from "../components/ProfileSidebar";
import { RepositoryCard } from "../components/RepositoryCard";
import { Preloader } from "../components/Preloader"; // Import the Preloader component

const experiences = [
	// {
	// 	title: "Software Developer Intern",
	// 	company: "[Your Organization/College Project Team Name]",
	// 	period: "2025 – Present",
	// 	description:
	// 		"Led the development of a decentralized social media Dapp using Solidity, React, and Web3.js. Implemented secure global and private chat functionality with Ethereum wallet-based admin moderation. Strengthened skills in blockchain, secure communication systems, and real-time messaging.",
	// 	current: true,
	// },
	{
		title: "Project Lead – Centralized Healthcare Platform",
		company: "Academic Project",
		period: "2025",
		description:
			"Developed a centralized healthcare monitoring platform for DDHS. Features included geofencing-based doctor attendance, real-time analytics, role-based dashboards, and automated alerts using the MERN stack.",
		current: false,
	},
	{
		title: "Cybersecurity Workshop Organizer",
		company: "CTF Team",
		period: "November 2024",
		description:
			"Organized and mentored a hands-on ethical hacking workshop. Designed CTF challenges on web attacks, reverse engineering, and network exploitation, promoting practical cybersecurity learning.",
		current: false,
	},
	{
		title: "Vice President",
		company: "Compete to Compute Club",
		period: "2023 – 2024",
		description:
			"Led the club in organizing technical events, hackathons, and cybersecurity training programs. Encouraged collaborative learning and fostered a culture of innovation and ethical hacking.",
		current: false,
	},
  {
		title: "CTF Participant – Pecan+ Capture The Flag",
		company: "Edith Cowan University, Western Australia",
		period: "March 2024",
		description:
			"Participated in an international CTF event hosted by Edith Cowan University and Western Australian University. Solved real-world cybersecurity challenges in cryptography, steganography, web exploitation, and forensics.",
		current: false,
	}
];




const skillCategories = [
	{
		name: "Frontend Development",
		color: "text-green-600",
		skills: [
			"React.js",
			"JavaScript (ES6+)",
			"HTML5",
			"CSS3",
			"Tailwind CSS"
		],
	},
	{
		name: "Backend Development",
		color: "text-blue-600",
		skills: [
			"Node.js",
			"Express.js",
			"MongoDB",
			"Flask",
			"REST APIs",
			"Google Sheets API"
		],
	},
	{
		name: "Cybersecurity",
		color: "text-red-500",
		skills: [
			"Ethical Hacking",
			"Penetration Testing",
			"CTF Challenges",
			"Kali Linux",
			"Nessus",
			"Wireshark",
			"Burp Suite"
		],
	},
	{
		name: "Blockchain",
		color: "text-purple-500",
		skills: [
			"Solidity",
			"Ethereum",
			"Web3.js",
			"Smart Contracts"
		],
	},
	{
		name: "General & Tools",
		color: "text-yellow-600",
		skills: [
			"JAVA",
			"C++",
			"MySQL",
			"Python",
			"Git & GitHub",
			"Docker",
			"Linux",
			"Firebase",
			"VS Code",
			"Postman",
			"Problem Solving"
		],
	}
];


const certifications = [
	{
		name: "Foundations of Cybersecurity",
		issuer: "Google Cybersecurity Certificate (via Coursera)",
		issued: "2024",
		expiry: null,
		icon: "🛡", // general cybersecurity
		link: "https://coursera.org/verify/KJ3L4WDUV947",
	},
	{
		name: "Play It Safe: Manage Security Risks",
		issuer: "Google Cybersecurity Certificate (via Coursera)",
		issued: "2024",
		expiry: null,
		icon: "⚠", // risk management
		link: "https://coursera.org/verify/WM66P7MPQF5N",
	},
	{
		name: "Connect and Protect: Networks and Network Security",
		issuer: "Google Cybersecurity Certificate (via Coursera)",
		issued: "2024",
		expiry: null,
		icon: "🌐", // networking
		link: "https://coursera.org/verify/3QWHUB522PDG",
	},
	{
		name: "Tools of the Trade: Linux and SQL",
		issuer: "Google Cybersecurity Certificate (via Coursera)",
		issued: "2024",
		expiry: null,
		icon: "🖥", // tools & OS
		link: "https://coursera.org/verify/9VBXU58JVYVQ",
	},
	{
		name: "Assets, Threats, and Vulnerabilities",
		issuer: "Google Cybersecurity Certificate (via Coursera)",
		issued: "2024",
		expiry: null,
		icon: "🔍", // threat analysis
		link: "https://coursera.org/verify/J4U7J5AHA3Z9",
	},
	{
		name: "Sound the Alarm: Detection and Response",
		issuer: "Google Cybersecurity Certificate (via Coursera)",
		issued: "2024",
		expiry: null,
		icon: "🚨", // incident response
		link: "https://www.coursera.org/account/accomplishments/verify/EB57HCUFKCHC",
	},
	{
		name: "Automate Cybersecurity Tasks with Python",
		issuer: "Google Cybersecurity Certificate (via Coursera)",
		issued: "2024",
		expiry: null,
		icon: "🐍", // Python
		link: "https://coursera.org/verify/XTPWP38UJXUN",
	},
	{
		name: "Put It to Work: Prepare for Cybersecurity Jobs",
		issuer: "Google Cybersecurity Certificate (via Coursera)",
		issued: "2024",
		expiry: null,
		icon: "🎯", // career/job focused
		link: "https://coursera.org/verify/TLWGC2AVJ8UR",
	},
	{
		name: "Python & Ethical Hacking from Scratch",
		issuer: "Zaid Sabih – zSecurity (via Udemy)",
		issued: "2023",
		expiry: null,
		icon: "💣", // hacking
		link: "https://udemy-certificate.s3.amazonaws.com/image/UC-b9622ea7-84e8-4460-94d2-4b7405b7c835.jpg",
	},
	{
		name: "Internship Certificate – DataCom",
		issuer: "DataCom (Cybersecurity Internship)",
		issued: "2024",
		expiry: null,
		icon: "📑",
		link: "",
	},
	{
		name: "The Complete Full-Stack Web Development Bootcamp",
		issuer: "Udemy",
		issued: "2024",
		expiry: null,
		icon: "🧱", // full stack/web dev
		link: "https://udemy-certificate.s3.amazonaws.com/image/UC-3c204a27-bb26-4dba-b5d5-72a5c04100f8.jpg",
	}
];
interface Repository {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  isPublic: boolean;
  htmlUrl: string;
}

export default function Portfolio() {
  const { data: repositories, isLoading: reposLoading, error: reposError } = useQuery<Repository[]>({
    queryKey: ["/api/github/repos/arimaan"],
    queryFn: () => fetchGitHubRepositories("arimaan"),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Conditionally render Preloader while repositories are loading
  if (reposLoading) {
    return <Preloader />;
  }

  // Render error message if fetching failed
  if (reposError) {
    return (
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Alert variant="destructive">
          <AlertDescription>
            Failed to load portfolio data. Please check your connection or try again later.
            {/* Optionally display error details in development */}
            {import.meta.env.MODE === 'development' && <p>{(reposError as Error).message}</p>}
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  // Render the main portfolio content once data is loaded
  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Sidebar */}
        <div className="lg:col-span-1">
          <ProfileSidebar />
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">

          {/* About Section */}
          <section id="about">
            <Card className="github-bg-secondary github-border">
              <CardHeader>
                <CardTitle className="flex items-center github-text-primary">
                  <User className="h-5 w-5 mr-2" />
                  About Me
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="github-text-muted leading-relaxed">
                  Innovative and results-driven Software Developer with expertise in cybersecurity, ethical hacking, and modern web technologies.
                  Passionate about creating secure, scalable applications using the MERN stack and blockchain technologies.
                  Committed to continuous learning and staying ahead of emerging security threats and development practices.
                </p>
                <p className="github-text-muted leading-relaxed">
                  I specialize in building full-stack applications with a security-first mindset, ensuring robust and secure solutions
                  for complex business challenges. My experience spans from web development to blockchain implementation,
                  with a strong focus on ethical hacking practices and cybersecurity protocols.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Experience Section */}
          <section id="experience">
            <Card className="github-bg-secondary github-border">
              <CardHeader>
                <CardTitle className="flex items-center github-text-primary">
                  <Briefcase className="h-5 w-5 mr-2" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className={`border-l-4 pl-6 relative ${
                    exp.current ? 'border-green-500' : index === 1 ? 'border-blue-500' : 'border-gray-400'
                  }`}>
                    <div className={`absolute w-3 h-3 rounded-full -left-2 top-0 ${
                      exp.current ? 'bg-green-500' : index === 1 ? 'bg-blue-500' : 'bg-gray-400'
                    }`} />
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-lg font-semibold github-text-primary">{exp.title}</h3>
                      <span className="text-sm github-text-muted flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-github-blue font-medium mb-2 flex items-center">
                      <Building className="h-4 w-4 mr-1" />
                      {exp.company}
                    </p>
                    <p className="github-text-muted text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>

          {/* Projects Section */}
          <section id="projects">
            <Card className="github-bg-secondary github-border">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center github-text-primary">
                  <Code className="h-5 w-5 mr-2" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                {repositories && repositories.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {repositories.slice(0, 4).map((repo: Repository) => (
                      <RepositoryCard
                        key={repo.name}
                        name={repo.name}
                        description={repo.description}
                        language={repo.language}
                        stars={repo.stars}
                        forks={repo.forks}
                        isPublic={repo.isPublic}
                        htmlUrl={repo.htmlUrl}
                      />
                    ))}
                  </div>
                ) : (
                  <Alert>
                    <AlertDescription>
                      No repositories found. Make sure the GitHub username is correct and repositories are public.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
          </section>

          {/* Skills Section */}
          <section id="skills">
            <Card className="github-bg-secondary github-border">
              <CardHeader>
                <CardTitle className="flex items-center github-text-primary">
                  <Cog className="h-5 w-5 mr-2" />
                  Skills & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skillCategories.map((category) => (
                    <div key={category.name}>
                      <h3 className={`text-lg font-medium mb-3 ${category.color}`}>
                        {category.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="github-bg-primary github-border"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Certifications Section */}
          <section id="certifications">
            <Card className="github-bg-secondary github-border">
              <CardHeader>
                <CardTitle className="flex items-center github-text-primary">
                  <Award className="h-5 w-5 mr-2" />
                  Certifications & Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert) => (
                    <Card key={cert.name} className="github-bg-primary github-border hover:border-github-blue transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="text-2xl">{cert.icon}</div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-sm mb-1 github-text-primary">
                              {cert.link ? (
                                <a
                                  href={cert.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:underline text-github-blue"
                                >
                                  {cert.name}
                                </a>
                              ) : (
                                cert.name
                              )}
                            </h3>
                            <p className="text-xs github-text-muted mb-2">{cert.issuer}</p>
                            <p className="text-xs github-text-muted">
                              Issued: {cert.issued} • Valid until: {cert.expiry}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

        </div>
      </div>
    </div>
  );
}
async function fetchGitHubRepositories(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.statusText}`);
  }
  const data = await response.json();
  // Map to the shape expected by RepositoryCard
  return data.map((repo: any) => ({
    name: repo.name,
    description: repo.description,
    language: repo.language,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    isPublic: !repo.private,
    htmlUrl: repo.html_url,
  }));
}

