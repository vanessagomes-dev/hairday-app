import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function scheduleFetchByDay({ date }) {
  try {
    // Faz a requisição.
    const response = await fetch(`${apiConfig.baseUrl}/schedules`);

    // Converte para Json.
    const data = await response.json();

    // Filtra os agendamentos pela data fornecida.
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day")
    )
    return dailySchedules
  } catch (error) {
    console.log(error);
    alert("Ocorreu um erro ao buscar os agendamentos.");
  }
}
