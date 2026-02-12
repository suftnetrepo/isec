'use client';
import { processList } from "@/data/demo-12";

interface StepProps {
  no: string;
  title: string;
  subtitle: string;
  className?: string;
}

export function Steps() {

  const Step = ({ no, title, subtitle, className = "" }: StepProps) => {
    return (
      <div className="d-flex flex-row mb-6">
        <div>
          <span className={className}>
            <span className="number fs-18">{no}</span>
          </span>
        </div>

        <div>
          <h4 className="mb-1">{title}</h4>
          <p className="mb-0">{subtitle}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
      <div className="col-lg-7">
        <figure>
          <img
            className="w-auto"
            alt="illustration"
            src="/img/illustrations/i8.png"
            srcSet="/img/illustrations/i8@2x.png 2x"
          />
        </figure>
      </div>

      <div className="col-lg-5">
        <h3 className="display-4 mb-7">Get your space cleaned in three simple steps.</h3>
        {processList.map((item) => (
          <Step {...item} key={item.no} className="icon btn btn-circle btn-soft-primary pe-none me-5" />
        ))}
      </div>
    </div>
  );
}
