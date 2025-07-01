import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { questions } from "./questions";
import Result from "./Result";
import Loading from "./Loading";
import "./styles.css";

function App() {
  const { t } = useTranslation();
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleStart = () => setStep(0);

  const handleAnswer = (value) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowLoading(true);
      setTimeout(() => {
        setShowLoading(false);
        setShowResult(true);
      }, 3000);
    }
  };

  return (
    <div className="container">
      {step === -1 && (
        <div className="start-page">
          <h1>{t("title")}</h1>
          <button className="main-btn" onClick={handleStart}>{t("start")}</button>
        </div>
      )}

 {step >= 0 && !showLoading && !showResult && (
  <div className="question-page">
    <h2>{t("title")}</h2>
    <p>{t(`questions.${questions[step].key}`)}</p>
    <p className="answer-guide">{t("answer_guide")}</p>
    <div className="btn-col-group">
      {[1, 2, 3, 4, 5].map((val) => (
        <button key={val} className="answer-btn-wide" onClick={() => handleAnswer(val)}>
          <span className="answer-num">{val}</span>
          <span className="answer-label">{t(`answer_scale.${val}`)}</span>
        </button>
      ))}
    </div>
  </div>
)}

      {showLoading && <Loading />}

      {showResult && <Result answers={answers} />}
    </div>
  );
}

export default App;
