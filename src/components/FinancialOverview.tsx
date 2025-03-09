
import React from 'react';
import { cn } from "@/lib/utils";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ArrowUp, ArrowDown, Wallet } from 'lucide-react';

interface FinancialOverviewProps {
  className?: string;
}

const FinancialOverview: React.FC<FinancialOverviewProps> = ({ className }) => {
  // Sample financial data - in a real app, this would come from your backend
  const financialData = [
    { name: 'Income', value: 4500, color: '#0EA5E9' }, // Blue
    { name: 'Spending', value: 3000, color: '#ea384c' }, // Red
    { name: 'Savings', value: 1500, color: '#22c55e' }, // Green
  ];

  // Calculate totals
  const totalIncome = financialData.find(item => item.name === 'Income')?.value || 0;
  const totalSpending = financialData.find(item => item.name === 'Spending')?.value || 0;
  const totalSavings = financialData.find(item => item.name === 'Savings')?.value || 0;
  const savingsRate = Math.round((totalSavings / totalIncome) * 100);

  return (
    <div className={cn(
      "glass-card p-6 transition-all duration-300 animate-scale-in",
      className
    )}>
      <h2 className="text-xl font-medium mb-1">Financial Overview</h2>
      <p className="text-sm text-gray-500 mb-6">Your monthly cash flow summary</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="financial-chart-container flex items-center justify-center">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={financialData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={3}
                dataKey="value"
                animationDuration={1000}
                animationBegin={200}
              >
                {financialData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} strokeWidth={1} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
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
        
        <div className="space-y-4 flex flex-col justify-center">
          <div className="flex items-center gap-3 p-3 rounded-xl transition-all hover:bg-gray-50">
            <div className="w-10 h-10 rounded-full bg-finance-income/10 flex items-center justify-center">
              <ArrowUp className="h-5 w-5 text-finance-income" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Income</p>
              <p className="text-lg font-medium">${totalIncome.toLocaleString()}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-xl transition-all hover:bg-gray-50">
            <div className="w-10 h-10 rounded-full bg-finance-spending/10 flex items-center justify-center">
              <ArrowDown className="h-5 w-5 text-finance-spending" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Spending</p>
              <p className="text-lg font-medium">${totalSpending.toLocaleString()}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-xl transition-all hover:bg-gray-50">
            <div className="w-10 h-10 rounded-full bg-finance-savings/10 flex items-center justify-center">
              <Wallet className="h-5 w-5 text-finance-savings" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Savings</p>
              <p className="text-lg font-medium">${totalSavings.toLocaleString()} <span className="text-sm text-finance-savings">({savingsRate}%)</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialOverview;
