const words = [
  "Design",
  "Développement",
  "Next.js",
  "Stripe",
  "E-commerce sur-mesure",
  "Mise en ligne",
];

export default function Marquee() {
  return (
    <div
      id="marquee"
      className="group border-y border-line py-[22px] overflow-hidden whitespace-nowrap bg-ivory"
      aria-hidden="true"
    >
      <div
        className="inline-block will-change-transform font-display tracking-[0.01em] group-hover:[animation-play-state:paused]"
        style={{
          fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
          animation: "marq 28s linear infinite",
        }}
      >
        {[...words, ...words].map((word, i) => (
          <span key={i}>
            <span className="mx-[14px]">{word}</span>
            <span className="text-oxblood mx-[14px]">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
