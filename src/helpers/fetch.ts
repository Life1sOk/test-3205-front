import { DataType } from "../types/data";

type FetchType = {
  sendData: DataType;
  controller?: any;
};

export const fetchHelper = async ({ sendData, controller }: FetchType) => {
  // Header prep;
  const headers = {
    method: "POST",
    body: JSON.stringify(sendData),
    signal: controller ? controller.signal : null,
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Fetching
  const response = await fetch("http://localhost:3001/find", headers);

  // Data
  return await response.json();
};
