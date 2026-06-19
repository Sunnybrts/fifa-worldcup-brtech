import html2canvas from "html2canvas";

const APP_URL =
  "https://fifa-worldcup-brtech.vercel.app/";

export default function ResultPanel({
  score,
  setScore,
}) {

  const getRank = () => {

    if (score.score <= 3)
      return "🥉 CASUAL FAN";

    if (score.score <= 6)
      return "🥈 FOOTBALL ENTHUSIAST";

    if (score.score <= 8)
      return "🥇 WORLD CUP EXPERT";

    return "👑 FIFA LEGEND";
  };

  const downloadCertificate =
    async () => {

      const element =
        document.getElementById(
          "certificate"
        );

      const canvas =
        await html2canvas(element);

      const link =
        document.createElement("a");

      link.download =
        "certificate.png";

      link.href =
        canvas.toDataURL();

      link.click();
    };

  const shareWhatsApp = () => {

    const text = `🏆 I scored ${score.score}/${score.total} in the FIFA World Cup Knowledge Challenge!

${getRank()}

Can you beat me?

${APP_URL}`;

    window.open(
      `https://wa.me/?text=${encodeURIComponent(
        text
      )}`
    );
  };

  return (
    <div>

      <div
        id="certificate"
        className="rounded-3xl p-10 text-center text-white"
        style={{
          background:
            "linear-gradient(135deg,#0f172a,#4c1d95,#e11d48)",
        }}
      >
        <img
          src="/logo.png"
          className="h-20 mx-auto mb-5 bg-white p-2 rounded-xl"
        />

        <h1 className="text-5xl font-black">
          FIFA WORLD CUP
        </h1>

        <h2 className="text-3xl mt-3">
          KNOWLEDGE CERTIFICATE
        </h2>

        <div className="mt-10 text-xl">
          Awarded To
        </div>

        <div className="text-5xl font-black mt-3">
          {score.name}
        </div>

        <div className="mt-8 text-3xl">
          Score
        </div>

        <div className="text-7xl font-black">
          {score.score}/
          {score.total}
        </div>

        <div className="mt-6 text-4xl">
          {getRank()}
        </div>

        <div className="mt-10">
          BR Tech Solutions
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-3 mt-6">

        <button
          onClick={shareWhatsApp}
          className="bg-green-500 text-white p-4 rounded-xl"
        >
          WhatsApp
        </button>

        <button
          onClick={downloadCertificate}
          className="bg-yellow-400 p-4 rounded-xl"
        >
          Download
        </button>

        <button
          onClick={() =>
            setScore(null)
          }
          className="bg-blue-600 text-white p-4 rounded-xl"
        >
          Try Again
        </button>

      </div>

    </div>
  );
}