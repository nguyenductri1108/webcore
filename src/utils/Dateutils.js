export const getDateAndMonth = (timeData) => {
    const dateOnly = timeData.substring(0, timeData.indexOf("T"));
    const [year, month, day] = dateOnly.split("-");

    return [month, day];
};
