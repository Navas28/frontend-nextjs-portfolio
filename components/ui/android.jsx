export function Android({
  width = 433,
  height = 882,
  src,
  videoSrc,
  ...props
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M376 153H378C379.105 153 380 153.895 380 155V249C380 250.105 379.105 251 378 251H376V153Z"
        className="fill-[#404040]"
      />
      <path
        d="M376 301H378C379.105 301 380 301.895 380 303V351C380 352.105 379.105 353 378 353H376V301Z"
        className="fill-[#404040]"
      />
      <path
        d="M0 42C0 18.8041 18.804 0 42 0H336C359.196 0 378 18.804 378 42V788C378 811.196 359.196 830 336 830H42C18.804 830 0 811.196 0 788V42Z"
        className="fill-[#262626] stroke-white/10 stroke-[0.5]"
      />
      <path
        d="M2 43C2 22.0132 19.0132 5 40 5H338C358.987 5 376 22.0132 376 43V787C376 807.987 358.987 825 338 825H40C19.0132 825 2 807.987 2 787V43Z"
        className="fill-[#0a0a0a]"
      />
      <g clipPath="url(#clip0_514_20855)">
        <path
          d="M9.25 48C9.25 29.3604 24.3604 14.25 43 14.25H335C353.64 14.25 368.75 29.3604 368.75 48V780C368.75 798.64 353.64 813.75 335 813.75H43C24.3604 813.75 9.25 798.64 9.25 780V48Z"
          className="fill-transparent stroke-white/5 stroke-[0.5]"
        />
      </g>
      <circle cx="189" cy="28" r="9" className="fill-[#050505]" />
      <circle cx="189" cy="28" r="4" className="fill-[#1a1a1a]" />
      {src && (
        <image
          href={src}
          x="9"
          y="14"
          width="360"
          height="800"
          className="object-fill"
          preserveAspectRatio="none"
          clipPath="url(#clip0_514_20855)"
        />
      )}
      {videoSrc && (
        <foreignObject
          x="9"
          y="14"
          width="360"
          height="800"
          clipPath="url(#clip0_514_20855)"
        >
          <video
            className="size-full object-fill"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
          />
        </foreignObject>
      )}
      <defs>
        <clipPath id="clip0_514_20855">
          <rect
            width="360"
            height="800"
            rx="33"
            ry="25"
            className="fill-white dark:fill-[#262626]"
            transform="translate(9 14)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
