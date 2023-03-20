import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_Property1Normal.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    timHieuThem?: ReactNode;
  };
}
/* @figmaId 851:1473 */
export const Button_Property1Normal: FC<Props> = memo(function Button_Property1Normal(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      {props.text?.timHieuThem != null ? (
        props.text?.timHieuThem
      ) : (
        <div className={classes.timHieuThem}>Tìm hiểu thêm</div>
      )}
    </button>
  );
});
