// Criação de um array vazio que irá representar a fila
let fila = [];
// Criação de uma string vazia que vai representar a opção do usuario
let opcao = "";
// Criação do menu com o do-while
do {
  // Aqui temos a apresentação dos pacientes na fila
  // Usando os ordinais
  let pacientes = "";
  for (let i = 0; i < fila.length; i++) {
    pacientes += i + 1 + "º - " + fila[i] + "\n";
  }
  // Interação com o usuario, para que ele escolha a funcionalidade
  opcao = prompt(
    "Pacientes:\n" +
      pacientes +
      "\nEscolha uma ação:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair"
  );
  // Criação do switch para termos as funcionalidades dividads em casos
  switch (opcao) {
    // Aqui no primeiro caso temos o cadastro de pacientes
    case "1":
      // Criamos o paciente dentro de uma variavel
      const novoPaciente = prompt("Qual é o nome do paciente?");
      // Aqui vamos acrescentar o paciente dentro do array "fila" que foi criado anteriormente
      fila.push(novoPaciente);
      break;
    case "2":
      // No caso de remover o paciente da fila
      // Podemos usar um metodo de arrays que é o "shift"
      // Ele remove o primeiro item do array
      const pacienteConsultado = fila.shift();
      // Aqui temos uma condição que mostra que
      // Se a fila estiver vazia, teremos uma mensagem informando que "a fila esta vazia"
      // Se tiver algum paciente na fila, teremos uma mensagem de "removido com sucesso"
      if (!pacienteConsultado) {
        alert("Não há pacientes na fila!");
      } else {
        alert(pacienteConsultado + " foi removido da fila.");
      }
      break;
    // Aqui temos um caso, que demonstra a saida do programa
    case "3":
      alert("Encerrando...");
      break;
    // Um caso padrão para cuidar de valores que nao foram pre-definidos
    default:
      alert("Opção inválida!");
      break;
  }
} while (opcao !== "3");
