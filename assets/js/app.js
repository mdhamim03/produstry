$(function(){
  //Nav-fixed
  let navbar= $(".my_nav");
  $(window).scroll(function(){
    let scrTop = $(window).scrollTop();
    if(scrTop > 360){
      navbar.addClass("nav_fixed")
    }
    else{
      navbar.removeClass("nav_fixed")
    }
  })


    let toggleBtn = $(".myToggleBtn");
    toggleBtn.click(function(){
        //PRIMEARY MENU
        let menu =$("nav #my_cusustomNav ul");
        menu.toggleClass("active");
        //LOGO
        let logo = $("nav .my_logo");
        logo.toggleClass("active_logo")

      });

    //SLICK SLIDER
    
      //SERVICES SLIDER
    $('.servicesSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 3
              }
            },
            {
                breakpoint: 991,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1
                }
              },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });
      //SERVICES SLIDER END
      //PROTFOLIO SLIDER START
      $('.profolio_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000,
        arrows:false,
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 3
              }
            },
            {
                breakpoint: 991,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1
                }
              },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });
      //PROTFOLIO SLIDER END
      //BLOG SLIDER START
      $(".blog_slider").slick({
        slidesToShow: 3,
        centerMode:true,
        centerPadding:0,
        prevArrow:'.blog_leftArrows',
        nextArrow:'.blog_rightArrows',
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3
            }
          },
          {
              breakpoint: 991,
              settings: {
                slidesToShow: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1
              }
            },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      })
      //BLOG SLIDER END
      //TESTIMONIAL SLIDER START
      $(".testimonialTextSliders").slick({
        arrows:false,
        asNavFor:'.testimonialImageSliders',
        fade:true,
      })
      // TESTIMONIAL IMAGE SLIDER
      $(".testimonialImageSliders").slick({
        arrows:false,
        slidesToShow:3,
        centerMode:true,
        centerPadding:0,
        asNavFor:'.testimonialTextSliders',
      })
      //SPONSER SLIDER  START
      $(".sopnserSliders").slick({
        slidesToShow: 5,
        centerMode:true,
        autoplay:true,
        autoplaySpeed: 2000,
        centerPadding:0,
        prevArrow:'.sr_leftArrows',
        nextArrow:'.sr_rightArrows',
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3
            }
          },
          {
              breakpoint: 991,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1
              }
            },
        ]
      });

          // aboutUs section
          $(".team_slider").slick({
            slidesToShow: 3,
            centerMode:true,
            centerPadding:0,
            prevArrow:'.blog_leftArrows',
            nextArrow:'.blog_rightArrows',
            responsive: [
              {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 3
                }
              },
              {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 1
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1
                  }
                },
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          })
          // aboutUs section









});
//J-QUERY END
