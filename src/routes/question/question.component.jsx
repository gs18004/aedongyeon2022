import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./question.styles.scss";
import Questions from "../../common/api/questionsApi.json";
import TextTransition, { presets } from "react-text-transition";

const Question = () => {
  const navigate = useNavigate();
  const [questionNumber, setQuestionNumber] = useState(1);
  const [cntE, setCntE] = useState(0);
  const [cntI, setCntI] = useState(0);
  const [cntT, setCntT] = useState(0);
  const [cntF, setCntF] = useState(0);
  const [cntJ, setCntJ] = useState(0);
  const [cntP, setCntP] = useState(0);
  useEffect(() => {
    if (cntE + cntI + cntT + cntF + cntJ + cntP !== 0) toNext();
    console.log(questionNumber);
  }, [cntE, cntI, cntT, cntF, cntJ, cntP]);

  console.log(`E${cntE} I${cntI} T${cntT} F${cntF} J${cntJ} P${cntP}`);
  const handleTypes = (selectedType) => {
    switch (Questions[questionNumber]["option"]) {
      case "EI":
        if (selectedType === "E") setCntE(cntE + 1);
        else if (selectedType === "I") setCntI(cntI + 1);
        break;
      case "TF":
        if (selectedType === "T") setCntT(cntT + 1);
        else if (selectedType === "F") setCntF(cntF + 1);
        break;
      case "JP":
        if (selectedType === "J") setCntJ(cntJ + 1);
        else if (selectedType === "P") setCntP(cntP + 1);
        break;
      default:
        console.log(Questions[questionNumber]["option"]);
        console.log("ERROR");
    }
  };
  const toNext = () => {
    if (questionNumber < 9) setQuestionNumber(questionNumber + 1);
    else {
      const eOri = cntE > cntI ? "E" : "I";
      const tOrf = cntT > cntF ? "T" : "F";
      const jOrp = cntJ > cntP ? "J" : "P";
      if (eOri === "E" && tOrf === "F" && jOrp === "J") navigate(`/3/wendy`);
      if (eOri === "I" && tOrf === "T" && jOrp === "P") navigate(`/3/wendy`);
      if (eOri === "E" && tOrf === "F" && jOrp === "P") navigate(`/3/peterpan`);
      if (eOri === "I" && tOrf === "F" && jOrp === "P") navigate(`/3/peterpan`);
      if (eOri === "I" && tOrf === "F" && jOrp === "J")
        navigate(`/3/tinkerbell`);
      if (eOri === "I" && tOrf === "T" && jOrp === "J")
        navigate(`/3/tinkerbell`);
      if (eOri === "E" && tOrf === "T" && jOrp === "J") navigate(`/3/hook`);
      if (eOri === "E" && tOrf === "T" && jOrp === "P") navigate(`/3/hook`);
    }
  };
  const handleOnClick0 = () => {
    console.log(questionNumber);
    const selectedType = Questions[questionNumber]["answers"][0]["type"];
    console.log(selectedType);
    handleTypes(selectedType);
  };
  const handleOnClick1 = () => {
    console.log(questionNumber);
    const selectedType = Questions[questionNumber]["answers"][1]["type"];
    console.log(selectedType);
    handleTypes(selectedType);
  };

  console.log(Questions[0]);
  return (
    <div className="question-background">
      <div className="question-box">
        <div className="question-container">
          <p className="question-paragraph">
            {Questions[questionNumber]["question"]}
          </p>
          <div className="question-buttons-container">
            <div className="answers-container">
              <button className="button-answer" onClick={handleOnClick0}>
                {Questions[questionNumber]["answers"][0]["content"]}
              </button>
              <button className="button-answer" onClick={handleOnClick1}>
                {Questions[questionNumber]["answers"][1]["content"]}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
