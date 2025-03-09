
import React from 'react';
import { cn } from "@/lib/utils";
import { CreditCard, Wallet, BarChart4 } from 'lucide-react';

interface ProductRecommendationsProps {
  className?: string;
}

const ProductRecommendations: React.FC<ProductRecommendationsProps> = ({ className }) => {
  // Sample product data - in a real app, this would come from your backend
  const products = [
    {
      id: 1,
      title: "TD High Interest Savings",
      description: "Maximize your money growth with our premium savings account",
      icon: <Wallet className="h-5 w-5" />,
    },
    {
      id: 2,
      title: "TD Platinum Credit Card",
      description: "Earn rewards on everyday purchases with low annual fees",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      id: 3,
      title: "TD Investment Portfolio",
      description: "Start investing with personalized portfolio options",
      icon: <BarChart4 className="h-5 w-5" />,
    }
  ];

  return (
    <div className={cn(
      "glass-card p-6 animate-slide-up",
      className
    )}>
      <div className="border-b border-gray-100 pb-4 mb-4">
        <p className="text-sm text-gray-500">Based on your cash flow</p>
        <h2 className="text-xl font-medium">You could approach one of our products</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div 
            key={product.id}
            className="rounded-xl border border-gray-100 p-4 transition-all hover:shadow-md hover:border-gray-200 cursor-pointer"
            style={{
              animationDelay: `${index * 100}ms`,
              animation: "slide-up 0.5s ease-out forwards",
              opacity: 0,
              transform: "translateY(20px)"
            }}
          >
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mb-3">
              {product.icon}
            </div>
            <h3 className="font-medium mb-1">{product.title}</h3>
            <p className="text-sm text-gray-500">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductRecommendations;
