'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { GitHubRepository, GitHubPullRequest, GitHubUser, GitHubStats } from '@/types/github';
import { 
  calculateGitHubStats,
  getRelevantRepositories
} from '@/lib/github';
import { getGitHubData } from '@/lib/data';
import { PullRequestCard } from '@/components/PullRequestCard';
import { StatsCard } from '@/components/StatsCard';
import { ProjectTabs } from '@/components/ProjectTabs';
import { GitHubContributionGraph } from '@/components/GitHubContributionGraph';
import { AboutSection } from '@/components/AboutSection';
import { SpaceBackground } from '@/components/SpaceBackground';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  MapPin,
  GitPullRequest,
  GitMerge,Mail
} from 'lucide-react';

export default function Home() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repositories, setRepositories] = useState<GitHubRepository[]>([]);
  const [pullRequests, setPullRequests] = useState<GitHubPullRequest[]>([]);
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setError(null);

        // Use cached data with API fallback
        const data = await getGitHubData();
        
        setUser(data.user);
        
        // Filter to get relevant repositories
        const relevantRepos = getRelevantRepositories(data.repositories);
        setRepositories(relevantRepos);
        
        setPullRequests(data.pullRequests);
        
        // Calculate stats
        const calculatedStats = calculateGitHubStats(data.repositories, data.pullRequests);
        setStats(calculatedStats);
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data');
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 mb-4">Error: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <SpaceBackground />
      
      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Nalin Dalal</h1>
          <div className="flex gap-4">
            <a href="https://github.com/nalindalal" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/nalin-dalal-815617271" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://x.com/nalin82929" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
                        <a
  href="mailto:nalindalal2004@gmail.com"
  className="text-gray-400 hover:text-white transition-colors"
>
  <Mail className="h-6 w-6" />
</a>

                        <a
    aria-label="Pull Request Docs"
    className="text-gray-400 hover:text-purple-400 transition-colors"
    title="Pull Request Docs"
  >
    <GitPullRequest className="h-6 w-6" />
  </a>

          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="mb-8">
            <Image
              src={user?.avatar_url || '/default-avatar.png'} 
              alt={user?.name || 'Profile'} 
              width={128}
              height={128}
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-purple-500/50"
            />
            <h1 className="text-5xl font-bold text-white mb-4">
              {user?.name || 'Nalin Dalal'}
            </h1>
            <p className="text-xl text-gray-300 mb-2">Engineer</p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {user?.bio || 'I like to build stuff'}
            </p>
            {user?.location && (
              <div className="flex items-center justify-center gap-2 mt-4 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>{user.location}</span>
              </div>
            )}
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* GitHub Contribution Graph */}
        <section className="mb-16">
          <GitHubContributionGraph username="nalindalal" />
        </section>

        {/* Stats Section */}
        {stats && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">GitHub Stats</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StatsCard 
                title="Pull Requests" 
                value={stats.totalPRs} 
                icon={GitPullRequest}
                description="Total contributions"
              />
              <StatsCard 
                title="Merged PRs" 
                value={stats.mergedPRs} 
                icon={GitMerge}
                description="Successful merges"
              />
            </div>
          </section>
        )}

        {/* Featured Projects */}
        {repositories && repositories.length > 0 ? (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            </div>
            <ProjectTabs repositories={repositories} />
          </section>
        ) : (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Projects</h2>
            <p className="text-gray-400 text-center py-8">No featured projects found.</p>
          </section>
        )}

        {/* Pull Requests Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Recent Pull Requests</h2>
          
          {pullRequests && pullRequests.length > 0 ? (
            <>
              {/* Open PRs */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-green-400 mb-6">
                  Open Pull Requests ({pullRequests.filter(pr => pr.state === 'open' && pr.merged_at === null).length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pullRequests
                    .filter(pr => pr.state === 'open' && pr.merged_at === null)
                    .slice(0, 4)
                    .map((pr) => (
                      <PullRequestCard key={pr.id} pullRequest={pr} />
                    ))}
                </div>
              </div>

              {/* Recent Merged PRs */}
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-6">Recent Merged PRs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pullRequests
                    .filter(pr => pr.merged_at !== null)
                    .slice(0, 6)
                    .map((pr) => (
                      <PullRequestCard key={pr.id} pullRequest={pr} />
                    ))}
                </div>
              </div>
            </>
          ) : (
            <p className="text-gray-400 text-center py-8">No pull requests found.</p>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-gray-400 mb-4">
            © 2025 Nalin Dalal. Built with Next.js and Tailwind CSS.
          </p>
          <p className="text-gray-500 text-sm">
            Data automatically updated daily via GitHub Actions.
          </p>
        </div>
      </footer>
    </div>
  );
}

