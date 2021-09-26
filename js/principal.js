var banners =      
["Do lixo ao luxo!", "Reaproveitar é aproveitar!"]; 
var bannerAtual = 0; 
function trocaBanner() {   bannerAtual = (bannerAtual + 1) % 2; document.querySelector('h2#mensagem').textContent =      
banners[bannerAtual]; 
} 
setInterval(trocaBanner, 1000); 
Precisamos também adicionar o script anterior à nossa página index.html, além de uma tag h2 que vai conter a mensagem: 