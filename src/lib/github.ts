export interface GitHubRepository {
  name: string;
  fullName: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
  isPublic: boolean;
  htmlUrl: string;
  updatedAt: string;
}

export interface GitHubUser {
  name: string;
  username: string;
  bio?: string;
  location?: string;
  company?: string;
  email?: string;
  githubUrl: string;
  avatarUrl: string;
  followers: number;
  following: number;
}

export async function fetchGitHubRepositories(username: string): Promise<GitHubRepository[]> {
  const response = await fetch(`/api/github/repos/${username}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch repositories: ${response.statusText}`);
  }

  const data = await response.json();
  console.log(`Fetched GitHub repositories for ${username}:`, data); // Log the fetched data
  return data;
}

export async function fetchGitHubUser(username: string): Promise<GitHubUser> {
  const response = await fetch(`/api/github/user/${username}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch user profile: ${response.statusText}`);
  }

  const data = await response.json();
  console.log(`Fetched GitHub user profile for ${username}:`, data); // Log the fetched data
  return data;
}
