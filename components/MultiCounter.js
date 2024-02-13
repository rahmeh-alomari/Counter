// MultiCounter.js
import React, { useState } from "react";
import styles from "./MultiCounter.module.css";

import Counter from "./Counter";
import { FontAwesomeIcon } from "../Utility/fontawesome";
// get our fontawesome imports
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const MultiCounter = () => {
  const [counters, setCounters] = useState([{ id: 1, value: 0 }]);

  const handleAdd = () => {
    const newCounterId = counters.length + 1;
    setCounters([...counters, { id: newCounterId, value: 0 }]);
  };

  const handleRemove = (id) => {
    setCounters(counters.filter((counter) => counter.id !== id));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {counters.map((counter) => (
          <div key={counter.id} className="col-3">
            <Counter counter={counter} onRemove={handleRemove} />
          </div>
        ))}
      </div>
      <div className="row justify-content-end fixed-bottom m-3">
        <div
          className="col-auto"
          data-toggle="tooltip"
          data-placement="top"
          title="Add New Counter"
        >
          <button onClick={handleAdd} type="button" className="btn btn-primary">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiCounter;
