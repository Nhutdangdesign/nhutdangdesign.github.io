import { memo, SVGProps } from 'react';

const GroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10 11C7.239 11 5 8.761 5 6V5C5 2.239 7.239 0 10 0C12.761 0 15 2.239 15 5V6C15 8.761 12.761 11 10 11Z'
      stroke='#2E3192'
      strokeWidth={1.4}
      strokeMiterlimit={10}
      strokeLinecap='square'
    />
    <path
      d='M20 19.908C20 18.108 18.803 16.525 17.066 16.052C15.172 15.535 12.586 15 10 15C7.414 15 4.828 15.535 2.934 16.052C1.197 16.525 0 18.108 0 19.908V22H20V19.908Z'
      stroke='#2E3192'
      strokeWidth={1.4}
      strokeMiterlimit={10}
      strokeLinecap='square'
    />
  </svg>
);
const Memo = memo(GroupIcon);
export { Memo as GroupIcon };
