import React from "react";
import MainCard from "./Card";
import { makeStyles, Box, Grid } from "@material-ui/core";
import NoResult from "./NoResult";

const CardList = ({ covidData }) => {
  console.log(covidData);

  if (covidData?.length === 0) {
    return (
      <>
        <NoResult />
      </>
    );
  }

  return (
    <>
      <Grid md={12} container alignItems="flex-start">
        {covidData?.map(({ data, id }) => (
          <MainCard data={data} id={id} />
        ))}
      </Grid>
    </>
  );
};

export default React.memo(CardList);
