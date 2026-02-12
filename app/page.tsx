'use client';

import { Fragment } from 'react';
import type { NextPage } from 'next';
import PageProgress from '@/components/common/PageProgress';
import { Footer } from '@/components/blocks/footer';
import { Hero } from '@/components/blocks/hero/';
import useLightBox from '@/hooks/useLightBox';
import { Navbar } from '@/components/blocks/navbar';
import { Contact } from '@/components/blocks/contact';
import { Services } from '@/components/blocks/service';
import { Steps } from '@/components/blocks/steps';
import { About } from '@/components/blocks/about';

const Home: NextPage = () => {
  useLightBox();

  return (
    <Fragment>
      <PageProgress />

      <header className="wrapper bg-soft-primary">
        <Navbar />
      </header>

      <main className="content-wrapper">
        <Hero />
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16 pb-md-17">
            {/* ========== services section ========== */}
            <Services />
            {/* ========== process section ========== */}
            <Steps />
            {/* ========== why choose us section ========== */}
            <About />
          </div>
        </section>
        <Contact />
      </main>

      <Footer />
    </Fragment>
  );
};

export default Home;
