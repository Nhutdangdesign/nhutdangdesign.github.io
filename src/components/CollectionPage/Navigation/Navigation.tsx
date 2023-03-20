import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IcCart } from '../IcCart/IcCart';
import { IcUser } from '../IcUser/IcUser';
import { ArrowSmDown1Icon } from './ArrowSmDown1Icon';
import { FrameIcon } from './FrameIcon';
import { FrameIcon2 } from './FrameIcon2';
import { FrameIcon3 } from './FrameIcon3';
import { GroupIcon } from './GroupIcon';
import { GroupIcon2 } from './GroupIcon2';
import classes from './Navigation.module.css';

interface Props {
  className?: string;
  classes?: {
    icons8Sale1?: string;
    icons8Sale12?: string;
    icons8Sale13?: string;
  };
  swap?: {
    frame?: ReactNode;
    frame2?: ReactNode;
    frame3?: ReactNode;
  };
  text?: {
    _12?: ReactNode;
    _37?: ReactNode;
    _26?: ReactNode;
    _122?: ReactNode;
    _372?: ReactNode;
    _262?: ReactNode;
    _123?: ReactNode;
    _373?: ReactNode;
    _263?: ReactNode;
  };
}
/* @figmaId 3188:5458 */
export const Navigation: FC<Props> = memo(function Navigation(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle16}></div>
      <div className={classes.header}>
        <div className={classes.frame8209}>
          <div className={classes.frame8196}>
            <div className={classes.frame}>{props.swap?.frame || <FrameIcon className={classes.icon3} />}</div>
            <div className={classes.hotline}>Hotline:</div>
            <div className={classes._19002821}>19002821</div>
          </div>
          <div className={classes.frame8210}>
            <div className={classes.frame7852}>
              <div className={classes.frame2}>{props.swap?.frame2 || <FrameIcon2 className={classes.icon4} />}</div>
              <div className={classes.timSanPhamThongTin}>Tìm sản phẩm, thông tin...</div>
            </div>
          </div>
          <IcUser
            swap={{
              group: <GroupIcon className={classes.icon} />,
            }}
          />
          <IcCart
            swap={{
              group: <GroupIcon2 className={classes.icon2} />,
            }}
          />
        </div>
        <div className={classes.autoLayoutHorizontal}>
          <div className={classes.sanPham}>Sản phẩm</div>
          <div className={classes.cauChuyenOcany}>Câu chuyện Ocany</div>
          <div className={classes.blog}>Blog</div>
          <div className={classes.frame12}>
            <div className={classes.hoTro}>Hỗ trợ</div>
            <div className={classes.arrowSmDown1}>
              <ArrowSmDown1Icon className={classes.icon5} />
            </div>
          </div>
        </div>
        <div className={classes.frame3}>{props.swap?.frame3 || <FrameIcon3 className={classes.icon6} />}</div>
      </div>
      <div className={classes.frame8252}>
        <div className={classes.frame8215}>
          <div className={classes.frame8217}>
            <div className={`${props.classes?.icons8Sale1 || ''} ${classes.icons8Sale1}`}></div>
            <div className={classes.khuyenMaiLonMUA1TANG1}>Khuyến mãi lớn! MUA 1 TẶNG 1!</div>
          </div>
          <div className={classes.frame8216}>
            <div className={classes.chuongTrinhKetThucTrong}>Chương trình kết thúc trong</div>
            <div className={classes.frame8214}>
              <div className={classes.frame8213}>
                {props.text?._12 != null ? props.text?._12 : <div className={classes._12}>12</div>}
                <div className={classes.gio}>giờ</div>
              </div>
              <div className={classes.frame8212}>
                {props.text?._37 != null ? props.text?._37 : <div className={classes._37}>37</div>}
                <div className={classes.phut}>phút</div>
              </div>
              <div className={classes.frame8211}>
                {props.text?._26 != null ? props.text?._26 : <div className={classes._26}>26</div>}
                <div className={classes.giay}>Giây</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.frame82162}>
          <div className={classes.frame82172}>
            <div className={`${props.classes?.icons8Sale12 || ''} ${classes.icons8Sale12}`}></div>
            <div className={classes.khuyenMaiLonMUA1TANG12}>Khuyến mãi lớn! MUA 1 TẶNG 1!</div>
          </div>
          <div className={classes.frame82163}>
            <div className={classes.chuongTrinhKetThucTrong2}>Chương trình kết thúc trong</div>
            <div className={classes.frame82142}>
              <div className={classes.frame82132}>
                {props.text?._122 != null ? props.text?._122 : <div className={classes._122}>12</div>}
                <div className={classes.gio2}>giờ</div>
              </div>
              <div className={classes.frame82122}>
                {props.text?._372 != null ? props.text?._372 : <div className={classes._372}>37</div>}
                <div className={classes.phut2}>phút</div>
              </div>
              <div className={classes.frame82112}>
                {props.text?._262 != null ? props.text?._262 : <div className={classes._262}>26</div>}
                <div className={classes.giay2}>Giây</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.frame82173}>
          <div className={classes.frame82174}>
            <div className={`${props.classes?.icons8Sale13 || ''} ${classes.icons8Sale13}`}></div>
            <div className={classes.khuyenMaiLonMUA1TANG13}>Khuyến mãi lớn! MUA 1 TẶNG 1!</div>
          </div>
          <div className={classes.frame82164}>
            <div className={classes.chuongTrinhKetThucTrong3}>Chương trình kết thúc trong</div>
            <div className={classes.frame82143}>
              <div className={classes.frame82133}>
                {props.text?._123 != null ? props.text?._123 : <div className={classes._123}>12</div>}
                <div className={classes.gio3}>giờ</div>
              </div>
              <div className={classes.frame82123}>
                {props.text?._373 != null ? props.text?._373 : <div className={classes._373}>37</div>}
                <div className={classes.phut3}>phút</div>
              </div>
              <div className={classes.frame82113}>
                {props.text?._263 != null ? props.text?._263 : <div className={classes._263}>26</div>}
                <div className={classes.giay3}>Giây</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
