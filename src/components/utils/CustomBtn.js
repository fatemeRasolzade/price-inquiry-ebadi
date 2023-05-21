import { Tooltip } from "@mui/material";
import BtnSpinner from "./BtnSpinner";

const CustomBtn = ({ text, icon, OnClick, className, disabled, load, textField, disableText, parentClassName }) => {
  return (
    <div className={`flex-end-end ${parentClassName}`}>
      <Tooltip arrow title={disableText ? disableText : ""}>
        <button className={`custom-btn flex justify-center items-center gap-2 ${className} ${textField && "h-[40px] rounded-2xl"} ${disabled && "opacity-10"}`} disabled={load ? true : disabled} onClick={OnClick}>
          {icon}
          {text}
          {load && <BtnSpinner />}
        </button>
      </Tooltip>
    </div>
  );
};

export default CustomBtn;
