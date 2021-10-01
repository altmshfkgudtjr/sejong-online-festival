export const getDateTime = (value = '') => {
  // const [date_, time_] = value.split(' ');
  // const date = new Date(date_ + (time_ ? `T${time_}` : ''));
  // return date;
  return new Date();
};

export const onFormatTime = time => {
  const date = getDateTime(time);
  const hour = date.getHours();
  const minute = date.getMinutes();

  const onFormat = num => (num < 10 ? `0${num}` : `${num}`);

  return `${onFormat(hour)}:${onFormat(minute)}`;
};
