import Link from "next/link";
import React from "react";
import styles from "./button.module.css";
export default function Button(props) {
  if (props.link) {
    return (
      <Link legacyBehavior href={props.link}>
        <a className={styles.btn}>{props.children}</a>
      </Link>
    );
  }
  return (
    <button className={styles.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
