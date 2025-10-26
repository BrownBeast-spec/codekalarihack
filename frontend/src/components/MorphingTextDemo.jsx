"use client";

import { MorphingText } from "./MorphingText";

const texts = [
  "CODE KALARI",         // English
  "കോഡ് കോൾരി",          // Malayalam
  "కోడ్ కలరి",           // Telugu
  "कोड कलरी",           // Hindi / Marathi
  "કોડ કલરી",           // Gujarati
  "ಕೋಡ್ ಕಲರಿ",          // Kannada
  "கோட் கலரி",           // Tamil
  "কোড কলরি"            // Bengali
];

export default function MorphingTextDemo({ className = "" }) {
  return <MorphingText texts={texts} className={className} />;
}
