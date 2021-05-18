import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  gridStyle: {
    width: "100%",
  },
  root: {
    margin: 20,
    minWidth: "90%",
  },
  header: {
    backgroundColor: "#4556CA",
    color: "#eee",
    fontWeight: "500",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function MainCard({ data, id }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [heart, setHeart] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Grid md={4} sm={6} xs={12} container>
      <Card className={classes.root}>
        <CardHeader
          className={classes.header}
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {`${data?.name[0].toUpperCase()}`}
            </Avatar>
          }
          title={data?.selectedResource}
        />
        <CardContent>
          <Typography color="primary" variant="h6">
            Phone :{" "}
            <Link href={`tel:${data?.phone}`} underline="always">
              {data?.phone}
            </Link>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={() => setHeart(!heart)}
          >
            {!heart ? (
              <FavoriteIcon />
            ) : (
              <FavoriteIcon style={{ color: red[600] }} />
            )}
          </IconButton>
          <IconButton
            aria-label="share"
            onClick={() =>
              window.open(
                `whatsapp://send?text= Name:${data?.name} Resourse:${data?.selectedResource} Phone: ${data?.phone} Address : ${data?.address}`
              )
            }
          >
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              <strong>Name:</strong> {data?.name}
            </Typography>
            <Typography paragraph>
              <strong>Address:</strong> {data?.address}
            </Typography>
            <Typography paragraph>
              <strong>Cost (in INR):</strong> {data?.cost}
            </Typography>
            <Typography paragraph>
              <strong>Remark (By Creator):</strong> {data?.remark}
            </Typography>
            <Typography paragraph>
              <strong> City : </strong> {data?.city.toUpperCase()}{" "}
              <strong> Zone : </strong>
              {data?.zone.toUpperCase()}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}
