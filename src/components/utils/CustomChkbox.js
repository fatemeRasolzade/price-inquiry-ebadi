import { Checkbox, FormControlLabel } from "@mui/material";

const CustomChkbox = ({ value, setValue, name, label, disabled }) => {
  const handleChange = () => {
    setValue({
      ...value,
      [name]: !value[name],
    });
  };

  return <FormControlLabel disabled={disabled} className="w-full" value={value[name]} checked={value[name] === true} onChange={handleChange} control={<Checkbox defaultChecked />} label={label} labelPlacement="start" />;
};

export default CustomChkbox;
