import React, { useState, useEffect } from "react";

import TitleAdvice from "./TitleAdvice";
import Separator from "./Separator";

export default function Dice() {
  const [adviceId, setAdviceId] = useState("");
  const [adviceText, setAdviceText] = useState("");
  const [error, setError] = useState(null);

  const getAdviceById = async (adviceId) => {
    try {
      const response = await fetch(
        `https://api.adviceslip.com/advice/${adviceId}`
      );
      const data = await response.json();

      if (data.slip) {
        const advice = data.slip.advice;
        setAdviceId(adviceId);
        setAdviceText(advice);
        setError(null);
      } else {
        setError("Advice not found");
      }
    } catch (error) {
      setError("An error occurred");
    }
  };

  const generateRandomAdvice = () => {
    const randomAdviceId = Math.floor(Math.random() * 1000) + 1;
    getAdviceById(randomAdviceId);
  };

  useEffect(() => {
    generateRandomAdvice();
  }, []);

  return (
    <>
      <TitleAdvice adviceId={adviceId} adviceText={adviceText} error={error} />
      <Separator />
      <div className="roll">
        <img
          src="images/icon-dice.svg"
          alt="dice"
          className="dice"
          onClick={generateRandomAdvice}
        />
      </div>
    </>
  );
}
