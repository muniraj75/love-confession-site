export const metadata = {
  title: "Love Confession",
  description: "A special message",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
