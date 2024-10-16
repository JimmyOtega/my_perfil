
// import Footer from "@/components/footer";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-custom-blue">
        {children}
      </body>
    </html>
  );
}
