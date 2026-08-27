export const metadata = {
  title: "Haytham Ameen | Founder & Entrepreneur",
  description:
    "Personal website of Haytham Ameen — entrepreneur building businesses across logistics, industrial supply and technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
