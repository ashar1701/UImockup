import React from 'react';
import { cn } from "@/lib/utils";
import { Compass, PieChart, CreditCard, Settings, HelpCircle } from 'lucide-react';

interface NavBarProps {
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  const navItems = [
    { icon: <Compass className="h-5 w-5" />, label: 'myCompass', active: true },
    { icon: <PieChart className="h-5 w-5" />, label: 'Insights', active: false },
    { icon: <CreditCard className="h-5 w-5" />, label: 'Accounts', active: false },
    { icon: <Settings className="h-5 w-5" />, label: 'Settings', active: false },
    { icon: <HelpCircle className="h-5 w-5" />, label: 'Help', active: false },
  ];

  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 bg-[#43B02A] border-t border-gray-100 py-2 px-6 z-40 md:hidden",
      className
    )}>
      <div className="flex justify-between items-center">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={cn(
              "flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all",
              item.active ? "text-white font-semibold" : "text-white/80 hover:text-white"
            )}
          >
            {item.icon}
            <span className="text-xs">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
