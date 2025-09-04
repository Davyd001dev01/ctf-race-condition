import "../styles/globals.css";
import { fontInter, fontBangers } from '@/lib/fonts';
import { ThemeProvider } from '@/components/site/ThemeProvider';
import { Navbar } from '@/components/site/Navbar';
import { Footer } from '@/components/site/Footer';

export const metadata = {
  title: "Capsule Bank — Race Lab",
  description: "CTF de Race Condition (TOCTOU)"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fontInter.variable} ${fontBangers.variable}`}>
      <body>


        <div
          aria-hidden
          className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat bg-fixed "
          style={{ backgroundImage: "url(/db/wapp-dragonball.jpg)", backgroundPositionX: 10 }}
        />


          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}


