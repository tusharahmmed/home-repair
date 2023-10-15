import {DatePicker, DatePickerProps, Input} from "antd";
import {Controller, useFormContext} from "react-hook-form";
import dayjs, {Dayjs} from "dayjs";
import {getErrorMessageByPropertyName} from "@/utils/schema-validator";

type UMDatePikerProps = {
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  name: string;
  label?: string;
  value?: Dayjs;
  size?: "large" | "small";
};

const FormDatePicker = ({
  name,
  label,
  onChange,
  size = "large",
}: UMDatePikerProps) => {
  const {
    control,
    setValue,
    formState: {errors},
  } = useFormContext();

  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, date);
  };

  const errorMessage = getErrorMessageByPropertyName(errors, name);
  return (
    <div>
      {label ? label : null}
      <br />
      <Controller
        name={name}
        control={control}
        render={({field}) => (
          <DatePicker
            defaultValue={dayjs(field.value) || Date.now()}
            size={size}
            onChange={handleOnChange}
            style={{width: "100%"}}
          />
        )}
      />
      <small style={{color: "red"}}>{errorMessage}</small>
    </div>
  );
};

export default FormDatePicker;
