import { useEffect, useState, useRef } from "react";

function useHeadingObserver() {
  const observer = useRef<IntersectionObserver>();
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleObsever = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObsever, {
      rootMargin: "-20% 0% -35% 0px",
    });

    const elements = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
    elements.forEach((elem) => observer.current?.observe(elem));
    return () => observer.current?.disconnect();
  }, []);

  return activeId;
}

export default useHeadingObserver;
