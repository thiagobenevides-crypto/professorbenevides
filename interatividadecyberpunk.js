/* Efeito "Hacker Scramble" 
   Ao passar o mouse, o texto embaralha com caracteres aleatórios
   antes de revelar o texto original.
*/

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&[]{}<>";

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    // Controla a velocidade da revelação
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}

// Digitação automática no carregamento para o "user status"
const statusLines = document.querySelectorAll('.terminal-text');
// (Adicione lógica aqui se quiser animar linha por linha aparecendo)

console.log("%c SYSTEM READY ", "background: #00ff41; color: black; font-size: 20px; padding: 5px;");
