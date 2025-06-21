
import { useEffect, useState } from "react";

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const createPetals = () => {
      const newPetals = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 4
      }));
      setPetals(newPetals);
    };

    createPetals();
    const interval = setInterval(createPetals, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute w-3 h-3 opacity-70"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-sunflower to-sunflower-dark rounded-full animate-petal-fall transform rotate-45" />
        </div>
      ))}
    </div>
  );
};

export default FloatingPetals;
