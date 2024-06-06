import { useEffect } from "react";

function useScrollingEffect(selector, className) {
  useEffect(() => {
    let lastScrollTop = 0;

    function handleScroll() {
      const currentScroll =
        window.scrollY || document.documentElement.scrollTop;
      const element = document.querySelector(selector);
      const scrollingDown = currentScroll > lastScrollTop;

      if (scrollingDown) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }

      lastScrollTop = currentScroll;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selector, className]);
}

export default useScrollingEffect;
