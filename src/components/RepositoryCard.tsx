import { Star, GitFork, Book } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

interface RepositoryCardProps {
  name: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
  isPublic: boolean;
  htmlUrl: string;
}

const languageColors: Record<string, string> = {
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-600",
  Python: "bg-blue-500", 
  Java: "bg-red-500",
  "C++": "bg-pink-500",
  CSS: "bg-purple-500",
  HTML: "bg-orange-500",
  Go: "bg-cyan-500",
  Rust: "bg-orange-600",
  PHP: "bg-indigo-500"
};

export function RepositoryCard({ 
  name, 
  description, 
  language, 
  stars, 
  forks, 
  isPublic, 
  htmlUrl 
}: RepositoryCardProps) {
  const languageColor = language ? languageColors[language] || "bg-gray-500" : "bg-gray-500";

  return (
    <Card className="github-bg-primary github-border hover:border-github-blue transition-colors cursor-pointer">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <a 
            href={htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-github-blue hover:underline flex items-center"
          >
            <Book className="h-4 w-4 mr-2" />
            {name}
          </a>
          <Badge 
            variant="outline" 
            className="text-xs github-bg-secondary github-border"
          >
            {isPublic ? "Public" : "Private"}
          </Badge>
        </div>
        
        {description && (
          <p className="text-xs github-text-muted mb-3 line-clamp-2">
            {description}
          </p>
        )}
        
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center space-x-4">
            {language && (
              <span className="flex items-center">
                <span className={`w-3 h-3 rounded-full mr-1 ${languageColor}`} />
                {language}
              </span>
            )}
            <span className="flex items-center github-text-muted">
              <Star className="h-3 w-3 mr-1" />
              {stars}
            </span>
            <span className="flex items-center github-text-muted">
              <GitFork className="h-3 w-3 mr-1" />
              {forks}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
