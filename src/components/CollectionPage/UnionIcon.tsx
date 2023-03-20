import { memo, SVGProps } from 'react';

const UnionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 56 128' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M45.4731 6.03228e-07C45.3762 6.03228e-07 45.2973 -1.80968e-06 45.2183 3.01614e-06L0 0.154217V128H44.8884C46.5942 128 48.1166 126.919 48.6498 125.299C55.6809 103.931 58.5019 82.3819 53.3835 55.8547C50.0575 38.6165 43.3857 22.7451 47.2795 2.22034C47.4961 1.07875 46.6351 1.2212e-06 45.4731 6.03228e-07V6.03228e-07Z'
      fill='url(#paint0_linear_1410_6691)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_1410_6691'
        x1={-18.5}
        y1={223}
        x2={56}
        y2={-0.00000507621}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#73C3E0' />
        <stop offset={0.00072338} stopColor='#73C3E0' />
        <stop offset={0.238} stopColor='#EFA9C6' />
        <stop offset={0.4556} stopColor='#E3E8B6' />
        <stop offset={0.6621} stopColor='#EFA9C6' />
        <stop offset={1} stopColor='#AAD7F0' />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(UnionIcon);
export { Memo as UnionIcon };
