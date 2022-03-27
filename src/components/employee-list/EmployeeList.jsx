import Employee from "../employee/Employee";
import "./EmployeeList.css";

export default function EmployeeList({ data }) {
  const elements = data.map((item) => {
    return <Employee {...item} />;
  });

  return <ul className="app-list list-group">{elements}</ul>;
}
