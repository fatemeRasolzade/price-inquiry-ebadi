import React, { useEffect, useState } from "react";
import { Checkbox, Fade, FormControlLabel, TextField, Tooltip } from "@mui/material";
import SimpleBar from "simplebar-react";
import Search from "../../public/icon/Search";
import Clear from "../../public/icon/Clear";
import DropDownArrow from "../../public/icon/DropDownArrow";

const CustomChkDropDown = ({ value = [], setValue, label, name, list = [], listText = "name", searchOption, depName, depText, disabled, disabledText = "", disabledClear, variant = "outlined", parentClassName }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (value[depName] === "") {
      handleClear();
    }
  }, [value[depName]]);

  const handleClick = (e, vl) => {
    if (e.target.checked) {
      setValue({ ...value, [name]: [...value[name], vl] });
    } else {
      setValue({ ...value, [name]: value[name].filter((l) => l.ID !== vl.ID) });
    }
  };

  const handleChange = (e) => {
    if (searchOption && !disabledClear) setSearch(e.target.value);
  };

  const handleClear = () => {
    console.log("here2");
    setSearch("");
    setValue({ ...value, [name]: [] });
  };

  const listFilter = () => list.filter((l) => l[listText].includes(search));

  return (
    <div className={`relative w-full ${parentClassName}`}>
      <Tooltip arrow title={value[depName] === "" ? `ابتدا ${depText} را انتخاب کنید` : disabledText}>
        <TextField
          label={label}
          disabled={disabled || value[depName] === ""}
          fullWidth
          dir="rtl"
          size="small"
          variant={variant}
          name={name}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          placeholder={searchOption ? "جستجو" : "انتخاب"}
          value={(value[name].length > 0 ? value[name].map((c) => c[listText]).join(", ") : []) || search}
          // onChange={handleChange}
          InputProps={{
            endAdornment: search || (value[name] === [] && !disabled && !disabledClear) ? <Clear OnClick={handleClear} /> : <DropDownArrow open={open} />,
            startAdornment: searchOption && open && !value[name] && <Search className="pl-2" />,
          }}
        />
      </Tooltip>
      <Fade in={open}>
        <ul className="absolute shadow-md z-10 bg-slate-800 w-full">
          <SimpleBar style={{ maxHeight: "10rem" }}>
            {listFilter().length !== 0 ? (
              listFilter().map((l) => (
                <li key={l.ID} className="px-4 py-2 transition-all duration-700 hover:cursor-pointer hover:bg-light-yellow text-main-grey flex-between-center">
                  <span className="w-full">{l[listText]}</span>
                  <FormControlLabel onChange={(e) => handleClick(e, l)} checked={value[name].some((v) => v.ID === l.ID)} control={<Checkbox defaultChecked />} labelPlacement="end" />
                </li>
              ))
            ) : (
              <p className="py-3 text-center">موردی یافت نشد</p>
            )}
          </SimpleBar>
        </ul>
      </Fade>
    </div>
  );
};

export default CustomChkDropDown;
