import { useEffect, useRef } from "react";
// Import your custom CSS file
// Import your custom CSS file

const Card = ({ onComplete, content, startRotation }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.style.setProperty(
        "--start-rotation",
        `${startRotation}deg`
      );
    }

    const initialDelayTimer = setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.style.animationPlayState = "running";
      }
    }, 100); // 2 seconds initial delay

    const rotationCompleteTimer = setTimeout(() => {
      onComplete();
    }, 3000); // 1 second rotation after 2 seconds delay

    return () => {
      clearTimeout(initialDelayTimer);
      clearTimeout(rotationCompleteTimer);
    };
  }, [onComplete, startRotation]);

  return (
    <div
      ref={cardRef}
      className="rotate-y-on-mount bg-blue-500 w-32 h-32 flex items-center justify-center text-white"
    >
      {content}
    </div>
  );
};

export default Card;
