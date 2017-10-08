/**
 * Created by lixinjie on 2017/10/08.
 */
// 给页面标题 .header h1 添加 letter-spacing
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
// 菜单
$("#menuButton").click(function(e){
    $("#navList").slideToggle(400);
    e.stopPropagation();
});
$("#navList").click(function (e) {
    e.stopPropagation();
});
$(document).click(function () {
    $("#navList").slideUp(400);
});