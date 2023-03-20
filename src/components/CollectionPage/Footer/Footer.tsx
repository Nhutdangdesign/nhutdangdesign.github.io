import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Ic16Fb } from '../Ic16Fb/Ic16Fb';
import { Ic16Insta } from '../Ic16Insta/Ic16Insta';
import { EllipseIcon } from './EllipseIcon';
import classes from './Footer.module.css';
import { FrameIcon } from './FrameIcon';
import { FrameIcon2 } from './FrameIcon2';
import { FrameIcon3 } from './FrameIcon3';
import { FrameIcon4 } from './FrameIcon4';
import { Group7357Icon } from './Group7357Icon';
import { GroupIcon } from './GroupIcon';
import { GroupIcon2 } from './GroupIcon2';
import { SubtractIcon } from './SubtractIcon';
import { Vector17Icon } from './Vector17Icon';
import { Vector18Icon } from './Vector18Icon';
import { Vector19Icon } from './Vector19Icon';

interface Props {
  className?: string;
}
/* @figmaId 471:6549 */
export const Footer: FC<Props> = memo(function Footer(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.subtract}>
        <SubtractIcon className={classes.icon3} />
      </div>
      <div className={classes.hoTro}>hỗ trợ</div>
      <div className={classes.frame8229}>
        <div className={classes.lienHe}>Liên hệ</div>
        <div className={classes.fAQ}>FAQ</div>
        <div className={classes.timCuaHang}>Tìm cửa hàng</div>
        <div className={classes.IeuKienSuDung}>Điều kiện sử dụng</div>
        <div className={classes.chinhSachBaoMat}>Chính sách bảo mật</div>
      </div>
      <div className={classes.veOcany}>Về ocany</div>
      <div className={classes.frame}>
        <div className={classes.cauChuyenOcany}>Câu chuyện Ocany</div>
        <div className={classes.blog}>Blog</div>
        <div className={classes.baoChi}>Báo chí</div>
        <div className={classes.tuyenDung}>Tuyển dụng</div>
        <div className={classes.loiCamKet}>Lời cam kết</div>
        <div className={classes.kiemInh}>Kiểm định</div>
      </div>
      <div className={classes.shop}>Shop</div>
      <div className={classes.frame2}>
        <div className={classes.sanPham}>Sản phẩm</div>
        <div className={classes.goiSanPhamOcany}>Gói sản phẩm Ocany</div>
        <div className={classes.giaoInhKi}>Giao định kì</div>
        <div className={classes.themBanMoi}>Thêm bạn mới</div>
      </div>
      <div className={classes.rectangle77}></div>
      <div className={classes.copyright2022OcanyAllRightsRes}>Copyright © 2022 Ocany. All rights reserved.</div>
      <div className={classes.frame8232}>
        <div className={classes.vPSo11UongHoangTrongMauPhuong1}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>VP:</span>
            <span className={classes.label2}> Số 11 Đường Hoàng Trọng Mậu, Phường 11, Quận 7, TP.HCM</span>
          </p>
        </div>
        <div className={classes.sXSo782AKhuPhoBinhAngPhuongBIn}>
          <p className={classes.labelWrapper2}>
            <span className={classes.label3}>SX:</span>
            <span className={classes.label4}>
              {' '}
              Số 78/2A, Khu Phố Bình Đáng, Phường BÌnh Hoàng, TX Thuận An, Bình Dương
            </span>
          </p>
        </div>
        <div className={classes.frame8230}>
          <div className={classes.frame3}>
            <FrameIcon className={classes.icon4} />
          </div>
          <div className={classes.hotline}>Hotline:</div>
          <div className={classes._19002821}>19002821</div>
        </div>
        <div className={classes.frame8231}>
          <div className={classes.frame4}>
            <FrameIcon2 className={classes.icon5} />
          </div>
          <div className={classes.email}>Email:</div>
          <div className={classes.hotroOcanyCom}>hotro@ocany.com</div>
        </div>
      </div>
      <div className={classes.qUAATBIETMoiThangDanhCho}>QUÀ ĐẶT BIỆT mỗi tháng dành cho</div>
      <div className={classes.frame8228}>
        <div className={classes.group3}>
          <div className={classes.ellipse}>
            <EllipseIcon className={classes.icon6} />
          </div>
          <Ic16Fb
            className={classes.ic16Fb}
            classes={{ group: classes.group }}
            swap={{
              group: (
                <div className={classes.group}>
                  <GroupIcon className={classes.icon} />
                </div>
              ),
            }}
          />
        </div>
        <div className={classes.group4}>
          <Ic16Insta
            className={classes.ic16Insta}
            classes={{ group: classes.group2 }}
            swap={{
              group: (
                <div className={classes.group2}>
                  <GroupIcon2 className={classes.icon2} />
                </div>
              ),
            }}
          />
        </div>
        <div className={classes.group5}>
          <div className={classes.frame5}>
            <FrameIcon3 className={classes.icon7} />
          </div>
        </div>
        <div className={classes.group6}>
          <div className={classes.frame6}>
            <FrameIcon4 className={classes.icon8} />
          </div>
        </div>
      </div>
      <div className={classes.nhapEmailCuaBan}>Nhập email của bạn</div>
      <div className={classes.line3}></div>
      <div className={classes.group7357}>
        <Group7357Icon className={classes.icon9} />
      </div>
      <div className={classes.rectangle76}></div>
      <div className={classes.cONGONGOCANY}>
        <p className={classes.labelWrapper3}>
          <span className={classes.label5}>C</span>
          <span className={classes.label6}>ỘNG ĐỒNG </span>
          <span className={classes.label7}>O</span>
          <span className={classes.label8}>CANY</span>
        </p>
      </div>
      <div className={classes.chacChanBanSeKhongHoiTiec}>Chắc chắn bạn sẽ không hối tiếc</div>
      <div className={classes._96149Arrow1}></div>
      <div className={classes.vector17}>
        <Vector17Icon className={classes.icon10} />
      </div>
      <div className={classes.vector19}>
        <Vector19Icon className={classes.icon11} />
      </div>
      <div className={classes.vector18}>
        <Vector18Icon className={classes.icon12} />
      </div>
      <div className={classes.logoFA41}></div>
    </div>
  );
});
