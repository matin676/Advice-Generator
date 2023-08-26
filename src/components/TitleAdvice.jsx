import React from "react";

export default function TitleAdvice({ adviceId, adviceText }) {
  return (
    <>
      <h5 className="title">
        ADVICE # <span id="adviceId">{adviceId}</span>
      </h5>
      <p className="advice">
        <span id="adviceText">"{adviceText}"</span>
      </p>
    </>
  );
}
