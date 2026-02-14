document.getElementById("form-inscricao").addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(e.target.action, {
    method: "POST",
    body: new FormData(e.target),
    headers: { Accept: "application/json" },
  });
  alert("Inscrição realizada! Agradecemos pela disposição.");
  e.target.reset();
});
