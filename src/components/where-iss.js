import "./where-iss.css";
import React, { useEffect, useState } from "react";
import { Grid, Typography, Paper, TextField } from "@material-ui/core";
import axios, * as Axios from "axios";
import data from "../utils/data";
import CustomButton from "../components/Button/Button";
import Map from "./map";

const WhereISS = () => {
  const [datetime, setDatetime] = useState({
    date: "",
    time: "",
  });
  const [data1, setData1] = useState([]);
  const [issPerson, setIssPerson] = useState({});
  const [topStory, setTopStory] = useState({});

  function handleChange(e) {
    const temp = { ...datetime };
    temp[e.currentTarget.name] = e.currentTarget.value;
    setDatetime({ ...temp });
  }

  useEffect(() => {
    getPerson();
    getTopStory();
  }, []);

  const getPerson = async () => {
    const res = await axios.get("http://api.open-notify.org/astros.json");

    // console.log("res.data", res.data);
    setIssPerson(res.data);
  };

  const getTopStory = async () => {
    const res = await axios.get(
      "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=oVp5MzlAc6fE0YEZ7HKK7XxYaGa1xaoq"
    );

    // console.log("res.data top story", res.data);
    setTopStory(res.data);
  };

  const submit = () => {
    // console.log("aesf");
    Axios.post("http://localhost:3000/api-iss/get-data", datetime).then(
      (result) => {
        // console.log("result", result.data);
        // let tempData = { ...result.data };
        setData1(result.data);
        alert("Sila Semak Peta");
      }
    );
  };

  console.log("data", data1);
  console.log("datetime", data.datetime);
  console.log("issperson", issPerson);
  console.log("res.data top story", topStory);
  return (
    <div>
      <Grid container className="section pb_45 pt_45" spacing={2}>
        <Grid item xs="12">
          <Typography>Please Choose Date and Time</Typography>
        </Grid>

        {data.datetime.map((key) =>
          key.filler ? (
            <Grid item xs={key.filler}></Grid>
          ) : (
            <Grid item xs={key.size}>
              <TextField
                fullWidth
                name={key.name}
                label={key.label}
                type={key.type}
                variant="outlined"
                multiline={key.multiline === true ? true : false}
                rows={key.rows}
                onChange={handleChange}
                autoFocus={true}
                value={datetime[key.name] || ""}
              />
            </Grid>
          )
        )}
        <Grid item xs={12}>
          <CustomButton text="Hantar" onclick={submit} />
        </Grid>
      </Grid>
      <Grid
        container
        justify="space-between"
        className="section graybg pb_45 p_50"
      >
        <Grid item xs={12}>
          <Typography variant="h4">MAP</Typography>
          <Paper elevation={0} className="skill">
            <Map data={data1}></Map>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        container
        justify="space-between"
        className="section graybg pb_45 p_50"
      >
        <Grid item xs={12} className="section graybg pb_45 p_50">
          <Typography variant="h4">
            {issPerson.number} Person in space right now
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <table id="iss">
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Craft</th>
            </tr>
            {Object.keys(issPerson).length > 0 &&
              issPerson.people.map((key, idx) => (
                <tr>
                  <td>{idx + 1}</td>
                  <td>{key.name}</td>
                  <td>{key.craft}</td>
                </tr>
              ))}
          </table>
        </Grid>
      </Grid>

      <Grid container justify="space-between" className="section graybg  p_50">
        <Grid item xs={12} className="graybg">
          <Typography variant="h4">Top Story</Typography>
        </Grid>

        {Object.keys(topStory).length > 0 &&
          topStory.results.map((key, idx) => (
            <Grid item xs={12} className="graybg ">
              {idx + 1} {". "} {key.abstract} <br />{" "}
              <a href={key.url}>{key.title}</a>
              <br />
              <br />
              <img
                src={key.multimedia[0].url}
                width="50%"
                height="50%"
                alt={key.multimedia[0].copyright}
              ></img>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default WhereISS;
