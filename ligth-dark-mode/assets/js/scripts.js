//pegando os elementos do código html
const body = document.getElementsByTagName('body')[0];
const h1 = document.getElementById('page-title');
const footer = document.getElementsByTagName('footer')[0];
const btn = document.getElementById('mode-selector');
const darkMode='dark-mode'

//adicionando o evendo e chamando a função no butão
btn.addEventListener("click", mudaTudo);

//fazendo a função geral que chama TUDO
function mudaTudo(){
    mudaTema();
    mudaTexto();
}

//fazendo função para mudar o modo.
function mudaTema(){
    body.classList.toggle(darkMode);
    h1.classList.toggle(darkMode);
    footer.classList.toggle(darkMode);
    btn.classList.toggle(darkMode);
}

//fazendo função que muda o texto
function mudaTexto(){
    if(btn.classList.contains(darkMode) && h1.classList.contains(darkMode)){
        btn.innerHTML="Ligth Mode";
        h1.innerHTML="Dark Mode ON"
        return;
    };
    btn.innerHTML="Dark Mode";
    h1.innerHTML="Light Mode ON"
}

