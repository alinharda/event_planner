import React from "react";
import { Event } from "../../types/Event";
import "./EventCard.scss";

interface Props {
  eventData: Event;
}

const EventCard: React.FC<Props> = ({ eventData }) => {
  const getDaySuffix = (day: number) => {
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const formatEventDate = (date: Date) => {
    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.getDate();
    const daySuffix = getDaySuffix(day);
    const time = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    return `${month} ${day}${daySuffix} | ${time}`;
  };

  return (
    <div className="eventCard">
      <div className="container">
        <div className="data">
          <div className="image">
            <img src={eventData.image} alt="logo image"></img>
          </div>
          <div className="text">
            <h3>{eventData.title}</h3>
            <p>{eventData.description}</p>
            <p>John Doe</p>
          </div>
        </div>
        <div className="date">
          {eventData.startDate && <p>{formatEventDate(eventData.startDate)}</p>}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
