import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Saraah Creation | Film Production, Advertising, Graphics, Sales & Marketing',
  description: 'Saraah Creation is a filmmaking, advertising, graphic design, sales and marketing company founded by Sarika Mahesh Mene. Creating Cinema. Building Brands.',
  keywords: 'Saraah Creation, Sarika Mahesh Mene, Film Production, Advertising Agency, Graphic Design, Branding, Marketing Solutions, Mumbai',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
