import "./AppFilter.css";

export default function AppFilter() {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-light">
        Все сотрудники
      </button>
      <button type="button" className="btn btn-outline-light">
        Сотрудники на повышение
      </button>
      <button type="button" className="btn btn-outline-light">
        ЗП больше 500$
      </button>
    </div>
  );
}
