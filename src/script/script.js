const limparCampo = (event) => {
  console.log(event);
  event.preventDefault();

  const inputs = document.querySelector("#nome");
  inputs.value = "";
  const email = (document.querySelector("#email").value = "");
  const text = (document.querySelector("#mensagem").value = "");

  const messege = document.querySelector(".sent");
  messege.innerHTML = `Entraremos em contato através do endereço: ${email}`;
};
