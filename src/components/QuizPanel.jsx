import React from "react";

const matchOptions = [
  ["5", "0 - 5 Matches"],
  ["15", "6 - 15 Matches"],
  ["25", "16 - 30 Matches"],
  ["35", "30+ Matches"],
];

const sleepOptions = [
  ["0", "None"],
  ["10", "1 - 5 Hours"],
  ["20", "6 - 15 Hours"],
  ["30", "15+ Hours"],
];

export default function QuizPanel({
  form,
  setForm,
  setResult,
}) {
  const calculate = () => {
    const score =
      Number(form.matches || 0) +
      Number(form.sleep || 0);

    if (score < 20) {
      setResult({
        title: "🥉 CASUAL FAN",
        message: "You still value sleep.",
      });
    } else if (score < 40) {
      setResult({
        title: "🥈 HARDCORE FAN",
        message: "You've sacrificed sleep for football.",
      });
    } else {
      setResult({
        title: "🥇 WORLD CUP LEGEND",
        message: "Sleep is temporary. Football is forever.",
      });
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl">
      <h2 className="text-3xl font-black mb-8">
        ANSWER 3 QUESTIONS
      </h2>

      <input
        type="text"
        placeholder="Your Name"
        value={form.name}
        className="w-full border border-gray-300 p-4 rounded-xl mb-6"
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
      />

      <h3 className="font-bold mb-3">
        Matches Watched
      </h3>

      <div className="space-y-3 mb-6">
        {matchOptions.map(([value, label]) => (
          <button
            type="button"
            key={value}
            onClick={() =>
              setForm({
                ...form,
                matches: value,
              })
            }
            className={`w-full text-left border rounded-xl p-4 transition ${
              form.matches === value
                ? "bg-blue-100 border-blue-500"
                : "hover:bg-blue-50"
            }`}
          >
            ⚽ {label}
          </button>
        ))}
      </div>

      <h3 className="font-bold mb-3">
        Sleep Lost During World Cup
      </h3>

      <div className="space-y-3 mb-6">
        {sleepOptions.map(([value, label]) => (
          <button
            type="button"
            key={value}
            onClick={() =>
              setForm({
                ...form,
                sleep: value,
              })
            }
            className={`w-full text-left border rounded-xl p-4 transition ${
              form.sleep === value
                ? "bg-pink-100 border-pink-500"
                : "hover:bg-pink-50"
            }`}
          >
            😴 {label}
          </button>
        ))}
      </div>

      <h3 className="font-bold mb-3">
        Which Team Are You Supporting?
      </h3>

      <select
        value={form.team}
        className="w-full border border-gray-300 p-4 rounded-xl mb-6"
        onChange={(e) =>
          setForm({
            ...form,
            team: e.target.value,
          })
        }
      >
        <option value="">Select Team</option>
        <option value="Argentina 🇦🇷">
          Argentina 🇦🇷
        </option>
        <option value="Brazil 🇧🇷">
          Brazil 🇧🇷
        </option>
        <option value="France 🇫🇷">
          France 🇫🇷
        </option>
        <option value="Portugal 🇵🇹">
          Portugal 🇵🇹
        </option>
        <option value="Germany 🇩🇪">
          Germany 🇩🇪
        </option>
        <option value="Spain 🇪🇸">
          Spain 🇪🇸
        </option>
      </select>

      <button
        type="button"
        onClick={calculate}
        className="w-full py-5 rounded-xl text-white font-black text-xl bg-gradient-to-r from-blue-700 to-pink-600"
      >
        🏆 CALCULATE MY FIFA LEVEL
      </button>
    </div>
  );
}