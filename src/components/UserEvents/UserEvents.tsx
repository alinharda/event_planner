import React, { useState, useEffect } from "react";
import Title from "../Title/Title";
import Subtitle from "../Subtitle/Subtitle";
import EventCard from "../EventCard/EventCard";
import { Event } from "../../types/Event";
import { useUserStore } from "../../hooks/useUserStore";

import "./UserEvents.scss";

const UserEvents: React.FC = () => {
  const { events, getEvents } = useUserStore();

  const [indexOfCurentEvent, setIndexOfCurrentEvent] = useState<number>(0);

  const handleBack = () => {
    if (indexOfCurentEvent === 0) {
      setIndexOfCurrentEvent(events.length - 1);
    } else {
      setIndexOfCurrentEvent(indexOfCurentEvent - 1);
    }
  };

  const handleNext = () => {
    if (indexOfCurentEvent === events.length - 1) {
      setIndexOfCurrentEvent(0);
    } else {
      setIndexOfCurrentEvent(indexOfCurentEvent + 1);
    }
  };

  React.useEffect(() => {
    setIndexOfCurrentEvent(events.length - 1);
    
    setTimeout(()=> {
      setIndexOfCurrentEvent(0);
    }, 500);

  }, [events]);

  React.useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="UserEvents">
      <Title text="Welcome" />
      {events.length > 0 && (
        <>
          <Subtitle text="Your next event: " />

          <div
            className="eventsList"
            style={{
              transform: `translateX(calc(${indexOfCurentEvent} * (-100% - 30px))`,
            }}
          >
            {events.map((event, index) => (
              <EventCard eventData={event} key={index} />
            ))}
          </div>
          <div className="eventListControls">
            <div className="back" onClick={handleBack}>
              <h2>&#60;</h2>
            </div>
            <div className="next" onClick={handleNext}>
              <h2>&#62;</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserEvents;
