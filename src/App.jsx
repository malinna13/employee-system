import "./App.css";
import AddForm from "./components/add-form/AddForm";
import AppFilter from "./components/app-filter/AppFilter";
import AppInfo from "./components/app-info/AppInfo";
import EmployeeList from "./components/employee-list/EmployeeList";
import Employee from "./components/employee/Employee";
import SearchPanel from "./components/search-panel/SearchPanel";

function App() {
  const data = [
    { name: "Akmaral", salary: 1200, increase: false },
    { name: "Inna", salary: 1100, increase: true },
    { name: "Ilyas", salary: 700, increase: true },
    { name: "Azamat", salary: 2000, increase: false },
  ];

  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel /> <AppFilter />
      </div>
      <EmployeeList data={data} />

      <AddForm />
    </div>
  );
}

export default App;
