import { Grid, Paper, Typography } from "@material-ui/core";
import axios, { AxiosResponse } from "axios";
import { Formik, FormikHelpers, FormikProps } from "formik";
import { ChangeEvent, FunctionComponent, useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import * as yup from "yup";
import { Form1, Form2, Form3 } from "../../components/Forms";
import SearchBar from "../../components/SearchBar/SearchBar";
import { initialValues } from "../../constants";
import { setBackgroundColor, setQuery } from "../../actions";
import { Fields, Params, RootState } from "../../types";
import useStyles from "./useStyles";

const getInitialValues = () => {
  const formValues = sessionStorage.getItem("formValues");
  return formValues ? JSON.parse(formValues) : initialValues;
};

const submit = (values: Fields) =>
  new Promise(async (resolve, reject) => {
    const res: AxiosResponse = await axios.post("/users/item", {
      ...values,
      photo: values["photo"] ? values["photo"].name : "",
    });

    if (res.status === 200 && values["photo"]) {
      const formData = new FormData();
      formData.append("newImage", values["photo"]);

      const res: AxiosResponse = await axios.post("/users/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 200) {
        console.log("Successfully Submitted!");
      }
    }

    if (res.status === 200) {
      resolve({ response: "Successful" });
    } else {
      reject({ response: "Failed" });
    }
  });

export const InputPage: FunctionComponent<RouteComponentProps<Params>> = (props) => {
  const { history, match } = props;
  const { role, page } = match.params;

  const classes = useStyles();
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.query);
  const formikRef = useRef<FormikProps<Fields>>(null);

  useLayoutEffect(() => {
    dispatch(setBackgroundColor(role === "finder" ? "#feebb1" : "#b3c1d1"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const formikBag = formikRef.current;
    return () => {
      if (formikBag) {
        formikBag.resetForm();
      }
    };
  }, []);

  const handleSearchChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(setQuery(e.target.value));
    },
    [dispatch]
  );

  const onSubmit = useCallback(
    async (values: Fields, formikHelpers: FormikHelpers<Fields>) => {
      submit(values);
      history.push(`/users/${role}/items`);
    },
    [history, role]
  );

  const onReset = useCallback((values: Fields, formikHelpers: FormikHelpers<Fields>) => {
    formikHelpers.setValues(initialValues);
    sessionStorage.removeItem("formValues");
  }, []);

  const validationSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
    datetime: yup.date().required("Datetime is required"),
  });

  return (
    <Grid item container justifyContent="center">
      <Grid item>
        <Grid container direction="column">
          <Grid key="grid-item-search-top" item>
            {page !== "search" ? (
              <Typography variant="h4" color="primary">
                {`Input the ${role === "finder" ? "found" : "lost"} item`}
              </Typography>
            ) : (
              <SearchBar role={role} query={query} onChange={handleSearchChange} />
            )}
          </Grid>
          <Grid key="grid-item-form" item className={classes.root} component={Paper}>
            <Formik
              initialValues={getInitialValues()}
              onSubmit={onSubmit}
              onReset={onReset}
              validationSchema={validationSchema}
              innerRef={formikRef}
            >
              {(props) => {
                switch (page) {
                  case "1":
                    return <Form1 role={role} {...props} />;
                  case "2":
                    return <Form2 role={role} {...props} />;
                  case "search":
                    return <Form3 role={role} {...props} />;
                }
              }}
            </Formik>
          </Grid>
          <Grid key="grid-item-search-bot" item>
            {page !== "search" && <SearchBar role={role} query={query} onChange={handleSearchChange} />}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InputPage;
