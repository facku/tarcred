(function ($) {
  'use strict';

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on(
    'click',
    '#navigation a, .mobile-nav a, .scrollto, .hero a',
    function (e) {
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
          var scrollto = target.offset().top;

          $('html, body').animate(
            {
              scrollTop: scrollto,
            },
            1500,
            'easeInOutExpo'
          );

          return false;
        }
      }
    }
  );
  // TOP Menu Sticky
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $('#sticky-header').removeClass('sticky');
      $('#back-top').fadeIn(500);
    } else {
      $('#sticky-header').addClass('sticky');
      $('#back-top').fadeIn(500);
    }
  });

  $(document).ready(function () {
    // mobile_menu
    var menu = $('ul#navigation');
    if (menu.length) {
      menu.slicknav({
        prependTo: '.mobile_menu',
        closedSymbol: '+',
        openedSymbol: '-',
      });
    }
    // blog-menu
    // $('ul#blog-menu').slicknav({
    //   prependTo: ".blog_menu"
    // });

    // review-active
    $('.slider_active').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: true,
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>',
      ],
      nav: true,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        767: {
          items: 1,
          nav: false,
        },
        992: {
          items: 1,
          nav: false,
        },
        1200: {
          items: 1,
          nav: false,
        },
        1600: {
          items: 1,
          nav: true,
        },
      },
    });

    // review-active
    $('.testmonial_active').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: true,
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>',
      ],
      nav: true,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          dots: false,
          nav: false,
        },
        767: {
          items: 1,
          dots: false,
          nav: false,
        },
        992: {
          items: 1,
          nav: false,
        },
        1200: {
          items: 1,
          nav: false,
        },
        1500: {
          items: 1,
        },
      },
    });

    // review-active
    $('.financial_active').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: true,
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>',
      ],
      nav: true,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,

      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        767: {
          items: 1,
          nav: false,
        },
        992: {
          items: 1,
        },
        1200: {
          items: 1,
        },
        1500: {
          items: 1,
        },
      },
    });

    // review-active
    $('.testmonial_active2').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: false,
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>',
      ],
      nav: false,
      dots: true,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      // dotsData: true,
      center: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        767: {
          items: 1,
          nav: false,
        },
        992: {
          items: 1,
        },
        1200: {
          items: 1,
        },
        1500: {
          items: 1,
        },
      },
    });

    // for filter
    // init Isotope
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1,
      },
    });

    // filter items on button click
    $('.portfolio-menu').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

    //for menu active class
    $('.portfolio-menu button').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });

    // wow js
    new WOW().init();

    // counter
    $('.counter').counterUp({
      delay: 10,
      time: 10000,
    });

    /* magnificPopup img view */
    $('.popup-image').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
      },
    });

    /* magnificPopup img view */
    $('.img-pop-up').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
      },
    });

    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
      type: 'iframe',
    });

    // scrollIt for smoth scroll
    $.scrollIt({
      upKey: 38, // key code to navigate to the next section
      downKey: 40, // key code to navigate to the previous section
      easing: 'linear', // the easing function for animation
      scrollTime: 600, // how long (in ms) the animation takes
      activeClass: 'active', // class given to the active nav element
      onPageChange: null, // function(pageIndex) that is called when page is changed
      topOffset: 0, // offste (in px) for fixed top navigation
    });

    // scrollup bottom to top
    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '4500', // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: 'fade', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="fa fa-angle-double-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    // blog-page

    //brand-active
    $('.brand-active').owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      autoplay: true,
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        767: {
          items: 4,
        },
        992: {
          items: 7,
        },
      },
    });

    // blog-dtails-page

    //project-active
    $('.project-active').owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      // autoplay:true,
      navText: [
        '<i class="Flaticon flaticon-left-arrow"></i>',
        '<i class="Flaticon flaticon-right-arrow"></i>',
      ],
      nav: true,
      dots: false,
      // autoplayHoverPause: true,
      // autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        767: {
          items: 1,
          nav: false,
        },
        992: {
          items: 2,
          nav: false,
        },
        1200: {
          items: 1,
        },
        1501: {
          items: 2,
        },
      },
    });

    if (document.getElementById('default-select')) {
      $('select').niceSelect();
    }

    //about-pro-active
    $('.details_active').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      // autoplay:true,
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>',
      ],
      nav: true,
      dots: false,
      // autoplayHoverPause: true,
      // autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        767: {
          items: 1,
          nav: false,
        },
        992: {
          items: 1,
          nav: false,
        },
        1200: {
          items: 1,
        },
      },
    });
  });

  // resitration_Form
  $(document).ready(function () {
    $('.popup-with-form').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',

      // When elemened is focused, some mobile browsers in some cases zoom in
      // It looks not nice, so we disable it:
      callbacks: {
        beforeOpen: function () {
          if ($(window).width() < 700) {
            this.st.focus = false;
          } else {
            this.st.focus = '#name';
          }
        },
      },
    });
    var wow = new WOW({
      boxClass: 'wow', // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
      callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null, // optional scroll container selector, otherwise use window,
      resetAnimation: true, // reset animation on end (default is true)
    });
    wow.init();
  });

  //------- Mailchimp js --------//
  function mailChimp() {
    //$('#mc_embed_signup').find('form').ajaxChimp();
  }
  mailChimp();

  // Search Toggle
  $('#search_input_box').hide();
  $('#search').on('click', function () {
    $('#search_input_box').slideToggle();
    $('#search_input').focus();
  });
  $('#close_search').on('click', function () {
    $('#search_input_box').slideUp(500);
  });
  // Search Toggle
  $('#search_input_box').hide();
  $('#search_1').on('click', function () {
    $('#search_input_box').slideToggle();
    $('#search_input').focus();
  });
})(jQuery);

