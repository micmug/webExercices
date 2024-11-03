// Dropdownmenu

function toggleDropdown() {
  document.getElementById("dropdown-burger").classList.toggle("show");
}

function closeDropdown() {
  document.getElementById("dropdown-burger").classList.remove("show");
}

document.addEventListener("DOMContentLoaded", function () {
  var burgerMenu = document.querySelector(".burgerMenu");
  var dropdownContent = document.getElementById("dropdown-burger");

  // Event-Listener für Klick auf Burger-Menü
  burgerMenu.addEventListener("click", toggleDropdown);

  // Event-Listener für Maus verlässt Dropdown-Bereich
  dropdownContent.addEventListener("mouseleave", closeDropdown);

  // Verhindert, dass das Dropdown sich schließt, wenn man über den Burger fährt
  burgerMenu.addEventListener("mouseenter", function () {
    if (dropdownContent.classList.contains("show")) {
      dropdownContent.removeEventListener("mouseleave", closeDropdown);
    }
  });

  // Fügt den mouseleave Event-Listener wieder hinzu, wenn man den Burger verlässt
  burgerMenu.addEventListener("mouseleave", function () {
    if (dropdownContent.classList.contains("show")) {
      setTimeout(function () {
        dropdownContent.addEventListener("mouseleave", closeDropdown);
      }, 100);
    }
  });
});

// Tooltip & Dialog image
const tooltipText = document.getElementById("tooltipText");
tooltipText.setAttribute("data-tooltip", "In ac nibh in nisl!");

function openDialog() {
  document.getElementById("dialog").style.display = "block";
}

function closeDialog() {
  document.getElementById("dialog").style.display = "none";
}

window.onclick = function (event) {
  if (event.target == document.getElementById("dialog")) {
    closeDialog();
  }
};
