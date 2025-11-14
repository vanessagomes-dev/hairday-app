import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");

export function hoursLoad({ date, dailySchedules }) {
  hours.innerHTML = "";

  // Obtem a lista de  horários ocupados.
  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format("HH:mm")
  );

  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":");

    // Adiciona a hora na data e verifica se esta no passado.
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    const available = !unavailableHours.includes(hour) && !isHourPast;

    return {
      hour,
      available,
    };
  });

  opening.forEach(({ hour, available }) => {
    // Adiciona cabeçalho de período conforme a hora
    if (hour === "9:00") hourHeaderAdd("Manhã");
    if (hour === "13:00") hourHeaderAdd("Tarde");
    if (hour === "18:00") hourHeaderAdd("Noite");

    // Cria o item de horário
    const li = document.createElement("li");
    li.classList.add("hour", available ? "hour-available" : "hour-unavailable");
    li.textContent = hour;

    hours.append(li);
  });

  // Adiciona os eventos de clique nos horários disponíveis
  hoursClick();
}

function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;
  hours.append(header);
}
