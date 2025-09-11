import React from 'react';
import Header from './Header';
import AlertBanner from './AlertBanner';
import StatsGrid from './StatsGrid';
import StudentPerformance from './StudentPerformance';
import TopPerformers from './TopPerformers';
import GameCompletion from './GameCompletion';
import KeyInsights from './KeyInsights';

const AdminDashboard = () => {
  return (
    <div className="container">
      <Header />
      <div className="dashboard-content">
        <AlertBanner />
        <StatsGrid />
        <div className="dashboard-grid">
          <StudentPerformance />
          <TopPerformers />
          <GameCompletion />
          <KeyInsights />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;