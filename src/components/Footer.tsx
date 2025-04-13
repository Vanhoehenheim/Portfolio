
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              Made with <Heart className="h-4 w-4 text-playful-pink fill-playful-pink" /> by me © {currentYear}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
