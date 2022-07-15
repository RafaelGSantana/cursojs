function verificarEntrada() {
   let nomeConvidado = document.getElementById('nome').value;
   let nomeHost = document.getElementById('host').value;

   const listaConvidados = [
      {
         host: 'Rafael', 
         convidados: ['Fulano', 'Ciclano', 'Beltrano', 'Patricia', 'Bruno']
      },
      {
         host: 'Edison', 
         convidados: ['Geraldo', 'Laercio', 'Cida', 'Luiz', 'Juliana']
      }
   ];

   // loop no array listaConvidados
   // verificar se no item, o nomeHost é igual ao host
      // se não for, pula para o próximo item (objeto) do array
      // se for, entra no array convidados e verifica se possui o nomeConvidado
         // se possuir, exibe mensagem positiva
         // se não possuir, exibe mensagem negativa

   listaConvidados.forEach(item => {
      if (nomeHost === item.host) {
         if (item.convidados.includes(nomeConvidado)) {
            document.getElementById('permissao').innerText = 'Você pode entrar!'
         } else {
            document.getElementById('permissao').innerText = 'Você não pode entrar!'
         }
      } 
   });
}