class Banner {
    constructor(elementoBanner, banners){
        this.elementoBanner = elementoBanner;
        this.banners = banners;
    }

    generateBanner(){
        let itensCarousel = "";
        let idx = 0;
    
        for(const banner of this.banners){
            let active = "";
            if (idx === 0){
                active = "active";
            }
    
        itensCarousel += `
        <div class="carousel-item ${active}">
        <img src="./assets/banners/${banner.image}"  class="d-block  w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>${banner.title}</h5>
          <p>${banner.description}</p>
        </div>
      </div>
        `;
        idx++;
    
      }
        this.elementoBanner.innerHTML = itensCarousel;
    }
}




