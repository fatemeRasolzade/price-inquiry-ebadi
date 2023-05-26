import { useEffect, useState } from "react";
import CustomBtn from "./utils/CustomBtn";
import CustomInput from "./utils/CustomInput";
import CustomDropDown from "./utils/CustomDropDown";
import EbadiLogo from "../public/img/Ebadi.png";
import { CompanyList, priceInquiry } from "../services/apis/Inquiry";
import toast from "react-hot-toast";

const initialForm = {
  model: "",
  company: "",
  year: "",
};

const Home = () => {
  const [form, setForm] = useState(initialForm);
  const [Companies, setCompanies] = useState([]);
  const [Models, setModels] = useState([]);
  const [Price, setPrice] = useState([]);

  useEffect(() => {
    CompanyList(form.company?.id ? form.company?.id : 0).then((res) => setModels(res));
  }, [form.company]);

  useEffect(() => {
    CompanyList().then((res) => setCompanies(res));
    if (!form?.company?.id) {
      let company = Companies.find((item) => item.id === form.model.companyID);
      setForm((prev) => ({ model: prev.model, company }));
    }
  }, [form.model]);

  useEffect(() => {
    setPrice([])
  }, [form])
  

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();

    // for use
    priceInquiry(form.model.id, form.year)
      .then((res) => {
        console.log(res);
        setPrice(res);
      })
      .catch(() => {
        toast.error("مشکلی از سمت سرور رخ داده است");
      });
  };

  const ChkDisabled = () => !form?.company?.id || !form?.model?.id || form?.year === "";

  return (
    <div className=" centering h-screen">
      <form onSubmit={handleClick} className="gap-4 flex-end-end flex-col w-96 rounded-lg mx-auto bg-slate-800 p-10">
        <img className="mx-auto" width={200} src={EbadiLogo} alt="ebadi" />
        <CustomDropDown value={form} setValue={setForm} name="company" label="کمپانی" list={Companies} searchOption variant="standard" clearField={() => setForm(initialForm)} />
        <CustomDropDown value={form} setValue={setForm} name="model" label="مدل" list={Models} searchOption variant="standard" />
        <CustomInput value={form} setValue={setForm} name="year" label="سال ساخت " variant="standard" maxLength={4} JustNumber />
        <CustomBtn parentClassName="w-full" disabled={ChkDisabled()} text="استعلام" OnClick={handleClick} className="main-btn w-full" />
        <p className="text-right w-full text-xs">قیمت کارشناسی برای همکار: {Price[1]}</p>
        <p className="text-right w-full text-xs">قیمت کارشناسی برای مصرف کننده: {Price[0]}</p>
      </form>
    </div>
  );
};

export default Home;
