/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreditCardUpdateFormInputValues = {
    owner?: string;
    number?: string;
    exp_month?: string;
    exp_year?: string;
    cvc?: string;
    country?: string;
};
export declare type CreditCardUpdateFormValidationValues = {
    owner?: ValidationFunction<string>;
    number?: ValidationFunction<string>;
    exp_month?: ValidationFunction<string>;
    exp_year?: ValidationFunction<string>;
    cvc?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreditCardUpdateFormOverridesProps = {
    CreditCardUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
    number?: PrimitiveOverrideProps<TextFieldProps>;
    exp_month?: PrimitiveOverrideProps<TextFieldProps>;
    exp_year?: PrimitiveOverrideProps<TextFieldProps>;
    cvc?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreditCardUpdateFormProps = React.PropsWithChildren<{
    overrides?: CreditCardUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    creditCard?: any;
    onSubmit?: (fields: CreditCardUpdateFormInputValues) => CreditCardUpdateFormInputValues;
    onSuccess?: (fields: CreditCardUpdateFormInputValues) => void;
    onError?: (fields: CreditCardUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CreditCardUpdateFormInputValues) => CreditCardUpdateFormInputValues;
    onValidate?: CreditCardUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CreditCardUpdateForm(props: CreditCardUpdateFormProps): React.ReactElement;
