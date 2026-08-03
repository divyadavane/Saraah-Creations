import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata = {
  title: 'Saraah Creation | Film Production, Advertising, Graphics, Sales & Marketing',
  description: 'Saraah Creation is a filmmaking, advertising, graphic design, sales and marketing company founded by Sarika Mahesh Mene. Creating Cinema. Building Brands.',
  keywords: 'Saraah Creation, Sarika Mahesh Mene, Film Production, Marathi Cinema, Advertising Agency, Graphic Design, Branding, Marketing Solutions, Mumbai',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" data-theme="dark">
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

