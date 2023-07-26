export const Utils = () => {
  const convertToTimeZone = (date: Date) => {
    const originalDate = new Date(date);
    const originalTimeZoneOffset = originalDate.getTimezoneOffset();
    const targetTimeZoneOffset = 0;
    const targetTime =
      originalDate.getTime() +
      (targetTimeZoneOffset - originalTimeZoneOffset) * 60000;

    const convertedDate = new Date(targetTime);

    return convertedDate;
  };

  return {
    convertToTimeZone,
  };
};
