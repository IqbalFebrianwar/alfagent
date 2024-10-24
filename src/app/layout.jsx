import "./globals.css";

export const metadata = {
  title: "Alfagent",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <body>{children}</body>
    </html>
  );
}
