// Simple outline icons (24px). Có thể tái dùng ở nơi khác.
import React from "react";

const Svg = ({ children, ...p }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    {children}
  </svg>
);

export const CupLogo = (p) => (
  <Svg {...p}>
    <path d="M5 6h11v8a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V6z" />
    <path d="M16 6h2a2.5 2.5 0 0 1 0 5h-2V6z" />
    <path d="M8 2s.7 1.2 0 2.2M11 2s.7 1.2 0 2.2M14 2s.7 1.2 0 2.2" />
  </Svg>
);

export const Home = (p) => (
  <Svg {...p}>
    <path d="M3 11.5 12 4l9 7.5" />
    <path d="M5 10.5V20h14v-9.5" />
    <path d="M10 20v-5h4v5" />
  </Svg>
);

export const External = (p) => (
  <Svg {...p}>
    <rect x="3.5" y="7.5" width="13" height="13" rx="2" />
    <path d="M10 10h7V3" />
    <path d="M17 3l-7 7" />
  </Svg>
);

export const GridDots = (p) => (
  <Svg {...p}>
    {[5, 12, 19].flatMap((x) =>
      [5, 12, 19].map((y) => <circle key={x + "-" + y} cx={x} cy={y} r="1.6" />)
    )}
  </Svg>
);

export const Heart = (p) => (
  <Svg {...p}>
    <path d="M20.5 8.5c0 5-8.5 9.5-8.5 9.5S3.5 13.5 3.5 8.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8.5 1.5z" />
  </Svg>
);
export const Lock = (p) => (
  <Svg {...p}>
    <rect x="4.5" y="10" width="15" height="10" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </Svg>
);
export const Bag = (p) => (
  <Svg {...p}>
    <rect x="4.5" y="7.5" width="15" height="12" rx="2" />
    <path d="M9 7.5V6a3 3 0 0 1 6 0v1.5" />
  </Svg>
);
export const Pen = (p) => (
  <Svg {...p}>
    <path d="M3 21l3.5-.7 10-10a2.5 2.5 0 1 0-3.5-3.5l-10 10L3 21z" />
    <path d="M12 7l5 5" />
  </Svg>
);
export const ChevronDown = (p) => (
  <Svg {...p}>
    <path d="M6 9l6 6 6-6" />
  </Svg>
);
export const CodeSquare = (p) => (
  <Svg {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
    <path d="M9 9l-3 3 3 3M15 9l3 3-3 3" />
  </Svg>
);
export const Bolt = (p) => (
  <Svg {...p}>
    <path d="M13 2L6 13h5l-1 9 7-11h-5l1-8z" />
  </Svg>
);
export const DollarCircle = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 10.5A2.5 2.5 0 0 0 11 13h2a2 2 0 0 1 0 4h-4M12 5v14" />
  </Svg>
);
export const Gear = (p) => (
  <Svg {...p}>
    <path d="M12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" />
    <path d="M19 13l2-1-2-1-.5-1.7 1.4-1.5-1.5-1.5-1.5 1.4L13 6 12 4h-2l-1 2-2.9.8L4.6 5.4 3.1 6.9 4.5 8.4 4 10l-2 1 2 1 .5 1.6-1.4 1.5 1.5 1.5 1.6-1.4L9 18l1 2h2l1-2 2.9-.8 1.6 1.4 1.5-1.5-1.4-1.5L19 13z" />
  </Svg>
);

// export const Heart = (props) => (
//   <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
//     <path d="M12 21s-6.716-4.243-9.428-7.07C.857 12.184.5 10.5 1.05 9.024 1.9 6.74 4.466 5.7 6.55 6.8c.72.383 1.35.95 1.86 1.63.51-.68 1.14-1.246 1.86-1.63 2.084-1.1 4.65-.06 5.5 2.224.55 1.476.193 3.16-1.522 4.905C18.716 16.757 12 21 12 21z" fill="currentColor"/>
//   </svg>
// );

export const Star = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      fill="currentColor"
    />
  </svg>
);

export const Search = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
      fill="currentColor"
    />
  </svg>
);

// export const ChevronDown = (props) => (
//   <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
//     <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" fill="currentColor"/>
//   </svg>
// );

export const Coffee = (props) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
    <path
      d="M46 22H10v10c0 9.94 8.06 18 18 18s18-8.06 18-18V22z"
      fill="currentColor"
    />
    <path
      d="M46 26h5a7 7 0 1 1 0 14h-5"
      stroke="currentColor"
      strokeWidth="4"
      fill="none"
    />
    <path
      d="M22 10c0 4 4 4 4 8M30 10c0 4 4 4 4 8M38 10c0 4 4 4 4 8"
      stroke="currentColor"
      strokeWidth="3"
      fill="none"
    />
  </svg>
);

export const Handshake = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      d="M2 12l4.5-4.5c.8-.8 2-.8 2.8 0l2.7 2.7 2.7-2.7c.8-.8 2-.8 2.8 0L22 12l-3 3-3-3-3 3-3-3-3 3-3-3z"
      fill="currentColor"
    />
  </svg>
);

export const Globe = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      d="M12 2a10 10 0 100 20 10 10 0 000-20zm8 10a7.96 7.96 0 01-1.17 4.17h-2.66A14.9 14.9 0 0017 12c0-1.17-.14-2.3-.39-3.33h2.66A7.96 7.96 0 0120 12zM4 12c0-1.17.14-2.3.39-3.33h2.66A14.9 14.9 0 007 12c0 1.17.14 2.3.39 3.33H4.73A7.96 7.96 0 014 12zm4.22 0c0-1.2.13-2.34.36-3.33h6.84c.23.99.36 2.13.36 3.33s-.13 2.34-.36 3.33H8.58A14.9 14.9 0 018.22 12zM7.07 17.83h2.66c.65 1.51 1.51 2.73 2.27 3.49a7.96 7.96 0 01-4.93-3.49zm6.93 3.49c.76-.76 1.62-1.98 2.27-3.49h2.66a7.96 7.96 0 01-4.93 3.49zM16.93 6.17h-2.66c-.65-1.51-1.51-2.73-2.27-3.49a7.96 7.96 0 014.93 3.49zM9.34 6.17H6.68a7.96 7.96 0 014.93-3.49c-.76.76-1.62 1.98-2.27 3.49z"
      fill="currentColor"
    />
  </svg>
);

export const Mail = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v.01L12 13l8-7V6H4zm0 12h16V8l-8 7-8-7v10z"
      fill="currentColor"
    />
  </svg>
);

export const Smile = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M8 14s1.5 2 4 2 4-2 4-2"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    <circle cx="9" cy="10" r="1" fill="currentColor" />
    <circle cx="15" cy="10" r="1" fill="currentColor" />
  </svg>
);

// export const Lock = (props) => (
//   <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
//     <path d="M6 10V7a6 6 0 1112 0v3h1a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h1zm2 0h8V7a4 4 0 10-8 0v3z" fill="currentColor"/>
//   </svg>
// );

export const Clock = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      d="M12 1a11 11 0 100 22 11 11 0 000-22zm0 2a9 9 0 110 18 9 9 0 010-18zm1 4h-2v6l5 3 .5-.87-3.5-2.13V7z"
      fill="currentColor"
    />
  </svg>
);
