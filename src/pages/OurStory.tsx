
import Navigation from "../components/Navigation";
import FloatingPetals from "../components/FloatingPetals";

const OurStory = () => {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      <FloatingPetals />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Chapter Header */}
            <div className="text-center mb-16">
              <div className="font-handwritten text-lg text-sepia mb-2">Chapter I</div>
              <h1 className="chapter-heading text-5xl md:text-6xl mb-6">Our Story</h1>
              <div className="w-32 h-1 bg-gradient-to-r from-sunflower to-sunflower-dark mx-auto rounded-full" />
            </div>
            
            {/* Story Content */}
            <div className="space-y-12">
              {/* How We Met */}
              <div className="bg-warm-cream/80 p-8 md:p-12 rounded-lg border border-sepia/20 parchment-texture">
                <h2 className="font-romantic text-3xl text-cocoa mb-6 text-center">
                  Once Upon a Time... 🌻
                </h2>
                
                <div className="prose prose-lg max-w-none font-storybook text-coffee/80 leading-relaxed">
                  <p className="text-xl italic text-center mb-8">
                    "Every love story is beautiful, but ours is my favorite."
                  </p>
                  
                  <p className="mb-6">
                    In a world filled with ordinary encounters, something extraordinary happened. 
                    Two souls, destined to find each other, crossed paths in the most beautiful way. 
                    It was as if the universe had been writing our story long before we knew each other existed.
                  </p>
                  
                  <p className="mb-6">
                    From the very first moment, there was something different about you, my dear Avocado. 
                    Perhaps it was the way you lit up every room you entered, like sunflowers turning 
                    toward the sun. Or maybe it was how your love for books revealed the depth of your 
                    beautiful soul.
                  </p>
                  
                  <p>
                    And so began our fairy tale—you, my beloved cow, and me, your devoted fish. 
                    Two unlikely characters in a love story that defies all conventional logic but 
                    makes perfect sense to our hearts.
                  </p>
                </div>
              </div>
              
              {/* Our Journey */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-sunflower/10 to-warm-cream p-8 rounded-lg border border-sunflower/30">
                  <div className="text-4xl mb-4 text-center">🐄</div>
                  <h3 className="font-handwritten text-2xl text-cocoa mb-4 text-center">My Beloved Cow</h3>
                  <p className="text-coffee/80 text-center leading-relaxed">
                    Strong, nurturing, and gentle—you bring comfort and warmth to every day. 
                    Like a cow in a peaceful meadow, you create a sense of home wherever you are.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-100 to-warm-cream p-8 rounded-lg border border-blue-200">
                  <div className="text-4xl mb-4 text-center">🐟</div>
                  <h3 className="font-handwritten text-2xl text-cocoa mb-4 text-center">Your Devoted Fish</h3>
                  <p className="text-coffee/80 text-center leading-relaxed">
                    Swimming through life's currents, always finding my way back to you. 
                    Like a fish in clear waters, my love for you flows endlessly and pure.
                  </p>
                </div>
              </div>
              
              {/* Love Letter */}
              <div className="bg-warm-cream/80 p-8 md:p-12 rounded-lg border-2 border-sunflower/30 parchment-texture relative">
                <div className="absolute -top-4 left-8 bg-sunflower px-4 py-2 rounded-full">
                  <span className="font-handwritten text-coffee text-sm">A Letter for You</span>
                </div>
                
                <div className="font-romantic text-lg text-cocoa leading-relaxed">
                  <p className="mb-4">My Dearest Avocado,</p>
                  
                  <p className="mb-4">
                    Every morning I wake up grateful for the gift of loving you. You are my 
                    sunshine after rain, my favorite chapter in the book of life, my home 
                    in this vast universe.
                  </p>
                  
                  <p className="mb-4">
                    In your eyes, I see galaxies of dreams and possibilities. In your smile, 
                    I find the courage to face any storm. In your laughter, I discover pure joy.
                  </p>
                  
                  <p className="mb-4">
                    Like sunflowers always turn toward the light, my heart always turns toward you. 
                    You are my constant, my inspiration, my greatest love story.
                  </p>
                  
                  <p className="text-right">
                    Forever yours,<br />
                    Your Fish 🐟💛
                  </p>
                </div>
              </div>
              
              {/* Timeline */}
              <div className="bg-warm-cream/80 p-8 md:p-12 rounded-lg border border-sepia/20">
                <h2 className="font-romantic text-3xl text-cocoa mb-8 text-center">
                  Moments That Matter
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-sunflower rounded-full flex items-center justify-center">
                      <span className="text-coffee text-sm">💛</span>
                    </div>
                    <div>
                      <h4 className="font-handwritten text-lg text-cocoa">The First Hello</h4>
                      <p className="text-coffee/80">When words became bridges between two hearts</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-sunflower rounded-full flex items-center justify-center">
                      <span className="text-coffee text-sm">📚</span>
                    </div>
                    <div>
                      <h4 className="font-handwritten text-lg text-cocoa">Sharing Stories</h4>
                      <p className="text-coffee/80">When we discovered our mutual love for literature and dreams</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-sunflower rounded-full flex items-center justify-center">
                      <span className="text-coffee text-sm">🌻</span>
                    </div>
                    <div>
                      <h4 className="font-handwritten text-lg text-cocoa">Growing Together</h4>
                      <p className="text-coffee/80">Like sunflowers reaching toward the sun, we grew toward each other</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-sunflower rounded-full flex items-center justify-center">
                      <span className="text-coffee text-sm">💕</span>
                    </div>
                    <div>
                      <h4 className="font-handwritten text-lg text-cocoa">Today & Always</h4>
                      <p className="text-coffee/80">Every day writing new chapters in our beautiful story</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
