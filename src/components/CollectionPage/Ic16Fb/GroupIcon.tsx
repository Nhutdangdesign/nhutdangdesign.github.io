import { memo, SVGProps } from 'react';

const GroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3.02293 16L3 9H0V6H3V4C3 1.3008 4.67151 0 7.07938 0C8.23277 0 9.22406 0.08587 9.51294 0.12425V2.94507L7.84296 2.94583C6.53343 2.94583 6.27987 3.5681 6.27987 4.48124V6H10L9 9H6.27986V16H3.02293Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(GroupIcon);
export { Memo as GroupIcon };
