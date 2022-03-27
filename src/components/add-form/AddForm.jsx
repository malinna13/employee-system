import "./AddForm.css";

export default function AddForm() {
  return (
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Как зовут сотрудника?"
        />
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Укажите ЗП в долларах"
        />
        <button type="submit" className="btn btn-outline-light">
          Сохранить
        </button>
      </form>
    </div>
  );
}
