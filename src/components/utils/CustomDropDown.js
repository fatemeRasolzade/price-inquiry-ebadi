import React, { useEffect, useState } from "react";
import { Fade, TextField, Tooltip } from "@mui/material";
import SimpleBar from "simplebar-react";
import Search from "../../public/icon/Search";
import Clear from "../../public/icon/Clear";
import DropDownArrow from "../../public/icon/DropDownArrow";

const CustomDropDown = ({ value, setValue, label, name, list = [], perName = "nameFa", engName = "nameEn", searchOption, depName, depText, disabled, disabledText = "", disabledClear, variant = "outlined", parentClassName, clearField }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (value[depName] === "") {
      handleClear();
    }
  }, [value[depName]]);

  const handleClick = (vl) => {
    setValue({ ...value, [name]: vl });
  };

  const handleChange = (e) => {
    if (searchOption && !disabledClear) setSearch(e.target.value);
  };

  const handleClear = () => {
    setSearch("");
    setValue({ ...value, [name]: "" });
    clearField && clearField();
  };

  const listFilter = () => list.filter((l) => (l[engName] && l[engName].toLowerCase().includes(search.toLowerCase())) || (l[perName] && l[perName].toLowerCase().includes(search.toLowerCase())));

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
          value={(value[name] ? `${value[name][perName]} (${value[name][engName]}) ` : "") || search}
          onChange={handleChange}
          InputProps={{
            endAdornment: search || (value[name] && !disabled && !disabledClear) ? <Clear OnClick={handleClear} /> : <DropDownArrow open={open} />,
            startAdornment: searchOption && open && !value[name] && <Search className="pl-2" />,
          }}
        />
      </Tooltip>
      <Fade in={open}>
        <ul className="absolute shadow-md z-10 bg-slate-800 w-full">
          <SimpleBar style={{ maxHeight: "10rem" }}>
            {listFilter().length !== 0 ? (
              listFilter().map((l) => (
                <li key={l.id} onClick={() => handleClick(l)} className="px-4 py-2 hover:cursor-pointer hover:bg-light-yellow text-main-grey">
                  {`${l[perName]} (${l[engName]})`}
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

export default CustomDropDown;
