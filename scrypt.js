function mySection() { /* Funcao para adicionar efeito na secao */
    const menu = document.querySelectorAll('nav.menu a')

    menu.forEach(function (ancora) {  /* percorrendo todas as tags ancoras do html com ForEach*/
        ancora.addEventListener('click', function (event) {   /* Adiciona evento de click nos elementos */
            event.preventDefault()

            const referencia = ancora.getAttribute('href') /* captura a secao que ao qual o usuario sera direcionado atraves do href da navbar */
            const section = document.querySelector(referencia)

            if (section) {       /* se section for true, ou seja, recebeu o id correto ele ira adicionar a classe css que fara o efeito na secao */
                section.scrollIntoView({
                    behavior: 'smooth'
                })
            }

            section.classList.add('section-efect') /* adiciona a classe section-efect ao elemento, iremos adicionar os efeitos nela atraves de css */

            setTimeout(function () {    /* setTimeout para remover a classe do elemento apos o click */
                section.classList.remove('section-efect');
            }, 2000)

        })
    })

}
document.addEventListener('DOMContentLoaded', function () {
    mySection()
})




