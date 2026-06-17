import { useState } from "react";
import Confetti from "react-confetti";
import html2canvas from "html2canvas";
import {
  FaWhatsapp,
  FaLinkedin,
  FaTrophy,
  FaFutbol,
  FaDownload,
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
    if (
      !form.name ||
      !form.matches ||
      !form.sleep ||
      !form.team
    ) {
      alert("Please complete all fields");
      return;
    }

    let score = 0;

    score += Number(form.matches);
    score += Number(form.sleep);

    if (score < 20) {
      setResult({
        title: "🥉 Casual Fan",
        message:
          "You still value sleep and productivity.",
      });
    } else if (score < 40) {
      setResult({
        title: "🥈 Hardcore Fan",
        message:
          "You've sacrificed sleep for football.",
      });
    } else {
      setResult({
        title: "🥇 World Cup Legend",
        message:
          "Sleep is temporary. Football is forever.",
      });
    }
  };

  const downloadCertificate = async () => {
    const certificate =
      document.getElementById("certificate");

    const canvas = await html2canvas(
      certificate,
      {
        scale: 2,
        useCORS: true,
      }
    );

    const image =
      canvas.toDataURL("image/png");

    const link =
      document.createElement("a");

    link.href = image;

    link.download = `${form.name
      .replace(/\s+/g, "-")
      .toLowerCase()}-world-cup-certificate.png`;

    link.click();
  };

  const shareText = encodeURIComponent(
    `⚽ I am ${result?.title} in the BR Tech Solutions FIFA World Cup Challenge!

🏆 Team: ${form.team}
⚽ Matches Watched Score: ${form.matches}
😴 Sleep Lost Score: ${form.sleep}

Try it yourself!
www.brtechsolution.com`
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-800 to-pink-700 p-6">

      {result?.title ===
        "🥇 World Cup Legend" && (
        <Confetti />
      )}

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10">

          <img
            src="/logo.png"
            alt="BR Tech"
            className="h-24 mx-auto bg-white rounded-2xl p-3 shadow-xl"
          />

          <h1 className="text-5xl md:text-6xl font-black text-white mt-6">
            ⚽ FIFA WORLD CUP CHALLENGE
          </h1>

          <p className="text-white text-xl mt-3">
            Can You Survive The World Cup?
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* FORM */}

          <div className="bg-white rounded-3xl p-8 shadow-2xl">

            <h2 className="text-3xl font-bold mb-6">
              Enter The Challenge
            </h2>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-4 rounded-xl mb-4"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
            />

            <select
              className="w-full border p-4 rounded-xl mb-4"
              onChange={(e) =>
                setForm({
                  ...form,
                  matches: e.target.value,
                })
              }
            >
              <option value="">
                Matches Watched
              </option>
              <option value="5">
                0 - 5 Matches
              </option>
              <option value="15">
                6 - 15 Matches
              </option>
              <option value="25">
                16 - 30 Matches
              </option>
              <option value="35">
                30+ Matches
              </option>
            </select>

            <select
              className="w-full border p-4 rounded-xl mb-4"
              onChange={(e) =>
                setForm({
                  ...form,
                  sleep: e.target.value,
                })
              }
            >
              <option value="">
                Sleep Lost
              </option>
              <option value="0">
                None
              </option>
              <option value="10">
                1-5 Hours
              </option>
              <option value="20">
                6-15 Hours
              </option>
              <option value="30">
                15+ Hours
              </option>
            </select>

            <select
              className="w-full border p-4 rounded-xl mb-6"
              onChange={(e) =>
                setForm({
                  ...form,
                  team: e.target.value,
                })
              }
            >
              <option value="">
                Select Team
              </option>
              <option>
                Argentina 🇦🇷
              </option>
              <option>
                Brazil 🇧🇷
              </option>
              <option>
                France 🇫🇷
              </option>
              <option>
                England 🏴
              </option>
              <option>
                Portugal 🇵🇹
              </option>
              <option>
                Germany 🇩🇪
              </option>
            </select>

            <button
              onClick={calculate}
              className="w-full bg-gradient-to-r from-blue-700 to-pink-600 text-white py-4 rounded-xl text-xl font-bold hover:scale-105 transition"
            >
              <FaTrophy className="inline mr-2" />
              Calculate My FIFA Level
            </button>

          </div>

          {/* RESULT */}

          <div>

            {!result ? (
              <div className="bg-white/10 backdrop-blur-md rounded-3xl h-full flex flex-col justify-center items-center text-white p-10">

                <FaFutbol className="text-8xl mb-6" />

                <h2 className="text-4xl font-bold mb-4">
                  Ready For Kickoff?
                </h2>

                <p className="text-xl text-center">
                  Complete the challenge
                  and discover your
                  World Cup Fan Level.
                </p>

              </div>
            ) : (
              <>
                <div
                  id="certificate"
                  className="bg-gradient-to-br from-blue-950 via-blue-700 to-pink-700 rounded-3xl p-8 text-white shadow-2xl border-4 border-yellow-400"
                >

                  <div className="text-center">

                    <img
                      src="/logo.png"
                      alt="BR Tech"
                      className="h-20 mx-auto bg-white rounded-xl p-2 mb-6"
                    />

                    <div className="text-7xl mb-4">
                      🏆
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black mb-4">
                      CERTIFICATE OF
                      FOOTBALL MADNESS
                    </h1>

                    <p className="text-lg mb-2">
                      Presented To
                    </p>

                    <h2 className="text-4xl font-bold mb-6">
                      {form.name}
                    </h2>

                    <div className="text-5xl mb-6">
                      {result.title}
                    </div>

                    <p className="text-xl mb-8">
                      {result.message}
                    </p>

                    <div className="grid grid-cols-3 gap-3">

                      <div className="bg-white/20 p-4 rounded-xl">
                        <div className="text-3xl">
                          ⚽
                        </div>
                        <div className="font-bold">
                          Matches
                        </div>
                        <div>
                          {form.matches}
                        </div>
                      </div>

                      <div className="bg-white/20 p-4 rounded-xl">
                        <div className="text-3xl">
                          😴
                        </div>
                        <div className="font-bold">
                          Sleep
                        </div>
                        <div>
                          {form.sleep}
                        </div>
                      </div>

                      <div className="bg-white/20 p-4 rounded-xl">
                        <div className="text-3xl">
                          🏳️
                        </div>
                        <div className="font-bold">
                          Team
                        </div>
                        <div>
                          {form.team}
                        </div>
                      </div>

                    </div>

                    <div className="mt-10 text-lg font-semibold">
                      Powered by BR Tech
                      Solutions
                    </div>

                    <div className="text-sm opacity-80">
                      www.brtechsolution.com
                    </div>

                  </div>

                </div>

                <div className="grid grid-cols-3 gap-3 mt-4">

                  <button
                    onClick={
                      downloadCertificate
                    }
                    className="bg-yellow-400 text-black font-bold py-3 rounded-xl flex justify-center items-center gap-2"
                  >
                    <FaDownload />
                    Download
                  </button>

                  <a
                    href={`https://wa.me/?text=${shareText}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-green-500 text-white py-3 rounded-xl flex justify-center items-center gap-2"
                  >
                    <FaWhatsapp />
                    WhatsApp
                  </a>

                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-600 text-white py-3 rounded-xl flex justify-center items-center gap-2"
                  >
                    <FaLinkedin />
                    LinkedIn
                  </a>

                </div>

              </>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
