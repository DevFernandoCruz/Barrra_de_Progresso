const progressoBars = document.querySelectorAll('.colunas');

for (let progressoBar of progressoBars) {

    const circulo = progressoBar.querySelector('.circulo');
    const percentual = progressoBar.querySelector('.percentual');
    const progresso = progressoBar.querySelector('.progresso');

    let progressed = 0;

    const startProgress = () => {

        progressed += 1;

        if (progressed <= progressoBar.getAttribute('data-percent')) {
            circulo.style.top = progressed + '%';
            progresso.style.height = progressed + '%';
            percentual.innerHTML = progressed + '%';
        }

        requestAnimationFrame(startProgress);

    }

    requestAnimationFrame(startProgress);

}
