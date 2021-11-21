import { ChangeEvent, FunctionComponent, useCallback, useState } from "react";
import { RouteChildrenProps } from "react-router-dom";
import { Grid, Paper, Typography } from "@material-ui/core";
import { Form1, Form2, Form3 } from "../../components/Form";

import SearchBar from "../../components/SearchBar/SearchBar";
import useStyles from "./useStyles";
import AuthenticatedLayout from "../../components/AuthenticatedLayout";
import { Fields, Params } from "../../types";
import { Formik, Form, FormikHelpers } from "formik";
import axios, { AxiosResponse } from "axios";
import * as yup from "yup";

const initialValues: Fields = {
  status: "",
  title: "",
  category: "Other",
  description: "",
  photo: null,
  datetime: "",
  location: "",
};

const Forms = {
  "1": Form1,
  "2": Form2,
  search: Form3,
};

const submit = (values) =>
  new Promise(async (resolve, reject) => {
    const res: AxiosResponse = await axios.post("/users/item", {
      ...values,
      photo: values["photo"] ? values["photo"].name : "",
    });

    console.log(res);

    if (res.status === 200 && values["photo"]) {
      const formData = new FormData();
      formData.append("newImage", values["photo"]);

      const res: AxiosResponse = await axios.post("/users/upload", formData);

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

export const InputPage: FunctionComponent<RouteChildrenProps<Params>> = (
  props
) => {
  const { history, match } = props;
  const { role, page } = match.params;

  const [query, setQuery] = useState("");
  const classes = useStyles();

  const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setQuery(() => e.target.value);
  }, []);

  const Fields = Forms[page];

  const validationSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
    datetime: yup.date().required("Datetime is required"),
  });

  console.log(history);

  const onSubmit = useCallback(
    (values: Fields, formikHelpers: FormikHelpers<Fields>) => {
      console.log("onSubmit inside useFormik()");
      submit(values);
      history.push(`/users/${role}/items`);
    },
    [history, role]
  );

  return (
    <AuthenticatedLayout
      backgroundColor={role === "finder" ? "#feebb1" : "#b3c1d1"}
    >
      <Grid item container justifyContent="center">
        <Grid item>
          <Grid container direction="column">
            <Grid key="grid-item-search-top" item>
              {page !== "search" ? (
                <Typography variant="h4" color="primary">
                  {`Input the ${role === "finder" ? "found" : "lost"} item`}
                </Typography>
              ) : (
                <SearchBar
                  role={role}
                  query={query}
                  onChange={handleSearchChange}
                />
              )}
            </Grid>
            <Grid
              key="grid-item-form"
              item
              className={classes.root}
              component={Paper}
            >
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                {({ getFieldProps, setFieldValue, touched, errors }) => (
                  <Form>
                    <Fields
                      role={role}
                      query={query}
                      getFieldProps={getFieldProps}
                      setFieldValue={setFieldValue}
                      touched={touched}
                      errors={errors}
                    />
                  </Form>
                )}
              </Formik>
            </Grid>
            <Grid key="grid-item-search-bot" item>
              {page !== "search" && (
                <SearchBar
                  role={role}
                  query={query}
                  onChange={handleSearchChange}
                />
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AuthenticatedLayout>
  );
};

export default InputPage;
