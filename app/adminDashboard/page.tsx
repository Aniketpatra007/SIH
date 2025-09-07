
'use client';

import { useState } from 'react';
import { FilterRegion } from './types';
import Sidebar from './Sidebar';
import Header from './Header';
import StatsGrid from './StatsGrid';
import DashboardGrid from './DashboardGrid';
import AnalyticsGrid from './AnalyticsGrid';
import AlertBanner from './AlertBanner';

const AdminDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterRegion>('all');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log('Searching for:', query);
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter as FilterRegion);
    console.log('Filtering by region:', filter);
  };

  return (
    <div className="min-h-screen bg-[#0F0E17] text-white">
      <Sidebar />
      <div className="ml-[280px] p-8">
        <Header onSearch={handleSearch} />
        <AlertBanner />
        <StatsGrid />
        <DashboardGrid 
          activeFilter={activeFilter} 
          onFilterChange={handleFilterChange} 
        />
        <AnalyticsGrid />
      </div>
    </div>
  );
};

export default AdminDashboard;