function buybutton () {
    const botao = document.getElementById("primeiroBotao");

    botao.addEventListener("click", function() {
        location.href = "produtos.html"
    });

};

buybutton()

window.addEventListener('resize', function() {
    menu();
});

function menu () {
    const menuclass = document.getElementById(`menuclass`)
        const aparecerMenu = window.innerWidth;

        if (aparecerMenu <= 12000) {
            menuclass.style.display = `block`
        } else {
            menuclass.style.display = `none`
        }
}

menu()
