import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { GroupIcon } from './GroupIcon';
import classes from './Ic64Water.module.css';

interface Props {
  className?: string;
}
/* @figmaId 856:2114 */
export const Ic64Water: FC<Props> = memo(function Ic64Water(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.group}>
        <GroupIcon className={classes.icon} />
      </div>
    </div>
  );
});
