import { memo, SVGProps } from 'react';

const FrameIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 65 64' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M54.9013 44.8002C57.0503 42.8309 58.7739 40.4431 59.9662 37.7833C61.1586 35.1235 61.7944 32.248 61.8346 29.3335C61.8346 16.1335 48.768 5.3335 32.5013 5.3335C16.2346 5.3335 3.16797 16.1335 3.16797 29.3335C3.16797 42.5335 16.2346 53.3335 32.5013 53.3335C35.2808 53.2939 38.0496 52.9813 40.768 52.4002L56.5013 58.6668L54.9013 44.8002Z'
      stroke='#2E3192'
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap='square'
    />
    <path d='M19.168 24H45.8346' stroke='#2E3192' strokeWidth={2} strokeMiterlimit={10} strokeLinecap='square' />
    <path d='M19.168 34.667H35.168' stroke='#2E3192' strokeWidth={2} strokeMiterlimit={10} strokeLinecap='square' />
  </svg>
);
const Memo = memo(FrameIcon4);
export { Memo as FrameIcon4 };
