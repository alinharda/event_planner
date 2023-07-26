import React from "react";
import { Event } from "../../types/Event";

import "./UpcomingEvent.scss";
import { useUserStore } from "../../hooks/useUserStore";

interface Props {
  eventData: Event;
}

const UpcomingEvent: React.FC<Props> = ({ eventData }) => {
  const { events, addEvent, removeEvent, updateCookies } = useUserStore();

  const handleClick = () => {
    if (events.some((event) => event.id === eventData.id)) {
      removeEvent(eventData);
    } else {
      addEvent(eventData);
    }
  };

  React.useEffect(() => {
    updateCookies(); 
  }, [events]);

  return (
    <div className="upcomingEvent">
      <div className="container" onClick={handleClick}>
        {eventData?.image && (
          <img src={eventData.image} alt={eventData.title} />
        )}
        <p>{eventData.title}</p>
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className={`star ${events.some((event) => event.id === eventData.id) ? "checked" : ""}`}
        >
          <path d="M12 2L9.09 8.5H2.83L7.41 12.59L5.5 18.5L12 15.09L18.5 18.5L16.59 12.59L21.17 8.5H14.91L12 2Z" />
        </svg>
      </div>
    </div>
  );
};

export default UpcomingEvent;
