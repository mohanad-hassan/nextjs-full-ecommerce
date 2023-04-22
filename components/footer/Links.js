import Link from "next/link";
import styles from "./styles.module.scss";

export default function Links() {
  let m= 0
  return (
    <div className={styles.footer__links}>
      {links.map((link, i) => {
        return (
          <ul key={i+50} id={i+50}>
            {i === 0 ? (
              <img src="../../../logo.png" alt="" />
            ) : (
              <b key={i}>{link.heading}</b>
            )}
            {link.links.map((link, o) => {
              m++;
              return (
                <li key={m} id={m}>
                  <Link href={link.link}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
}
const links = [
  {
    heading: "SHOPPAY",
    links: [
      {
        name: "About us",
        link: "",
      },
      {
        name: "Contact us",
        link: "",
      },
      {
        name: "Social Responsibility",
        link: "",
      },
      {
        name: "",
        link: "",
      },
    ],
  },
  {
    heading: "HELP & SUPPORT",
    links: [
      {
        name: "Shipping Info",
        link: "",
      },
      {
        name: "Returns",
        link: "",
      },
      {
        name: "How To Order",
        link: "",
      },
      {
        name: "How To Track",
        link: "",
      },
      {
        name: "Size Guide",
        link: "",
      },
    ],
  },
  {
    heading: "Customer service",
    links: [
      {
        name: "Customer service",
        link: "",
      },
      {
        name: "Terms and Conditions",
        link: "",
      },
      {
        name: "Consumers (Transactions)",
        link: "",
      },
      {
        name: "Take our feedback survey",
        link: "",
      },
    ],
  },
];
