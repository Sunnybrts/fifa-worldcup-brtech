import { useState } from "react";
import Header from "./components/Header";
import QuizPanel from "./components/QuizPanel";
import ResultPanel from "./components/ResultPanel";
import Footer from "./components/Footer";

function App() {
  const [form, setForm] = useState({
    name: "",
    matches: "",
    sleep: "",
    team: "",
  });

  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen stadium-bg">

      <Header />

      <div className="max-w-7xl mx-auto px-4 pb-10">

        <div className="grid lg:grid-cols-2 gap-8">

          <QuizPanel
            form={form}
            setForm={setForm}
            setResult={setResult}
          />

          <ResultPanel
            form={form}
            result={result}
          />

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default App;