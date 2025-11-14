import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

// Date atual para formatar o input.
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega data atual e defini a data min
selectedDate.value = inputToday;
selectedDate.min = inputToday;

//Evento de submit do formulário.
form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    // recuperando o nome do cliente.
    const name = clientName.value.trim();

    if (!name) {
      return alert("Por favor, insira o nome do cliente!");
    }

    // Recupera o horario selecionado.
    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Por favor, selecione um horário!");
    }

    // Recuperar somente a hora.
    const [hour] = hourSelected.innerText.split(":");

    // Insere a hora na data.
    const when = dayjs(selectedDate.value).add(hour, "hour");
    
    // gera um ID
    const id = new Date().getTime();

  // Faz o agendamento.
    await scheduleNew({
        id,
        name,
        when,
    })

    // recarrega os agendamentos.
    await schedulesDay()

    // Limpa o input de nome do cliente.
    clientName.value = ""

  } catch (error) {
    alert("Não é possível realizar o agendamento");
    console.log(error);
  }
};
