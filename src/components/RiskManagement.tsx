
import React from 'react';
import { cn } from "@/lib/utils";
import { Shield } from 'lucide-react';

interface RiskManagementProps {
  className?: string;
  standalone?: boolean;
}

const RiskManagement: React.FC<RiskManagementProps> = ({ className, standalone = false }) => {
  return (
    <div className={cn(
      standalone ? "glass-card p-6 animate-slide-in-right" : "",
      "transition-all duration-300",
      className
    )}>
      {standalone && (
        <>
          <div className="flex items-center gap-2 mb-3">
            <Shield className="h-5 w-5 text-finance-highlight" />
            <h2 className="text-xl font-medium">Risk Management</h2>
          </div>
        </>
      )}
      
      <div className={cn(
        "rounded-xl bg-finance-highlight/5 border border-finance-highlight/10 p-4",
        standalone ? "" : "mt-4"
      )}>
        <h3 className={cn(
          "text-finance-highlight font-medium",
          standalone ? "text-lg mb-2" : "text-base mb-1"
        )}>
          What is Risk Management?
        </h3>
        <p className="text-sm text-gray-600">
          The process of identifying, analyzing and accepting or mitigating uncertainty in investment decisions. Effective risk management helps minimize potential losses while maximizing returns.
        </p>
      </div>
    </div>
  );
};

export default RiskManagement;
