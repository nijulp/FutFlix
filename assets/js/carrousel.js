function openModal(elemento, idx){
    const catalogoModal = new bootstrap.Modal(elemento, {});
    catalogoModal.show();
    
    const catalogoItem = catalogos[idx];
    document.querySelector(`${elemento} #catalogoModalLabel`).innerText =catalogoItem.title;
    document.querySelector(`${elemento} .modal-body`).innerHTML = `
    <iframe width="100%" height="300" src="${catalogoItem.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>${catalogoItem.description}<p>
    `;

}


class Carousel{
    constructor(element, carousel){
        this.elementoCarousel = element;
        this.carousel = carousel;
    
    }
    


    generateCarousel(){
        let itensCatalogo = '';
        let idx = 0;

        for(let catalogo of catalogos){
            itensCatalogo += `
            <div class="catalogo" data-toggle="tooltip" data-bs-placement="top" title="${catalogo.title}">
        <div style="background-image: url('./assets/img/${catalogo.image}')"></div>
        <button type="button" onclick="openModal('#catalogoModal', ${idx})"><i class="fa-solid fa-chevron-up"></i></button>
      </div>
            
            `;

            idx++;
        } 

        this.elementoCarousel.innerHTML = itensCatalogo;
    }

    initCarousel(){
        $('.catalogos').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            dots: true,
            responsive: [
                {
                    breakpoint: 1199.9,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                        dots: true,
                        
                    },
                },
                {
                    breakpoint: 991.9,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                        
                    },
                },
                {
                    breakpoint: 767.9,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 575.9,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ]
        });

    }
}








