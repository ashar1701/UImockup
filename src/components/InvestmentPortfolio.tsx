import React from 'react';
import { cn } from "@/lib/utils";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

interface InvestmentPortfolioProps {
  className?: string;
}

const InvestmentPortfolio: React.FC<InvestmentPortfolioProps> = ({ className }) => {
  // Sample investment data - in a real app, this would come from your backend
  const investmentData = [
    { name: 'Stocks', value: 45, color: '#0EA5E9' },   // Blue
    { name: 'Bonds', value: 30, color: '#22c55e' },    // Green
    { name: 'ETFs', value: 25, color: '#f59e0b' },     // Amber
  ];

  // Calculate total investment value and loss percentage
  const totalInvestment = 25000; // Sample total value
  const lossPercentage = 22; // Sample loss percentage
  const showAlert = lossPercentage >= 20; // Show alert if loss is 20% or more

  return (
    <div className={cn(
      "glass-card p-6 animate-scale-in delay-100",
      className
    )}>
      <h2 className="text-xl font-medium mb-1">Investment Portfolio</h2>
      <p className="text-sm text-gray-500 mb-6">Your TFSA account distribution</p>
      
      {showAlert && (
        <Alert className="bg-finance-alert/10 border-finance-alert/20 mb-6 animate-pulse-soft">
          <AlertTriangle className="h-4 w-4 text-finance-alert mr-2" />
          <AlertDescription className="text-sm text-gray-700">
            Your TFSA portfolio has fallen below the 10% threshold. Consider speaking with a financial advisor to discuss <span className="text-finance-highlight">risk management</span> techniques.
          </AlertDescription>
        </Alert>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="financial-chart-container flex items-center justify-center">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={investmentData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                animationDuration={1000}
                animationBegin={200}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {investmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} strokeWidth={1} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: number) => [`${value}%`, '']}
                contentStyle={{ 
                  borderRadius: '0.5rem', 
                  border: 'none',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                  padding: '8px 12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.97)'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="space-y-2 flex flex-col justify-center">
          <div className="mb-3">
            <p className="text-sm text-gray-500">Total Value</p>
            <p className="text-2xl font-medium">${totalInvestment.toLocaleString()}</p>
          </div>
          
          <div className="mb-3">
            <p className="text-sm text-gray-500">Performance (YTD)</p>
            <p className="text-xl font-medium text-finance-spending">-{lossPercentage}%</p>
          </div>
          
          <RiskManagement />
        </div>
      </div>
    </div>
  );
};

const RiskManagement: React.FC = () => {
  return (
    <div className="mt-4 pt-4 border-t border-gray-100">
      <h3 className="text-lg font-medium text-finance-highlight mb-2">Risk Management</h3>
      <p className="text-sm text-gray-600">
        The process of identifying, analyzing and accepting or mitigating uncertainty in investment decisions. Effective risk management helps minimize potential losses while maximizing returns.
      </p>
    </div>
  );
};

export default InvestmentPortfolio;
