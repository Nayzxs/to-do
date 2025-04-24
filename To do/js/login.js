function fazerLogin() {
    const nome = document.getElementById('nome').value.trim();
    const gmail = document.getElementById('gmail').value.trim();

    if (!nome || !gmail) {
      alert("Preencha todos os campos.");
      return;
    }

    if (!gmail.endsWith("@gmail.com")) {
      alert("Insira um Gmail válido.");
      return;
    }

    localStorage.setItem("usuarioNome", nome);
    localStorage.setItem("usuarioEmail", gmail);

    window.location.href = "index.html";
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      fazerLogin();
    }
  });