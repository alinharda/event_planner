import React from "react";
import UserEvents from "./components/UserEvents/UserEvents";
import DarkButton from "./components/DarkButton/DarkButton";
import EventList from "./components/EventList/EventList";
import Layout from "./components/Layout/Layout";
import { UserStoreProvider } from "./contexts/UserContext";
import { CookiesProvider } from "react-cookie";
import { ThemeProvider, ThemeContext } from "./contexts/ThemeContext";

const App: React.FC = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <ThemeProvider>
      <CookiesProvider>
        <UserStoreProvider>
          <DarkButton />
          <Layout>
            <UserEvents />
            <EventList />
          </Layout>
        </UserStoreProvider>
      </CookiesProvider>
    </ThemeProvider>
  );
};

export default App;
