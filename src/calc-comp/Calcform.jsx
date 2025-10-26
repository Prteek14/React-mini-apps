import { useRef } from "react";

function Calcform({ userdate }) {
  const Dateinput = useRef();

  const getdate = () => {
    const selectedDate = Dateinput.current.value; // ✅ get value
    if (selectedDate) {
      userdate(selectedDate); // pass value to parent
    } else {
      alert("Please Select a Date!")
    }
  };

  return (
    <div className="mb-3">
      <label
        htmlFor="formGroupExampleInput"
        className="form-label fw-bolder fs-5"
      >
        Date Of Birth
      </label>

      <div className="input-group mb-3">
        <input
          type="date"
          className="form-control"
          ref={Dateinput} // ✅ ref attached
          aria-label="Recipient’s username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-primary fw-semibold"
          type="button"
          id="button-addon2"
          onClick={getdate}
        >
          Check Age
        </button>
      </div>
    </div>
  );
}

export default Calcform;
