import { memo, SVGProps } from 'react';

const FrameIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18.0309 17.3582H1.96907C1.44699 17.3576 0.946468 17.1499 0.57732 16.7807C0.208172 16.4115 0.000547798 15.911 0 15.3889V5.46925C0.000547798 4.94718 0.208172 4.44664 0.57732 4.07745C0.946468 3.70827 1.44699 3.5006 1.96907 3.5H18.0309C18.553 3.5006 19.0535 3.70827 19.4227 4.07745C19.7918 4.44664 19.9995 4.94718 20 5.46925V15.3889C19.9995 15.911 19.7918 16.4115 19.4227 16.7807C19.0535 17.1499 18.553 17.3576 18.0309 17.3582V17.3582ZM1.96907 4.25263C1.64652 4.25298 1.33729 4.38128 1.10923 4.60937C0.881178 4.83746 0.752928 5.14671 0.752629 5.46925V15.3889C0.752928 15.7114 0.881178 16.0207 1.10923 16.2488C1.33729 16.4769 1.64652 16.6052 1.96907 16.6055H18.0309C18.3535 16.6052 18.6627 16.4769 18.8908 16.2488C19.1188 16.0207 19.2471 15.7114 19.2474 15.3889V5.46925C19.2471 5.14671 19.1188 4.83746 18.8908 4.60937C18.6627 4.38128 18.3535 4.25298 18.0309 4.25263H1.96907Z'
      fill='#2E3192'
    />
    <path
      d='M10 12.6437C9.90827 12.6438 9.81967 12.6103 9.75088 12.5497L0.681693 4.54394L1.17975 3.97947L10 11.7662L18.8206 3.98041L19.3187 4.54488L10.2495 12.5506C10.1805 12.6111 10.0918 12.6442 10 12.6437V12.6437Z'
      fill='#2E3192'
    />
    <path d='M0.477064 16.1763L6.56964 9.23443L7.13562 9.73117L1.04304 16.673L0.477064 16.1763Z' fill='#2E3192' />
    <path d='M12.8836 9.72363L13.4495 9.2269L19.5422 16.1689L18.9763 16.6656L12.8836 9.72363Z' fill='#2E3192' />
  </svg>
);
const Memo = memo(FrameIcon2);
export { Memo as FrameIcon2 };