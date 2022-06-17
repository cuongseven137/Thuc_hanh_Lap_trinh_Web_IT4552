import React, { useEffect, useState } from "react";
import clsx from "clsx";

export default function ScrollOnTop() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollOnTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div className="scroll-top">
      <button
        onClick={scrollOnTop}
        className={clsx(
          "btn",
          "btn-outline-secondary",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      >
        <i className="fas fa-angle-up"></i>
      </button>
    </div>
  );
}
