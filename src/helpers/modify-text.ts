export const getOnlyNumbers = (text: string) => {
  return text.replace(/\D/g, "");
};

export const modifyNumbers = (text: string) => {
  if (text.length > 2) {
    const matches = text.match(/.{1,2}/g);

    const result = matches?.join("-");
    return result;
  } else {
    return text;
  }
};
