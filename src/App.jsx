import html2canvas from "html2canvas";
import "./App.css";
import { useState } from "react";
import Confetti from "react-confetti";
import {
  FaWhatsapp,
  FaLinkedin,
  FaTrophy,
  FaFutbol,
} from "react-icons/fa";

export default function App() {
  const [result, setResult] = useState(null);

  const [form, setForm] = useState({
    name: "",
    matches: "",
    sleep: "",
    team: "",
  });

  const calculate = () => {
    let score = 0;

    score += Number(form.matches);
    score += Number(form.sleep);

    if (score < 20) {
      setResult({
        title: "🥉 Casual Fan",
        message: "You still value sleep and productivity.",
      });
    } else if (score < 40) {
      setResult({
        title: "🥈 Hardcore Fan",
        message: "You've sacrificed sleep for football.",
      });
    } else {
      setResult({
        title: "🥇 World Cup Legend",
        message: "Sleep is temporary. Football is forever.",
      });
    }
  };

  const shareText = encodeURIComponent(
    `⚽ I am a ${result?.title} in the BR Tech FIFA Challenge!`
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-800 to-pink-700 p-6">

      {result?.title === "🥇 World Cup Legend" && (
        <Confetti />
      )}

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-10">
          <img
            src="/logo.png"
            alt="logo"
            className="h-24 mx-auto mb-6 bg-white rounded-xl p-3"
          />

          <h1 className="text-5xl font-black text-white">
            ⚽ FIFA WORLD CUP CHALLENGE
          </h1>

          <p className="text-white mt-3 text-xl">
            Can You Survive The World Cup?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl p-8 shadow-2xl">

            <h2 className="text-3xl font-bold mb-6">
              Answer 3 Questions
            </h2>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-xl mb-4"
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
            />

            <select
              className="w-full border p-3 rounded-xl mb-4"
              onChange={(e) =>
                setForm({
                  ...form,
                  matches: e.target.value,
                })
              }
            >
              <option>Matches Watched</option>
              <option value="5">0-5</option>
              <option value="15">6-15</option>
              <option value="25">16-30</option>
              <option value="35">30+</option>
            </select>

            <select
              className="w-full border p-3 rounded-xl mb-4"
              onChange={(e) =>
                setForm({
                  ...form,
                  sleep: e.target.value,
                })
              }
            >
              <option>Sleep Lost</option>
              <option value="0">None</option>
              <option value="10">1-5 Hours</option>
              <option value="20">6-15 Hours</option>
              <option value="30">15+ Hours</option>
            </select>

            <select
              className="w-full border p-3 rounded-xl mb-6"
              onChange={(e) =>
                setForm({
                  ...form,
                  team: e.target.value,
                })
              }
            >
              <option>Select Team</option>
              <option>Argentina 🇦🇷</option>
              <option>Brazil 🇧🇷</option>
              <option>France 🇫🇷</option>
              <option>England 🏴</option>
              <option>Portugal 🇵🇹</option>
            </select>

            <button
              onClick={calculate}
              className="w-full bg-gradient-to-r from-blue-700 to-pink-600 text-white py-4 rounded-xl font-bold text-xl"
            >
              <FaTrophy className="inline mr-2" />
              Calculate My FIFA Level
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-900 via-pink-700 to-red-600 rounded-3xl p-8 text-white shadow-2xl">

            {!result ? (
              <div className="text-center mt-24">
                <FaFutbol className="text-8xl mx-auto mb-6" />

                <h2 className="text-4xl font-bold">
                  Ready For Kickoff?
                </h2>

                <p className="mt-4 text-xl">
                  Complete the challenge and
                  discover your FIFA Fan Level.
                </p>
              </div>
            ) : (
              <div className="text-center">

                <div className="text-7xl mb-6">
                  🏆
                </div>

                <h2 className="text-5xl font-black mb-4">
                  {result.title}
                </h2>

                <p className="text-xl mb-8">
                  {result.message}
                </p>

                <div className="bg-white/20 rounded-2xl p-6 mb-6">

                  <h3 className="text-2xl font-bold">
                    {form.name}
                  </h3>

                  <p className="mt-3">
                    Team: {form.team}
                  </p>

                  <p>
                    Matches Score: {form.matches}
                  </p>

                  <p>
                    Sleep Score: {form.sleep}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">

                  <a
                    href={`https://wa.me/?text=${shareText}`}
                    target="_blank"
                    className="bg-green-500 rounded-xl py-3 flex justify-center items-center gap-2"
                  >
                    <FaWhatsapp />
                    WhatsApp
                  </a>

                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    className="bg-blue-600 rounded-xl py-3 flex justify-center items-center gap-2"
                  >
                    <FaLinkedin />
                    LinkedIn
                  </a>
                </div>const downloadCertificate = async () => {
  const certificate =
    document.getElementById("certificate");

  const canvas = await html2canvas(certificate, {
    scale: 2,
    useCORS: true,
  });

  const image = canvas.toDataURL("image/png");

  const link = document.createElement("a");

  link.href = image;

  link.download = `${form.name
    .replace(/\s+/g, "-")
    .toLowerCase()}-fifa-certificate.png`;

  link.click();
};

                <div className="mt-8 text-sm">
                  Powered by BR Tech Solutions
                </div>

              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
