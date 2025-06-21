
import { Link, useLocation } from "react-router-dom";
import { Book, Flower, Home, Leaf } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home, chapter: "Prologue" },
    { path: "/our-story", label: "Our Story", icon: Book, chapter: "Chapter I" },
    { path: "/garden-of-messages", label: "Garden of Messages", icon: Flower, chapter: "Chapter II" },
    { path: "/letters", label: "Letters from Your Fish", icon: Leaf, chapter: "Chapter III" },
    { path: "/library", label: "Uria's Library", icon: Book, chapter: "Epilogue" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-parchment/90 backdrop-blur-sm border-b border-sepia/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-romantic text-2xl text-cocoa">
            Avocado's Garden 🌻
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-sunflower/20 text-cocoa"
                      : "text-sepia hover:text-cocoa hover:bg-warm-cream"
                  }`}
                >
                  <Icon size={18} className="group-hover:animate-gentle-sway" />
                  <div className="flex flex-col">
                    <span className="text-xs font-handwritten opacity-70">
                      {item.chapter}
                    </span>
                    <span className="font-storybook text-sm">
                      {item.label}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-cocoa hover:text-sepia transition-colors">
              <Book size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
