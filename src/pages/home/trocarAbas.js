/*
NÃO UTILIZADO AINDA...
function trocarAbas (evt, nomeAba) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("abasConteudo");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("abasBotao");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(nomeAba).style.display = "block";
    evt.currentTarget.className += " active";
}*/