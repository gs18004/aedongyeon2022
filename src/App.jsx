import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Question from "./routes/question/question.component";
import Result from "./routes/result/result.component";
import Pg1 from "./routes/page/pg1.component";
import Pg2 from "./routes/page/pg2.component";
import Pg3 from "./routes/page/pg3.component";
import Pg4 from "./routes/page/pg4.component";
import Pg5 from "./routes/page/pg5.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/1" element={<Pg1 />} />
      <Route path="/2" element={<Pg2 />} />
      <Route path="/3" element={<Pg3 />} />
      <Route path="/4" element={<Pg4 />} />
      <Route path="/5/:mbtiName" element={<Pg5 />} />
      <Route path="/question" element={<Question />} />
      <Route path="/result/:mbtiName" element={<Result />} />
    </Routes>
  );
};

export default App;
