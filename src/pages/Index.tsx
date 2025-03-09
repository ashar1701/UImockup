
import React from 'react';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import FinancialOverview from '@/components/FinancialOverview';
import ProductRecommendations from '@/components/ProductRecommendations';
import InvestmentPortfolio from '@/components/InvestmentPortfolio';
import RiskManagement from '@/components/RiskManagement';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-6 pb-20 md:pb-6 max-w-4xl">
        <div className="space-y-6">
          {/* Financial Overview Section */}
          <FinancialOverview />
          
          {/* Product Recommendations */}
          <ProductRecommendations />
          
          {/* Investment Portfolio */}
          <InvestmentPortfolio />
          
          {/* Standalone Risk Management */}
          <RiskManagement standalone />
        </div>
      </main>
      
      <NavBar />
    </div>
  );
};

export default Index;
