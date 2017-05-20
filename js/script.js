function resizePanels() {
    var activeNum = $('.active').length;
    $(".panels").width(($(window).width() / activeNum) - 14);
}

resizePanels();

$(".toggleButton").hover(function(){
    $(this).addClass("highlight");
}, function(){
    $(this).removeClass("highlight");
});

$(".toggleButton").click(function(){
    $(this).toggleClass("active");
    var panel = $(this).attr("id") + "Area";
    $("#" + panel).toggleClass("hidden");
    resizePanels();
});

$(".panels").height($(window).height() - $("nav").height() - $("#menu div").height());

$("textarea").keyup(function() {
    $("iframe").contents().find("html").html("<html><head><style>" + $("#cssArea").val() + "</style></head><body>" + $("#htmlArea").val() + "</body>"); document.getElementById("outputArea").contentWindow.eval($("#jsArea").val());
});

$("textarea").keydown(function(e) {
    if(e.keyCode === 9) {
        var start = this.selectionStart;
        var end = this.selectionEnd;

        var $this = $(this);
        var value = $this.val();

        $this.val(value.substring(0, start) + "\t" + value.substring(end));

        this.selectionStart = this.selectionEnd = start + 1;

        e.preventDefault();
    }
});

$(window).resize(function() {
   resizePanels(); 
});