import Container from "@mui/material/Container";

import { Header } from "./components";
import { Home } from "./pages";
// FullPost, Registration, AddPost, Login;
function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Home />
        {/* <FullPost /> */}
        {/* <AddPost /> */}
        {/* <Login /> */}
        {/* <Registration /> */}
      </Container>
    </>
  );
}

export default App;
