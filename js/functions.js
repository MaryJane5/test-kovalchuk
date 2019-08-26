$(document).ready(function() {

    $(".panel-navigation__btn").click(function() {
        $(".panel-navigation").toggleClass("show");
    });

    $(".btn-show-panel-content").click(function() {
        $(".panel-content").toggleClass("show-panel");
    });

    $(".notificatiov-btn").click(function() {
        $(".notification-popup").toggleClass("show-popup");
    });

});