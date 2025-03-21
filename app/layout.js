// app/layout.js
import "../styles/globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Supercharged To‑Do List",
  description: "A trendy to‑do list app using Next.js app routing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
