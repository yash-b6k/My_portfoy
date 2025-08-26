import { useState, useEffect, useMemo } from "react";
import { DownloadIcon } from "lucide-react";

export default function About({ theme, setPage }) {
  const isDark = theme === "dark";
  const imageUrl = "https://placehold.co/1000x1000/222/FFF?text=IMAGE+FITS+SOONER";

  // Titles for typing animation
  const titles = useMemo(() => [ "Web Developer", "photographer", "UI/UX Designer", "Creative Coder", "ILLustrator", "Problem Solver", "Tech Enthusiast"], []);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(6);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Name scramble animation
  const nameToDisplay = "DESIGN MEETS DEVELOPMENT";
  const symbols = "!@#$%^&*()_+<>?<?.,'*/-~`";
  const [displayedName, setDisplayedName] = useState(
    nameToDisplay.replace(/[A-Z ]/g, () =>
      symbols[Math.floor(Math.random() * symbols.length)]
    )
  );

  // Typing & deleting animation (fixed)
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    let typingSpeed = isDeleting ? 50 : 120;

    const handleTyping = () => {
      setDisplayedTitle((prev) => {
        if (!isDeleting) {
          if (prev.length < currentTitle.length) {
            return currentTitle.substring(0, prev.length + 1);
          } else {
            // word finished → wait then delete
            setTimeout(() => setIsDeleting(true), 1000);
            return prev;
          }
        } else {
          if (prev.length > 0) {
            return prev.substring(0, prev.length - 1);
          } else {
            // move to next word
            setIsDeleting(false);
            setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
            return "";
          }
        }
      });
    };

    const interval = setInterval(handleTyping, typingSpeed);
    return () => clearInterval(interval);
  }, [titles, currentTitleIndex, isDeleting]);

  // Name reveal effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedName((prev) => {
        if (i < nameToDisplay.length) {
          const updated =
            nameToDisplay.substring(0, i + 1) +
            prev.substring(i + 1);
          i++;
          return updated;
        }
        clearInterval(interval);
        return prev;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [nameToDisplay]);

  return (
    <div className="min-h-[calc(100vh-80px)] w-full flex items-center justify-center p-8 sm:p-12 md:p-16 transition-colors duration-300">
      <div
        className={`w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start md:space-x-12 lg:space-x-20 ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        {/* Left Column - Image */}
        <div className="flex flex-col items-center justify-center flex-shrink-0 mb-8 md:mb-0">
          <div
            className={`relative w-64 h-64 md:w-96 md:h-100 p-4 rounded-full shadow-2xl transition-all duration-300 ${
              isDark ? "bg-gray-100" : "bg-gray-100"
            }`}
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src={imageUrl}
                alt="A professional headshot of the developer."
                className="w-full h-full object-cover rounded-full transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Text */}
        <div className="flex-grow text-center md:text-left">
          <p className="text-gray-600 dark:text-gray-300 uppercase font-semibold text-sm tracking-widest mb-2 transition-colors duration-300">
            {displayedTitle}
            <span className="inline-block w-1 h-3 bg-gray-600 dark:bg-gray-300 animate-blink ml-1"></span>
          </p>

          {/* Name with scramble effect */}
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-yellow-300 dark:to-orange-400 mb-6">
          {displayedName}</h2>

          <p className="text-base md:text-lg mb-8 dark:text-gray-400 max-w-xl mx-auto md:mx-0">
            I am a Web Developer and UI/UX Designer passionate about crafting clean, responsive, and user-friendly websites. I focus on blending creativity with functionality to deliver seamless digital experiences. My goal is to design interfaces that are not only visually appealing but also intuitive and easy to use. With each project, I strive to turn ideas into impactful products that engage and inspire users.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Download CV */}
            <a
              href="../../public/Resume.pdf"
              download="Yaswanth_8501050535.pdf"
              className="w-full sm:w-auto px-6 py-3 font-semibold rounded-full text-white bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
            >
              <DownloadIcon className="h-5 w-5" />
              Download Resume
            </a>

            {/* My Works */}
           
              <button
  onClick={() => setPage("works")}
  className={`w-full sm:w-auto px-12 py-3 font-semibold rounded-full border transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg
    ${isDark 
      ? "border-white text-white hover:bg-white hover:text-black" 
      : "border-black text-black hover:bg-black hover:text-white"
    }`}
>              My Works
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
