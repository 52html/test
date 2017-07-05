"use strict";
$.ajax({
    url: "http://182.254.146.100:3000/api/getindexmenu",
    type: "get",
    dataType: "json",
    success: function (data) {
        var html = template("nav_list", data);
        $("#nav_menu .row").html(html);
        // 下拉菜单
        $("#nav_menu .row>div:nth-last-child(-n+4)").hide();
        $("#nav_menu .row>div:nth-child(8)").click(function () {
            $("#nav_menu .row>div:nth-last-child(-n+4)").toggle(200);
        })
    },
    error: function () {

    }
});
$.ajax({
    url: "http://182.254.146.100:3000/api/getmoneyctrl",
    type: "get",
    dataType: "json",
    success: function (data) {
        var html = template("low_price_list", data);
        $("#product_list .list_container").html(html);
    },
    error: function () {

    }
})