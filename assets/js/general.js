// htps://demo8462142.mockable.io/banners
// htps://demo8462142.mockable.io/catalos 

const loadBanner = () => {

}

const loadCatalogos = () => {


}

const banners = [
    {
        title: "Uefa Champions League",
        description:
            "A Liga dos Campeões da UEFA é uma competição anual de clubes de futebol a nível continental, organizada pela União das Associações Europeias de Futebol e disputada por clubes europeus.",
        image: "uefa-champios.png"
    },
    {
        title: "Conmebol Libertadores",
        description:
            "A Copa Libertadores da América ou Taça Libertadores da América, oficialmente CONMEBOL Libertadores, é a principal competição de futebol entre clubes profissionais da América do Sul, organizada pela Confederação Sul-Americana de Futebol desde 1960.",
        image: "libertadores-conmebol.png"
    },
    {
        title: "Copa do Mundo Fifa",
        description:
            "O Campeonato Mundial de Futebol, mais conhecido no Brasil por Copa do Mundo e também conhecida em Portugal como Campeonato do Mundo de Futebol, Campeonato Mundial de Futebol, Campeonato Mundial FIFA.",
        image: "copa-mundo.png"
    }
];


const catalogos = [
    {
        image: "bundes-liga.png",
        title:"Bundesliga",
        description:"A Fußball-Bundesliga, é uma liga profissional de futebol da Alemanha. É a principal competição de futebol do país. ",
        video:"https://www.youtube.com/embed/UOoO0uZCvYU",
    },
    {
        image: "campeonato-brasileiro.png",
        title:"Brasileirão Seria A",
        description:"O Campeonato Brasileiro de Futebol, também conhecido como Campeonato Brasileiro, Brasileirão e Série A, é a liga brasileira de futebol profissional entre clubes do Brasil, sendo a principal competição futebolística no país.",
        video:"https://www.youtube.com/embed/yy9Sw9RxLJ8",
    },
    {
        image: "la-liga.png",
        title:"La Liga Santander",
        description:"A Primera División da Liga de Fútbol Profesional, conhecida como LaLiga ou LaLiga Santander, por razões de patrocínio, ou ainda Liga das Estrelas, é a primeira divisão da liga espanhola de futebol profissional entre clubes da Espanha.",
        video:"https://www.youtube.com/embed/4aSdT6YDtIw",
    },
    {
        image: "ligue-on.png",
        title:"Ligue 1 Uber Eats",
        description:"A Ligue 1 (até 2002 chamada Division 1), também conhecida como Ligue 1 Uber Eats por razões de patrocínio, é a primeira divisão da liga francesa de futebol profissional entre clubes da França, sendo a principal competição futebolística no país. Organizada pela Ligue de Football Professionnel desde 1929.",
        video:"https://www.youtube.com/embed/fHuAg7C1F00",
    },
    {
        image: "premier-league.png",
        title:"Premier League",
        description:"Premier League é uma liga profissional de futebol do Reino Unido e está no topo do sistema de ligas do futebol inglês, sendo a principal competição de futebol da nação insular.",
        video:"https://www.youtube.com/embed/GqtlrXnMmug",
    },
    {
        image: "seriaa-tim.png",
        title:"Seria A Tim",
        description:"A Serie A, também chamada de Serie A TIM devido ao patrocínio da TIM, é uma competição de clubes de futebol localizados no topo do sistema da Liga Italiana de Futebol. O vencedor é premiado com o Scudetto e a Coppa Campioni d'Italia.",
        video:"https://www.youtube.com/embed/ULR9DJ-QQV0",
    },
];

const catalogosMiolo = document.querySelector(".catalogos");
const carousel = new Carousel(catalogosMiolo, catalogos);


const mioloCarousel = document.querySelector("#miolo-carousel");
const banner = new Banner(mioloCarousel, banners);

window.addEventListener('load', function(){
    document.querySelector(".loader-body").style.display = 'none';
    this.setTimeout(() => {
        document.querySelector("#banner").removeAttribute("style");
        document.querySelector("#catalogo").removeAttribute('style');
        document.querySelector("#placeholder").style.display = 'none';

        banner.generateBanner();
        carousel.generateCarousel();
        carousel.initCarousel();

    }, 3000)
});

document.addEventListener('DOMContentLoaded', function(){
   $("body").tooltip({ selector: '[data-toggle=tooltip]' });
});




