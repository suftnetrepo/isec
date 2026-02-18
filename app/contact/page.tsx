'use client';

import { NextPage } from 'next';
import { Fragment } from 'react';

import { Footer } from '@/components/blocks/footer';
import PageProgress from '@/components/common/PageProgress';
import ContactForm from '@/components/common/ContactForm';
import ContactTiles from '@/components/elements/tiles/Contact-Tiles';
import { Navbar } from '@/components/blocks/navbar';

const Contact: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      <header className="wrapper">
        <Navbar social navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none" />
      </header>

      <main className="content-wrapper">
        <section className="wrapper bg-soft-primary">
          <div className="container py-pt pt-md-18">
            {/* ========== contact info section ========== */}
            <div className="row gx-md-8 gx-xl-12 gy-10 align-items-center">
              <ContactTiles />

              <div className="col-lg-5">
                <h2 className="display-4 mb-8">Ready to discuss your fire and security needs? We're here to help.</h2>
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon text-primary fs-28 me-6 mt-n1">
                      <i className="uil uil-location-pin-alt" />
                    </div>
                  </div>

                  <div>
                    <h5 className="mb-1">Address</h5>
                    <address>
                      56, Boater Drive, Houghton Regis <br className="d-none d-md-block" />
                      Luton LU5 6SQ, United Kingdom
                    </address>
                  </div>
                </div>

                <div className="d-flex flex-row">
                  <div>
                    <div className="icon text-primary fs-28 me-6 mt-n1">
                      <i className="uil uil-phone-volume" />
                    </div>
                  </div>

                  <div>
                    <h5 className="mb-1">Phone</h5>
                    <p>+44 07392 463 265 , 07442 055 760
                      <br className="d-none d-md-block" />

                    </p>

                  </div>
                </div>

                <div className="d-flex flex-row">
                  <div>
                    <div className="icon text-primary fs-28 me-6 mt-n1">
                      <i className="uil uil-envelope" />
                    </div>
                  </div>

                  <div>
                    <h5 className="mb-1">E-mail</h5>
                    <p className="mb-0">
                      <a href="mailto:info@isecuk.com" className="link-body">
                        info@isecuk.com, abiodunoyenigba@isecuk.com                 </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== contact form section ========== */}
            <div className="row mt-8">
              <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 mb-14">
                <h2 className="display-4 mb-3 text-center">Drop Us a Line</h2>
                <p className="lead text-center mb-10">
                  Reach out to us from our contact form and we will get back to you shortly.
                </p>

                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Contact;
