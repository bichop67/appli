import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Users } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  if (isAdminPage) {
    return null;
  }

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-black" />
              <span className="text-xl font-bold text-black">SoiréesEntrepreneurs</span>
            </Link>
          </div>

          <div className="flex items-center">
            <Link 
              to="/evenements" 
              className="text-black hover:text-gray-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Voir les événements
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}