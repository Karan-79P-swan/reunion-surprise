
import { useState } from "react";
import {
  Music2,
  Music,
  Sparkles,
  Heart,
  Gift,
  RotateCcw,
} from "lucide-react";

import best1 from "./assets/1.jpeg";
import best2 from "./assets/2.jpeg";
import best3 from "./assets/3.jpeg";
import best4 from "./assets/4.jpeg";

const scenes = [
  {
    label: "Where it began",
    kicker: "Every story has a starting point",
    title: "It all began on one special day.",
    copy:
      "28 October 2024 — the day your paths crossed. Maybe it felt like an ordinary day at first, but some moments quietly turn into memories we carry for a long, long time.",
    className: "scene-one",
    image: best1,
    alt: "A special memory",
  },
  {
    label: "The little moments",
    kicker: "The moments that stay with us",
    title: "It is the little things we remember.",
    copy:
      "The first conversation, the smiles, the laughter, and all those tiny details that become special with time. A reunion is a chance to revisit those memories and smile all over again.",
    className: "scene-two",
    image: best2,
    alt: "A cherished memory",
  },
  {
    label: "Back to the memories",
    kicker: "A little trip down memory lane",
    title: "Some memories never grow old.",
    copy:
      "Time moves forward, life gets busy, and so much changes. But certain memories still bring the same warmth whenever we look back. Today is about celebrating that little piece of your story.",
    className: "scene-three",
    image: best3,
    alt: "A beautiful memory",
  },
  {
    label: "Until the next chapter",
    kicker: "One last little note",
    title: "Here is to meeting, remembering, and making more memories.",
    copy:
      "May this reunion bring back the happiest memories and make room for brand-new ones. Because the best part of a story is knowing there can always be another chapter. Here is to 28 October 2024, and to every beautiful moment still to come. ♡",
    className: "scene-four",
    image: best4,
    alt: "A memory to treasure",
  },
];

function BirthdayMusic({ enabled }) {
  return (
    <audio
      id="birthday-music"
      src="/birthday.mp3"
      loop
      preload="auto"
    />
  );
}

