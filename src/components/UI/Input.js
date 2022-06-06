import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      {/* čia pridėjom "ref", kad būtų galima pasiekti inputą */}
      {/* "..." spread operator nurodo, kad čia ateitų visos reikšmės, kurias pasiekiam per props.input */}
    </div>
  );
});

export default Input;
