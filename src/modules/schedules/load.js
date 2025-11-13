import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load"; 
import { schedulesShow } from "../schedules/show.js";

//Seleciona o input de data.
const selectedDate = document.getElementById("date");

export async function schedulesDay () {
    //Obtem a data do input.
    const date = selectedDate.value;

    //Busca na API os agendamentos.
    const dailySchedules =  await scheduleFetchByDay({ date })
    
    // Exibi os agendamentos
    schedulesShow ({ dailySchedules })

    // Renderiza as horas disponiveis.
   hoursLoad({ date, dailySchedules })

}