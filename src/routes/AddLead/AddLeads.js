import React, { useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import EcoIcon from "@material-ui/icons/Eco";
import Typography from "@material-ui/core/Typography";
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import db from '../../firebase'

const useStyles = makeStyles((theme) => ({
    basic: {
        marginTop: "4em",
    },
    root: {
        height: "100vh",
    },
    image: {
        backgroundImage:
            "url(https://source.unsplash.com/featured/?covid,coronavirus,pandmic,virus)",
        backgroundRepeat: "no-repeat",
        backgroundColor:
            theme.palette.type === "light"
                ? theme.palette.grey[50]
                : theme.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#228B22",
    },
    form: {
        width: "100%", // Fix IE 11 issue.
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
            city: "delhi",
            zones: [
                "north",
                "northeast",
                "east",
                "southeast",
                "south",
                "southwest",
                "west",
                "northwest",
                "shahdara",
                "central",
                "newdelhi",
            ],
        },
        {
            city: "Uttar Pradesh",
            zones: [
                "north",
                "northeast",
                "east",
                "southeast",
                "south",
                "southwest",
                "west",
                "northwest",
                "shahdara",
                "central",
                "newdelhi",
            ],
        },
        {
            city: "Haryana",
            zones: [
                "north",
                "northeast",
                "east",
                "southeast",
                "south",
                "southwest",
                "west",
                "northwest",
                "shahdara",
                "central",
                "newdelhi",
            ],
        },
    ];

    const resources = [
        "Oxygen",
        "Medicines",
        "Blood",
        "Testing",
        "Vaccine",
        "Ambulance",
    ];

    const [city, setCity] = React.useState("select");
    const [zone, setZone] = React.useState("select");
    const [zoneOptions, setZoneOptions] = React.useState();
    const [name, setName] = React.useState();
    const [address, setAddress] = React.useState();
    const [selectedResource, setSelectedResource] = React.useState("select");
    const [cost, setCost] = React.useState();
    const [phone, setPhone] = React.useState();
    const [remark, setRemark] = React.useState();

    const submitform = (e) => {
        e.preventDefault();
        // console.log(
        //     city,
        //     zone,
        //     name,
        //     address,
        //     selectedResource,
        //     cost,
        //     phone,
        //     remark
        // );

        // to add data to db
        db.collection('covid-19-Leads').add({
            city: city,
            name: name,
            address: address,
            zone: zone,
            selectedResource: selectedResource,
            cost: cost,
            phone: phone,
            remark: remark
        })
    };

    // fetching data from db
    // const [covidData, setCovidData] = React.useState();

    // useEffect(() => {
    //     db.collection('covid-19-Leads').onSnapshot((snapshot) => {
    //         return (
    //             setCovidData(snapshot.docs.map((doc) => {
    //                 return ({
    //                     id: doc.id,
    //                     data: doc.data() // object consisting of all the data which we have added
    //                 })
    //             }))
    //         )
    //     })
    // }, [])

    // console.log('codiv data 😎', covidData); //covidData array of objects having all data

    const handlecity = (e) => {
        setCity(e.target.value);
        const x = statesList.find((z) => z.city === e.target.value).zones;
        setZoneOptions(x);

        console.log(zoneOptions);
    };


    return (
        <section className={classes.basic}>
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={6} className={classes.image} />
                <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <EcoIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Be a Pillar to the socity provide leads
            </Typography>
                        <form className={classes.form} onSubmit={submitform}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoFocus
                                onChange={(e) => setName(e.target.value)}
                            />

                            <FormControl variant="outlined" fullWidth>
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

                            <FormControl variant="outlined" fullWidth>
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

                            <TextField
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={4}
                                id="address"
                                label="Address"
                                name="address"
                                autoFocus
                                onChange={(e) => setAddress(e.target.value)}
                            />

                            <FormControl variant="outlined" fullWidth>
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

                            <TextField
                                variant="outlined"
                                fullWidth
                                className={classes.formElement}
                                id="Cost_Per_Unit"
                                label="Cost Per Unit"
                                name="cost"
                                autoFocus
                                onChange={(e) => setCost(e.target.value)}
                            />

                            <TextField
                                variant="outlined"
                                fullWidth
                                className={classes.formElement}
                                id="phone_number"
                                label="Phone number"
                                name="phone"
                                autoFocus
                                onChange={(e) => setPhone(e.target.value)}
                            />

                            <TextField
                                variant="outlined"
                                multiline
                                className={classes.formElement}
                                row={3}
                                fullWidth
                                id="remark"
                                label="Remark"
                                name="remark"
                                autoFocus
                                onChange={(e) => setRemark(e.target.value)}
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
                        </form>
                    </div>
                </Grid>
            </Grid>
        </section>
    );
};

export default AddLeads;
