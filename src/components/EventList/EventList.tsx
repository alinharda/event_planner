import React from "react";
import Subtitle from "../Subtitle/Subtitle";
import UpcomingEvent from "../UpcomingEvent/UpcomingEvent";
import { Event } from "../../types/Event";

import "./EventList.scss";

const EventList: React.FC = () => {
  const [events, setEvents] = React.useState<Event[]>([]);
  const [selectedSort, setSelectedSort] = React.useState<string>("Coding");
  const [sortList, setSortList] = React.useState<string[]>([
    "Coding",
    "Social",
    "Extra",
  ]);


  const fetchJsonData = async () => {
    try {
      const response = await fetch("./output_data.json");
      const data = await response.json();
      const currentDate = new Date();

      const filteredEvents = data.filter((event: Event) => {
        const endDate = new Date(event.endDate);
        return endDate >= currentDate;
      });
      setEvents(filteredEvents);
    } catch (error) {
      console.error("Error fetching JSON data:", error);
    }
  };
  

  const handleSortClick = (item: string) => {
    if (item !== selectedSort) {
      setSelectedSort(item);
    }
  };

  React.useEffect(() => {
    fetchJsonData();
  }, []);

  React.useEffect(()=> {
    console.log(events);
  }, [events])

  return (
    <div className="EventList">
      <Subtitle text="Discover Upcoming Events:" />
      <div className="sortings">
        <h3>Sort by: </h3>
        {sortList.map((item, index) => (
          <p
            key={index}
            className={item === selectedSort ? "selected" : ""}
            onClick={() => handleSortClick(item)}
          >
            {item}
          </p>
        ))}
      </div>
      {events.map((event, index) => {
        if (event.categories.includes(selectedSort)) {
          return <UpcomingEvent eventData={event} key={index} />;
        }
      })}
    </div>
  );
};

export default EventList;
