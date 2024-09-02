const limparCampo = (event) => {
  console.log(event);
  event.preventDefault();

  const inputs = document.querySelector("#nome");
  inputs.value = "";
  const email = document.querySelector("#email");
  const sendEmail = email.value;
  email.value = "";

  const text = (document.querySelector("#mensagem").value = "");

  const messege = document.querySelector(".sent");
  messege.innerHTML = `Entraremos em contato através do endereço: ${sendEmail}`;
};

//botão mobile
const btnMobile = document.getElementById("mobile");

function changeMenu(event) {
  if (event.type === "touchstart") {
    event.preventDefault();
  }
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", changeMenu);
btnMobile.addEventListener("touchstart", changeMenu);


const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion, index) => {
  const header = accordion.querySelector(".accordion__header");
  const content = accordion.querySelector(".accordion__content");
  const icon = accordion.querySelector("#accordion-icon");

  header.addEventListener("click", () => {
    const isOpen = content.style.height === `${content.scrollHeight}px`;

    accordions.forEach((a, i) => {
      const c = a.querySelector(".accordion__content");
      const ic = a.querySelector("#accordion-icon");

      c.style.height = i === index && !isOpen ? `${c.scrollHeight}px` : "0px";
      ic.classList.toggle("ri-add-line", i !== index || !isOpen);
      ic.classList.toggle("ri-subtract-fill", i === index && !isOpen);
    });
  });
});
