var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var horas = window.document.getElementById('horas')
var img = window.document.getElementById('imagem')
var body = window.document.getElementById('bodi')
var all = window.document.getElementById('all')


hora = 20


if (hora >= 0 && hora <= 5){
horas.innerHTML = `Agora são ${hora}h ${minuto}min, Boa madrugada!`
img.src = 'https://i.redd.it/p9lgydybw1fa1.jpg';
document.body.style.color = 'White'
document.body.style.backgroundImage = "url('https://i.redd.it/vq5bsl8k16if1.jpg')";
all.style.backgroundColor = 'rgba(255, 255, 255, 0.291)'


}


else if (hora < 12){
    horas.innerHTML = `Agora são ${hora}h ${minuto}min, Bom dia!`
    img.src = 'https://i.pinimg.com/736x/c7/1b/9d/c71b9d2878b98d4aeb7cf44fadf3289f.jpg';
document.body.style.color = 'White'
document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/2601920.jpg')";
} 

else if (hora < 18){
        horas.innerHTML = `Agora são ${hora}h ${minuto}min, Boa tarde!`
img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScUpXaiR8PtmTIaxFEk1e2gKItUcP02vV3Ftpru4ygqKoVAGg6EUIlHrL2&s=10';
document.body.style.color = 'White'
document.body.style.backgroundImage = "url('https://res.allmacwallpaper.com/get/iMac-27-inch-4K-Retina-wallpapers/hawaii-sunset-5k-5120x2880/22244-12.jpg')";
all.style.background = 'rgba(247, 141, 1, 0.24)'

}

else {
        horas.innerHTML = `Agora são ${hora}h ${minuto}min, Boa noite!`
img.src = 'https://preview.redd.it/tell-me-something-and-ill-answer-like-bully-maguire-v0-sltrle4chkgf1.jpeg?auto=webp&s=fe628021f34719c59dc8ffb1c23875e5a21bdce7';
document.body.style.color = 'White'
document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1460551204960-763bc82b7d8f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3JTIweW9yayUyMG5pZ2h0fGVufDB8fDB8fHww')";

}