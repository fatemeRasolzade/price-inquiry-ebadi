import { useEffect, useState } from "react";
import CustomBtn from "./utils/CustomBtn";
import CustomInput from "./utils/CustomInput";
import CustomDropDown from "./utils/CustomDropDown";
import EbadiLogo from "../public/img/Ebadi.png";
import { CompanyList } from "../services/apis/Inquiry";

const Home = () => {
  const [form, setForm] = useState({
    model: "",
    company: "",
    year: "",
  });
  const [Companies, setCompanies] = useState([]);

  const [ErrorMessage, setErrorMessage] = useState(" ");

  useEffect(() => {
    setErrorMessage(" ");
    CompanyList().then((res) => setCompanies(res));
  }, [form]);

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();

    // for use
    // LoginUser(form)
    //   .then((res) => {
    //     navigate("/dashboard");
    //     localStorage.setItem("user", JSON.stringify({ name: res.UserName, id: res.ID, groupID: res.GroupID }));
    //     localStorage.setItem("branch", JSON.stringify(Branch.branch));

    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     if (error.response.status === 404) {
    //       console.log(error.response.status);
    //       setErrorMessage("نام کاربری و یا رمز عبور نادرست است");
    //     } else {
    //       setErrorMessage("مشکلی پیش آمده است لطفا با تیم توسعه ارتباط برقرار کنید");
    //     }
    //   });
  };

  // const ChkDisabled = () => form.userName === "" || form.password === "" || !Branch.branch.ID;

  return (
    <div className=" centering h-screen">
      <form onSubmit={handleClick} className="gap-4 flex-end-end flex-col w-96 rounded-lg mx-auto bg-slate-800 p-10">
        <img className="mx-auto" width={200} src={EbadiLogo} alt="ebadi" />
        <CustomDropDown value={form} setValue={setForm} name="company" label="کمپانی" list={Companies} searchOption variant="standard" />
        <CustomDropDown value={form} setValue={setForm} name="model" label="مدل" list={[]} searchOption variant="standard" />
        <CustomInput value={form} setValue={setForm} name="year" label="سال ساخت " variant="standard" />
        <p className={`${ErrorMessage ? "opacity-100" : "opacity-0"} text-red-600 transition h-4 w-full`}>{ErrorMessage}</p>
        <CustomBtn
          parentClassName="w-full"
          // disabled={ChkDisabled()}
          text="استعلام"
          OnClick={handleClick}
          className="main-btn w-full"
        />
      </form>
    </div>
  );
};

export default Home;
