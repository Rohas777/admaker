const answers = [
    "<p>Руководитель проекта по продвижению и персональный менеджер всегда на связи</p><p>Руководитель проекта по продвижению и персональный менеджер всегда на связи</p><p>Руководитель проекта по продвижению и персональный менеджер всегда на связи</p>",
    "<p>Руководитель проекта по продвижению и персональный менеджер всегда на связи</p><p>Руководитель проекта по продвижению и персональный менеджер всегда на связи</p><p>Руководитель проекта по продвижению и персональный менеджер всегда на связи</p><p>Руководитель проекта по продвижению и персональный менеджер всегда на связи</p><p>Руководитель проекта по продвижению и персональный менеджер всегда на связи</p><p>Руководитель проекта по продвижению и персональный менеджер всегда на связи</p>",
    "<p>Руководитель проекта по продвижению и персональный менеджер всегда на связи</p><p>Руководитель проекта по продвижению и персональный менеджер всегда на связи</p><p>Руководитель проекта по продвижению и персональный менеджер всегда на связи</p>",
    "<p>Руководитель проекта по продвижению и персональный менеджер всегда на связи</p>",
];

$(document).ready(function () {
    const popup = document.querySelector(".popup"); //Всплывающее окно
    const openPopupButton = document.querySelector(".open-popup"); //Кнопка открытия попапа
    const closePopupButton = document.querySelector(".popup__button-close"); //Кнопка закрытия попапа

    // Открытие и закрытие попапа
    openPopupButton.addEventListener("click", () => {
        popup.classList.add("popup_opened");
    });

    closePopupButton.addEventListener("click", () => {
        popup.classList.remove("popup_opened");
    });

    const offerCategoriesSwiper = new Swiper(
        ".intro__block-years-list-block-swiper",
        {
            loop: true,
            autoplay: {
                delay: 5000,
            },
        }
    );

    $(".horizontail-accordeon").click(function () {
        if ($(this).hasClass("active")) return;

        $(".horizontail-accordeon").removeClass("active");
        $(this).addClass("active");
    });

    const growthSwiper = new Swiper(".growth__cards-block-main", {
        slidesPerView: 4,
        loop: true,
        spaceBetween: 30,
        // autoplay: {
        //     delay: 5000,
        // },
        navigation: {
            nextEl: ".growth__swiper-navigation .swiper-button-next",
            prevEl: ".growth__swiper-navigation .swiper-button-prev",
        },
        pagination: {
            el: ".growth__cards-block-main .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 50,
            },
            390: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            784: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
    const tariffsSwiper = new Swiper(".growth__tariffs-block", {
        spaceBetween: 50,
        loop: true,
        navigation: {
            prevEl: ".tariffs__swiper-navigation .swiper-button-prev",
            nextEl: ".tariffs__swiper-navigation .swiper-button-next",
        },
        pagination: {
            el: ".tariffs__swiper-container .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            472: {
                slidesPerView: 4,
            },
        },
    });
    const reviewsSwiper = new Swiper(".reviews__slider", {
        spaceBetween: 50,
        loop: true,
        navigation: {
            prevEl: ".reviews .swiper-button-prev",
            nextEl: ".reviews .swiper-button-next",
        },
    });

    $(".feed-back__question-item").click(function (e) {
        e.preventDefault();
        if ($(this).hasClass("active")) return;
        const index = $(this).index();

        if ($(".feed-back-quest-answ").hasClass("form-opened")) {
            $(".feed-back-quest-answ").removeClass("form-opened");
            $(".feed-back__answer-form").css("flexGrow", 0).slideUp(400);
            setTimeout(function () {
                $(".feed-back__answer-content")
                    .slideDown(400)
                    .delay(400)
                    .animate(
                        {
                            flexGrow: 1,
                        },
                        400
                    );
            }, 400);
        }

        $(
            ".feed-back__question-item, .feed-back__question-another"
        ).removeClass("active");
        $(this).addClass("active");
        $(".feed-back__answer-text").slideUp(400);
        setTimeout(function () {
            $(".feed-back__answer-text").html(answers[index]).slideDown(400);
        }, 400);
    });

    $(".feed-back__question-another").click(function (e) {
        e.preventDefault();
        if ($(this).hasClass("active")) return;

        $(".feed-back__question-item").removeClass("active");
        $(this).addClass("active");

        $(".feed-back-quest-answ").addClass("form-opened");
        $(".feed-back__answer-content").css("flexGrow", 0).slideUp(400);
        setTimeout(function () {
            $(".feed-back__answer-form").slideDown(400).animate({
                flexGrow: 1,
            });
        }, 400);
    });
});

// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel({
//     items: 1,
//     loop: true,
//     margin: 10,
//     autoplay: true,
//     autoplayTimeout: 4000,
//     autoplayHoverPause: true
//   });
// });

// const swiper = new swiper('.intro__block-slider', {
// Optional parameters
// loop: true,

// If we need pagination
// pagination: {
//   el: '.intro__block-slider .swiper-pagination',
// },

// Navigation arrows
//   navigation: {
//     nextEl: '.intro__block-slider .swiper-button-next',
//     prevEl: '.intro__block-slider .swiper-button-prev',
//   },
// });
