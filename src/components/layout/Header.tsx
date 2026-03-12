import { Link, useLocation } from 'react-router-dom';
import { Activity } from 'lucide-react';

export default function Header() {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: '홈' },
    { path: '/prevention', label: '위험성 및 예방' },
    { path: '/diet', label: '식단 가이드' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Activity className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-900">건강한 내일</span>
            </Link>
          </div>
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
