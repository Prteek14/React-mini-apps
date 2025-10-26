import css from "./Items.module.css";

function Items({ task, delbtn, editbtn }) {
  return (
    <div className="container">
      {task.map((item) => (
        <div
          key={item.id}
          className="row justify-content-center align-items-center mb-2 fw-bolder fs-3"
        >
          <div className={`col-12 col-md-4 ${css.wrapText}`}>{item.name}</div>
          <div className="col-12 col-md-4 text-center">{item.date}</div>
          <div className="col-12 col-md-2 d-flex justify-content-center">
            <button
              type="button"
              className={`btn btn-danger ${css.btngrad} w-auto fw-bold me-2`}
              onClick={() => delbtn(item.id)}
            >
              DELETE
            </button>
            <button
              type="button"
              className={`btn btn-info w-auto fw-bold ${css.editbtn}`}
              onClick={() => editbtn(item.id)}
            >
              EDIT
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Items;
