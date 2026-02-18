
import SocialLinks from '@/components/reuseable/SocialLinks';
type Footer8Props = {
  backgroundColor?: string;
};

const Footer = ({ backgroundColor = 'bg-white' }: Footer8Props) => {
  return (
    <footer className={backgroundColor}>
      <div className="container pt-13 pb-7">
        <div className="row gx-lg-0 gy-6">
          <div className="col-lg-4">
            <div className="widget">
              <img className="mb-4" alt="logo" src="/img/logo.png" srcSet="/img/logo-dark@2x.png 2x"  />
              <p className="lead mb-0">
               Professional fire and security engineering services across England. Member of the Fire Industry Association (FIA).
              </p>
            </div>
          </div>

          <div className="col-lg-3 offset-lg-2">
            <div className="widget">
              <div className="d-flex flex-row">
                <div>
                  <div className="icon text-primary fs-28 me-4 mt-n1">
                    <i className="uil uil-phone-volume" />
                  </div>
                </div>

                <div>
                  <h5 className="mb-1">Phone</h5>
                  <p className="mb-0">
                    +44 07392 463 265 <br />
                    +44 07442 055 760
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="widget">
              <div className="d-flex flex-row">
                <div>
                  <div className="icon text-primary fs-28 me-4 mt-n1">
                    <i className="uil uil-location-pin-alt" />
                  </div>
                </div>

                <div className="align-self-start justify-content-start">
                  <h5 className="mb-1">Address</h5>
                  <address>56, Boater Drive, Houghton Regis
                    Luton LU5 6SQ </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-11 mt-md-12 mb-7" />
        <div className="d-md-flex align-items-center justify-content-between">
          <p className="mb-2 mb-lg-0">© 2025 ISEC. All rights reserved.</p>
          <SocialLinks className="nav social social-muted mb-0 text-md-end" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
