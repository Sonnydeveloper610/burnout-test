import React from "react";
import { useTranslation } from "react-i18next";
import { questions } from "./questions";
import ShareButtons from "./ShareButtons";
import "./styles.css";

function getGrade(total, length) {
  if (total <= length * 2) return "A";
  if (total <= length * 3.5) return "B";
  return "C";
}

function getGradeText(grade, t) {
  if (grade === "A") return t("result_normal");
  if (grade === "B") return t("result_warning");
  return t("result_high");
}

function Result({ answers }) {
  const { t } = useTranslation();
  const total = answers.reduce((a, b) => a + b, 0);
  const grade = getGrade(total, answers.length);
  const gradeText = getGradeText(grade, t);

  return (
    <div className="result-page">
      <h2>{t("result")}</h2>
      <div className="report-card">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>{t("question")}</th>
              <th>{t("score")}</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((q, idx) => (
              <tr key={q.id}>
                <td>{idx + 1}</td>
                <td>{t(`questions.${q.key}`)}</td>
                <td>{answers[idx]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="report-summary">
          <div>
            <strong>{t("total")}: </strong>
            {total} / {answers.length * 5}
          </div>
          <div>
            <strong>{t("grade")}: </strong>
            <span className={`grade grade-${grade}`}>{grade}</span>
          </div>
          <div className="grade-desc">{gradeText}</div>
        </div>
      </div>
      <ShareButtons result={gradeText} />
    </div>
  );
}

export default Result;
