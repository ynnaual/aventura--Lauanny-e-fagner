const avanca = document.querySelectorAll('.btn-proximo');
avanca.forEach(button =>{//para cada clique ele avanca
   button.addEventListener(click,function(){
const atual = document.querySelector('.ativo')
const proximoPasso = 'passo-0'+this.getAttribute('data-proximo');

atual.classList.remove('ativo');
document.getElementById(proximoPasso).classList.add('ativo');
   })

}); 

