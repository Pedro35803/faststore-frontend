export const truncateText = (text: string, maxLength: number) => {
  const endText = "...";
  const sizeEnd = endText.length;
  if (sizeEnd > maxLength)
    throw new Error(`Expect maxLength size more than ${sizeEnd}`);
  return text.length > maxLength
    ? text.substring(0, maxLength - sizeEnd).trim() + endText
    : text;
};