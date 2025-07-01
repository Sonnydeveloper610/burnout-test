import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function ShareButtons({ result }) {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleShareResult = () => {
    const text = encodeURIComponent(`${t("title")}\n${result}\n${window.location.href}`);
    window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank");
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="share-buttons">
      <button onClick={handleShareResult}>{t("shareResult")}</button>
      <button onClick={handleCopyUrl}>{t("shareApp")}</button>
      {copied && <span>{t("copied")}</span>}
    </div>
  );
}

export default ShareButtons;
