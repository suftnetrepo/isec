'use client';

import { Fragment } from 'react';
import type { NextPage } from 'next';
import PageProgress from '@/components/common/PageProgress';
import { Footer } from '@/components/blocks/footer';
import { Hero } from '@/components/blocks/hero/';
import { Navbar } from '@/components/blocks/navbar';
import { Contact } from '@/components/blocks/contact';
import { Services } from '@/components/blocks/service';

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
                  <h3 className="display-4 mb-3 text-center">Smart Safety Solutions</h3>
                  <p className="lead fs-lg text-center">
              Combining advanced technology with expert engineering, we deliver end-to-end fire and security systems built for modern protection.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        <section className="wrapper">
          <div className="container pt-17">
            <Services showTitle={false} />
          </div>
        </section>
        </section>
      </main>

      <Footer backgroundColor='bg-gray' />
    </Fragment>
  );
};

export default Home;
