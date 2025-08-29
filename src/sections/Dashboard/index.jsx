import React from "react";
import classNames from "classnames/bind";
import styles from "./Dashboard.module.scss";

const cx = classNames.bind(styles);

export default function Dashboard() {
  return (
    <div className={cx("dashboard")}>
      <aside className={cx("sidebar")}>
        <div className={cx("logo")}>☕</div>
        <nav>
          <a href="#" className={cx("active")}>Home</a>
          <a href="#">Supporters</a>
          <a href="#">Explore creators</a>
          <a href="#">Membership</a>
          <a href="#">Shop</a>
          <a href="#">Publish</a>
          <div className={cx("sectionTitle")}>Monetize</div>
          <a href="#">Buttons & Graphics</a>
          <a href="#">Integrations</a>
          <a href="#">Payouts</a>
          <a href="#">Settings</a>
        </nav>
      </aside>
      <main className={cx("main")}>
        <div className={cx("topbar")}>
          <button className={cx("iconButton")}>+</button>
          <button className={cx("iconButton")}>🔔</button>
          <img
            src="https://placehold.co/40" 
            alt="avatar"
            className={cx("topAvatar")}
          />
        </div>

        <div className={cx("welcomeCard")}>
          <div className={cx("profile")}>
            <div className={cx("profileInfo")}>
              <img
                src="https://placehold.co/64"
                alt="avatar"
                className={cx("avatar")}
              />
              <div>
                <div className={cx("greeting")}>Hi, Tuan Nguyen</div>
                <div className={cx("handle")}>buymecoffee.com/aero</div>
              </div>
            </div>
            <button className={cx("share")}>Share page</button>
          </div>

          <div className={cx("earnings")}>
            <div className={cx("amount")}>Earnings <span>$0</span></div>
            <div className={cx("stats")}>
              <div>0 Supporters</div>
              <div>0 Membership</div>
              <div>0 Shop</div>
            </div>
          </div>
        </div>

        <div className={cx("recent")}>
          <h2>Recent</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sam</td>
                <td>almrajhi7@gmail.com</td>
                <td>$0.00</td>
                <td>2 months ago</td>
              </tr>
              <tr>
                <td>Sam</td>
                <td>almrajhi7@gmail.com</td>
                <td>$0.00</td>
                <td>2 months ago</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={cx("more")}>
          <h2>More ways to earn</h2>
          <div className={cx("cards")}>
            <div className={cx("card")}> 
              <div className={cx("cardTitle")}>Membership</div>
              <p>Give your fans exclusive perks and drip content for recurring support.</p>
            </div>
            <div className={cx("card")}> 
              <div className={cx("cardTitle")}>Shop</div>
              <p>Sell digital downloads, physical products or services in your shop.</p>
            </div>
            <div className={cx("card")}> 
              <div className={cx("cardTitle")}>Commissions</div>
              <p>Let supporters commission custom work from you.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

