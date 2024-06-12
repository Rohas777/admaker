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
            540: {
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
        const index = $(this).index() ? $(this).index() / 2 : $(this).index();
        console.log(index);

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
        $(".feed-back__question-answer-mobile").slideUp(400);
        $(".feed-back__answer-text").slideUp(400);
        $(".feed-back__question-form-mobile").slideUp(400);
        $(this).next(".feed-back__question-answer-mobile").slideDown(400);
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
        $(".feed-back__question-answer-mobile").slideUp(400);
        $(".feed-back__question-form-mobile").slideDown(400);
        setTimeout(function () {
            $(".feed-back__answer-form").slideDown(400).animate({
                flexGrow: 1,
            });
        }, 400);
    });

    function openQuizMessage(message) {
        const quizMessage = $(".conversion .message");
        quizMessage
            .text(
                "Вам необходимо ответить на все вопросы, чтобы получить подарок."
            )
            .slideDown(400);
        $(".conversion__text-button-block").animate(
            {
                paddingBottom: 80,
            },
            400
        );
    }
    function closeQuizMessage() {
        const quizMessage = $(".conversion .message");
        quizMessage.text("").slideUp(400);
        $(".conversion__text-button-block").animate(
            {
                paddingBottom: 0,
            },
            400
        );
    }
    $(".conversion__question")
        .not(".conversion__question_end")
        .each(function () {
            const circle = $("<div></div>").addClass(
                "conversion__form-circules-item"
            );
            $(".conversion__form-circules").append(circle);
        });
    $(".conversion__total").text(
        $(".conversion__question").not(".conversion__question_end").length
    );
    $(".conversion__questions span").text("7 вопросов");

    $(".conversion__btn").click(function () {
        const questionContainer = $(this).closest(".conversion__question");

        if (questionContainer.hasClass("active")) return;

        closeQuizMessage();

        $(".conversion__question")
            .not(questionContainer)
            .removeClass("active")
            .slideUp(400);

        questionContainer.addClass("active");
        questionContainer.find(".conversion__answers").slideDown(400);

        $(".conversion__question")
            .not(questionContainer)
            .find(".conversion__close")
            .fadeOut(400);
        $(".conversion__question")
            .not(questionContainer)
            .find(".conversion__open")
            .fadeIn(400);

        questionContainer.find(".conversion__open").fadeOut(400);
        questionContainer.find(".conversion__close").fadeIn(400);

        $(".conversion__form-inputs").animate({
            height: questionContainer
                .find(".conversion__answers")
                .innerHeight(),
        });
    });

    $(".conversion__close").click(function () {
        const questionContainer = $(this).closest(".conversion__question");

        if (!questionContainer.hasClass("active")) return;

        $(".conversion__question").slice(4).slideUp(400);
        $(".conversion__question").slice(0, 4).slideDown(400);

        questionContainer.find(".conversion__answers").slideUp(400);

        questionContainer.find(".conversion__open").fadeIn(400);
        questionContainer.find(".conversion__close").fadeOut(400);

        setTimeout(function () {
            questionContainer.removeClass("active");
        }, 200);

        $(".conversion__form-inputs").animate({
            height: $(".conversion__form").innerHeight(),
        });
    });

    $(".conversion__answers label").click(function () {
        const questionContainer = $(this).closest(".conversion__question");
        const questionsCount = $(".conversion__question").not(
            ".conversion__question_end"
        ).length;
        const questionIndex = questionContainer.index();
        closeQuizMessage();

        questionContainer.addClass("checked");
        $(".conversion__form-circules-item")
            .eq(questionIndex)
            .addClass("checked");
        $(".conversion__current").text(
            $(".conversion__question.checked").length
        );
        const questionsLeft =
            $(".conversion__question").not(".conversion__question_end").length -
            $(".conversion__question.checked").length;

        if (questionsLeft) {
            const questionsLeftStr = `${questionsLeft} ${
                questionsLeft > 4
                    ? "вопросов"
                    : questionsLeft > 1
                    ? "вопроса"
                    : "вопрос"
            }`;
            $(".conversion__questions span").text(questionsLeftStr);
        } else {
            $(".conversion__questions").fadeOut(400);
        }

        if ($(".conversion__question.checked").length === questionsCount) {
            questionContainer.addClass("checked");
            $(".conversion__form").addClass("full-checked");
        }
    });

    $(".conversion__next").click(function (e) {
        e.preventDefault();
        const questionContainer = $(this).closest(".conversion__question");
        const nextQuestionContainer = questionContainer.next(
            ".conversion__question"
        );
        const questionsCount = $(".conversion__question").not(
            ".conversion__question_end"
        ).length;
        if (
            !$(".conversion__form").hasClass("full-checked") &&
            $(".conversion__next").index(this) + 1 === questionsCount
        ) {
            return;
        }

        closeQuizMessage();
        nextQuestionContainer
            .slideDown(400)
            .addClass("active")
            .find(".conversion__answers")
            .slideDown(400);

        questionContainer.find(".conversion__answers").slideUp(400);
        questionContainer.removeClass("active").slideUp(400);

        nextQuestionContainer.find(".conversion__close").fadeIn(400);
        nextQuestionContainer.find(".conversion__open").fadeOut(400);

        questionContainer.find(".conversion__open").fadeIn(400);
        questionContainer.find(".conversion__close").fadeOut(400);

        $(".conversion__form-inputs").animate({
            height: nextQuestionContainer
                .find(".conversion__answers")
                .innerHeight(),
        });
    });

    $(".conversion__button-start").click(function () {
        const questionContainer = $(".conversion__question").eq(0);

        if ($(".conversion__question").hasClass("active")) return;
        closeQuizMessage();
        $(".conversion__question")
            .not(questionContainer)
            .removeClass("active")
            .slideUp(400);

        questionContainer.addClass("active");
        questionContainer.find(".conversion__answers").slideDown(400);

        $(".conversion__question")
            .not(questionContainer)
            .find(".conversion__close")
            .fadeOut(400);
        $(".conversion__question")
            .not(questionContainer)
            .find(".conversion__open")
            .fadeIn(400);

        questionContainer.find(".conversion__open").fadeOut(400);
        questionContainer.find(".conversion__close").fadeIn(400);

        $(".conversion__form-inputs").animate({
            height: questionContainer
                .find(".conversion__answers")
                .innerHeight(),
        });

        $("body, html").animate(
            {
                scrollTop: $(".conversion__form").offset().top - 100,
            },
            500
        );
    });

    $(".conversion__button").click(function () {
        if (!$(".conversion__form").hasClass("full-checked")) {
            openQuizMessage(
                "Вам необходимо ответить на все вопросы, чтобы получить подарок."
            );
            return;
        }

        const presentationUrl = ""; // Получать из ответа на ajax-форму

        window.open(presentationUrl, "_blank");
    });

    function openPopup(popup) {
        popup.fadeIn(400);
        $(".overlay").fadeIn(400);
        $("html, body").addClass("hidden");
    }
    function closePopup(popup) {
        popup.fadeOut(400);
        $(".overlay").fadeOut(400);
        $("html, body").removeClass("hidden");
    }

    $(".service-popup-link").click(function (e) {
        e.preventDefault();

        openPopup($(".service-popup"));
    });

    $(".service-popup__close").click(function () {
        closePopup($(".service-popup"));
    });
    $(".callback-popup-link").click(function (e) {
        e.preventDefault();

        openPopup($(".callback-popup"));
    });

    $(".callback-popup__close").click(function () {
        closePopup($(".callback-popup"));
    });
});
