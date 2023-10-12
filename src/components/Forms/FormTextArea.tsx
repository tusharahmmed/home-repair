import {getErrorMessageByPropertyName} from "@/utils/schema-validator";
import {Input} from "antd";
import {Controller, useFormContext} from "react-hook-form";

type TextAreaProps = {
  name: string;
  label?: string;
  rows?: number;
  value?: string;
  placeholder?: string;
  required?: boolean;
};

const FormTextArea = ({
  name,
  label,
  rows,
  value,
  placeholder,
  required,
}: TextAreaProps) => {
  const {
    control,
    formState: {errors},
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div className={`flex flex-col  w-full`}>
      <div>
        {required ? (
          <span
            style={{
              color: "red",
            }}>
            *
          </span>
        ) : null}
        {label ? label : null}
      </div>
      <Controller
        name={name}
        control={control}
        render={({field}) => (
          <Input.TextArea
            rows={rows}
            placeholder={placeholder}
            {...field}
            defaultValue={value}
          />
        )}
      />
      <small style={{color: "red"}}>{errorMessage}</small>
    </div>
  );
};

export default FormTextArea;
