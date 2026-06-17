import { motion } from "framer-motion";
import Confetti from "react-confetti";
import html2canvas from "html2canvas";
import {
  FaWhatsapp,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

export default function ResultPanel({
  form,
  result,
}) {

  if (!result) {
    return (
      <div className="glass rounded-3xl p-8 text-white min-h-[500px] flex items-center justify-center">
        <div className="text-center">
          <div className="text-7xl mb-4">🏆</div>

          <h2 className="text-3xl font-black">
            FIFA RESULT CERTIFICATE
          </h2>

          <p className="mt-4 text-white/80">
            Complete the quiz to unlock your result.
          </p>
        </div>
      </div>
    );
  }

  const isLegend =
    result.title.includes("LEGEND");

  const shareWhatsApp = () => {

    const text =
      `🏆 I got "${result.title}" in the FIFA World Cup Challenge!\n\nTry it now!`;

    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const shareLinkedIn = () => {

    const url = window.location.origin;

    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const downloadCertificate = async () => {

    try {

      const certificate =
        document.getElementById("certificate");

      if (!certificate) {
        alert("Certificate not found");
        return;
      }

      const canvas =
        await html2canvas(certificate, {
          scale: 3,
          useCORS: true,
          backgroundColor: null,
        });

      const image =
        canvas.toDataURL("image/png");

      const link =
        document.createElement("a");

      link.href = image;

      link.download =
        `${form.name || "fifa"}-certificate.png`;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

    } catch (err) {

      console.error(err);

      alert(
        "Unable to generate certificate."
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
          className="
          relative
          overflow-hidden
          rounded-[30px]
          border-[5px]
          border-yellow-400
          shadow-2xl
          text-white
          "
          style={{
            background:
              "linear-gradient(135deg,#0f172a,#312e81,#be185d)",
          }}
        >

          <img
            src="/stadium.jpg"
            alt=""
            className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            opacity-20
            pointer-events-none
            "
          />

          <div
            className="
            absolute
            inset-0
            bg-black/20
            pointer-events-none
            "
          />

          <div className="relative z-10 p-6 md:p-10">

            <div className="text-center">

              <img
                src="/logo.png"
                alt="BR Tech"
                className="
                h-16 md:h-20
                mx-auto
                bg-white
                rounded-2xl
                p-2
                mb-5
                "
              />

              <img
                src="/trophy.png"
                alt="Trophy"
                className="
                h-24 md:h-36
                mx-auto
                "
              />

              <h3
                className="
                mt-4
                uppercase
                tracking-[3px]
                text-yellow-300
                font-bold
                text-sm md:text-base
                "
              >
                Official FIFA Fan Certificate
              </h3>

              <h2
                className="
                mt-4
                text-3xl
                md:text-5xl
                font-black
                "
              >
                {result.title}
              </h2>

              <p
                className="
                mt-4
                text-lg
                md:text-xl
                "
              >
                {result.message}
              </p>

            </div>

            <div
              className="
              mt-8
              grid
              grid-cols-1
              sm:grid-cols-3
              gap-4
              "
            >

              <div className="bg-white rounded-2xl p-4 text-black text-center">
                <div className="text-4xl">⚽</div>
                <div>Matches</div>
                <div className="font-black text-2xl">
                  {form.matches || "30+"}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 text-black text-center">
                <div className="text-4xl">😴</div>
                <div>Sleep</div>
                <div className="font-black text-2xl">
                  {form.sleep || "15+"}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 text-black text-center">
                <div className="text-4xl">🏆</div>
                <div>Team</div>
                <div className="font-black text-sm">
                  {form.team || "Argentina"}
                </div>
              </div>

            </div>

            <div
              className="
              mt-8
              bg-white/20
              rounded-2xl
              p-5
              text-center
              "
            >
              <div className="text-sm uppercase">
                Awarded To
              </div>

              <div
                className="
                text-2xl
                md:text-4xl
                font-black
                mt-2
                "
              >
                {form.name || "Future Champion"}
              </div>
            </div>

            <div
              className="
              mt-8
              pt-4
              border-t
              border-white/20
              flex
              justify-between
              text-xs
              md:text-sm
              "
            >
              <span>
                BR Tech Solutions
              </span>

              <span>
                FIFA World Cup Challenge
              </span>
            </div>

          </div>
        </div>

        {/* ACTION BUTTONS */}

        <div
          className="
          relative
          z-50
          mt-6
          flex
          flex-col
          md:flex-row
          gap-3
          "
        >

          <button
            type="button"
            onClick={shareWhatsApp}
            className="
            cursor-pointer
            flex-1
            bg-green-500
            hover:bg-green-600
            py-4
            rounded-xl
            font-bold
            flex
            items-center
            justify-center
            gap-2
            "
          >
            <FaWhatsapp />
            WhatsApp
          </button>

          <button
            type="button"
            onClick={shareLinkedIn}
            className="
            cursor-pointer
            flex-1
            bg-blue-600
            hover:bg-blue-700
            py-4
            rounded-xl
            font-bold
            flex
            items-center
            justify-center
            gap-2
            "
          >
            <FaLinkedin />
            LinkedIn
          </button>

          <button
            type="button"
            onClick={downloadCertificate}
            className="
            cursor-pointer
            flex-1
            bg-yellow-400
            hover:bg-yellow-500
            text-black
            py-4
            rounded-xl
            font-bold
            flex
            items-center
            justify-center
            gap-2
            "
          >
            <FaDownload />
            Download PNG
          </button>

        </div>

      </motion.div>
    </>
  );
}