import { consoleLog } from "@monotest/other-util-funcs";

export const subtract = (num1: number, num2: number): number => {
  consoleLog(num1 - num2);
  return num1 - num2;
};
