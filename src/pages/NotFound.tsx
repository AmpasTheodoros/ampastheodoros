
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-navy text-white p-4">
      <div className="text-center max-w-md">
        <h1 className="text-gold text-8xl font-bold mb-6">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Button 
          variant="outline" 
          className="border-2 border-gold text-gold hover:bg-gold hover:text-white transition-colors duration-300"
          asChild
        >
          <a href="/">
            <ArrowLeft className="mr-2" size={16} />
            Return to Homepage
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
