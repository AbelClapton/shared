export const BoolLabelType = {
  YesNo: "YesNo",
  PassFail: "PassFail",
} as const;

export type BoolLabelType = typeof BoolLabelType[keyof typeof BoolLabelType];
