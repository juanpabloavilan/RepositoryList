import { Formik, useField } from "formik";
import StyledTextInput from "./StyledTextInput";

const FormikTextInput = ({ name, ...props }) => {
    const [field, meta, handlers] = useField(name);
    const showError = meta.error && meta.touched;
    return (
      <>
        <StyledTextInput
          value={field.value}
          onChangeText={(newValue) => handlers.setValue(newValue)}
          onBlur={() => handlers.setTouched(true)}
          showError={showError}
          errorInfo={meta.error}
          {...props}
        />
      </>
    );
  };

  export default FormikTextInput