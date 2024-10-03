function void1(){
    document.getElementById("video1").src = "./src/public/assets/videos/back1.mp4";
}

function void2(){
    document.getElementById("video2").src = "./src/public/assets/videos/back2.mp4";
}

function void3(){
    document.getElementById("video3").src = "./src/public/assets/videos/back3.mp4";
}

document.getElementById('phone').addEventListener('input', function (e) {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });

    const phoneInput = document.getElementById('phone');

    // Troca o placeholder quando o campo recebe foco
    phoneInput.addEventListener('focus', function() {
        phoneInput.placeholder = '(___) ___-____';
    });

    // Restaura o placeholder original quando o campo perde o foco
    phoneInput.addEventListener('blur', function() {
        phoneInput.placeholder = '* Phone';
    });