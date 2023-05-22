import { api } from "../index";

export const CompanyList = (params) => {
  return api(
    {
      url: `Menu/${params ?? ""}`,
      method: "GET",
    },
    true
  );
};

export const priceInquiry = (model, year) => {
  return api(
    {
      url: `Menu/modelId/year?modelId=${model}&year=${year}`,
      method: "GET",
    },
    true
  );
};
