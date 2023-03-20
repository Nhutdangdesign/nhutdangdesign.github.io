import { memo, SVGProps } from 'react';

const GroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 44 56' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.666667 34.6667C0.666667 21.4667 22 0 22 0C22 0 43.3333 21.4667 43.3333 34.6667C43.3333 40.3246 41.0857 45.7508 37.0849 49.7516C33.0842 53.7524 27.658 56 22 56C16.342 56 10.9158 53.7524 6.91506 49.7516C2.91428 45.7508 0.666667 40.3246 0.666667 34.6667V34.6667Z'
      stroke='#2E3192'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M22 42.6667C19.8667 42.6667 14 41.2 14 34.6667'
      stroke='#2E3192'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(GroupIcon);
export { Memo as GroupIcon };
