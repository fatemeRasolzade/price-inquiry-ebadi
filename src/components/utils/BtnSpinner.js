import { CircularProgress } from "@mui/material";

const BtnSpinner = ({ color = "text-slate-800" }) => {
  return (
    <div className={`centering ${color}`}>
      <CircularProgress color="inherit" size={20} thickness={6} />
    </div>
  );
};

export default BtnSpinner;