function Confetti({ active }) {
  if (!active) return null;

  return (
    <div className="confetti-layer" aria-hidden="true">
      {Array.from({ length: 75 }, (_, i) => (
        <i
          key={i}
          style={{
            left: `${(i * 37 + 7) % 100}%`,
            animationDelay: `${(i % 17) * 0.075}s`,
            animationDuration: `${3.2 + (i % 9) * 0.23}s`,
            transform: `rotate(${i * 29}deg)`,
            background: [
              "#f7b8d0",
              "#f8dca0",
              "#c7b9ff",
              "#fff0f5",
              "#9fe4d6",
            ][i % 5],
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  const specialDate = "28 October 2024";

  const [sceneIndex, setSceneIndex] = useState(-1);
  const [musicOn, setMusicOn] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const scene = scenes[sceneIndex];

  const showConfetti = (duration = 4000) => {
    setConfetti(true);
    window.setTimeout(() => setConfetti(false), duration);
  };

  const reveal = () => {
    setSceneIndex(0);
    showConfetti(5200);
  };

  const nextScene = () => {
    setSceneIndex((current) =>
      Math.min(current + 1, scenes.length - 1)
    );
    showConfetti();
  };

  const restart = () => {
    setSceneIndex(-1);
    setConfetti(false);
  };

  const toggleMusic = async () => {
    const audio = document.getElementById("birthday-music");
    if (!audio) return;

    if (musicOn) {
      audio.pause();
      setMusicOn(false);
      return;
    }

    try {
      await audio.play();
      setMusicOn(true);
    } catch (error) {
      console.error("Music playback failed:", error);
    }
  };

  return (
    <main
      className={`app-shell ${
        scene ? scene.className : "scene-home"
      }`}
    >
      <BirthdayMusic enabled={musicOn} />

      <div className="ambient ambient-a" aria-hidden="true" />
      <div className="ambient ambient-b" aria-hidden="true" />

      <div className="stars" aria-hidden="true">
        {Array.from({ length: 32 }, (_, i) => (
          <span
            key={i}
            style={{
              left: `${(i * 31 + 4) % 100}%`,
              top: `${(i * 47 + 8) % 100}%`,
              animationDelay: `${(i % 8) * 0.45}s`,
              animationDuration: `${2.4 + (i % 5) * 0.7}s`,
            }}
          >
            ✦
          </span>
        ))}
      </div>

      <div className="grain" aria-hidden="true" />
      <Confetti active={confetti} />

      <header className="topbar">
        <a
          className="brand"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            restart();
          }}
          aria-label="Return to reunion welcome page"
        >
          <span className="brand-mark">
            <Heart size={17} fill="currentColor" />
            <span className="brand-mark-glow" />
          </span>

          <span className="brand-text">
            <span className="brand-title">
              a little reunion magic
            </span>
            <span className="brand-subtitle">
              memories that bring us back ♡
            </span>
          </span>
        </a>

        <div className="top-actions">
          <button
            className={`music-toggle ${
              musicOn ? "is-playing" : ""
            }`}
            onClick={toggleMusic}
            aria-label={musicOn ? "Pause music" : "Play music"}
            aria-pressed={musicOn}
          >
            <span className="music-icon">
              {musicOn ? (
                <Music size={17} />
              ) : (
                <Music2 size={17} />
              )}
            </span>

            <span className="music-label">
              {musicOn ? "Now playing" : "Play our song"}
            </span>

            {musicOn && (
              <span className="equalizer" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            )}
          </button>
        </div>
      </header>

      {sceneIndex < 0 ? (
        <section className="hero content-enter">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="hero-top-label">
            <span className="label-heart">♡</span>
            A LITTLE JOURNEY BACK TO A SPECIAL DAY
            <span className="label-heart">♡</span>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="halo" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="moon">✦</div>

            <div className="hero-sparkle sparkle-one">✧</div>
            <div className="hero-sparkle sparkle-two">✦</div>
            <div className="hero-sparkle sparkle-three">✧</div>

            <div className="cake">
              <div className="candle">
                <i />
              </div>
              <div className="cake-top" />
              <div className="cake-body">
                <span />
                <span />
                <span />
              </div>
              <div className="cake-plate" />
            </div>

            <span className="float-heart heart-one">♡</span>
            <span className="float-heart heart-two">✧</span>
            <span className="float-heart heart-three">♡</span>
          </div>

          <p className="small-overline">
            A DAY THAT BECAME A MEMORY
          </p>

          <h1 className="hero-title">
            The Day We Met,
            <br />
            <em>{specialDate}</em>
          </h1>

          <p className="hero-copy">
            Some meetings become memories we never want to forget.
            <br className="desktop-break" />
            Let’s travel back to this special day. ♡
          </p>

          <div className="hero-cta-wrap">
            <button className="primary-button" onClick={reveal}>
              <Heart size={19} />
              <span>Relive the memories</span>
              <Sparkles size={17} className="button-sparkle" />
            </button>

            <p className="button-caption">
              ✦ A little journey down memory lane ✦
            </p>
          </div>

          <div className="hero-bottom-note">
            <span className="bottom-line" />
            MADE FOR A MOMENT WORTH REMEMBERING
            <span className="bottom-line" />
          </div>
        </section>
      ) : (
        <section className="story-stage" key={sceneIndex}>
          <div className="scene-counter">
            A LITTLE REUNION STORY{" "}
            <span>
              {String(sceneIndex + 1).padStart(2, "0")} /{" "}
              {String(scenes.length).padStart(2, "0")}
            </span>
          </div>

          <div className="story-card story-card-cinematic content-enter">
            <div className="story-image-wrap">
              <img
                className="story-image"
                src={scene.image}
                alt={scene.alt}
              />
              <div className="story-image-shade" />
              <span className="image-caption">
                {scene.label}
              </span>
            </div>

            <div className="story-icon">
              {sceneIndex === 0 ? (
                <Sparkles />
              ) : sceneIndex === 1 ? (
                <Heart />
              ) : sceneIndex === 2 ? (
                <span>☾</span>
              ) : (
                <Gift />
              )}
            </div>

            <p className="story-kicker">{scene.kicker}</p>
            <h2>{scene.title}</h2>

            <div className="tiny-divider">
              <span />
              <Heart size={12} fill="currentColor" />
              <span />
            </div>

            <p className="story-copy">{scene.copy}</p>

            <p className="signature">
              A memory to keep close <span>♡</span>
            </p>

            <div className="story-progress">
              {scenes.map((_, i) => (
                <span
                  key={i}
                  className={i <= sceneIndex ? "filled" : ""}
                />
              ))}
            </div>

            {sceneIndex < scenes.length - 1 ? (
              <button
                className="primary-button next-button"
                onClick={nextScene}
              >
                {sceneIndex === 0
                  ? "Remember this moment"
                  : sceneIndex === 1
                    ? "Keep the memories coming"
                    : "One last memory"}
                <Sparkles size={16} />
              </button>
            ) : (
              <button
                className="primary-button next-button"
                onClick={restart}
              >
                <RotateCcw size={16} />
                Relive the reunion
              </button>
            )}
          </div>

          <p className="bottom-note">
            Some days pass; some dates stay with us forever. ♡
          </p>
        </section>
      )}

      <footer className="footer">
        <span>28 OCTOBER 2024 · THE DAY THEY MET</span>
        <span>✦</span>
        <span>MADE WITH ♡</span>
      </footer>
    </main>
  );
}
