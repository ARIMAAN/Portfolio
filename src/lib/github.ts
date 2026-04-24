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

export async function fetchRepoReadme(htmlUrl: string): Promise<string | null> {
  try {
    const url = new URL(htmlUrl);
    const parts = url.pathname.split('/').filter(Boolean);
    if (parts.length < 2) return null;
    const owner = parts[0];
    const repo = parts[1];

    const candidates = [
      `https://raw.githubusercontent.com/${owner}/${repo}/main/README.md`,
      `https://raw.githubusercontent.com/${owner}/${repo}/master/README.md`
    ];

    for (const c of candidates) {
      const res = await fetch(c);
      if (res.ok) return await res.text();
    }

    return null;
  } catch (err) {
    console.error('fetchRepoReadme error:', err);
    return null;
  }
}
