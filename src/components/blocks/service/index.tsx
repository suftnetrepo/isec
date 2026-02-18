import { Fragment } from "react";
import { serviceData } from "@/data/services";

export function Services({ showTitle = true }) {
  return (
    <Fragment>
      {showTitle && (
        <div className="row text-center mb-10">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h2 className="fs-16 text-uppercase text-gradient gradient-1 mb-3">Our Services</h2>
            <h3 className="fs-24 lead mb-9 px-xl-11">We deliver fully integrated fire and security solutions — from concept to long-term support — ensuring continuous protection for what matters most.</h3>
          </div>
        </div>
      )}

      <div className="row gy-8 mb-17">
        {serviceData.map(({ id, title, description, Icon }) => (
          <div className="col-md-6 col-lg-4" key={id}>
            <div className="d-flex flex-row">
              <div>
                <Icon className="icon-svg-sm solid-duo text-grape-fuchsia me-4" />
              </div>

              <div>
                <h3 className="fs-22 mb-1">{title}</h3>
                <p className="mb-0">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
