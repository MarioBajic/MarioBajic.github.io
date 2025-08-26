function toggleMenu(button) {
  const menu = document.querySelector("ul.list-menu-inline");
  menu.classList.toggle("active");
  // hamburger animáció
  button.classList.toggle("active");
}

//Scroll to top button
document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollToTopBtn");

  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        scrollBtn.classList.add("show");
      } else {
        scrollBtn.classList.remove("show");
      }
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});


//form visszajelzés
document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const successMessage = form.querySelector(".success-message");
            if (successMessage) {
                successMessage.style.display = "block";

                setTimeout(() => {
                    successMessage.style.display = "none";
                }, 3000);
            }

            form.reset();
        });
    });
});








