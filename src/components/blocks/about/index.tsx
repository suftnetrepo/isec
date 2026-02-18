import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Tiles } from "@/components/elements/tiles";
import ListColumn from "@/components/reuseable/ListColumn";
// CUSTOM DATA
import { aboutList3, aboutList1 } from "../../../data/about";

export default function About() {
  return (
    <Fragment>
      <div className="row gx-lg-8 gx-xl-12 gy-10 mb-10 mb-md-12 align-items-center">
        <div className="col-lg-6 order-lg-2">
          <Tiles />
        </div>

        <div className="col-lg-6">
          <h2 className="display-4 mb-3">Who Are We?</h2>
          <p className="lead fs-lg">
           ISEC Fire and Security Limited is located in Luton, England. We specialize in provision of services in the fire and security industry, covering installation, commissioning and maintenance of comprehensive safety systems.
          </p>
          <p className="mb-6">
           Our experience and training have earned us an excellent reputation for providing outstanding services to our clients. We offer national coverage and are proud members of the Fire Industry Association (FIA).
          </p>

          <ListColumn rowClass="gx-xl-8" list={aboutList1} />
        </div>
      </div>

      <div className="row gx-lg-8 gx-xl-12 gy-6 mb-14 mb-md-18">
        {aboutList3.map(({ id, title, description }) => (
          <div className="col-lg-3" key={id}>
            <div className="d-flex flex-row">
              <div>
                <div className="icon btn btn-circle pe-none btn-soft-primary me-4">
                  <span className="number fs-18">{id}</span>
                </div>
              </div>

              <div>
                <h4>{title}</h4>
                <p className="mb-2">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
