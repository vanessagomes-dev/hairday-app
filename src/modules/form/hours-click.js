export function hoursClick() {
  const availableHours = document.querySelectorAll(".hour-available");

  availableHours.forEach((hour) => {
    hour.addEventListener("click", (event) => {
      // Remove seleção anterior
      availableHours.forEach((h) => h.classList.remove("hour-selected"));

      // Marca o horário clicado
      event.currentTarget.classList.add("hour-selected");
    });
  });
}
