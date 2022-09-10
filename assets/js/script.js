let usdBtn = document.querySelector(".exchange-btn");
let exchangeItem = document.querySelector(".exchange-item");
let categoriesBtn = document.querySelector(".categories-btn");
let categoriesItem = document.querySelector(".categories-item");
let blogBtn = document.querySelector(".blog-btn");
let blogItems = document.querySelector(".blog-items")

usdBtn.addEventListener("click",function(e) {
    e.preventDefault();
    exchangeItem.classList.toggle("d-block")
  })



blogBtn.addEventListener('click',function (e) { 
    e.preventDefault();
    blogItems.classList.toggle("d-block")
 })

 categoriesBtn.addEventListener('click',function (e) {
    e.preventDefault();
    categoriesItem.classList.toggle("d-block")
  })


  $('.owl-one').owlCarousel({
    loop:false,
    margin:40,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('.owl-second').owlCarousel({
    loop:false,
    margin:40,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('.owl-third').owlCarousel({
    loop:false,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }
    }
})

$('.owl-fourth').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
$('.owl-fifth').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

$('.owl-sixth').owlCarousel({
    loop:false,
    margin:20,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

$('.owl-seventh').owlCarousel({
    loop:false,
    margin:30,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})