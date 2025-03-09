
import React from 'react';
import { cn } from "@/lib/utils";
import { Wallet } from 'lucide-react';

interface FinancialOverviewProps {
  className?: string;
}

const FinancialOverview: React.FC<FinancialOverviewProps> = ({ className }) => {
  return (
    <div className={cn(
      "glass-card p-6 transition-all duration-300 animate-scale-in",
      className
    )}>
      <div className="flex items-center gap-4 py-4">
        <div className="w-12 h-12 rounded-full bg-finance-savings/10 flex items-center justify-center">
          <Wallet className="h-6 w-6 text-finance-savings" />
        </div>
        <div>
          <h2 className="text-2xl font-medium">You saved more this month!</h2>
          <p className="text-gray-500">Keep up the great work with your financial goals</p>
        </div>
      </div>
    </div>
  );
};

export default FinancialOverview;
