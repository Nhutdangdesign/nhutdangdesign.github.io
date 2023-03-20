import { memo, SVGProps } from 'react';

const GroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 11 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3.45314 17.1429L3.42857 9.64286H0.214286V6.42857H3.42857V4.28571C3.42857 1.39371 5.21947 0 7.79934 0C9.03511 0 10.0972 0.0920036 10.4067 0.133125V3.15543L8.61746 3.15625C7.21439 3.15625 6.94272 3.82296 6.94272 4.80133V6.42857H10.9286L9.85714 9.64286H6.94271V17.1429H3.45314Z'
      fill='#9BD1FF'
    />
  </svg>
);
const Memo = memo(GroupIcon);
export { Memo as GroupIcon };
