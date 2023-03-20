import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { GroupIcon } from './GroupIcon';
import classes from './IcUser.module.css';

interface Props {
  className?: string;
  swap?: {
    group?: ReactNode;
  };
}
/* @figmaId 397:640 */
export const IcUser: FC<Props> = memo(function IcUser(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.group}>{props.swap?.group || <GroupIcon className={classes.icon} />}</div>
    </div>
  );
});
