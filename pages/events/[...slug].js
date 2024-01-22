import { useRouter } from "next/router";
import React from "react";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../component/event-list";

export default function FilteredEvents() {
  const router = useRouter();
  const filterData = router.query.slug;
  console.log(filterData);
  if (!filterData) {
    return <div className="center">Loading...</div>;
  }
  const year = filterData[0];
  const month = filterData[1];
  const numYear = +filterData[0];
  const numMonth = +filterData[1];
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2020 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <div className="center">Invalid Filter , Please adjust your value...</div>
    );
  }
  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  if (!filteredEvents || filteredEvents.length == 0) {
    <div className="center">No Events found for the chosen filter!</div>;
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
}
