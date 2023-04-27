import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <div>
      <button
        type={props.type || "button"}
        onClick={props.onClick}
        className={styles.button}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
