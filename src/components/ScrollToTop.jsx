import React, { useState, useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button if scrolled down 100vh or more
      if (window.scrollY >= (window.innerHeight / 4)) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    // Smooth scroll to top
    window.scrollTo({ top: 0});
  };

  return (
    <div>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 text-5xl right-8 text-yellow-500 bg-[#0083fc] rounded-full p-1 shadow-lg transition-all duration-500 hover:bg-yellow-500 hover:text-[#0083fc]"
          style={{ zIndex: 1000 }}
        >
          <FaArrowAltCircleUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
