"use client";

import { FaGem } from "react-icons/fa"; // Diamond / Platinum
import { GiGoldBar, GiSilverBullet } from "react-icons/gi"; // Gold & Silver
import { IconContext } from "react-icons";

export default function SponsorIcon({ type }) {
  let IconComponent = FaGem;
  let color = "#fff";
  let label = "Sponsor";

  switch (type) {
    case "diamond":
      IconComponent = FaGem;
      color = "#b9f2ff";
      label = "Diamond Sponsor";
      break;
    case "platinum":
      IconComponent = FaGem;
      color = "#e5e4e2";
      label = "Platinum Sponsor";
      break;
    case "gold":
      IconComponent = GiGoldBar;
      color = "#ffd700";
      label = "Gold Sponsor";
      break;
    case "silver":
      IconComponent = GiSilverBullet;
      color = "#c0c0c0";
      label = "Silver Sponsor";
      break;
  }

  return (
    <div className="sponsor-container">
      <IconContext.Provider value={{ color, size: "24px" }}>
        <IconComponent />
      </IconContext.Provider>
      <span className="sponsor-label">{label}</span>
    </div>
  );
}
