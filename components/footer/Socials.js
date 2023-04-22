import styles from "./styles.module.scss";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import {
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsPinterest,
  BsSnapchat,
} from "react-icons/bs";
export default function Socials() {
  return (
    <div className={styles.footer__socials}>
      <section>
        <h3>STAY CONNECTED</h3>
        <ul>
          <li key={15}>
            <a href="/" target="_blank">
              <FaFacebookF />
            </a>
          </li>
          <li key={16}>
            <a href="/" target="_blank">
              <BsInstagram />
            </a>
          </li>
          <li key={17}>
            <a href="/" target="_blank">
              <BsTwitter />
            </a>
          </li>
          <li key={18}>
            <a href="/" target="_blank">
              <BsYoutube />
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              <BsPinterest />
            </a>
          </li>
          <li key={19}>
            <a href="/" target="_blank">
              <BsSnapchat />
            </a>
          </li>
          <li key={10}>
            <a href="/" target="_blank">
              <FaTiktok />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
