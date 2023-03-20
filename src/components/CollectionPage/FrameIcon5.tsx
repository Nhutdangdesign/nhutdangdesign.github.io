import { memo, SVGProps } from 'react';

const FrameIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 65 64' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M36.1666 31.9918C32.64 31.8172 29.8346 28.9025 29.8346 25.3332C29.8346 29.0145 26.8493 31.9998 23.168 31.9998C19.4866 31.9998 16.5013 29.0145 16.5013 25.3332C16.5013 29.0145 13.516 31.9998 9.83464 31.9998C6.1533 31.9998 3.16797 29.2225 3.16797 23.9998L13.8346 2.6665H45.8346L56.5013 23.9998C56.5013 24.8878 56.4146 25.7065 56.2533 26.4518'
      stroke='#2E3192'
      strokeWidth={2}
      strokeMiterlimit={10}
    />
    <path d='M11.168 32V56H35.168' stroke='#2E3192' strokeWidth={2} strokeMiterlimit={10} />
    <path
      d='M61.8346 37.3333C61.8346 45.6 48.5013 58.9333 48.5013 58.9333C48.5013 58.9333 35.168 45.6 35.168 37.3333C35.168 28.8 42.1013 24 48.5013 24C54.9013 24 61.8346 28.8 61.8346 37.3333Z'
      stroke='#2E3192'
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap='square'
    />
    <path
      d='M48.5 41.333C50.7091 41.333 52.5 39.5421 52.5 37.333C52.5 35.1239 50.7091 33.333 48.5 33.333C46.2909 33.333 44.5 35.1239 44.5 37.333C44.5 39.5421 46.2909 41.333 48.5 41.333Z'
      stroke='#2E3192'
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap='square'
    />
  </svg>
);
const Memo = memo(FrameIcon5);
export { Memo as FrameIcon5 };
