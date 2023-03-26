import moment from "moment";

export const calculateTimeLeft = (target) => {
  let eventTime = moment(target).unix().toString();
  let currentTime = Math.floor(Date.now() / 1000).toString();
  let leftTime = eventTime - currentTime;
  let duration = moment.duration(leftTime, "seconds");
  let interval = 1000;

  if (duration.asSeconds() <= 0) {
    clearInterval(interval);
    //window.location.reload(true); //#skip the cache and reload the page from the server
  }

  let days = Math.floor(leftTime / (60 * 60 * 24));
  duration = moment.duration(duration.asSeconds() - 1, "seconds");

  return {
    done: moment().isAfter(target),
    days: days < 1 ? 0 : days,
    hours: duration.hours() < 1 ? 0 : duration.hours(),
    minutes: duration.minutes() < 1 ? 0 : duration.minutes(),
    seconds: duration.seconds() < 1 ? 0 : duration.seconds(),
  };
};
