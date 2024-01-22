import React from "react";
import EventList from "../../component/event-list";
import { getAllEvents } from "../../dummy-data";
import EventsSearch from "./events-search";
import { useRouter } from "next/router";

export default function AllEvents() {
  const events = getAllEvents();
  const router = useRouter();
  function findEventHandler(year, month) {
    const fullpath = `/events/${year}/${month}`;
    router.push(fullpath);
  }
  return (
    <div>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </div>
  );
}
