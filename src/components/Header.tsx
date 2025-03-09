
import React from 'react';
import { cn } from "@/lib/utils";
import { Home, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn(
      "w-full py-4 px-6 flex items-center justify-between bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 animate-fade-in",
      className
    )}>
      <div className="flex items-center gap-1.5">
        <Menu className="h-5 w-5 text-gray-500" />
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Home className="h-5 w-5 text-gray-500" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
