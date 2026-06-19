import { useState } from "react";
import Header from "./components/Header";
import QuizPanel from "./components/QuizPanel";
import ResultPanel from "./components/ResultPanel";
import Footer from "./components/Footer";

function App() {
  const [score, setScore] = useState(null);

  return (
    <div className="stadium-bg min-h-screen">
      <Header />

      <div className="max-w-7xl mx-auto px-4 pb-10">
        {score === null ? (
          <QuizPanel setScore={setScore} />
        ) : (
          <ResultPanel
            score={score}
            setScore={setScore}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;