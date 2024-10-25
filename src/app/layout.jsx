import "./globals.css";

export const metadata = {
  title: "Alfacare",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <body>{children}</body>
    </html>
  );
}
