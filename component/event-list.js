import React from "react";
import EventItem from "./event-item";
import styles from "./event-list.module.css";
export default function EventList(props) {
  const { items } = props;
  return (
    <ul className={styles.list}>
      {items.map((e) => (
        <EventItem
          key={e.id}
          id={e.id}
          title={e.title}
          location={e.location}
          date={e.date}
          image={e.image}
        />
      ))}
    </ul>
  );
}
