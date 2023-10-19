export const roleOptionForAdmin = [
  {
    label: "User",
    value: "user",
  },
];
export const roleOptionForSuperAdmin = [
  {
    label: "Admin",
    value: "admin",
  },
];
export const adminPermissionOptions = [
  {
    label: "Category",
    value: "category",
  },
  {
    label: "Service",
    value: "service",
  },
  {
    label: "Portfolio",
    value: "portfolio",
  },
  {
    label: "Order",
    value: "order",
  },
];

export const userOrderOptions = [
  {
    label: "Cancle",
    value: "cancle",
  },
];
export const orderOptions = [
  {
    label: "Pending",
    value: "pending",
  },
  {
    label: "Confirmed",
    value: "confirmed",
  },
  {
    label: "Complete",
    value: "complete",
  },
  {
    label: "Cancle",
    value: "cancle",
  },
];

export const genderOptions = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
  {
    label: "Others",
    value: "others",
  },
];
export const departmentOptions = [
  {
    label: "HR",
    value: "hr manager",
  },
  {
    label: "Finance",
    value: "finance",
  },
  {
    label: "Management",
    value: "management",
  },
];

export const bloodGroupOptions = [
  {
    label: "A+",
    value: "A+",
  },
  {
    label: "A-",
    value: "A-",
  },
  {
    label: "B+",
    value: "B+",
  },
  {
    label: "B-",
    value: "B-",
  },
  {
    label: "AB+",
    value: "AB+",
  },
  {
    label: "AB-",
    value: "AB-",
  },
  {
    label: "O+",
    value: "O+",
  },
  {
    label: "O-",
    value: "O-",
  },
];

export const facultyOptions = [
  {
    label: "Engineering",
    value: "engineering",
  },
  {
    label: "Faculty of science and engineering",
    value: "Faculty of science and engineering",
  },
];
export const acDepartmentOptions = [
  {
    label: "CSE",
    value: "cse",
  },
  {
    label: "Software Engineering",
    value: "software engineering",
  },
];
export const acSemesterOptions = [
  {
    label: "Fall 2023",
    value: "fall23",
  },
  {
    label: "Autumn 2023",
    value: "autumn2023",
  },
  {
    label: "Summer 2023",
    value: "summer23",
  },
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const monthOptions = months.map((month: string) => {
  return {
    label: month,
    value: month,
  };
});

export const days = [
  "SATURDAY",
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
];
export const daysOptions = days.map((day: string) => {
  return {
    label: day,
    value: day,
  };
});

export const semesterRegistrationStatus = ["UPCOMING", "ONGOING", "ENDED"];

export enum ExamType {
  FINAL = "FINAL",
  MIDTERM = "MIDTERM",
}
