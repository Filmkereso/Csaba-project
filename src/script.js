function megjelenit()
{
    let regi = document.getElementById('popup_gomb_szoveg');
    let uj = document.getElementById('gombnyomas_utani_tartalom');

    regi.style.display = 'none';
    uj.style.display = 'block';
}

window.setTimeout(function() {
    document.getElementById('popup-container').style.display = 'flex';
}, 3000);

function ujratoltes()
{
    window.location.href = "/";
}
