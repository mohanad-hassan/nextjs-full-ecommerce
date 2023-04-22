import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const Ad = () => {
  return (
    <Link href={"/browse"} legacyBehavior>
      <a>
        <div className={styles.ad}>ad</div>
      </a>
    </Link>
  );
};

export default Ad;
