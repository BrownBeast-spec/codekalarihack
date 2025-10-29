"use client"; // ensures this runs only on the client side
import DarkVeil from './ui/DarkVeil';

export default function SplineIframe() {
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <DarkVeil />
      </div>
      <iframe
        src="https://my.spline.design/robotfollowcursorforlandingpage-Zgo3p0nHheXxGTELddOM7iRL/"
        frameBorder="0"
        width="100%"
        height="100%"
        style={{ display: "block", position: "relative", zIndex: 1 }}
        allow="autoplay; fullscreen"
      />
    </div>
  );
}
