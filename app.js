addEventListener("DOMContentLoaded", () => {
  const heading = document.getElementById("rubrik");
  const button = document.getElementById("knapp");
  setTimeout(() => (heading.innerHTML = "Vi ändrar ytterligare en gång"), 5000);
  button.addEventListener("click", () => {
    if (heading.style.display === "none") {
      heading.style.display = null;
    } else {
      heading.style.display = "none";
    }

    1 <= 3
  });
});
