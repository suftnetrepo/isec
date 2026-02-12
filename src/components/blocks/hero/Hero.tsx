import NextLink from "@/components/reuseable/links/NextLink";
// CUSTOM UTILS
import { slideInDownAnimate } from "@/utils/animation";

export default function Hero() {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container pt-10 pb-15 pt-md-5 pb-md-20">
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 align-items-center">
          <div className="col-md-10  offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start order-2 order-lg-0">
            <h1 className="display-1 mb-5 ps-2 mx-md-n5 mx-lg-0" style={slideInDownAnimate("600ms")}>
              Spotless. Fresh. Reliable
            </h1>

            <p className="lead ps-2 fs-lg mb-7" style={slideInDownAnimate("900ms")}>
              We specialize in residential, commercial and deep cleaning services. We love to make your space shine like new.
            </p>

            <div className="d-flex ps-2 justify-content-center justify-content-lg-start">
              <span style={slideInDownAnimate("1200ms")}>
                <NextLink href="#" title="Book Service" className="btn btn-primary rounded me-2" />
              </span>

              <span style={slideInDownAnimate("1500ms")}>
                <NextLink href="#" title="Learn More" className="btn btn-yellow rounded" />
              </span>
            </div>
          </div>

          <div className="col-lg-7" style={slideInDownAnimate("0ms")}>
            <figure>
              <img
                alt="illustration"
              
                src="/img/sparkel/1.png"
                srcSet="/img/sparkel/8.png 2x"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

