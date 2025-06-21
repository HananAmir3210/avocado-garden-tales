
import { useState } from "react";
import Navigation from "../components/Navigation";
import FloatingPetals from "../components/FloatingPetals";
import { Flower } from "lucide-react";

const GardenOfMessages = () => {
  const [openFlower, setOpenFlower] = useState<number | null>(null);

  const messages = [
    {
      id: 1,
      message: "Your smile is my favorite sunrise, lighting up even the darkest mornings with hope and joy.",
      position: { top: "20%", left: "15%" },
      color: "from-yellow-300 to-sunflower"
    },
    {
      id: 2,
      message: "In a garden of a thousand flowers, you would still be the one that catches my eye first.",
      position: { top: "40%", left: "70%" },
      color: "from-orange-300 to-orange-400"
    },
    {
      id: 3,
      message: "Every book you read makes you more beautiful, as if knowledge itself blooms within your soul.",
      position: { top: "60%", left: "25%" },
      color: "from-pink-300 to-pink-400"
    },
    {
      id: 4,
      message: "You are my favorite character in the story of life, and I never want our chapter to end.",
      position: { top: "30%", left: "50%" },
      color: "from-purple-300 to-purple-400"
    },
    {
      id: 5,
      message: "Like a cow in peaceful meadows, you bring serenity to my restless fish heart.",
      position: { top: "70%", left: "60%" },
      color: "from-green-300 to-green-400"
    },
    {
      id: 6,
      message: "Every time you laugh, angels take notes on how to create pure joy.",
      position: { top: "15%", left: "65%" },
      color: "from-blue-300 to-blue-400"
    },
    {
      id: 7,
      message: "You are my avocado - wholesome, precious, and the perfect addition to every day.",
      position: { top: "50%", left: "15%" },
      color: "from-emerald-300 to-emerald-400"
    },
    {
      id: 8,
      message: "In the library of my heart, you are the most treasured, most beloved story.",
      position: { top: "80%", left: "35%" },
      color: "from-red-300 to-red-400"
    }
  ];

  const getPopupClasses = (flowerPosition: any) => {
    const left = parseFloat(flowerPosition.left);
    const top = parseFloat(flowerPosition.top);
    
    let positionClass = "";
    let tailClass = "";
    
    // Determine horizontal position
    if (left <= 25) {
      // Far left - popup goes to the right
      positionClass = "left-16 md:left-20";
      tailClass = "left-4";
    } else if (left >= 75) {
      // Far right - popup goes to the left
      positionClass = "right-16 md:right-20";
      tailClass = "right-4";
    } else {
      // Center - popup centers on flower
      positionClass = "left-1/2 transform -translate-x-1/2";
      tailClass = "left-1/2 transform -translate-x-1/2";
    }
    
    // Determine vertical position
    if (top >= 70) {
      // Bottom flowers - popup appears above
      positionClass += " bottom-16 md:bottom-20";
      tailClass += " -bottom-2 rotate-45";
    } else {
      // Top/middle flowers - popup appears below
      positionClass += " top-16 md:top-20";
      tailClass += " -top-2 rotate-45";
    }
    
    return { positionClass, tailClass };
  };

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <FloatingPetals />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Chapter Header */}
          <div className="text-center mb-16">
            <div className="font-handwritten text-lg text-sepia mb-2">Chapter II</div>
            <h1 className="chapter-heading text-5xl md:text-6xl mb-6">Garden of Messages</h1>
            <p className="font-storybook text-lg text-coffee/80 max-w-2xl mx-auto leading-relaxed">
              Each flower in this magical garden holds a special message just for you, my dear Avocado. 
              Click on the blooming flowers to reveal the love notes hidden within.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-sunflower to-sunflower-dark mx-auto rounded-full mt-6" />
          </div>
          
          {/* Interactive Garden */}
          <div className="relative min-h-[600px] md:min-h-[700px] bg-gradient-to-b from-green-50 to-green-100 rounded-2xl border-2 border-green-200 overflow-visible">
            {/* Background garden elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-green-200 to-transparent" />
              <div className="absolute top-10 left-10 text-4xl animate-gentle-sway">🌿</div>
              <div className="absolute top-20 right-20 text-3xl animate-gentle-sway" style={{ animationDelay: '1s' }}>🦋</div>
              <div className="absolute bottom-20 left-1/4 text-2xl animate-gentle-sway" style={{ animationDelay: '2s' }}>🌱</div>
              <div className="absolute top-1/3 left-1/3 text-3xl animate-gentle-sway" style={{ animationDelay: '0.5s' }}>🍃</div>
            </div>
            
            {/* Interactive Flowers */}
            {messages.map((item) => {
              const { positionClass, tailClass } = getPopupClasses(item.position);
              
              return (
                <div
                  key={item.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                  style={item.position}
                  onClick={() => setOpenFlower(openFlower === item.id ? null : item.id)}
                >
                  <div className="relative">
                    {/* Flower */}
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${item.color} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${openFlower === item.id ? 'scale-125' : ''} flex items-center justify-center animate-float`}>
                      <Flower className="text-white w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    
                    {/* Message Popup */}
                    {openFlower === item.id && (
                      <div className={`absolute ${positionClass} w-64 md:w-72 bg-warm-cream border-2 border-sunflower/50 rounded-lg p-4 shadow-xl z-50 animate-scale-in`}>
                        <div className={`absolute ${tailClass} w-4 h-4 bg-warm-cream border-r-2 border-b-2 border-sunflower/50`} />
                        <p className="font-handwritten text-coffee text-center leading-relaxed text-sm md:text-base">
                          {item.message}
                        </p>
                        <div className="text-center mt-3">
                          <span className="text-sunflower text-lg">💛</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            
            {/* Garden Stream */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 opacity-30 rounded-b-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-1/4 right-1/4 text-xl md:text-2xl animate-float" style={{ animationDelay: '1.5s' }}>🐄</div>
            <div className="absolute bottom-1/3 left-1/4 text-xl md:text-2xl animate-float" style={{ animationDelay: '2.5s' }}>🐟</div>
          </div>
          
          {/* Instructions */}
          <div className="text-center mt-8 bg-warm-cream/80 p-6 rounded-lg border border-sepia/20">
            <p className="font-handwritten text-cocoa text-lg">
              💡 Click on any flower to reveal a special message written just for you, my beloved Avocado
            </p>
          </div>
          
          {/* Special Note */}
          <div className="mt-12 bg-gradient-to-r from-sunflower/20 to-orange-200/20 p-8 rounded-lg border border-sunflower/30">
            <h3 className="font-romantic text-2xl text-cocoa text-center mb-4">
              From Your Fish's Heart 🐟
            </h3>
            <p className="font-storybook text-center text-coffee/80 leading-relaxed max-w-3xl mx-auto">
              This garden blooms eternally, just like my love for you. Each flower represents a moment 
              when I thought of you and felt my heart overflow with affection. May these messages 
              remind you daily of how deeply cherished you are.
            </p>
            <div className="text-center mt-6">
              <span className="text-4xl">🌻💛🌻</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GardenOfMessages;
