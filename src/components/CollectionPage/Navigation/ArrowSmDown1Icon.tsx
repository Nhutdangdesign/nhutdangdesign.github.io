import { memo, SVGProps } from 'react';

const ArrowSmDown1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M3.5 6.5L8 11L12.5 6.5' stroke='#323A46' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(ArrowSmDown1Icon);
export { Memo as ArrowSmDown1Icon };
