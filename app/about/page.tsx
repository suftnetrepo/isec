'use client';

import { Fragment } from 'react';
import type { NextPage } from 'next';
import PageProgress from '@/components/common/PageProgress';
import { Footer } from '@/components/blocks/footer';
import { Navbar } from '@/components/blocks/navbar';
import About  from '@/components/blocks/about';

const Home: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      <header className="wrapper">
        <Navbar social navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none" />
      </header>

      <main className="content-wrapper">
        <section className="section-frame overflow-hidden">
          <div className="wrapper bg-gray">
            <div className="container py-13 py-md-13 text-center">
              <div className="row">
                <div className="col-lg-10 col-xxl-8 mx-auto">
                  <h3 className="display-4 mb-3 text-center">What Drives Us</h3>
                  <p className="lead fs-lg text-center">
            High-performing solutions that make a measurable difference for our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        <section className="wrapper">
          <div className="container pt-14 ">
            <About />
          </div>
        </section>
        </section>
      </main>

      <Footer backgroundColor='bg-gray' />
    </Fragment>
  );
};

export default Home;
