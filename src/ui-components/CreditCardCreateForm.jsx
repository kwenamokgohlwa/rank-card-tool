/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createCreditCard } from "../graphql/mutations";
export default function CreditCardCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    owner: "",
    number: "",
    exp_month: "",
    exp_year: "",
    cvc: "",
    country: "",
  };
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [number, setNumber] = React.useState(initialValues.number);
  const [exp_month, setExp_month] = React.useState(initialValues.exp_month);
  const [exp_year, setExp_year] = React.useState(initialValues.exp_year);
  const [cvc, setCvc] = React.useState(initialValues.cvc);
  const [country, setCountry] = React.useState(initialValues.country);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setOwner(initialValues.owner);
    setNumber(initialValues.number);
    setExp_month(initialValues.exp_month);
    setExp_year(initialValues.exp_year);
    setCvc(initialValues.cvc);
    setCountry(initialValues.country);
    setErrors({});
  };
  const validations = {
    owner: [{ type: "Required" }],
    number: [{ type: "Required" }],
    exp_month: [{ type: "Required" }],
    exp_year: [{ type: "Required" }],
    cvc: [{ type: "Required" }],
    country: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          owner,
          number,
          exp_month,
          exp_year,
          cvc,
          country,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: createCreditCard.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CreditCardCreateForm")}
      {...rest}
    >
      <TextField
        label="Owner"
        isRequired={true}
        isReadOnly={false}
        value={owner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner: value,
              number,
              exp_month,
              exp_year,
              cvc,
              country,
            };
            const result = onChange(modelFields);
            value = result?.owner ?? value;
          }
          if (errors.owner?.hasError) {
            runValidationTasks("owner", value);
          }
          setOwner(value);
        }}
        onBlur={() => runValidationTasks("owner", owner)}
        errorMessage={errors.owner?.errorMessage}
        hasError={errors.owner?.hasError}
        {...getOverrideProps(overrides, "owner")}
      ></TextField>
      <TextField
        label="Number"
        isRequired={true}
        isReadOnly={false}
        value={number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              number: value,
              exp_month,
              exp_year,
              cvc,
              country,
            };
            const result = onChange(modelFields);
            value = result?.number ?? value;
          }
          if (errors.number?.hasError) {
            runValidationTasks("number", value);
          }
          setNumber(value);
        }}
        onBlur={() => runValidationTasks("number", number)}
        errorMessage={errors.number?.errorMessage}
        hasError={errors.number?.hasError}
        {...getOverrideProps(overrides, "number")}
      ></TextField>
      <TextField
        label="Exp month"
        isRequired={true}
        isReadOnly={false}
        value={exp_month}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              number,
              exp_month: value,
              exp_year,
              cvc,
              country,
            };
            const result = onChange(modelFields);
            value = result?.exp_month ?? value;
          }
          if (errors.exp_month?.hasError) {
            runValidationTasks("exp_month", value);
          }
          setExp_month(value);
        }}
        onBlur={() => runValidationTasks("exp_month", exp_month)}
        errorMessage={errors.exp_month?.errorMessage}
        hasError={errors.exp_month?.hasError}
        {...getOverrideProps(overrides, "exp_month")}
      ></TextField>
      <TextField
        label="Exp year"
        isRequired={true}
        isReadOnly={false}
        value={exp_year}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              number,
              exp_month,
              exp_year: value,
              cvc,
              country,
            };
            const result = onChange(modelFields);
            value = result?.exp_year ?? value;
          }
          if (errors.exp_year?.hasError) {
            runValidationTasks("exp_year", value);
          }
          setExp_year(value);
        }}
        onBlur={() => runValidationTasks("exp_year", exp_year)}
        errorMessage={errors.exp_year?.errorMessage}
        hasError={errors.exp_year?.hasError}
        {...getOverrideProps(overrides, "exp_year")}
      ></TextField>
      <TextField
        label="Cvc"
        isRequired={true}
        isReadOnly={false}
        value={cvc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              number,
              exp_month,
              exp_year,
              cvc: value,
              country,
            };
            const result = onChange(modelFields);
            value = result?.cvc ?? value;
          }
          if (errors.cvc?.hasError) {
            runValidationTasks("cvc", value);
          }
          setCvc(value);
        }}
        onBlur={() => runValidationTasks("cvc", cvc)}
        errorMessage={errors.cvc?.errorMessage}
        hasError={errors.cvc?.hasError}
        {...getOverrideProps(overrides, "cvc")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={true}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              number,
              exp_month,
              exp_year,
              cvc,
              country: value,
            };
            const result = onChange(modelFields);
            value = result?.country ?? value;
          }
          if (errors.country?.hasError) {
            runValidationTasks("country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("country", country)}
        errorMessage={errors.country?.errorMessage}
        hasError={errors.country?.hasError}
        {...getOverrideProps(overrides, "country")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
