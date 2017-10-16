/**
 * Created by lixinjie on 2017/10/08.
 */
// 给页面标题 #nav h1 添加 letter-spacing
var h1Len = $("#nav h1").text().length;
if (h1Len == 2) {
    $(".header h1").css({
        letterSpacing: "0.7rem",
        paddingLeft: "0.7rem"
    });
}
if (h1Len == 3) {
    $(".header h1").css({
        letterSpacing: "0.4rem",
        paddingLeft: "0.4rem"
    });
}
if (h1Len > 4) {
    $(".header h1").css({
        fontSize: "0.8rem",
        paddingLeft: "2.5rem",
        paddingRight: "2.5rem",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    });
}

// 手机端菜单的显示与隐藏
$("#menuButton").click(function(e){
    $("#navList").slideToggle(400);
    e.stopPropagation();
    $("#navList").click(function (e) {
        e.stopPropagation();
    });
    $(document).click(function () {
        $("#navList").slideUp(400);
    });
});

$(function () {
    displayMenu();
});
$(window).resize(function () {
    displayMenu();
});
// 菜单显示与隐藏
function displayMenu() {
    var $width = $(window).outerWidth();
    if (!($width < 768)) {
        $("#navList").show();
    }else {
        $("#navList").hide();
    }
}

// 为文章中的图片设置一些限制
if ($("article img[width]")) {
    $("article img").removeAttr("width");
}
if ($("article img[height]")) {
    $("article img").removeAttr("height");
}
$("article img").css({
    display: "block",
    maxWidth: "100%",
    height: "auto",
    margin: "15px auto"
});

/*分享*/
window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"1","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"24"},"share":{},"image":{"viewList":["qzone","tsina","tqq","weixin","renren"],"viewText":"分享到：","viewSize":"24"},"selectShare":{"bdContainerClass":null,"bdSelectMiniList":["qzone","tsina","tqq","weixin","renren"]}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];