export const getDateTime = (value = '') => {
  const [date_, time_] = value.split(' ');
  const date = new Date(date_ + (time_ ? `T${time_}` : ''));
  return date;
  return new Date();
};

export const onFormatDate = value => {
  const time = getDateTime(value);
  const month = time.getMonth() + 1;
  const date = time.getDate();

  const onFormat = num => (num < 10 ? `0${num}` : `${num}`);

  return `${onFormat(month)}:${onFormat(date)}`;
};

export const onFormatTime = value => {
  const time = getDateTime(value);
  const hour = time.getHours();
  const minute = time.getMinutes();

  const onFormat = num => (num < 10 ? `0${num}` : `${num}`);

  return `${onFormat(hour)}:${onFormat(minute)}`;
};
