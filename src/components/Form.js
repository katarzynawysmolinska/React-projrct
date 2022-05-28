import React from "react";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button/Button";
import Fade from "@mui/material/Fade/Fade";
import Grid from "@mui/material/Grid/Grid";
import TextField from "@mui/material/TextField/TextField";

const Form = (props) => {
  const [inputState, setInputState] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const inputRef = useRef();

  const inputChangeHandler = () => {
    if (inputRef.current.value !== "") {
      setInputState(true);
    }

    if (inputRef.current.value === "") {
      setInputState(false);
    }
  };

  const formHandler = (data) => {
    props.setUsername(data.username);
  };

  return (
    <Fade in={true} timeout={2000}>
      <form
        onSubmit={handleSubmit(formHandler)}
        justify-content="center"
        align="center"
        sx="true"
      >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              id="username"
              type="text"
              {...register("username", { required: "Required" })}
              inputRef={inputRef}
              onChange={inputChangeHandler}
              variant="outlined"
              label="username"
              inputProps={{ style: { textAlign: "center" } }}
              helperText={
                errors.username?.type === "required"
                  ? "Username is required"
                  : ""
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant={inputState !== false ? "contained" : "disabled"}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </Fade>
  );
};

export default Form;
