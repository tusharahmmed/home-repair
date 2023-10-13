// import { useAcademicDepartmentsQuery } from "@/redux/api/academic/departmentApi";
import FormSelectField, {SelectOptions} from "./FormSelectField";
import {useCategoriesQuery} from "@/redux/api/categoryApi";

type ACDepartmentFieldProps = {
  name: string;
  label?: string;
};

const RCCategoryField = ({name, label}: ACDepartmentFieldProps) => {
  // const { data, isLoading } = useAcademicDepartmentsQuery({
  //   limit: 100,
  //   page: 1,
  // });

  const {data} = useCategoriesQuery({
    limit: 100,
    page: 1,
  });

  const categories = data?.categories;
  const rcCategoriyOptions = categories?.map((category: any) => {
    // console.log(category?.id);
    return {
      label: category?.title,
      value: category?.id,
    };
  });

  return (
    <FormSelectField
      name={name}
      label={label}
      options={rcCategoriyOptions as SelectOptions[]}
    />
  );
};

export default RCCategoryField;
