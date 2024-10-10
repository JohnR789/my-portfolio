// src/components/Projects.tsx
import React from '@/components/Projects';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url: string) =>
  axios
    .get(url, {
      headers: {
        Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      },
    })
    .then((res) => res.data);

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

const Projects: React.FC = () => {
  const { data, error } = useSWR<Repo[]>(
    'https://api.github.com/users/JohnR789/repos',
    fetcher
  );

  if (error) return <div>Failed to load projects</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <section id="projects" className="container mx-auto py-20">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((repo) => (
          <div key={repo.id} className="bg-white shadow rounded p-6">
            <h3 className="text-2xl font-semibold">{repo.name}</h3>
            <p className="mt-2">{repo.description}</p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-4 inline-block"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

