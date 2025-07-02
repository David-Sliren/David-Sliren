const elementos = document.querySelector(' .elementos');
const adelante = document.getElementById('adelante');
const atras = document.getElementById('atras');

const giro = () => {
        elementos.classList.toggle('giro');
}

adelante.addEventListener( 'click', ()=>{
    const primero = elementos.querySelector(' img:first-child');
    elementos.append(primero);
    giro()
});

atras.addEventListener('click', ()=>{
    const ultimo = elementos.querySelector(' img:last-child');
    elementos.prepend(ultimo);
    giro()
})
