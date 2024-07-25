import { faBell, faFile } from "@fortawesome/free-regular-svg-icons";
import {
  faGear,
  faIndustry,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { Provider } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import { Header, SideBar } from "./Shared/Components";
import { HEADER_HEIGHT } from "./Shared/Components/shared/consts";
import { store } from "./Shared/Store";
import { GlobalStyle, theme } from "./Shared/Theme";
import { Insights } from "./Pages";

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const MainContent = styled.main<{ headerHeight: string }>`
  flex: 1;
  padding: ${(props) => props.theme.spacing.medium};
  padding-top: ${(props) =>
    `calc(${props.headerHeight} + ${props.theme.spacing.medium})`};
  background-color: ${(props) => props.theme.colors.light};
`;

const CONTENT: Record<string, ReactNode> = {
  insights: <Insights />,
  info: <></>,
  notifcations: <></>,
  files: <></>,
  settings: <></>,
};

const Page = () => {
  const [activePage, setActivePage] = useState("");
  const actionItems = useMemo(
    () => [
      {
        icon: faIndustry,
        id: "insights",
        onClick: () => setActivePage("insights"),
      },
      { icon: faInfoCircle, id: "info", onClick: () => setActivePage("info") },
      {
        icon: faBell,
        id: "notifcations",
        onClick: () => setActivePage("notifcations"),
      },
      { icon: faFile, id: "files", onClick: () => setActivePage("files") },
      {
        icon: faGear,
        id: "settings",
        onClick: () => setActivePage("settings"),
      },
    ],
    []
  );

  useEffect(() => {
    setActivePage(actionItems[0]["id"]);
  }, [actionItems]);

  return (
    <LayoutContainer>
      <SideBar
        actionItems={actionItems}
        onLogOut={() => setActivePage("logout")}
      />
      <MainContent headerHeight={HEADER_HEIGHT}>
        <Header />
        {CONTENT[activePage]}
      </MainContent>
    </LayoutContainer>
  );
};

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Page />
      </ThemeProvider>
    </Provider>
  );
};
