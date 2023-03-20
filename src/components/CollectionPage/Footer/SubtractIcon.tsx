import { memo, SVGProps } from 'react';

const SubtractIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2732 543' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M727.203 12.5154C355.331 -15.4938 87.4544 9.9783 0 26.2155V543H2732V14.0376C2521.06 34.6977 2214.9 21.0084 1970.39 10.0752L1970.39 10.0751C1854.59 4.89718 1752.61 0.337447 1681.12 0.337447C1610.2 0.337447 1534.78 5.13459 1449.88 10.5351C1268.5 22.0726 1043.83 36.3638 727.203 12.5154Z'
      fill='#9BD1FF'
    />
  </svg>
);
const Memo = memo(SubtractIcon);
export { Memo as SubtractIcon };
