import { memo, SVGProps } from 'react';

const GroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M18 22H0V5H18V22Z' stroke='#2E3192' strokeMiterlimit={10} strokeLinecap='square' />
    <path
      d='M5 8V4C5 1.8 6.8 0 9 0C11.2 0 13 1.8 13 4V8'
      stroke='#2E3192'
      strokeMiterlimit={10}
      strokeLinecap='square'
    />
  </svg>
);
const Memo = memo(GroupIcon);
export { Memo as GroupIcon };
