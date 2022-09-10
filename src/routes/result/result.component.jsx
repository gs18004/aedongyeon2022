import Mbtis from "../../common/api/mbtisApi.json";
import { useParams, Link } from "react-router-dom";
import "./result.styles.scss";
import { useState } from "react";
import DeveloperPage from "../../components/developerPage/developerPage.component";
import copy from "copy-to-clipboard";
import img_hook from "../../assets/character_hook.png";
import img_peterpan from "../../assets/character_peterpan.png";
import img_tinkerbell from "../../assets/character_tinkerbell.png";
import img_wendy from "../../assets/character_wendy.png";

const Result = () => {
  const [clicked, setClicked] = useState(false);
  const { mbtiName } = useParams();
  console.log(mbtiName);
  console.log(Mbtis);
  const mbti = Mbtis[mbtiName];
  console.log(mbti);
  if (!mbti) {
    return (
      <div>
        <h1>This is an invalid page.</h1>
      </div>
    );
  }
  console.log(mbti["description"][0]);

  const handleCopyClipBoard = async (text) => {
    try {
      copy(text);

      alert("클립보드에 복사되었습니다.");
    } catch (error) {
      alert("복사 실패");
    }
  };
  console.log(mbti["description"].length);
  return (
    <div>
      <div className="result-background">
        {/* <DeveloperPage setClicked={setClicked} /> */}
        {mbtiName === "hook" ? (
          <img className="result-character" src={img_hook} alt="character" />
        ) : null}
        {mbtiName === "peterpan" ? (
          <img
            className="result-character"
            src={img_peterpan}
            alt="character"
          />
        ) : null}
        {mbtiName === "tinkerbell" ? (
          <img
            className="result-character"
            src={img_tinkerbell}
            alt="character"
          />
        ) : null}
        {mbtiName === "wendy" ? (
          <img className="result-character" src={img_wendy} alt="character" />
        ) : null}
        <div className="result-box">
          <div className="result-container">
            <p className="result-top-text">당신은.....</p>
            <div className="result-title-container">
              <h1 className="result-title">{mbti["name"]}</h1>
            </div>
            <p className="result-subhead">{mbti["subhead"]}</p>
            <p className="result-paragraph-top">{mbti["description"][0]}</p>
            <p className="result-paragraph">{mbti["description"][1]}</p>
            <p className="result-paragraph">{mbti["description"][2]}</p>
            <p className="result-paragraph">{mbti["description"][3]}</p>
            <p className="result-club-top">당신에게 어울리는 동아리는:</p>
            <p className="result-paragraph">{mbti["club"]}</p>
            <span>
              <Link to="/">
                <p className="result-button-home">홈으로 돌아가기</p>
              </Link>
              <p
                className="result-button-developer"
                onClick={() => {
                  setClicked(true);
                }}
              >
                개발자에게 관심 주기
              </p>
            </span>
          </div>
        </div>
      </div>
      {clicked ? <DeveloperPage setClicked={setClicked} /> : null}
    </div>
  );
};

export default Result;
