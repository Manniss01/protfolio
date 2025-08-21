import React, { useEffect, useRef, useState } from "react";

const AnimatedCursor = () => {
  const cursorRef = useRef(null);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    let mouseX = 0,
      mouseY = 0;
    let posX = 0,
      posY = 0;

    const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    const onMouseEnter = () => setHovered(true);
    const onMouseLeave = () => setHovered(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseleave", onMouseLeave);

    const animate = () => {
      posX = lerp(posX, mouseX, 0.2);
      posY = lerp(posY, mouseY, 0.2);

      if (cursor) {
        cursor.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  const baseSize = 30;
  const size = clicked ? baseSize * 0.7 : hovered ? baseSize * 1.2 : baseSize;
  const bg = clicked ? "var(--first-color)" : "rgba(255, 255, 255, 0.8)";
  const blend = clicked ? "normal" : "difference";

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${size}px`,
          height: `${size}px`,
          pointerEvents: "none",
          backgroundColor: bg,
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          zIndex: 9999,
          mixBlendMode: blend,
          animation: "profile__animate 8s ease-in-out infinite 1s",
          transition: "width 0.2s ease, height 0.2s ease, background-color 0.3s ease",
        }}
      />
      <style>{`
        @keyframes profile__animate {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
      `}</style>
    </>
  );
};

export default AnimatedCursor;
