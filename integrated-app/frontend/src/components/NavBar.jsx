import { NavLink } from 'react-router-dom';
import { useAuth } from '../auth.jsx';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/tasks', label: 'Tasks' },
  { to: '/contact', label: 'Contact' },
];

export default function NavBar({ theme, onToggleTheme }) {
  const { token, user, logout } = useAuth();

  return (
    <nav className="nav">
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            {/* NavLink (not <a>) navigates without a full page reload */}
            <NavLink to={link.to} end={link.end} className={({ isActive }) => (isActive ? 'active' : '')}>
              {link.label}
            </NavLink>
          </li>
        ))}
        <li className="push">
          {token && user && <span className="muted user-email">{user.email}</span>}
        </li>
        <li>
          {token ? <button className="ghost" onClick={logout}>Log out</button> : <NavLink to="/login">Log in</NavLink>}
        </li>
        <li><button className="ghost" onClick={onToggleTheme}>{theme === 'light' ? 'Dark' : 'Light'}</button></li>
      </ul>
    </nav>
  );
}
