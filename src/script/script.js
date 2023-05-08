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
