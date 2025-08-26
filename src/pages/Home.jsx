import { useState, useEffect } from "react";
import Github from "../assets/Github.png";
import Dribble from "../assets/Dribble.png";
import Twitter from "../assets/Twitter.png";
import LinkedIn from "../assets/Linkedin.png";
import Pintrest from "../assets/Pintrest.png";

export default function Home({ theme }) {
  const nameToDisplay = "YASWANTH KUMAR";
  const symbols = "!@#$%^&*()_+<>?<?.,'*/-~`";
  const [displayedName, setDisplayedName] = useState(
    nameToDisplay.replace(/[A-Z ]/g, () =>
      symbols[Math.floor(Math.random() * symbols.length)]
    )
  );
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let revealedIndex = 0;
    const totalDuration = 3000;
    const revealInterval = totalDuration / nameToDisplay.length;

    const scrambleIntervalId = setInterval(() => {
      setDisplayedName(() => {
        let newName = "";
        for (let i = 0; i < nameToDisplay.length; i++) {
          if (i < revealedIndex) {
            newName += nameToDisplay[i];
          } else {
            newName += symbols[Math.floor(Math.random() * symbols.length)];
          }
        }
        return newName;
      });
    }, 50);

    const revealIntervalId = setInterval(() => {
      revealedIndex++;
      if (revealedIndex > nameToDisplay.length) {
        clearInterval(revealIntervalId);
        clearInterval(scrambleIntervalId);
        setDisplayedName(nameToDisplay);
        setIsTypingComplete(true);
      }
    }, revealInterval);

    return () => {
      clearInterval(scrambleIntervalId);
      clearInterval(revealIntervalId);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4">
      <div className="max-w-3xl">
        
        {/* FIX: reserve space + nowrap + responsive text */}
        <h1 className="min-h-[80px] text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-yellow-300 dark:to-orange-400 p-4">
          {displayedName}
          <span
            className={`inline-block w-1 h-10 ${
              theme === "dark" ? "bg-white" : "bg-black"
            } animate-blink transition-opacity duration-300 ${
              isTypingComplete ? "opacity-0" : "opacity-100"
            }`}
          ></span>
        </h1>

        <p
          className={`mt-4 text-lg md:text-2xl font-semibold ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Web Developer & UI/UX Enthusiast
        </p>
        <p
          className={`mt-6 max-w-2xl mx-auto text-base md:text-lg  ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Crafting beautiful and intuitive digital experiences. I specialize in
          building modern, responsive web applications with a focus on
          user-centric design.
        </p>

        {/* Social media icons */}
        <div className="mt-10 flex items-center justify-center gap-6">
          {/* GitHub */}
          <a
            href="https://github.com/yash-b6k"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-120"
          >
            <img src={Github} alt="GitHub" className="w-6 h-6" />
          </a>

          {/* Dribbble */}
          <a
            href="https://dribbble.com/Ricky_tripo"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-120"
          >
            <img src={Dribble} alt="Dribbble" className="w-6 h-6" />
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/yashrajb6k"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-120"
          >
            <img src={Twitter} alt="Twitter" className="w-6 h-6" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ricky2000/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-120"
          >
            <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6" />
          </a>

          {/* Pinterest */}
          <a
            href="https://in.pinterest.com/yashrajb6k/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-120"
          >
            <img src={Pintrest} alt="Pinterest" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
