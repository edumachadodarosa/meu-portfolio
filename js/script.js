
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {

            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // seções ativas para animação na rolagem
            sec.classList.add('show-animate');
        }
        // se quiser usar animação que se repete na rolagem, use isto
        else {
            sec.classList.remove('show-animate'); 
        }
    });

    // cabeçalho fixo
    let header  = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // removendo o ícone de alternância e a "barra de navegação" ao clicar nos links da barra de navegação (rolagem)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}