import IconBox from "@/components/reuseable/IconBox";

export function Contact() {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container py-14 py-md-17">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-7">
            <figure>
              <img
                alt=""
                className="w-auto"
                src="/img/illustrations/i5.png"
                srcSet="/img/illustrations/i5@2x.png 2x"
              />
            </figure>
          </div>

          <div className="col-lg-5">
            <h3 className="display-4 mb-7">Got any questions? Don't hesitate to get in touch.</h3>
            <div className="d-flex flex-row">
              <div>
                <IconBox
                  className="icon text-primary fs-28 me-4 mt-n1"
                  icon="uil-location-pin-alt"
                />
              </div>

              <div>
                <h5 className="mb-1">Address</h5>
                <address>56, Boater Drive, Houghton Regis
                  Luton LU5 6SQ </address>
              </div>
            </div>

            <div className="d-flex flex-row">
              <div>
                <IconBox className="icon text-primary fs-28 me-4 mt-n1" icon="uil-phone-volume" />
              </div>

              <div>
                <h5 className="mb-1">Phone</h5>
                <p> +44 07392 463 265 ,
                  07442 055 760
                </p>
              </div>
            </div>

            <div className="d-flex flex-row">
              <div>
                <IconBox className="icon text-primary fs-28 me-4 mt-n1" icon="uil-envelope" />
              </div>

              <div>
                <h5 className="mb-1">E-mail</h5>
                <p className="mb-0">
                  <a href="mailto:info@isecuk.com" className="link-body">
                    info@isecuk.com, abiodunoyenigba@isecuk.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
