function main() {
  
  $(document).foundation();
  $('.responsive').slick({
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    infinite: false,
    speed: 300,
    slidesToShow: 3.5,
    centerMode: false,
    centerPadding: '40px',
    responsive:[	
  	{
        breakpoint: 1920,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 2,
          infinite: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '20px',
          slidesToShow: 3.5,
          slidesToScroll: 2,
          infinite: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: '20px',
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
        	infinite:true,
        	centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '20px'
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.responsiveCast').slick({
    // prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    // nextArrow: '<button type="button" class="slick-next">Next</button>',
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    centerMode: false,
    responsive:[	
  	{
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.responsiveStills').slick({
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    centerMode: false,
    responsive:[	
  	{
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.responsiveFilter').slick({
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    centerMode: false,
    responsive:[  
    {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

}