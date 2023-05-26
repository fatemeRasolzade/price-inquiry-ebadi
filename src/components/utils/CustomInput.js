import { TextField } from "@mui/material";
import Clear from "../../public/icon/Clear";

const CustomInput = ({ OnClick, inputRef, error, id, helperText, name = "", value = "", setValue, label, OnChange, className, style, placeholder, autoFocus, endIcon, multiline, commafy, JustNumber, OnFocus, OnBlur, disabled, handleEndIcon, variant = "outlined", maxLength }) => {
  const handleChange = (e) => {
    if (commafy) {
      if (e.target.value !== "") {
        if (!isNaN(e.target.value.split(",").join(""))) {
          setValue({ ...value, [name]: e.target.value.split(",").join("") });
        }
      } else {
        setValue({ ...value, [name]: e.target.value.split(",").join("") });
      }
    } else if (JustNumber) {
      if (!isNaN(e.target.value) && e.target.value.match(/^\S*$/)) {
        setValue({ ...value, [name]: e.target.value });
      }
    } else {
      setValue({
        ...value,
        [name]: e.target.value,
      });
    }
  };

  const handleClear = () => {
    setValue({
      ...value,
      [name]: "",
    });
  };

  return (
    <TextField
      inputProps={{ maxLength }}
      id={id}
      inputRef={inputRef}
      helperText={helperText}
      size="small"
      type={name === "password" ? "password" : "text"}
      error={error}
      autoFocus={autoFocus ? true : false}
      onFocus={OnFocus}
      onBlur={OnBlur}
      style={{ ...style }}
      className={className}
      fullWidth
      name={name}
      label={label}
      variant={variant}
      value={commafy ? Number(value[name]).toLocaleString() : value[name]}
      multiline={multiline ? true : false}
      placeholder={placeholder}
      onChange={OnChange ? OnChange : handleChange}
      disabled={disabled}
      InputProps={{
        endAdornment: value[name] && <Clear OnClick={handleClear} />,
      }}
      onClick={OnClick}
    />
  );
};

export default CustomInput;
