import { useCallback, useEffect, useState } from 'react';
import ErrorMessage from '../components/ErrorMessage.jsx';
import Spinner from '../components/Spinner.jsx';

const USERNAME = 'MansiJogani12';

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');

  const load = useCallback(() => {
    setLoading(true);
    setError('');
    fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100`)
      .then((response) => {
        if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);
        return response.json();
      })
      .then(setRepos)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    let active = true;
    fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100`)
      .then((response) => {
        if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);
        return response.json();
      })
      .then((data) => active && setRepos(data))
      .catch((err) => active && setError(err.message))
      .finally(() => active && setLoading(false));
    return () => { active = false; };
  }, []);
  if (loading) return <Spinner label="Loading GitHub projects" />;
  if (error) return <ErrorMessage title="Could not load projects" message={error} onRetry={load} />;

  const filtered = repos.filter((repo) => repo.name.toLowerCase().includes(query.toLowerCase()));
  return (
    <section>
      <div className="toolbar">
        <div><h2>Projects</h2><p className="muted">Live repositories from GitHub</p></div>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects" />
      </div>
      <div className="cards">
        {filtered.map((repo) => (
          <a className="card repo" href={repo.html_url} target="_blank" rel="noreferrer" key={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.description || 'No description'}</p>
            <span className="meta">★ {repo.stargazers_count} · {repo.language || 'Code'}</span>
            <span className="url">{repo.html_url}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
