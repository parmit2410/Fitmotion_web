wow = new WOW(
    {
    boxClass:     'wow', 
    animateClass: 'animated',
    offset:       100
    }
    );
    wow.init();




// ---------------------------- footer open box ----------------------------------------
$(".footer_open_arrow").click(function(){
    $(".footer_open_arrow").toggleClass("active");
    $(".footer_option").toggleClass("show");
});

//----------------------------- call open box ------------------------------------------
$(".call_img").click(function() {
    $(".call_img").toggleClass("active");
    $(".call_open_box").toggleClass("active");
});
$(".close_btn").click(function() {
    $(".call_img").removeClass("active");
    $(".call_open_box").removeClass("active");
});
// -------------------------------------------------------------------------
let menutoggle = document.querySelector('.toggle');
                menutoggle.onclick = function(){
                    menutoggle.classList.toggle('active')
  }
    //Menu toggle
    $(".toggle").click(function() {
        $(this).toggleClass('menu-close');
    });

    // Menu Js
    $(".toggle").click(function(){
        $(".menu_nav_block").toggleClass("open");
        $("body, html").toggleClass("cm-overflow");
    });

    // // footer-fixed menu
    // $(".footer-fixed-trigger").click(function(){
    //     $(".footer-fixed-trigger").toggleClass("active");
    //     $(".footer-fixed-icon").toggleClass("show");
    // });

    // // Call Click Ja
    // $('.call_block_effect').click(function(){
    //     $(this).toggleClass('this_call_active');
    //     $('.call_datels_box').toggleClass('this_call_active');
    // });
    // $('.close-popup-btn').click(function(){
    //     $('.call_block_effect').removeClass('this_call_active');
    //     $('.call_datels_box').removeClass('this_call_active');
    // });

    