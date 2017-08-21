function changeTab(obj) {
	$(obj).addClass("activeNavBtn");
	$(obj).parent().siblings().children().removeClass("activeNavBtn");
	if(obj.id == "overViewBtn") {
		$(".overViewArea").removeClass("hide");
		$(".artifactsArea").addClass("hide");
	}
	if(obj.id == "artifactsBtn") {
		$(".overViewArea").addClass("hide");
		$(".artifactsArea").removeClass("hide");
	}
}

$("tbody tr").click(function(e) {
	$(this).children().addClass("selectedRow");
	$(this).siblings().children().removeClass("selectedRow");
});