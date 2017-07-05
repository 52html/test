"use strict";
$.ajax({
    url: "http://182.254.146.100:3000/api/getcategorytitle",
    type: "get",
    dataType: "json",
    success: function (data) {
        var html = template("panel-list", data);
        $("#product-list .panel-group").html(html);
        $("#product-list .panel-group .panel-default a").click(function () {
            var titleid = $(this).data("titleid");
            var $row = $(this).parent().parent().siblings().find(".panel-body .row");
            console.log(titleid);
            if ($row.children().length == 0) {
                $.ajax({
                    url: "http://182.254.146.100:3000/api/getcategory?titleid=" + titleid,
                    type: "get",
                    dataType: "json",
                    success: function (data) {
                        var html = template("columns", data);
                        // $("#product-list .panel-group .panel-default .panel-body .row").html(html);
                        $row.html(html);
                    }
                })
            }
        })

    },
    error: function () {

    }
});