function isMobileDevice() {
  return (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  );
}

if (document.getElementById('range')) {
  const range = document.getElementById('range'),
    rangeV = document.getElementById('rangeV'),
    setValue = () => {
      if (isMobileDevice()) {
        const newValue = Number(((range.value - 0 - 1000) * 100) / (69000 - 0));
        newPosition = 20 - newValue * 0.8;
        rangeV.innerHTML = `<span>${range.value}</span>`;
        rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
      } else {
        const newValue = Number(((range.value - 0 - 1000) * 100) / (69000 - 0));
        newPosition = 24 - newValue * 1.4;
        rangeV.innerHTML = `<span>${range.value}</span>`;
        rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
      }
    };
  document.addEventListener('DOMContentLoaded', setValue);
  range.addEventListener('input', setValue);
}

function XIRR(values, guess) {
  if (!guess) guess = 0.1;

  var x1 = 0.0;
  var x2 = guess;
  var f1 = XNPV(x1, values);
  var f2 = XNPV(x2, values);

  for (var i = 0; i < 100; i++) {
    if (f1 * f2 < 0.0) break;
    if (Math.abs(f1) < Math.abs(f2)) {
      f1 = XNPV((x1 += 1.6 * (x1 - x2)), values);
    } else {
      f2 = XNPV((x2 += 1.6 * (x2 - x1)), values);
    }
  }
  if (f1 * f2 > 0.0) return null;

  var f = XNPV(x1, values);
  if (f < 0.0) {
    var rtb = x1;
    var dx = x2 - x1;
  } else {
    var rtb = x2;
    var dx = x1 - x2;
  }
  for (var i = 0; i < 100; i++) {
    dx *= 0.5;
    var x_mid = rtb + dx;
    var f_mid = XNPV(x_mid, values);
    if (f_mid <= 0.0) rtb = x_mid;
    if (Math.abs(f_mid) < 1.0e-6 || Math.abs(dx) < 1.0e-6) return x_mid;
  }
  return null;
}

function TIR_Calc(CArray) {
  //IRRCalc
  min = -1.0;
  max = 1.0;
  do {
    guest = (min + max) / 2;
    NPV = 0;
    for (var j = 0; j < CArray.length; j++) {
      NPV += CArray[j] / Math.pow(1 + guest, j);
    }
    if (NPV > 0) {
      min = guest;
    } else {
      max = guest;
    }
  } while (Math.abs(NPV) > 0.000001);
  return guest;
}

function XNPV(rate, values) {
  var xnpv = 0.0;
  for (var key in values) {
    var tmp = values[key];
    var value = tmp.Flow;
    var date = tmp.Date;
    xnpv += value / Math.pow(1 + rate, date / 365);
  }
  return xnpv;
}

function formatMoney(number, decPlaces, decSep, thouSep) {
  (decPlaces = isNaN((decPlaces = Math.abs(decPlaces))) ? 2 : decPlaces),
    (decSep = typeof decSep === 'undefined' ? '.' : decSep);
  thouSep = typeof thouSep === 'undefined' ? ',' : thouSep;
  var sign = number < 0 ? '-' : '';
  var i = String(
    parseInt((number = Math.abs(Number(number) || 0).toFixed(decPlaces)))
  );
  var j = (j = i.length) > 3 ? j % 3 : 0;

  return (
    sign +
    (j ? i.substr(0, j) + thouSep : '') +
    i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, '$1' + thouSep) +
    (decPlaces
      ? decSep +
        Math.abs(number - i)
          .toFixed(decPlaces)
          .slice(2)
      : '')
  );
}

function calcular() {
  var value = $('#range').val();
  var quotes = $("input[name='options']:checked").val();

  value = parseInt(value) * 1.7;
  quotes = parseInt(quotes);

  var valor_cuota = value / quotes;

  $('#valQuote').text('$' + formatMoney(valor_cuota.toFixed(2)));
  $('#quotes_value').val(valor_cuota.toFixed(2));
}

