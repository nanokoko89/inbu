import React from "react";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import {
  CupLogo,
  Home,
  External,
  GridDots,
  Heart,
  Lock,
  Bag,
  Pen,
  ChevronDown,
  CodeSquare,
  Bolt,
  DollarCircle,
  Gear,
} from "../icons/icons.jsx";

const cx = classNames.bind(styles);

const Item = ({ icon, label, active, right }) => (
  <div className={cx("item", { active })}>
    <div className={cx("item-icon", { accent: active })}>{icon}</div>
    <div className={cx("item-label")}>{label}</div>
    {right ? <div className={cx("item-right")}>{right}</div> : null}
  </div>
);

export default function Sidebar() {
  return (
    <aside className={cx("root")}>
      {/* Logo */}
      <div className={cx("logo")}>
        <div className={cx("logo-cup")}>
          <CupLogo />
        </div>
      </div>

      {/* MAIN */}
      <div className={cx("list")}>
        <Item active icon={<Home />} label="Home" />
        <Item icon={<External />} label="View page" />
        <Item icon={<GridDots />} label="Explore creators" />
      </div>

      {/* MONETIZE */}
      <div className={cx("sectionTitle")}>Monetize</div>
      <div className={cx("list")}>
        <Item icon={<Heart />} label="Supporters" />
        <Item icon={<Lock />} label="Memberships" />
        <Item icon={<Bag />} label="Shop" />
        <Item icon={<Pen />} label="Publish" right={<ChevronDown />} />
      </div>

      {/* SETTINGS */}
      <div className={cx("sectionTitle")}>Settings</div>
      <div className={cx("list")}>
        <Item icon={<CodeSquare />} label="Buttons & Graphics" />
        <Item icon={<Bolt />} label="Integrations" />
        <Item icon={<DollarCircle />} label="Payouts" />
        <Item icon={<Gear />} label="Settings" />
      </div>

      <div className={cx("spacer")} />
    </aside>
  );
}
