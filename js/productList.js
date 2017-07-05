"use strict";
var searchId = getQueryStringArge();
var pageid =parseInt(searchId.pageid) || 1;
$.ajax({
    url:"http://182.254.146.100:3000/api/getcategorybyid?categoryid="+searchId.categoryid,
    type:"get",
    dataType:"json",
    success:function(data){
        $("#product-title .breadcrumb li:nth-child(3)").html(data.result[0].category); 
        console.log(data);
    }
});
$.ajax({
    url:'http://182.254.146.100:3000/api/getproductlist?categoryid='+searchId.categoryid+'&pageid='+pageid,
    type:"get",
    dataType:"json",
    success:function(data){
        var html = template("product_data",data);
        $("#product-list").html(html);
        var pages = Math.ceil(data.totalCount / data.pagesize);
        console.log(pageid)

        console.log((2<pages)?(pageid+1):pages)
        //分页
    // 上一页  设置a标签的href链接地址
        var prev_href = "productList.html?categoryid="+searchId.categoryid+"&pageid="+(pageid-1>1?pageid-1:1);
         var next_href =  "productList.html?categoryid="+searchId.categoryid+"&pageid="+(pageid+1<pages?(pageid+1):pages);//3
        $("#pagination .prev").attr("href",prev_href);
        $("#pagination .next").attr("href",next_href);
        var one_href = "productList.html?categoryid="+searchId.categoryid+"&pageid="+(pageid-1>1?pageid-1:1);
        // var two_href = "productList.html?categoryid="+searchId.categoryid+"&pageid="+(pageid-1>1?pageid-1:1);
         var two_href =  "productList.html?categoryid="+searchId.categoryid+"&pageid="+(pageid+1<pages?(pageid+1):pages);//3
         $("#pagination .one").attr("href",one_href);
        $("#pagination .two").attr("href",two_href);
        // $("#pagination .three").attr("href",three_href);
    }
});


//?categoryid=112&pageid=1
function getQueryStringArge(){
    //categoryid=112&pageid=1
    var qs = location.search.length > 1?location.search.substr(1):"";
    //[categoryid=112,pageid=1]
    console.log(qs);
    var items = qs.length > 1?qs.split("&"):[];
    var obj={},key,value,item;
    for ( var i = 0;i<items.length;i++ ){
        item = items[i].split("=");//[categoryid,112]
        key = item[0];
        value = item[1];
        obj[key] = value;
    }
    return obj;
}