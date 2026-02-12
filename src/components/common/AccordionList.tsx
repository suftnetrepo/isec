import { FC } from 'react';
import Accordion from '@/components/reuseable/accordion';
// -------- data -------- //
const accordions = [
  {
    no: '1',
    expand: true,
    heading: 'Flexible Scheduling',
    body: 'Book cleaning services at times that work best for you, including evenings and weekends.'
  },
  {
    no: '2',
    expand: false,
    heading: 'Trusted Professionals',
    body: 'All our cleaners are background-checked, insured, and trained to the highest standards.'
  },
  {
    no: '3',
    expand: false,
    heading: 'Satisfaction Guaranteed',
    body: `Not happy? We'll come back and re-clean for free. Your satisfaction is our priority.`
  }
];

const AccordionList: FC = () => {
  return (
    <div className="accordion accordion-wrapper" id="accordionExample">
      {accordions.map((item) => (
        <Accordion type="plain" key={item.no} {...item} />
      ))}
    </div>
  );
};

export default AccordionList;
