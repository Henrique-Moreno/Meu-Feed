import React, { useState } from "react";
import "./ShareButton.css";
import facebookIcon from "../../assets/icons/facebook.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";

export default function ShareButton({ link, title }) {
  const [shared, setShared] = useState(false);

  const shareContent = (platform) => {
    let shareUrl = "";
    const encodedTitle = encodeURIComponent(title);
    const encodedLink = encodeURIComponent(link);

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedLink}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedLink}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedLink}`;
        break;
      default:
        break;
    }

    window.open(shareUrl, "_blank");
    setShared(true);
  };

  return (
    <div className="share-buttons">
      <button onClick={() => shareContent("facebook")}>
        <img src={facebookIcon} alt="Compartilhar no Facebook" />
      </button>
      <button onClick={() => shareContent("twitter")}>
        <img src={twitterIcon} alt="Compartilhar no Twitter" />
      </button>
      <button onClick={() => shareContent("linkedin")}>
        <img src={linkedinIcon} alt="Compartilhar no LinkedIn" />
      </button>
      <button
        onClick={() => {
          navigator.clipboard.writeText(link);
          setShared(true);
        }}
      >
        Copiar link
      </button>
      {shared && (
        <p className="share-success">Conteúdo compartilhado com sucesso!</p>
      )}
    </div>
  );
}
