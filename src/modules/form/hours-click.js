export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available");

  hours.forEach(( available ) => {
    available.addEventListener("click", (selected) => {

      // remove a classe de todas as li nao selecionadas.
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected")
      })

      // Adiciona a classe na clicada.
      selected.target.classList.add("hour-selected")
    })
  })
}