import { consoleLog } from "@monotest/other-util-funcs";

export const addOne = (num: number) => {
  consoleLog(num);
  return num + 1;
};
