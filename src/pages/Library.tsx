
import Navigation from "../components/Navigation";
import FloatingPetals from "../components/FloatingPetals";
import { Book } from "lucide-react";

const Library = () => {
  const favoriteBooks = [
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      quote: "You have bewitched me, body and soul",
      color: "from-pink-200 to-rose-300",
      why: "Because love stories like Elizabeth and Darcy's remind me of us - unexpected, transformative, and absolutely perfect."
    },
    {
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      quote: "When you're given an opportunity to change your life, be brave enough to take it",
      color: "from-purple-200 to-purple-300",
      why: "For showing that love comes in many forms, and the most beautiful stories are often the most unexpected ones."
    },
    {
      title: "The Song of Achilles",
      author: "Madeline Miller",
      quote: "In the darkness, two shadows, reaching through the hopeless, heavy dusk",
      color: "from-blue-200 to-indigo-300",
      why: "Because it proves that some loves are so powerful they transcend time, distance, and even death itself."
    },
    {
      title: "Beach Read",
      author: "Emily Henry",
      quote: "The best things in life are scary",
      color: "from-yellow-200 to-orange-300",
      why: "Like our love story - unexpected genres that create the most beautiful narrative when they come together."
    },
    {
      title: "The Invisible Life of Addie LaRue",
      author: "V.E. Schwab",
      quote: "The beautiful things worth learning are worth learning for their own sake",
      color: "from-green-200 to-emerald-300",
      why: "Because you taught me that being remembered isn't about grand gestures - it's about the small, precious moments."
    },
    {
      title: "Red, White & Royal Blue",
      author: "Casey McQuiston",
      quote: "History, huh? Bet we could make some",
      color: "from-red-200 to-pink-300",
      why: "For its pure joy and the reminder that love stories should be celebrated, cherished, and lived out loud."
    }
  ];

  const poeticQuotes = [
    {
      text: "A reader lives a thousand lives before he dies. The man who never reads lives only one.",
      author: "George R.R. Martin",
      dedication: "For my Avocado, who lives beautifully in every story she reads"
    },
    {
      text: "Books are a uniquely portable magic.",
      author: "Stephen King",
      dedication: "Like the magic you bring to every day of my life"
    },
    {
      text: "I have always imagined that Paradise will be a kind of library.",
      author: "Jorge Luis Borges",
      dedication: "Then you, my love, must be an angel among the shelves"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <FloatingPetals />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Chapter Header */}
          <div className="text-center mb-16">
            <div className="font-handwritten text-lg text-sepia mb-2">Epilogue</div>
            <h1 className="chapter-heading text-5xl md:text-6xl mb-6">Uria's Library</h1>
            <p className="font-storybook text-lg text-coffee/80 max-w-2xl mx-auto leading-relaxed">
              A curated collection celebrating your love for literature, featuring books that have captured 
              your heart and quotes that remind me of your beautiful soul.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-sunflower to-sunflower-dark mx-auto rounded-full mt-6" />
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Favorite Books Section */}
            <div className="mb-16">
              <h2 className="font-romantic text-3xl text-cocoa text-center mb-12">
                Books That Live in Your Heart 📚
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteBooks.map((book, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${book.color} p-6 rounded-lg border-2 border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                  >
                    <div className="text-center mb-4">
                      <Book className="mx-auto text-coffee mb-3" size={32} />
                      <h3 className="font-handwritten text-xl text-coffee mb-1">
                        {book.title}
                      </h3>
                      <p className="font-storybook text-coffee/80 text-sm">
                        by {book.author}
                      </p>
                    </div>
                    
                    <div className="bg-white/70 p-4 rounded-lg mb-4">
                      <p className="font-storybook text-coffee/90 text-sm italic text-center leading-relaxed">
                        "{book.quote}"
                      </p>
                    </div>
                    
                    <div className="bg-warm-cream/80 p-3 rounded-lg">
                      <p className="font-handwritten text-coffee text-xs leading-relaxed">
                        <span className="font-semibold">Why I love that you love this:</span> {book.why}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Reading Corner */}
            <div className="mb-16 bg-warm-cream/80 p-8 md:p-12 rounded-lg border border-sepia/20 parchment-texture">
              <h2 className="font-romantic text-3xl text-cocoa text-center mb-8">
                Your Reading Corner 🛋️
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-6xl text-center mb-6">📖☕🌻</div>
                  <p className="font-storybook text-coffee/80 leading-relaxed text-center">
                    I love watching you in your element - curled up with a book, a warm cup of tea nearby, 
                    lost in worlds of imagination and wonder. You make reading look like the most romantic 
                    thing in the universe.
                  </p>
                </div>
                
                <div className="bg-sunflower/20 p-6 rounded-lg border border-sunflower/30">
                  <h3 className="font-handwritten text-xl text-cocoa mb-4 text-center">
                    Your Reading Personality
                  </h3>
                  <ul className="space-y-2 font-storybook text-coffee/80">
                    <li>📚 Genre Explorer - You fearlessly dive into any story</li>
                    <li>💭 Deep Thinker - You find meaning in every page</li>
                    <li>💛 Emotional Reader - You feel every character's journey</li>
                    <li>🌟 Quote Collector - Beautiful words stick to your soul</li>
                    <li>📝 Mental Note-taker - You remember the important moments</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Poetic Quotes */}
            <div className="mb-16">
              <h2 className="font-romantic text-3xl text-cocoa text-center mb-12">
                Quotes That Remind Me of You 💫
              </h2>
              
              <div className="space-y-6">
                {poeticQuotes.map((quote, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-sepia/10 to-sunflower/10 p-8 rounded-lg border border-sepia/20 text-center"
                  >
                    <p className="font-storybook text-lg text-coffee/90 italic mb-4 leading-relaxed">
                      "{quote.text}"
                    </p>
                    <p className="font-handwritten text-sepia mb-2">
                      — {quote.author}
                    </p>
                    <p className="font-romantic text-cocoa text-sm">
                      {quote.dedication}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Book Recommendations */}
            <div className="bg-gradient-to-br from-sunflower/20 to-orange-200/20 p-8 md:p-12 rounded-lg border border-sunflower/30">
              <h2 className="font-romantic text-3xl text-cocoa text-center mb-8">
                Future Adventures 🗺️
              </h2>
              
              <div className="text-center">
                <p className="font-storybook text-coffee/80 leading-relaxed mb-6 max-w-3xl mx-auto">
                  Every book you read becomes part of your story, and your story becomes more beautiful with each page. 
                  I can't wait to hear about all the new worlds you'll discover, all the characters you'll fall in love with, 
                  and all the quotes that will make your eyes light up.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-warm-cream/80 p-4 rounded-lg">
                    <div className="text-2xl mb-2">🌙</div>
                    <p className="font-handwritten text-cocoa text-sm">
                      Late night reading sessions with tea and fairy lights
                    </p>
                  </div>
                  <div className="bg-warm-cream/80 p-4 rounded-lg">
                    <div className="text-2xl mb-2">☀️</div>
                    <p className="font-handwritten text-cocoa text-sm">
                      Sunny afternoon adventures in fictional worlds
                    </p>
                  </div>
                  <div className="bg-warm-cream/80 p-4 rounded-lg">
                    <div className="text-2xl mb-2">💛</div>
                    <p className="font-handwritten text-cocoa text-sm">
                      Sharing favorite quotes and beautiful moments
                    </p>
                  </div>
                </div>
                
                <div className="font-romantic text-xl text-cocoa">
                  Keep reading, keep dreaming, keep being wonderful 📚✨
                </div>
                
                <div className="mt-6 text-right">
                  <span className="font-handwritten text-sepia">
                    — Your Fish who loves watching you read 🐟💛
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
