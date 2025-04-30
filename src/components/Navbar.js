import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary-600">
              FairDecisionEDU
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600">
              대시보드
            </Link>
            <Link to="/case-analysis" className="text-gray-700 hover:text-primary-600">
              사건 분석
            </Link>
            <Link to="/statistics" className="text-gray-700 hover:text-primary-600">
              통계
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/login" className="text-gray-700 hover:text-primary-600">
              로그인
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 