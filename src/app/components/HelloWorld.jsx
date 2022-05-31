import React, { useEffect, useRef } from "react";

import gsap from "gsap";

import "./HelloWorld.scss";

const HelloWorld = () => {
  const helloRef = useRef(null);

  useEffect(() => {
    gsap.to(helloRef.current, {
      duration: 1,
      opacity: 1,
      y: -20,
      ease: "elastic.out(1, 0.3)",
    });
  }, []);

  return (
    <div className="container helloworld-section">
      <h1 ref={helloRef}>Hello, World!</h1>
    </div>
  );
};

export default HelloWorld;
