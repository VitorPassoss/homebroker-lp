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

// const btnMobile = document.getElementById("#mobile");

// function changeMenu() {
//   const nav = document.getElementById("#nav");
//   nav.classList.toggle("active");
// }

// btnMobile.addEventListener("click", changeMenu());
