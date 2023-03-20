import { memo, SVGProps } from 'react';

const Vector18Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 13 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.606763 5.12052L13 5.6962' stroke='white' strokeWidth={1.4} strokeLinecap='round' />
  </svg>
);
const Memo = memo(Vector18Icon);
export { Memo as Vector18Icon };
