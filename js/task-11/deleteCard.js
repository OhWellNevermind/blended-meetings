export function deleteCard(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const currentBtn = event.target;
  currentBtn.closest(".petCard").remove();
}
