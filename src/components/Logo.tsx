function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 548 427"
      className="logo"
    >
      <title>Kolby Klassen Logo</title>
      <desc>Kolby Klassen Backend Web Developer</desc>
      <defs>
        <linearGradient
          id="logo-gradient"
          gradientUnits="userSpaceOnUse"
          x1="40"
          y1="0"
          x2="508"
          y2="0"
        >
          <stop offset="0%" className="gradient-start" />
          <stop offset="40%" className="gradient-mid" />
          <stop offset="100%" className="gradient-end" />
        </linearGradient>
      </defs>
      <g fill="url(#logo-gradient)">
        <path
          id="first-k"
          d="M40 40H116V171L248 40H349L181 209L349 387H248L116 246V387H40Z"
        />
        <path
          id="second-k-angles"
          d="M405 40H508L322 210L492 387H389L217 210Z"
        />
      </g>
    </svg>
  );
}

export default Logo;
