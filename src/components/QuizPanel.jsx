import { useState } from "react";

const questions = [
  {
    question:
      "Which country has won the FIFA World Cup the most times?",
    options: [
      "Argentina",
      "Germany",
      "Italy",
      "Brazil",
    ],
    answer: "Brazil",
  },

  {
    question:
      "Who won the FIFA World Cup 2022?",
    options: [
      "France",
      "Argentina",
      "Croatia",
      "Morocco",
    ],
    answer: "Argentina",
  },

  {
    question:
      "Which country hosted FIFA World Cup 2022?",
    options: [
      "Qatar",
      "Russia",
      "UAE",
      "Saudi Arabia",
    ],
    answer: "Qatar",
  },

  {
    question:
      "Who scored a hat-trick in the 2022 final?",
    options: [
      "Messi",
      "Mbappe",
      "Giroud",
      "Griezmann",
    ],
    answer: "Mbappe",
  },

  {
    question:
      "Which country won the first World Cup?",
    options: [
      "Brazil",
      "Argentina",
      "Uruguay",
      "Italy",
    ],
    answer: "Uruguay",
  },

  {
    question:
      "Who is known as the King of Football?",
    options: [
      "Maradona",
      "Messi",
      "Pele",
      "Ronaldo",
    ],
    answer: "Pele",
  },

  {
    question:
      "Which nation won the FIFA World Cup 2018?",
    options: [
      "France",
      "Brazil",
      "Germany",
      "Croatia",
    ],
    answer: "France",
  },

  {
    question:
      "Which country has appeared in every FIFA World Cup?",
    options: [
      "Germany",
      "Italy",
      "Brazil",
      "Argentina",
    ],
    answer: "Brazil",
  },

  {
    question:
      "World Cup all-time top scorer?",
    options: [
      "Messi",
      "Ronaldo",
      "Miroslav Klose",
      "Pele",
    ],
    answer: "Miroslav Klose",
  },

  {
    question:
      "How often is the FIFA World Cup held?",
    options: [
      "2 Years",
      "3 Years",
      "4 Years",
      "5 Years",
    ],
    answer: "4 Years",
  },
];

export default function QuizPanel({
  setScore,
}) {
  const [name, setName] = useState("");

  const [answers, setAnswers] =
    useState({});

  const submitQuiz = () => {
    let total = 0;

    questions.forEach((q, index) => {
      if (
        answers[index] === q.answer
      ) {
        total++;
      }
    });

    setScore({
      score: total,
      total: questions.length,
      name,
    });
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl">

      <h2 className="text-4xl font-black mb-6">
        Test Your FIFA World Cup Knowledge
      </h2>

      <input
        placeholder="Enter Your Name"
        className="w-full border p-4 rounded-xl mb-8"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      {questions.map(
        (question, index) => (
          <div
            key={index}
            className="mb-8"
          >
            <h3 className="font-bold text-lg mb-4">
              {index + 1}.{" "}
              {question.question}
            </h3>

            <div className="grid gap-3">

              {question.options.map(
                (option) => (
                  <button
                    key={option}
                    onClick={() =>
                      setAnswers({
                        ...answers,
                        [index]: option,
                      })
                    }
                    className={`border p-4 rounded-xl text-left ${
                      answers[
                        index
                      ] === option
                        ? "bg-blue-600 text-white"
                        : ""
                    }`}
                  >
                    {option}
                  </button>
                )
              )}

            </div>
          </div>
        )
      )}

      <button
        onClick={submitQuiz}
        className="w-full bg-red-600 text-white py-5 rounded-xl font-black text-xl"
      >
        🏆 GET MY CERTIFICATE
      </button>
    </div>
  );
}