// script.js

function validarCarteira() {
    var numeroCarteira = document.getElementById('numeroCarteira').value;
  
    // Lógica de validação da carteira de estudante
    // Aqui você pode adicionar a lógica personalizada para validar o número da carteira de estudante
    
    if (numeroCarteira !== '') {
      document.getElementById('resultado').textContent = 'Carteira de estudante válida!';
    } else {
      document.getElementById('resultado').textContent = 'Número da carteira de estudante inválido!';
    }
  }
  