import { FormControlLabel, Switch } from "@mui/material";

const CustomSwitch = ({ label, value, setValue, name, disabled }) => {
  const handleChange = () => {
    setValue({
      ...value,
      [name]: !value[name],
    });
  };

  return <FormControlLabel disabled={disabled} className="w-full" value={value[name]} checked={value[name] === true} onChange={handleChange} control={<Switch defaultChecked />} label={label} labelPlacement="start" />;
};

export default CustomSwitch;
