import React, { createContext, useState } from "react";
import { Event } from "../types/Event";

type StoreContextType = {
  events: Array<Event>;
  setEvents: (events: Array<Event>) => void;
};

export const UserStoreContext = createContext<StoreContextType>({
  events: [],
  setEvents: (event) => [],
});

export const UserStoreProvider = ({ children }: { children: React.ReactNode }) => {
    const [events, setEvents] = useState<Array<Event>>([]);
    return (
        <UserStoreContext.Provider value={{events, setEvents}}>
            {children}
        </UserStoreContext.Provider>
    )
};
