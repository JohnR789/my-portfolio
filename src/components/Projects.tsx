import React, { useEffect, useState } from 'react';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

const featuredRepos = ['my-portfolio', 'santas-sleigh', 'Mikeys_Mythical_Mixology', 'odin-recipes', 'Wellness_Waves', 'oma-gallery-app'];

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGitHubRepos() {
      try {
        const response = await fetch('https://api.github.com/users/JohnR789/repos', {
          headers: {
            Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch GitHub repositories');
        }

        const data = await response.json();
        const featured = data.filter((repo: Repo) => featuredRepos.includes(repo.name));
        setRepos(featured);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubRepos();
  }, []);

  if (loading) {
    return <p>Loading featured projects...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section
      id="projects"
      className="my-12 bg-light-blue text-gray-800 py-12 px-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white transition duration-300 transform hover:shadow-xl hover:scale-105 hover:bg-blue-200 dark:hover:bg-gray-700 mb-12"
    >
      <h2 className="text-4xl font-extrabold text-center text-primary dark:text-white mb-6">Personal Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="relative border border-gray-300 dark:border-gray-700 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md transition-shadow duration-300 transform hover:scale-105"
          >
            <div className="relative z-0">
              <h3 className="text-2xl font-bold mb-2 text-ellipsis whitespace-nowrap overflow-hidden text-primary dark:text-blue-400">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {repo.name}
                </a>
              </h3>
              <p className="text-gray-700 dark:text-gray-300 line-clamp-3 break-words overflow-hidden">
                {repo.description || 'No description available.'}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {repo.language && (
                  <span className="bg-primary-light text-white py-1 px-3 rounded-full text-sm font-semibold">
                    {repo.language}
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
              <div className="mr-6 flex items-center text-sm">
                <svg className="w-5 h-5 text-yellow-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-semibold">{repo.stargazers_count}</span> Stars
              </div>
              <div className="flex items-center text-sm">
                <svg className="w-5 h-5 text-blue-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="font-semibold">{repo.forks_count}</span> Forks
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;








































