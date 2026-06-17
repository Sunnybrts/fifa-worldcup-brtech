import { motion } from "framer-motion";
import Confetti from "react-confetti";
import html2canvas from "html2canvas";
import {
  FaWhatsapp,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

const APP_URL =
  "https://fifa-worldcup-brtech.vercel.app/";

export default function ResultPanel({
  form,
  result,
}) {
  if (!result) {
    return (
      <div
        style={{
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
          backdropFilter: "blur(10px)",
        }}
        className="rounded-3xl p-8 text-white min-h-[500px] flex items-center justify-center"
      >
        <div className="text-center">
          <div className="text-7xl mb-4">🏆</div>

          <h2 className="text-3xl font-black">
            FIFA RESULT CERTIFICATE
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.8)",
            }}
            className="mt-4"
          >
            Complete the quiz to unlock your FIFA
            World Cup certificate.
          </p>
        </div>
      </div>
    );
  }

  const isLegend =
    result.title.includes("LEGEND");

  const shareWhatsApp = () => {
    const message = `🏆 I achieved "${result.title}" in the FIFA World Cup Challenge!

👤 Name: ${form.name || "Football Fan"}
⚽ Matches Watched: ${form.matches || "N/A"}
😴 Sleep Lost: ${form.sleep || "N/A"}
🏳️ Team: ${form.team || "Argentina"}

Think you can beat my score?

👉 ${APP_URL}`;

    window.open(
      `https://wa.me/?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  const shareLinkedIn = async () => {
    const text = `🏆 I achieved "${result.title}" in the FIFA World Cup Challenge!

Try it yourself:
${APP_URL}`;

    try {
      await navigator.clipboard.writeText(
        text
      );

      alert(
        "Result copied to clipboard. Paste it into your LinkedIn post."
      );
    } catch (e) {
      console.error(e);
    }

    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        APP_URL
      )}`,
      "_blank"
    );
  };

  const downloadCertificate = async () => {
    try {
      const certificate =
        document.getElementById(
          "certificate"
        );

      if (!certificate) {
        alert("Certificate not found");
        return;
      }

      const canvas =
        await html2canvas(
          certificate,
          {
            scale: 2,
            useCORS: true,
            backgroundColor: "#0f172a",
          }
        );

      const image =
        canvas.toDataURL(
          "image/png",
          1.0
        );

      const link =
        document.createElement("a");

      link.href = image;

      link.download = `${
        form.name || "FIFA"
      }-Certificate.png`;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

    } catch (error) {
      console.error(error);

      alert(
        "Certificate download failed."
      );
    }
  };

  return (
    <>
      {isLegend && <Confetti />}

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <div
          id="certificate"
          className="relative overflow-hidden rounded-[30px] shadow-2xl"
          style={{
            background:
              "linear-gradient(135deg,#0f172a,#312e81,#be185d)",
            border:
              "5px solid #facc15",
            color: "#ffffff",
          }}
        >
          <img
            src="/stadium.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{
              opacity: 0.15,
            }}
          />

          <div
            style={{
              background:
                "rgba(0,0,0,0.2)",
            }}
            className="absolute inset-0 pointer-events-none"
          />

          <div className="relative z-10 p-6 md:p-10">

            <div className="text-center">

              <img
                src="/logo.png"
                alt="BR Tech"
                className="h-16 md:h-20 mx-auto bg-white rounded-2xl p-2 mb-5"
              />

              <img
                src="/trophy.png"
                alt="Trophy"
                className="h-24 md:h-36 mx-auto"
              />

              <h3
                style={{
                  color: "#fde047",
                }}
                className="mt-4 uppercase tracking-[4px] font-bold"
              >
                Official FIFA Fan Certificate
              </h3>

              <h2 className="mt-4 text-3xl md:text-5xl font-black">
                {result.title}
              </h2>

              <p className="mt-4 text-lg md:text-xl">
                {result.message}
              </p>

            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">

              <div className="bg-white rounded-2xl text-black text-center p-4">
                <div className="text-4xl">⚽</div>
                <div>Matches</div>
                <div className="font-black text-2xl">
                  {form.matches || "30+"}
                </div>
              </div>

              <div className="bg-white rounded-2xl text-black text-center p-4">
                <div className="text-4xl">😴</div>
                <div>Sleep</div>
                <div className="font-black text-2xl">
                  {form.sleep || "15+"}
                </div>
              </div>

              <div className="bg-white rounded-2xl text-black text-center p-4">
                <div className="text-4xl">🏆</div>
                <div>Team</div>
                <div className="font-black text-sm">
                  {form.team || "Argentina"}
                </div>
              </div>

            </div>

            <div
              className="mt-8 rounded-2xl p-5 text-center"
              style={{
                background:
                  "rgba(255,255,255,0.2)",
              }}
            >
              <div className="text-sm uppercase tracking-wider">
                Awarded To
              </div>

              <div className="mt-2 text-2xl md:text-4xl font-black">
                {form.name ||
                  "Future Champion"}
              </div>
            </div>

            <div
              className="mt-8 pt-4 flex justify-between text-xs md:text-sm"
              style={{
                borderTop:
                  "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <a
                href="https://www.brtechsolution.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                BR Tech Solutions Private Limited
              </a>

              <span>
                FIFA World Cup Challenge
              </span>
            </div>

          </div>
        </div>

        <div className="mt-6 flex flex-col md:flex-row gap-3">

          <button
            onClick={shareWhatsApp}
            className="flex-1 bg-green-500 hover:bg-green-600 py-4 rounded-xl font-bold flex items-center justify-center gap-2"
          >
            <FaWhatsapp />
            Share on WhatsApp
          </button>

          <button
            onClick={shareLinkedIn}
            className="flex-1 bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-bold flex items-center justify-center gap-2"
          >
            <FaLinkedin />
            Share on LinkedIn
          </button>

          <button
            onClick={downloadCertificate}
            className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2"
          >
            <FaDownload />
            Download Certificate
          </button>

        </div>
      </motion.div>
    </>
  );
}