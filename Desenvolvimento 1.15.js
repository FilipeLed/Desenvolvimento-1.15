function obterAnoDeNascimento() {
    while (true) {
      const ano = parseInt(window.prompt("Digite o ano de nascimento (entre 1922 e 2021):"));
  
      if (isNaN(ano) || ano < 1922 || ano > 2021) {
        console.log("Ano de nascimento inválido. Por favor, tente novamente.");
      } else {
        return ano;
      }
    }
  }
  
  function calcularIdade(anoNascimento) {
    const anoAtual = 2022;
    return anoAtual - anoNascimento;
  }
  
  function funcaoIdade() {
    const nomeCompleto = window.prompt("Digite seu nome completo:");
    const anoNascimento = obterAnoDeNascimento();
  
    const idade = calcularIdade(anoNascimento);
  
    window.alert(`Nome: ${nomeCompleto}`);
    window.alert(`Idade:  ${idade} anos`);
  }
  
  // Chamada da função principal
  funcaoIdade();