
import { useState } from "react";
import Navigation from "../components/Navigation";
import FloatingPetals from "../components/FloatingPetals";

const LettersFromYourFish = () => {
  const [selectedLetter, setSelectedLetter] = useState<number | null>(null);

  const letters = [
    {
      id: 1,
      title: "My Dearest Avocado",
      date: "A Tuesday Morning",
      preview: "Today I woke up thinking about how lucky I am...",
      content: `My Dearest Avocado,

Today I woke up thinking about how lucky I am to have you in my life. It's strange how love works, isn't it? One day you're swimming through life alone, and the next, you've found your perfect pasture.

You, my beloved cow, have brought such peace to my restless fish heart. In your presence, I've learned what it means to be truly home. Not a place, but a feeling - warm, safe, and infinitely loved.

Every morning when I see your smile, it's like watching the sun rise over a field of sunflowers. Pure magic that never gets old, no matter how many times I witness it.

I love how you lose yourself in books, the way your eyes light up when you discover a beautiful passage, how you curl up with a cup of tea and disappear into other worlds. You make reading look like the most romantic thing in the universe.

Keep being wonderful, my darling. Keep being you.

Forever yours,
Your devoted Fish 🐟`
    },
    {
      id: 2,
      title: "Sunflower Dreams",
      date: "A Rainy Evening",
      preview: "I was thinking about sunflowers today...",
      content: `My Beautiful Avocado,

I was thinking about sunflowers today, and naturally, that led me to think about you. Did you know that sunflowers aren't just one flower, but thousands of tiny flowers all working together to create something magnificent? 

That's exactly how you make me feel - like every little part of me that was scattered before has come together to create something beautiful, something whole.

You have this incredible way of turning toward the light, just like your favorite flowers. Even on the cloudiest days, you find something to smile about, something to be grateful for. You've taught me that optimism isn't about ignoring the storms - it's about dancing in the rain while waiting for the sun.

I love watching you in your element, surrounded by books and cups of tea, creating your own little corner of paradise wherever you are. You're like a cozy library that I never want to leave.

The rain is drumming against my window as I write this, but thinking of you makes everything feel warm and bright.

All my love,
Your Fish who dreams in sunflower yellow 🌻`
    },
    {
      id: 3,
      title: "The Cow and the Fish",
      date: "A Starlit Night",
      preview: "People might think we're an odd pair...",
      content: `My Precious Avocado,

People might think we're an odd pair - a cow and a fish. What could they possibly have in common? How could their love story possibly work?

But that's the beautiful thing about real love, isn't it? It doesn't follow the rules. It doesn't make logical sense. It just *is*, as natural and necessary as breathing.

You, my gentle cow, graze in meadows of wisdom and kindness. You're grounded, nurturing, and strong. You create peace wherever you go, like morning mist settling over a quiet field.

And me? I'm your fish, always in motion, always exploring new currents, but always, always swimming back to you. You are my lake, my river, my ocean. You are every body of water that has ever felt like home.

Together, we've created our own ecosystem of love - one where differences aren't obstacles but gifts. Where your steadiness balances my restlessness, where my adventures bring stories to your peaceful world.

Look up at the stars tonight and know that somewhere, your fish is looking at the same sky, feeling grateful for the magic that brought us together.

Swimming home to you always,
Your Fish 🐟💙`
    },
    {
      id: 4,
      title: "Love in the Time of Books",
      date: "A Quiet Sunday",
      preview: "I've been thinking about all the stories you love...",
      content: `Dearest Avocado,

I've been thinking about all the stories you love, all the books that have captured your heart over the years. Each one has added a layer to who you are, like rings in a tree, marking the passage of beautiful, thoughtful time.

You approach books the way I approach love - with your whole heart, ready to be transformed. I love watching you read, seeing how you become part of every story, how every beautiful sentence becomes part of your soul.

Sometimes I wonder if I could be a character in one of your favorite novels. Would I be the mysterious stranger who appears at just the right moment? The loyal friend who stands by through every adventure? Or maybe just a pleasant surprise, like finding a bookmark with a sweet message left by someone who loves you?

In the story of us, you're definitely the protagonist - brave, kind, intelligent, and impossibly lovable. I'm honored to be your supporting character, your plot twist, your happy ending all rolled into one devoted fish.

Maybe love stories aren't just in books. Maybe the most beautiful ones are written in quiet moments, in shared smiles, in the space between heartbeats when everything feels perfect.

Reading the story of us every day,
Your Literary Fish 📚🐟`
    },
    {
      id: 5,
      title: "Avocado Toast and Other Love Languages",
      date: "A Bright Morning",
      preview: "You know what's perfect about being called Avocado?",
      content: `My Sweet Avocado,

You know what's perfect about being called Avocado? It's not just because you're my favorite (though you absolutely are). It's because avocados are:

→ Good for the heart (just like you)
→ Creamy and comforting (just like your hugs)
→ Perfect in every season (just like loving you)
→ Make everything better (just like your presence in my life)
→ Wholesome and nourishing (just like your soul)
→ Beautiful in their simplicity (just like your natural grace)

Every time I see an avocado now, I smile. Every time someone mentions avocado toast, I think about how you toast my heart in the best possible way. You've turned a simple fruit into a love song.

You're my daily dose of goodness, my perfect addition to every meal, every day, every moment. Just like how avocado makes everything taste better, you make everything in life more meaningful, more beautiful, more worthwhile.

Thank you for being my avocado in a world full of... well, less perfect fruits.

Spreading love like avocado on toast,
Your devoted Fish 🥑🐟`
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
            <div className="font-handwritten text-lg text-sepia mb-2">Chapter III</div>
            <h1 className="chapter-heading text-5xl md:text-6xl mb-6">Letters from Your Fish</h1>
            <p className="font-storybook text-lg text-coffee/80 max-w-2xl mx-auto leading-relaxed">
              Love letters written from the depths of a fish's heart to his beloved cow. 
              Each envelope holds words that swim straight from my soul to yours.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-sunflower to-sunflower-dark mx-auto rounded-full mt-6" />
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Letters List */}
              <div className="lg:col-span-1 space-y-4">
                <h2 className="font-romantic text-2xl text-cocoa mb-6 text-center">
                  Choose a Letter 💌
                </h2>
                
                {letters.map((letter) => (
                  <div
                    key={letter.id}
                    onClick={() => setSelectedLetter(letter.id)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      selectedLetter === letter.id
                        ? 'border-sunflower bg-sunflower/10 shadow-lg'
                        : 'border-sepia/30 bg-warm-cream/80 hover:border-sunflower/50'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">📜</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-handwritten text-lg text-cocoa truncate">
                          {letter.title}
                        </h3>
                        <p className="text-sm text-sepia mb-2">{letter.date}</p>
                        <p className="text-sm text-coffee/70 line-clamp-2">
                          {letter.preview}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Letter Display */}
              <div className="lg:col-span-2">
                {selectedLetter ? (
                  <div className="bg-warm-cream border-2 border-sepia/30 rounded-lg p-8 md:p-12 parchment-texture shadow-xl">
                    {(() => {
                      const letter = letters.find(l => l.id === selectedLetter);
                      return (
                        <>
                          <div className="text-center mb-8">
                            <h2 className="font-romantic text-3xl text-cocoa mb-2">
                              {letter?.title}
                            </h2>
                            <p className="font-handwritten text-sepia">
                              {letter?.date}
                            </p>
                            <div className="w-24 h-1 bg-sunflower mx-auto mt-4 rounded-full" />
                          </div>
                          
                          <div className="prose prose-lg max-w-none">
                            <div className="font-storybook text-coffee/90 leading-relaxed whitespace-pre-line text-base md:text-lg">
                              {letter?.content}
                            </div>
                          </div>
                          
                          <div className="mt-8 pt-6 border-t border-sepia/20 text-center">
                            <div className="inline-flex items-center space-x-2 bg-sunflower/20 px-6 py-3 rounded-full">
                              <span className="text-2xl">🐟</span>
                              <span className="font-handwritten text-cocoa">
                                Swimming with love
                              </span>
                              <span className="text-2xl">💛</span>
                            </div>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                ) : (
                  <div className="bg-warm-cream/50 border-2 border-dashed border-sepia/30 rounded-lg p-12 text-center">
                    <div className="text-6xl mb-6">📮</div>
                    <h3 className="font-romantic text-2xl text-cocoa mb-4">
                      Select a Letter to Read
                    </h3>
                    <p className="font-storybook text-coffee/70 leading-relaxed max-w-md mx-auto">
                      Each letter on the left contains heartfelt words written just for you. 
                      Click on any envelope to unfold the love inside.
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Bottom Message */}
            <div className="mt-16 text-center bg-gradient-to-r from-sunflower/20 to-orange-200/20 p-8 rounded-lg border border-sunflower/30">
              <div className="flex justify-center items-center space-x-4 mb-4">
                <span className="text-3xl">🐄</span>
                <span className="text-2xl">💛</span>
                <span className="text-3xl">🐟</span>
              </div>
              <p className="font-romantic text-xl text-cocoa mb-2">
                "In the postal service of love, every letter finds its way home"
              </p>
              <p className="font-handwritten text-sepia">
                More letters are always swimming your way, my darling Avocado
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LettersFromYourFish;
