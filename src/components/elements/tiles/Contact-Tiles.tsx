import { FC } from 'react';

const ContactTiles: FC = () => {
  return (
    <div className="col-md-8 col-lg-6 offset-lg-0 col-xl-5 offset-xl-1 position-relative">
      <div className="shape bg-dot primary rellax w-17 h-21" style={{ top: '-2rem', left: '-1.4rem' }} />
      <figure>
              <img
                alt=""
                className="w-auto"
                src="/img/illustrations/i5.png"
                srcSet="/img/illustrations/i5@2x.png 2x"
              />
            </figure>
    </div>
  );
};

export default ContactTiles;
