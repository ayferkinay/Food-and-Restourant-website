let menu = document.querySelector("#menu-bar")
let navbar = document.querySelector(".navbar")

menu.onclick = () => {   // menu butonuna tıkladnığında classı silinsin yerine başka bi klass yazılsın
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("active")  //menu butonuna tıklandığında navbar classına sahip olan nav etiketine active classı de eklenir
}

window.onscroll = () => {
    menu.classList.toggle.remove("fa-times")
    navbar.classLis.toggle.remove("active")


    if (window.scrollY > 100) {
        document.querySelector('#scroll-top').classList.add('active');
    }
    else {
        document.querySelector('#scroll-top').classList.remove('active');
    }
}


loader = ()=>{
    document.querySelector('.loader-container').classList.add('fade-out')
}

fadeOut = () =>{
    setInterval(loader, 2500);
}

window.onload = fadeOut();