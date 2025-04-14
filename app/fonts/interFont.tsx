import localFont from "next/font/local";

export const inter = localFont({
  src: [
    {
      path: "./Inter/InterVariable.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./Inter/InterVariable-Italic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-inter",
});
