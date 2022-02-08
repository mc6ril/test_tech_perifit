export const formaterDate = (date) => {
  date = date.toString().slice(0, 10);
  return (date = date.split(" ").reverse().join(" "));
};

export const frenchFormDate = (date) => {
  date = date.split("/");
  const month = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];

  date[1] = month[date[1]];

  return date.join(" ");
};

export const transformTimer = (timer) => {
  console.log(timer);
  let minute = ("0" + Math.floor((timer / 60000) % 60)).slice(-2);
  let sec = ("0" + Math.floor((timer / 1000) % 60)).slice(-2);

  return `${minute}:${sec}`;
};
