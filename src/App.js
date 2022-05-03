import "./App.css";

import Form from "./Components/Form";
import Header from "./Components/Header";
import Todo from "./Components/Todos";
import { Card, CardHeader, AppContainer } from "./style";
import { ThemeProvider } from "styled-components";
function App() {
  return (
    <ThemeProvider theme={{ mode: "light" }}>
      <AppContainer>
        <Form />
        <Card>
          <CardHeader>
            <Header />
          </CardHeader>
          <Todo />
        </Card>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
