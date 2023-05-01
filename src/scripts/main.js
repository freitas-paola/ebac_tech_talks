AOS.init();

const eventDate = new Date("Dec 12, 2023 19:00:00");
const timeStampEvent = eventDate.getTime();

const timeCount = setInterval(function () {
  const now = new Date();
  const timeStampNow = now.getTime();

  const timeToEvent = timeStampEvent - timeStampNow;
  const minutesInMs = 1000 * 60;
  const hoursInMs = minutesInMs * 60;
  const daysInMs = hoursInMs * 24;

  const daysToEvent = Math.floor(timeToEvent / daysInMs);
  const hoursToEvent = Math.floor((timeToEvent % daysInMs) / hoursInMs);
  const minutesToEvent = Math.floor((timeToEvent % hoursInMs) / minutesInMs);
  const secondsToEvent = Math.floor((timeToEvent % minutesInMs) / 1000);

  document.getElementById(
    "counter"
  ).innerHTML = `${daysToEvent} d ${hoursToEvent}h ${minutesToEvent}m ${secondsToEvent}s`;

  if (timeToEvent < 0) {
    clearInterval(timeCount);
    document.getElementById("counter").innerHTML = `Evento expirado`;
  }
}, 1000);
