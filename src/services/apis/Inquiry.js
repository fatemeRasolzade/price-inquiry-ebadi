import { api } from "../index";

export const CompanyList = (data) => {
  return api(
    {
      url: "Menu",
      method: "GET",
    },
    true
  );
};
