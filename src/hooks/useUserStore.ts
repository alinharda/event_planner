import { useContext } from "react";
import { UserStoreContext } from "../contexts/UserContext";
import { Event } from "../types/Event";
import { useCookies } from "react-cookie";
import { Utils } from "../utils/utils";

export const useUserStore = () => {
  const { events, setEvents } = useContext(UserStoreContext);
  const [cookies, setCookie, removeCookie] = useCookies(["userEvents"]);
  const { convertToTimeZone } = Utils();

  const getEvents = () => {
    if (cookies.userEvents) {
      const events = cookies.userEvents.map((event: Event) => {
        return {
          ...event,
          startDate: new Date(event.startDate),
          endDate: new Date(event.endDate),
        };
      });

      const currentDate = new Date();

      const filteredEvents = events.filter((event: Event) => {
        const endDate = event.endDate;
        return endDate >= currentDate;
      });
      setEvents(filteredEvents);
    }
  };

  const updateCookies = () => {
    removeCookie("userEvents");
    setCookie("userEvents", events, { path: "/" });
  };

  const addEvent = (eventData: Event) => {
    const updatedEvents: Event[] = [
      ...events,
      {
        ...eventData,
        startDate: convertToTimeZone(eventData.startDate),
        endDate: convertToTimeZone(eventData.endDate),
      },
    ];

    updatedEvents.sort(
      (a: Event, b: Event) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    );
    setEvents(updatedEvents);
  };

  const removeEvent = (eventData: Event) => {
    setEvents(events.filter((event) => event.id !== eventData.id));
  };

  return {
    events,
    getEvents,
    addEvent,
    removeEvent,
    updateCookies,
  };
};
