import React from "react";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../component/event-list";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  // console.log(featuredEvents);
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
