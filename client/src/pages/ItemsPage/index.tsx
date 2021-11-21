import axios from "axios";
import { useState, useEffect, FC, ChangeEvent, useCallback } from "react";
import { RouteChildrenProps } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Typography,
  Tab,
  Box,
} from "@material-ui/core";
import qs from "query-string";

import GoogleMap from "../../components/GoogleMap";
import useStyles from "./useStyles";
import AuthenticatedLayout from "../../components/AuthenticatedLayout";
import { TabPanel, TabList, TabContext } from "@material-ui/lab";
import { Params } from "../../types";

const ItemsPage: FC<RouteChildrenProps<Params>> = (props) => {
  const { history, location, match } = props;
  const { role } = match.params;
  const { search } = qs.parse(location.search);

  const classes = useStyles();
  const [expanded, setExpanded] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [tabValue, setTabValue] = useState("1");

  useEffect(() => {
    axios
      .get("/users/items" + (search ?? ""))
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
          setLoaded(true);
        }
      })
      .catch((e) => {
        console.error(e.name + ": " + e.message);
      });
  }, [search]);

  const handleChange = useCallback(
    (panel: string) => (event: ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : "");
    },
    []
  );

  const handleTabChange = useCallback((event, newValue) => {
    setTabValue(newValue);
  }, []);

  return (
    <AuthenticatedLayout backgroundColor="#e5e5e5">
      <Grid container item xs justifyContent="center">
        <Grid item>
          <Grid container item direction="column">
            {search && (
              <Grid item>
                <Typography variant="h4" gutterBottom color="primary">
                  Showing results for "{search}"
                </Typography>
              </Grid>
            )}
            <Grid container item spacing={3} direction="column">
              {loaded &&
                data.map((value, index) => (
                  <Grid item key={index}>
                    <Accordion
                      expanded={expanded === `panel${index}`}
                      onChange={handleChange(`panel${index}`)}
                      className={classes.accordion}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index}bh-content`}
                        id={`panel${index}bh-header`}
                      >
                        <Grid container direction="row">
                          <Grid item xs={3}>
                            <Typography
                              className={classes.heading}
                              component="span"
                            >
                              {value.category}
                            </Typography>
                          </Grid>
                          <Grid item xs={5}>
                            <Typography
                              className={classes.secondaryHeading}
                              component="span"
                            >
                              {value.title}
                            </Typography>
                          </Grid>
                          <Grid item xs={4}>
                            <Typography
                              className={classes.secondaryHeading}
                              component="span"
                            >
                              {new Date(value.datetime).toLocaleString()}
                            </Typography>
                          </Grid>
                        </Grid>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box>
                          <TabContext value={tabValue}>
                            <TabList onChange={handleTabChange}>
                              <Tab label="Description" value="1" />
                              <Tab label="Photo" value="2" />
                              <Tab label="Map" value="3" />
                            </TabList>
                            <TabPanel value="1">
                              <Typography>{value.description}</Typography>
                            </TabPanel>
                            <TabPanel value="2">
                              {value.photo && (
                                <Box className={classes.img}>
                                  <img
                                    alt=""
                                    src={"/static/uploads/" + value.photo}
                                    style={{
                                      position: "absolute",
                                      width: "100%",
                                      height: "100%",
                                      top: "0",
                                      right: "0",
                                      left: "0",
                                      bottom: "0",
                                      objectFit: "cover",
                                    }}
                                  />
                                </Box>
                              )}
                            </TabPanel>
                            <TabPanel value="3">
                              <GoogleMap />
                            </TabPanel>
                          </TabContext>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                ))}
              <Grid item>
                <Button
                  variant="contained"
                  onClick={() => history.push(`/users/${role}/form/search`)}
                >
                  <Typography variant="body2">Edit Search</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AuthenticatedLayout>
  );
};

export default ItemsPage;
