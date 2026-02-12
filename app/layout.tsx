'use client';

import { Manrope } from "next/font/google";
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import ThemeProvider from '@/theme/ThemeProvider';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// animate css
import 'animate.css';
// import swiper css
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
// video player css
import 'plyr-react/plyr.css';
// glightbox css
import 'glightbox/dist/css/glightbox.css';
// custom scrollcue css
import '@/plugins/scrollcue/scrollCue.css';
import { SessionProvider } from 'next-auth/react';
// Bootstrap and custom scss
import '@/assets/scss/style.scss';

const manrope = Manrope({
  subsets: ["latin"]
});


function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('bootstrap');
    }
  }, []);

  useEffect(() => {
    (async () => {
      const scrollCue = (await import('@/plugins/scrollcue')).default;
      scrollCue.init({ interval: -400, duration: 700, percentage: 0.8 });
      scrollCue.update();
    })();
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
      </head>
      <body className={manrope.className}>
        <ThemeProvider>
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
