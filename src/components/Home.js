import { useEffect, useState } from "react";
import CustomBtn from "./utils/CustomBtn";
import CustomInput from "./utils/CustomInput";
import CustomDropDown from "./utils/CustomDropDown";
import EbadiLogo from "../public/img/Ebadi.png";
import PasswordIcon from "../public/icon/PasswordIcon";
import User from "../public/icon/User";

const Home = () => {
  const [form, setForm] = useState({
    userName: "",
    password: "",
  });

  const [Branch, setBranch] = useState({
    branch: "",
  });

  const [ErrorMessage, setErrorMessage] = useState(" ");


  useEffect(() => {
    setErrorMessage(" ");
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

  const ChkDisabled = () => form.userName === "" || form.password === "" || !Branch.branch.ID;

  return (
    <div className=" centering h-screen">
      <form onSubmit={handleClick} className="gap-4 flex-end-end flex-col w-96 rounded-lg mx-auto bg-slate-800 p-10">
        <img className="mx-auto" width={200} src={EbadiLogo} alt="ebadi" />
        <CustomInput value={form} setValue={setForm} name="userName" label="نام کاربری" variant="standard" endIcon={<User className="!text-yellow" />} />
        <CustomInput value={form} setValue={setForm} name="password" label="رمز عبور" variant="standard" endIcon={<PasswordIcon className="!text-yellow" />} />
        <CustomDropDown value={Branch} setValue={setBranch} name="branch" label="شعبه" list={[]} listText="Name" variant="standard" />
        <p className={`${ErrorMessage ? "opacity-100" : "opacity-0"} text-red-600 transition h-4 w-full`}>{ErrorMessage}</p>
        <CustomBtn disabled={ChkDisabled()} text="ورود به حساب کاربری" OnClick={handleClick} className="main-btn" />
      </form>
    </div>
  );
};

export default Home;
