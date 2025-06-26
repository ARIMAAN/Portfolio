import { MapPin, FileText } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import BAprofile from '../media/BAprofile.png';
import { useTheme } from "../contexts/ThemeContext";

interface ProfileData {
  name: string;
  username: string;
  bio: string;
  location: string;
  avatarUrl: string;
  githubUrl?: string;
  email?: string;
  linkedinUrl?: string;
  leetcode?: string;
  resumeUrl?: string; // Add resumeUrl property
}

const defaultProfile: ProfileData = {
  name: "BHAVAN ARIMAAN",
  username: "ARIMAAN",
  bio: "Passionate Software Developer | Cybersecurity & Ethical Hacking Enthusiast | MERN Stack & Blockchain",
  location: "India",
  avatarUrl: BAprofile,
  githubUrl: "https://github.com/ARIMAAN/",
  email: "arimaanbhavant@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/bhavan-arimaan/",
  leetcode : "https://leetcode.com/u/BHAVAN_ARIMAAN/",
  resumeUrl: "https://drive.google.com/file/d/1xTxNxVEXJ_UIzTEafEc1Ooc-Zdk90P6i/view?usp=sharing" // Assuming your resume is named resume.pdf in the public folder
};

export function ProfileSidebar() {
  const profile = defaultProfile;
  const { theme } = useTheme();

  // SVG icons (inline for demonstration; replace with imports if you have SVG files)
  const LinkedInIcon = (
    <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke={theme === "dark" ? "#fff" : "#0077b5"}>
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
      <rect width="4" height="12" x="2" y="9" fill={theme === "dark" ? "#fff" : "#0077b5"} />
      <circle cx="4" cy="4" r="2" fill={theme === "dark" ? "#fff" : "#0077b5"} />
    </svg>
  );
  const GitHubIcon = (
    <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke={theme === "dark" ? "#fff" : "#333"}>
      <path fill={theme === "dark" ? "#fff" : "#333"} d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 6.8c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
    </svg>
  );
  const LeetCodeIcon = (
    <svg className="h-4 w-4 mr-1" viewBox="0 0 50 50" fill="none">
      <path d="M35.5 13.5L14.5 34.5" stroke={theme === "dark" ? "#fff" : "#FFA116"} strokeWidth="4" strokeLinecap="round"/>
      <path d="M25 6L6 25L25 44" stroke={theme === "dark" ? "#fff" : "#FFA116"} strokeWidth="4" strokeLinecap="round"/>
      <path d="M44 25H14" stroke={theme === "dark" ? "#fff" : "#FFA116"} strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
  const MailIcon = (
    <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke={theme === "dark" ? "#fff" : "#EA4335"}>
      <rect width="20" height="14" x="2" y="5" rx="2" strokeWidth="2" stroke={theme === "dark" ? "#fff" : "#EA4335"} />
      <path d="M22 7l-10 6L2 7" strokeWidth="2" stroke={theme === "dark" ? "#fff" : "#EA4335"} />
    </svg>
  );

  // Icon for Resume (using FileText from lucide-react for a better resume/document icon)
  const ResumeIcon = (
    <FileText className="h-4 w-4 mr-1" />
  );


  return (
    <Card className="github-bg-secondary github-border sticky top-24">
      <CardContent className="p-6">
        {/* Profile Image */}
        <div className="text-center mb-6">
          <Avatar className="w-64 h-64 mx-auto mb-4 border-4 github-border">
            <AvatarImage src={profile.avatarUrl} alt={`${profile.name} profile photo`} />
            <AvatarFallback className="text-4xl bg-github-blue text-white">
              {profile.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>

          {/* Profile Info */}
          <h1 className="text-2xl font-bold mb-2 github-text-primary">{profile.name}</h1>
          <p className="github-text-muted mb-4">@{profile.username}</p>
          <p className="text-sm mb-4 github-text-primary">{profile.bio}</p>

          {profile.location && (
            <p className="text-sm github-text-muted mb-4 flex items-center justify-center">
              <MapPin className="h-4 w-4 mr-1" />
              {profile.location}
            </p>
          )}

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {profile.email && (
              <Button
                asChild
                variant="link"
                size="sm"
                className="text-github-blue p-0"
              >
                <a href={`mailto:${profile.email}`} target="_blank" rel="noopener noreferrer">
                  {MailIcon}
                  arimaanbhavant@gmail.com
                </a>
              </Button>
            )}
            {profile.linkedinUrl && (
              <Button
                asChild
                variant="link"
                size="sm"
                className="text-github-blue p-0"
              >
                <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
                  {LinkedInIcon}
                  LinkedIn
                </a>
              </Button>
            )}
            {profile.githubUrl && (
              <Button
                asChild
                variant="link"
                size="sm"
                className="text-github-blue p-0"
              >
                <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer">
                  {GitHubIcon}
                  GitHub
                </a>
              </Button>
            )}
            {profile.leetcode && (
              <Button
                asChild
                variant="link"
                size="sm"
                className="text-github-blue p-0"
              >
                <a href={profile.leetcode} target="_blank" rel="noopener noreferrer">
                  {LeetCodeIcon}
                  LeetCode
                </a>
              </Button>
            )}
            {/* Add Resume Button */}
            {profile.resumeUrl && (
              <Button
                asChild
                variant="link"
                size="sm"
                className="text-github-blue p-0"
              >
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                  {ResumeIcon}
                  Resume
                </a>
              </Button>
            )}
          </div>

          {/* Stats */}
        </div>
      </CardContent>
    </Card>
  );
}
