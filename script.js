const searchInput = document.getElementById('search_input');
//O getelementById pega o ID do documento linkado e o id selecionado, Ex:acima
//O queryselector pega sempre o primeiro que possui a classe selecionada
//O queryselectorAll já pega todos que possuem a classe selecionada, faz uma node list(parece uma array)
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    if (searchTerm !== "") {
        const url = `http://localhost:3000/artists?name_like=${searchTerm}`
        fetch(url)
            //leitura
            .then((Response) => Response.json())
            .then((result) => displayResults(result))
    } else {
        if (resultPlaylist.classList.contains('hidden')) {
            resultPlaylist.classList.remove('hidden');
            resultArtist.classList.add('hidden');
        }
    }
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');

}


//Escutar um evento, algo que acontece na tela do user(clique, houver, envio, input e etc...)
document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchInput !== '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
    }
    requestApi(searchTerm);
});

function checkScreenWidth() {
    if (window.innerWidth > 1000) {
        location.reload();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.querySelector('.fa-bars');
    const CloseIcon = document.querySelector('.fa-xmark');
    const headerLogin = document.querySelector('.loginREN');
    const headerSub = document.querySelector('.subscribeREN');
    const DivHAM = document.querySelector('.hamburItens');

    hamburgerIcon.addEventListener('click', function () {
        CloseIcon.style.display = CloseIcon.style.display === 'block' ? 'none' : 'block';
        hamburgerIcon.style.display = hamburgerIcon.style.display === 'none' ? 'block' : 'none';
        headerLogin.style.display = headerLogin.style.display === 'flex' ? 'none' : 'flex';
        headerSub.style.display = headerSub.style.display === 'flex' ? 'none' : 'flex';
        DivHAM.style.display = DivHAM.style.display === 'flex' ? 'none' : 'flex';
    });
    CloseIcon.addEventListener('click', function () {
        CloseIcon.style.display = CloseIcon.style.display === 'none' ? 'block' : 'none';
        hamburgerIcon.style.display = hamburgerIcon.style.display === 'block' ? 'none' : 'block';
        headerLogin.style.display = headerLogin.style.display === 'none' ? 'flex' : 'none';
        headerSub.style.display = headerSub.style.display === 'none' ? 'flex' : 'none';
        DivHAM.style.display = DivHAM.style.display === 'none' ? 'flex' : 'none';
    });
});

