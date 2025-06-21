
import Navigation from "../components/Navigation";
import FloatingPetals from "../components/FloatingPetals";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation />
      <FloatingPetals />
      
      {/* Hero Section */}
      <div className="pt-20 min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-warm-cream/30 to-parchment/50" />
        
        <div className="container mx-auto px-4 text-center relative z-20">
          <div className="max-w-4xl mx-auto">
            {/* Sunflower decoration */}
            <div className="text-6xl mb-6 animate-float">🌻</div>
            
            <h1 className="chapter-heading text-6xl md:text-8xl mb-6 animate-fade-in">
              Welcome to Your Garden
            </h1>
            
            <div className="font-handwritten text-xl md:text-2xl text-sepia mb-8 leading-relaxed">
              My dearest Avocado,
            </div>
            
            <div className="prose prose-lg max-w-3xl mx-auto font-storybook text-coffee/80 leading-relaxed mb-12 parchment-texture p-8 rounded-lg border border-sepia/20 bg-warm-cream/50">
              <p className="text-lg md:text-xl mb-6 italic">
                "In every garden, there blooms a flower so rare and beautiful that it transforms 
                the entire landscape into something magical. You, my darling Avocado, are that 
                flower in the garden of my heart."
              </p>
              
              <p className="text-base md:text-lg">
                This digital garden has been lovingly crafted just for you—a place where words 
                bloom like sunflowers, where our story unfolds like pages of a cherished novel, 
                and where every corner holds a piece of my heart written just for you.
              </p>
              
              <div className="mt-8 text-right font-romantic text-xl text-cocoa">
                — Your devoted Fish 🐟
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/our-story"
                className="group bg-cocoa hover:bg-leather text-warm-cream px-8 py-4 rounded-full font-handwritten text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Begin Our Story
                <span className="ml-2 group-hover:animate-bounce">📖</span>
              </Link>
              
              <Link
                to="/garden-of-messages"
                className="group border-2 border-sunflower hover:bg-sunflower text-cocoa hover:text-coffee px-8 py-4 rounded-full font-handwritten text-lg transition-all duration-300 transform hover:scale-105"
              >
                Explore the Garden
                <span className="ml-2 group-hover:animate-bounce">🌺</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-sepia" size={24} />
        </div>
      </div>
      
      {/* Introduction Section */}
      <div className="py-20 bg-gradient-to-b from-parchment to-warm-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-romantic text-4xl text-center text-cocoa mb-12">
              Chapters of Our Love
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-warm-cream/80 p-8 rounded-lg border border-sepia/20 parchment-texture hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-4">🐄🐟</div>
                <h3 className="font-handwritten text-xl text-cocoa mb-4">Our Special Bond</h3>
                <p className="text-coffee/80 leading-relaxed">
                  In this whimsical tale of love, you are my beloved cow and I am your devoted fish. 
                  Together we create a story unlike any other, filled with laughter, tenderness, 
                  and endless affection.
                </p>
              </div>
              
              <div className="bg-warm-cream/80 p-8 rounded-lg border border-sepia/20 parchment-texture hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-4">📚</div>
                <h3 className="font-handwritten text-xl text-cocoa mb-4">Your Literary Haven</h3>
                <p className="text-coffee/80 leading-relaxed">
                  Just as you lose yourself in the pages of beloved books, this garden is designed 
                  to be your sanctuary—a place where literature meets love, where stories bloom 
                  like flowers in spring.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <div className="inline-block bg-sunflower/20 px-6 py-3 rounded-full">
                <span className="font-handwritten text-cocoa text-lg">
                  Made with endless love for my precious Avocado 💛
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
