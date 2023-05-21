import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

const CustomToggleButtonGroup = ({ value, setValue, name, list }) => {
  const handleChange = (e, vl) => {
    console.log(vl);
    if (vl) {
      setValue({
        ...value,
        [name]: vl,
      });
    } else {
      setValue({
        ...value,
        [name]: "*",
      });
    }
  };
  return (
    <ToggleButtonGroup color="primary" value={value[name]} exclusive onChange={handleChange} aria-label="Platform">
      {list.map((st) => (
        <ToggleButton key={st.ID} selected={parseInt(value?.StationID.ID) === parseInt(st.ID) ? true : false} value={st}>
          {st.Station}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default CustomToggleButtonGroup;
