function abrirLogin() {
    console.log('naruto')
    // Define as dimensões da janela
    var largura = 520;
    var altura = 600;

    // Calcula a posição central da janela no centro da tela
    var esquerda = (window.innerWidth - largura) / 2;
    var topo = (window.innerHeight - altura) / 2;

    // Abre a nova janela com as dimensões e posição especificadas
    window.open('login.html', '_blank', 'width=' + largura + ',height=' + altura + ',left=' + esquerda + ',top=' + topo);

}

function alterarImg(imagem) {
    var img_produto = document.getElementById('img_produto');
    var img_sub1 = document.getElementById('img_sub1');
    var img_sub2 = document.getElementById('img_sub2');
    var imagem_pri = img_produto.src;
    var imagem_sec = img_sub1.src;
    var imagem_ter = img_sub2.src;

    if (imagem.alt === 'img_sub1'){
        img_produto.src = imagem_sec;
        img_sub1.src = imagem_pri;
    } else if (imagem.alt === 'img_sub2'){
        img_produto.src = imagem_ter;
        img_sub2.src = imagem_pri;
    }
}

function alterarIdiota(imagem) {
    var idiota_edu = 'idiota_edu'; // Supondo que 'idiota_edu' seja o ID da imagem educada
    var edu_img = document.getElementById(idiota_edu);
    var eu_img = document.getElementById(eu);
    var euSrc = 'img/idiota_mascarado.jpg';

    if (imagem.alt === 'idiota') {
        edu_img.src = euSrc;
        edu_img.alt = 'idiota_mascarado'
    } else if (imagem.alt === 'idiota_mascarado') {
        edu_img.src = 'img/idiota.jpg';
        edu_img.alt = 'idiota'
    }
}

function alterarEu(imagem) {
    var eu = 'eu'; // Supondo que 'idiota_edu' seja o ID da imagem educada
    
    var edu_img = document.getElementById(idiota_edu);
    var eu_img = document.getElementById(eu);
    var euSrc = 'img/idiota_mascarado.jpg';

    if (imagem.alt === 'idiota') {
        edu_img.src = euSrc;
        edu_img.alt = 'idiota_mascarado'
    } else if (imagem.alt === 'idiota_mascarado') {
        edu_img.src = 'img/idiota.jpg';
        edu_img.alt = 'idiota'
    }
}
