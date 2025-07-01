import React from "react";
import { useTranslation } from "react-i18next";

function Loading() {
  const { t } = useTranslation();
  return (
    <div className="loading">
      <div className="spinner" />
      <p>{t("analyzing")}</p>
    </div>
  );
}

export default Loading;
