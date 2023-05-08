import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Box, Header, NavigLink, Footer, FooterText } from "./Layout.styled";

export const Layout = () => {
  return (
    <Box>
      <Header>
        <nav>
          <NavigLink to="/">Home</NavigLink>
          <NavigLink to="tweets">Tweets</NavigLink>
        </nav>
      </Header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer>
        <FooterText> &copy; 2023</FooterText>
      </Footer>
    </Box>
  );
};
