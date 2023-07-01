export function generatePetCard(kind, year, name) {
  const currentYear = new Date().getFullYear();
  return `<li class="petCard">
<h2>${name} ${year}</h2>
<p>Тваринка ${kind} - ${year} рік народження. Вік тварини - ${
    currentYear - year
  } ${currentYear - year === 1 ? "year" : "years"} old.</p>
  <button type='button' class='delete-btn'>Видалити картку</button>
</li>`;
}
