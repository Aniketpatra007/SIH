
'use client';

import React from 'react';
import { NavItem } from './types';

const Sidebar: React.FC = () => {
  const navItems: NavItem[] = [
    { id: '1', name: 'Dashboard', href: '#', icon: '📊', active: true },
    { id: '2', name: 'Students', href: '#', icon: '👥' },
    { id: '3', name: 'Institutions', href: '#', icon: '🏫' },
    { id: '4', name: 'Games', href: '#', icon: '🎮' },
    { id: '5', name: 'Analytics', href: '#', icon: '📈' },
    { id: '6', name: 'Emergency', href: '#', icon: '🚨' },
    { id: '7', name: 'Settings', href: '#', icon: '⚙️' },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-icon">🚨</div>
        <div className="logo-text">
          <h1>DisasterEd Pro</h1>
          <p>NDMA Admin Portal</p>
        </div>
      </div>
      
      <ul className="nav-menu">
        {navItems.map((item) => (
          <li key={item.id} className="nav-item">
            <a 
              href={item.href} 
              className={`nav-link ${item.active ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .sidebar {
          position: fixed;
          left: 0;
          top: 0;
          width: 280px;
          height: 100vh;
          background: #0F0E17;
          padding: 24px;
          z-index: 100;
          overflow-y: auto;
          border-right: 1px solid #FF8906;
        }

        .logo {
          display: flex;
          align-items: center;
          margin-bottom: 32px;
          padding-bottom: 24px;
          border-bottom: 1px solid #FF8906;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background: #FF8906;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFE;
          font-weight: bold;
          font-size: 20px;
          margin-right: 12px;
          flex-shrink: 0;
        }

        .logo-text h1 {
          color: #FFFFFE;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 2px;
          line-height: 1.2;
        }

        .logo-text p {
          color: #A7A9BE;
          font-size: 12px;
          line-height: 1.2;
        }

        .nav-menu {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .nav-item {
          margin-bottom: 8px;
        }

        .nav-link {
          display: flex;
          align-items: center;
          padding: 14px 16px;
          color: #A7A9BE;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.2s ease;
          font-weight: 500;
          font-size: 14px;
          line-height: 1.2;
        }

        .nav-link:hover, 
        .nav-link.active {
          background: #FF8906;
          color: #FFFFFE;
        }

        .nav-icon {
          margin-right: 12px;
          font-size: 18px;
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;