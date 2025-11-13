import dayjs from "dayjs"


const form = document.querySelector("form")
const selectedDate = document.getElementById("date")
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//Carrega data atual e defini a data min
selectedDate.value = inputToday
selectedDate.min = inputToday

//Evento de submit do formulário.
form.onsubmit = (event) => {
    event.preventDefault()

    console.log("Formulário enviado!")
}