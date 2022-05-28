import { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import AboutPage from "./components/Aboutpage";
import axios from "axios";
import Table from "./components/Table";
import Grid from "@mui/material/Grid";

function App() {
  const [username, setUsername] = useState("");
  console.log(username);
  const [repoList, setRepoList] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    if (username) {
      axios
        .get(`https://api.github.com/users/${username}/repos?access_token=`)
        .then((data) => {
          console.log(data.data);
          setRepoList(data.data);
          setIsFetching(false);
        });
    }
  }, [username]);

  return (
    <div className="App">
      <BrowserRouter>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Routes>
            <Route
              path="/"
              element={
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Form setUsername={setUsername} />
                    </Grid>
                    {!isFetching && (
                      <Grid item xs={12}>
                        <Table repoList={repoList} username={username} />
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              }
            />
            <Route
              path="/about"
              element={
                <Grid item xs={12}>
                  <AboutPage />
                </Grid>
              }
            />
          </Routes>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </BrowserRouter>
    </div>
  );
}

export default App;
