import React, { useState } from "react";
import styles from "./Counter.module.css";
import { FontAwesomeIcon } from "../Utility/fontawesome"; 
import {
  faPlus,
  faTrashArrowUp,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

const Counter = ({ counter, onRemove }) => {
  const [value, setValue] = useState(counter.value);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  return (
    <div className={`card bg-light mb-3 ${styles.card}`}>
      <div className="card-header">
        <h2 className={styles.header}>Counter - {counter.id} -</h2>
      </div>
      <div className="card-body">
        <div className="row justify-content-center">
          <div className="col-auto">
            <button
              className="btn btn-primary mx-4"
              type="submit"
              onClick={handleIncrement}
              data-toggle="tooltip"
              data-placement="top"
              title="Increment"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <h5 className={styles.header}>{value}</h5>
          <div className="col-auto">
            <button
              className="btn btn-primary mx-4"
              type="submit"
              onClick={handleDecrement}
              data-toggle="tooltip"
              data-placement="top"
              title="Decrement"
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </div>
          <div className="col-auto">
            <button
              className="btn btn-primary mx-4"
              type="submit"
              onClick={() => onRemove(counter.id)}
              data-toggle="tooltip"
              data-placement="top"
              title="Remove"
            >
              <FontAwesomeIcon icon={faTrashArrowUp} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
