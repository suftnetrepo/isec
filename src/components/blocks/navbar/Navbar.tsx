'use client';

import { Fragment, useRef } from 'react';
import clsx from "clsx";
import useSticky from '@/hooks/useSticky';
import NextLink from '@/components/reuseable/links/NextLink';
import SocialLinks from '@/components/reuseable/SocialLinks';

// ===================================================================
type Navbar2Props = { navClassName?: string };
// ===================================================================

export default function Navbar({
  navClassName = "navbar navbar-expand-lg extended navbar-light navbar-bg-light caret-none"
}: Navbar2Props) {
  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  return (
    <Fragment>
      <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} />

      <nav ref={navbarRef} className={clsx(navClassName, { "navbar-clone fixed navbar-stick": sticky })}>
        <div className="container flex-lg-column">
          <div className="topbar d-flex flex-row w-100 justify-content-between align-items-center">
            <div className="navbar-brand">
              <NextLink
                href="/"
                title={<img alt="logo" src="/img/logo/1.png" srcSet="/img/logo/1.png 5x" />}
              />
            </div>

            <div className="navbar-other ms-auto">
              <ul className="navbar-nav flex-row align-items-center">
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-info">
                    <i className="uil uil-info-circle" />
                  </a>
                </li>

                <li className="nav-item d-lg-none">
                  <button
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvas-nav"
                    className="hamburger offcanvas-nav-btn">
                    <span />
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="navbar-collapse-wrapper bg-white d-flex flex-row align-items-center">
            <div
              id="offcanvas-nav"
              data-bs-scroll="true"
              className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
              <div className="offcanvas-header d-lg-none">
                <h3 className="text-white fs-30 mb-0">Sandbox</h3>
                <button
                  type="button"
                  aria-label="Close"
                  data-bs-dismiss="offcanvas"
                  className="btn-close btn-close-white ms-auto"
                />
              </div>

              <div className="offcanvas-body d-flex flex-column h-100">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NextLink title="Home" className="nav-link" href="/" />
                  </li>

                  {/* <li className="nav-item">
                    <NextLink title="About us" className="nav-link" href="/about" />
                  </li>

                  <li className="nav-item">
                    <NextLink title="Pricing" className="nav-link" href="/pricing" />
                  </li>

                  <li className="nav-item">
                    <NextLink title="Features" className="nav-link" href="/features" />
                  </li> */}

                  <li className="nav-item">
                    <NextLink title="Contact" className="nav-link" href="/contact" />
                  </li>
                </ul>

                {/* ============= show contact info in the small device sidebar ============= */}
                <div className="offcanvas-footer d-lg-none">
                  <div>
                    <NextLink title="info@email.com" className="link-inverse" href="mailto:first.last@email.com" />
                    <br />
                    <NextLink href="tel:0123456789" title="00 (123) 456 78 90" />
                    <br />
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </div>

            {/* ============= right side header content ============= */}
            <div className="navbar-other ms-auto w-100 d-none d-lg-block">
              <SocialLinks className="nav social social-muted justify-content-end text-end" />
            </div>
          </div>
        </div>
      </nav>

      {/* ============= info sidebar ============= */}

    </Fragment>
  );
}


