let cuentas = [
    { usuario: "persona 1", nombre: "Mali", saldo: 200, password: 1234 },
    { usuario: "persona 2", nombre: "Gera", saldo: 290, password: 9876 },
    { usuario: "persona 3", nombre: "Maui", saldo: 67, password: 5566 }
  ];

  let selectedAccount = null;

  function login() {
    const accountSelect = document.getElementById("accountSelect");
    const passwordInput = document.getElementById("password");
    const optionsDiv = document.getElementById("options");
    const loginDiv = document.getElementById("login");
    const welcomeDiv = document.getElementById("welcome");
    const accountNameSpan = document.getElementById("accountName");
  
    const selectedAccountIndex = accountSelect.value;
    const password = parseInt(passwordInput.value);
  
    if (cuentas[selectedAccountIndex].password === password) {
      selectedAccount = cuentas[selectedAccountIndex];
      loginDiv.style.display = "none";
      optionsDiv.style.display = "block";
      welcomeDiv.style.display = "block";
      accountNameSpan.textContent = cuentas[selectedAccountIndex].nombre;
    } else {
      alert("Contraseña incorrecta. Intenta nuevamente.");
    }
  }

  function checkBalance() {
    const resultDiv = document.getElementById("result");
    const messageElement = document.getElementById("message");
    const balanceElement = document.getElementById("balance");

    messageElement.textContent = "Saldo actual:";
    balanceElement.textContent = "$" + selectedAccount.saldo;

    resultDiv.style.display = "block";
  }

  function deposit() {
    const resultDiv = document.getElementById("result");
    const messageElement = document.getElementById("message");
    const balanceElement = document.getElementById("balance");

    const amount = parseFloat(prompt("Ingresa la cantidad a depositar:"));

    if (isNaN(amount) || amount <= 0) {
      alert("Ingresa un monto válido.");
      return;
    }

    selectedAccount.saldo += amount;

    if (selectedAccount.saldo > 990) {
      alert("Monto invalido - El saldo máximo permitido en su cuenta es de $990.");
      selectedAccount.saldo -= amount; // Revertir la operación
      return;
    }

    messageElement.textContent = "Monto depositado:";
    balanceElement.textContent = "$" + selectedAccount.saldo;

    resultDiv.style.display = "block";
  }

  function withdraw() {
    const resultDiv = document.getElementById("result");
    const messageElement = document.getElementById("message");
    const balanceElement = document.getElementById("balance");

    const amount = parseFloat(prompt("Ingresa la cantidad a retirar:"));

    if (isNaN(amount) || amount <= 0 || amount > selectedAccount.saldo || selectedAccount.saldo - amount < 10) {
      alert("Monto no válido o excede los límites.");
      return;
    }

    selectedAccount.saldo -= amount;

    messageElement.textContent = "Monto retirado:";
    balanceElement.textContent = "$" + selectedAccount.saldo;

    resultDiv.style.display = "block";
  }