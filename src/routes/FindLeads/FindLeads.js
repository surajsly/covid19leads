import React from "react";
import classNames from "classnames";
import { resources, statesList } from "../../components/dataResoursces";
import db from "../../firebase";
import {
  makeStyles,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import CardList from "../../components/CardList";

const useStyles = makeStyles((theme) => ({
  basic: {
    marginTop: "8em",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: 800,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    minWidth: 120,
  },
  type: {
    fontWeight: 600,
  },
  formControl: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      minWidth: "100%",
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(1),
    },
  },
  input: {
    padding: "10px 14px",
  },
  select: {
    maxWidth: 130,
  },
  search: {
    maxWidth: 180,
  },
  submitBtn: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));

const FindLeads = () => {
  const classes = useStyles();

  const handlecity = (e) => {
    setCity(e.target.value);
    const x = statesList.find((z) => z.city === e.target.value).zones;
    setZoneOptions(x);

    console.log(zoneOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(city, zone, selectedResource);
    db.collection("covid-19-Leads")
      .where("city", "==", city)
      .where("zone", "==", zone)
      .where("selectedResource", "==", selectedResource)
      .onSnapshot((snapshot) => {
        return setCovidData(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              data: doc.data(), // object consisting of all the data which we have added
            };
          })
        );
      });
    console.log(covidData);
  };

  const [city, setCity] = React.useState("select");
  const [zone, setZone] = React.useState("select");
  const [zoneOptions, setZoneOptions] = React.useState();
  const [selectedResource, setSelectedResource] = React.useState("select");
  const [covidData, setCovidData] = React.useState();

  return (
    <section className={classes.basic}>
      <div className={classes.root}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <FormControl
            className={classNames(classes.formControl, classes.text)}
          >
            <Typography variant="body1" className={classes.type}>
              Select to search leads:
            </Typography>
          </FormControl>
          <FormControl
            className={classNames(classes.formControl, classes.select)}
          >
            <Select
              variant="outlined"
              required
              fullWidth
              className={classes.formElement}
              value={city}
              onChange={handlecity}
            >
              <MenuItem value="select">select city</MenuItem>
              {statesList.map(({ city }, idx) => (
                <MenuItem value={city} key={idx}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            className={classNames(classes.formControl, classes.search)}
          >
            <Select
              variant="outlined"
              required
              fullWidth
              className={classes.formElement}
              value={zone}
              onChange={(e) => setZone(e.target.value)}
            >
              <MenuItem value="select">select zone</MenuItem>
              {zoneOptions?.map((z, idx) => (
                <MenuItem value={z} key={idx}>
                  {z}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            className={classNames(classes.formControl, classes.search)}
          >
            <Select
              variant="outlined"
              required
              fullWidth
              className={classes.formElement}
              value={selectedResource}
              onChange={(e) => setSelectedResource(e.target.value)}
            >
              <MenuItem value="select">Resources</MenuItem>
              {resources.map((z, idx) => (
                <MenuItem value={z} key={idx}>
                  {z}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submitBtn}
          >
            Search
          </Button>
        </form>
      </div>
      <section className={classes.basic}>
        <CardList covidData={covidData} />
      </section>
    </section>
  );
};

export default React.memo(FindLeads);
