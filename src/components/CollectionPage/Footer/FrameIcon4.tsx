import { memo, SVGProps } from 'react';

const FrameIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_1410_6668)'>
      <path
        d='M23.5055 5.81658C23.229 4.71522 22.4183 3.84702 21.3903 3.55046C19.5122 3.00001 11.9997 3.00001 11.9997 3.00001C11.9997 3.00001 4.48756 3.00001 2.60948 3.52959C1.60122 3.82584 0.770802 4.71537 0.494239 5.81658C0 7.82819 0 12 0 12C0 12 0 16.1929 0.494239 18.1834C0.771095 19.2847 1.58145 20.1528 2.60962 20.4494C4.50733 21 12 21 12 21C12 21 19.5122 21 21.3903 20.4704C22.4185 20.174 23.229 19.3058 23.5058 18.2046C23.9999 16.1929 23.9999 12.0212 23.9999 12.0212C23.9999 12.0212 24.0197 7.82819 23.5055 5.81658V5.81658ZM9.60793 15.8541V8.14594L15.8549 12L9.60793 15.8541Z'
        fill='#2E3192'
      />
    </g>
    <defs>
      <clipPath id='clip0_1410_6668'>
        <rect width={24} height={24} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(FrameIcon4);
export { Memo as FrameIcon4 };
