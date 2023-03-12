import { ServerThemeProvider } from '@wits/next-themes';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

import '../src/styles/globals.css';

interface IProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: IProps) => {
  return (
    <ServerThemeProvider attribute="class">
      <html lang="en">
        <head />
        <body className="flex flex-col gap-y-4">
          <Header />

          <main className="container-auto">{children}</main>

          <Footer />
        </body>
      </html>
    </ServerThemeProvider>
  );
};

export default RootLayout;
