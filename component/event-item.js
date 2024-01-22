import Link from "next/link";
import React from "react";
import classes from "./event-item.module.css";
import Button from "./Button";
import DateIcon from "./icons/date-icon";
import AddressIcon from "./icons/Address-icon";
import ArrowRightIcon from "./icons/ArrowRight-icon";

export default function EventItem(props) {
  const { title, image, date, location, id } = props;
  const humanReadable = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formatAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt="" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
        </div>
        <div className={classes.date}>
          {" "}
          <DateIcon /> {humanReadable}
        </div>
        <div className={classes.address}>
          <AddressIcon />
          <address> {formatAddress.toString()} </address>
        </div>
      </div>
      <div className={classes.actions}>
        <Button link={exploreLink}>
          <span>Explore Events</span>
          <span className={classes.icon}>
            <ArrowRightIcon />
          </span>
        </Button>
      </div>
    </li>
  );
}
