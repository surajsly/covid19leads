import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import EcoIcon from '@material-ui/icons/Eco';
import Typography from '@material-ui/core/Typography';
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete"

const useStyles = makeStyles((theme) => ({
    basic: {
        marginTop: "4em",
    },
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#228B22",
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    formElement: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

}));

const AddLeads = () => {
    const classes = useStyles();
    const statesList = [
        {
            "city": "delhi",
            "zones": ["north", "northeast", "east", "southeast", "south", "southwest", "west", "northwest", "shahdara", "central", "newdelhi"]
        },
        {
            "city": "Uttar Pradesh",
            "zones": ["north", "northeast", "east", "southeast", "south", "southwest", "west", "northwest", "shahdara", "central", "newdelhi"]
        },
        {
            "city": "Haryana",
            "zones": ["north", "northeast", "east", "southeast", "south", "southwest", "west", "northwest", "shahdara", "central", "newdelhi"]
        }
    ]

    const [city, setCity] = React.useState("select");
    const [zone, setZone] = React.useState(null);
    const [isState, setIsState] = React.useState(false);
    const [selectedstate, setselectedstate] = React.useState(null);


    // const onCitySelect = (e) => {
    //     setCity(e.target.value)
    //     console.log(city, e.target.value)
    // }
    console.log(city);
    return (
        <section className={classes.basic}>
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <EcoIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Be a Pillar to the socity provide leads
                        </Typography>
                        <form className={classes.form} >
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoFocus
                            />

                            <FormControl>
                                <Select
                                    variant="outlined"
                                    required
                                    fullWidth
                                    className={classes.formElement}
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                >
                                    <MenuItem value='select'>select city</MenuItem>
                                    {
                                        statesList.map(({ city }, idx) =>
                                            <MenuItem value={city} key={idx}>
                                                {city}
                                            </MenuItem>
                                        )
                                    }
                                </Select>
                            </FormControl>

                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="n"
                                label="Name"
                                name="name"
                                autoFocus
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </section >
    )
}

export default AddLeads;