import "./globals.css";

export const metadata = {
  title: "M Bilal Shah Gillani | Portfolio",
  description:
    "Immersive developer portfolio crafted with Next.js, GSAP, Tailwind CSS, and Three.js.",
};

export const viewport = {
  themeColor: "#170537",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="bg-[var(--background)] text-[var(--foreground)] antialiased"
      >
        {children}
      </body>
    </html>
  );
}