function calQuote() {
  // Input
  var cuotas = $("input[name='options']:checked").val();

  var precio_str = $('#range').val();
  if ((precio_str.match(/\./g) || []).length > 1)
    precio_str = precio_str.replace(/\./g, '');
  if ((precio_str.match(/,/g) || []).length > 1)
    precio_str = precio_str.replace(/,/g, '');
  else precio_str = precio_str.replace(',', '.');
  var precio = precio_str * 1.0;

  // Resto de los planes, se calculan

  // Input
  var tna_str = 55;
  var tna = tna_str / 100;

  var tea = Math.pow(1 + tna / cuotas, cuotas) - 1;

  // Constantes
  var iva = 0.21;
  var arancel = 0.02;
  var dias_ano = 360;
  var dias_mes = 30;
  //var dias_adelanto = 2;
  var dias_adelanto = 2;
  var dias_primer = dias_mes - dias_adelanto;

  // Calculos
  var pago_comercio = 0;
  // Calculo el acumulado de los pagos presenciales al comercio
  var cuota_sin_arancel = (precio * (1 - arancel)) / cuotas;
  for (c = 0; c < cuotas; c++) {
    pago_comercio =
      pago_comercio +
      cuota_sin_arancel /
        ((1 + (dias_primer / dias_ano) * tna) *
          Math.pow(1 + (dias_mes / dias_ano) * tna, c));
  }
  var coeficiente_sin_iva = (precio * (1 - arancel)) / pago_comercio;
  var tasa_directa = 1 - arancel - (1 - arancel) / coeficiente_sin_iva;
  var coeficiente_con_iva = 100 / (1 - tasa_directa * (1 + iva)) / 100;
  var precio_total_financiado = precio * coeficiente_con_iva;
  var descuento_financ_otorgante = precio_total_financiado * tasa_directa;
  var cuota_con_iva = (precio * coeficiente_con_iva) / cuotas;
  var cuota_financiada = precio_total_financiado / cuotas;

  // CFT
  var cft_array = [];
  cft_array.push({ Date: 0, Flow: -1 * precio });
  for (c = 1; c <= cuotas; c++) {
    var d = c == 1 ? dias_primer : dias_mes * c;
    cft_array.push({ Date: d, Flow: cuota_con_iva });
  }
  var cft = XIRR(cft_array);

  // TEA
  var tea_array = [];
  tea_array.push({
    Date: 0,
    Flow: -1 * (precio_total_financiado - descuento_financ_otorgante),
  });
  for (c = 1; c <= cuotas; c++) {
    var d = c == 1 ? dias_primer : dias_mes * c;
    tea_array.push({ Date: d, Flow: cuota_financiada });
  }
  var tea = XIRR(tea_array);

  var coeficiente = coeficiente_con_iva;
  var valor_total = precio * coeficiente;
  var valor_cuota = (precio * coeficiente) / cuotas;

  $('#valQuote').text('$' + formatMoney(valor_cuota.toFixed(2)));
}

$(document).ready(function () {
  $('#option1').click(function () {
    calcular();
    $('#numQuotes').text($(this).val());
  });
  $('#option2').click(function () {
    calcular();
    $('#numQuotes').text($(this).val());
  });
  $('#option3').click(function () {
    calcular();
    $('#numQuotes').text($(this).val());
  });
  $('#option4').click(function () {
    calcular();
    $('#numQuotes').text($(this).val());
  });
  $('#option5').click(function () {
    calcular();
    $('#numQuotes').text($(this).val());
  });

  $.validator.addMethod(
    'filesize',
    function (value, element, param) {
      return this.optional(element) || element.files[0].size <= param;
    },
    'File size must be less than {0}'
  );

  $('#send1').click(function () {
    if (
      $('#name').is(':valid') &&
      $('#phone').is(':valid') &&
      $('#email').is(':valid')
    ) {
      // $.get('/validemail', { email: $('#email').val() }, function (d) {
      //   if (d == 'true') {
      //     $('#step1').toggle('slide');
      //     $('#step2').toggle('slide');
      //     $('#errorEmail').hide('slow');

      //     $('#loan').validate({
      //       rules: {
      //         dni1: { filesize: 10 * 1024 * 1024, required: true },
      //         dni2: { filesize: 10 * 1024 * 1024, required: true },
      //         cuit: { required: true },
      //         banco: { required: true },
      //         tipoCuenta: { required: true },
      //         cbu: { required: true },
      //       },
      //       messages: {
      //         dni1: {
      //           filesize: 'Tama\u00F1o m\u00E1ximo de la imagen son 10 MB',
      //         },
      //         dni2: {
      //           filesize: 'Tama\u00F1o m\u00E1ximo de la imagen son 10 MB',
      //         },
      //       },
      //     });
      //   } else {
      //     $('#errorEmail').show('slow');
      //   }
      // });
      var datos = {
        name: $('#name').val(),
        lastname: $('#lastname').val(),
        phone: $('#phone').val(),
        email: $('#email').val(),
      };

      alert(JSON.stringify(datos));

      return false;
    }
  });
  $('#send2').click(function () {
    //
    //        if($("#cuit").is(':valid') && $("#banco").is(':valid') && $("#tipoCuenta").is(':valid')
    //                && $("#cbu").is(":valid") && $("#dni1").is(":valid") && $("#dni2").is(":valid")){
    //            return true;
    //        }
    //
    //       // return false;
  });

  calcular();
});
