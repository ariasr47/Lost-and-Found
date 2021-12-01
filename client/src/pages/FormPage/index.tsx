import { Grid, Paper, Typography } from "@material-ui/core";
import axios, { AxiosResponse } from "axios";
import { Form, Formik, FormikHelpers } from "formik";
import { ChangeEvent, FunctionComponent, useCallback, useState } from "react";
import { RouteChildrenProps } from "react-router-dom";
import * as yup from "yup";
import AuthenticatedLayout from "../../components/AuthenticatedLayout";
import { Fields1, Fields2, Fields3 } from "../../components/Fields";
import SearchBar from "../../components/SearchBar/SearchBar";
import { initialValues } from "../../constants";
import { Fields, Params } from "../../types";
import useStyles from "./useStyles";

const FormFields = {
  "1": Fields1,
  "2": Fields2,
  search: Fields3,
};

const submit = (values) =>
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

  const Fields = FormFields[page];

  const validationSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
    datetime: yup.date().required("Datetime is required"),
  });

  const onSubmit = useCallback(
    (values: Fields, formikHelpers: FormikHelpers<Fields>) => {
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
                {({
                  getFieldProps,
                  setFieldValue,
                  values,
                  touched,
                  errors,
                }) => (
                  <Form>
                    <Fields
                      role={role}
                      query={query}
                      values={values}
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
