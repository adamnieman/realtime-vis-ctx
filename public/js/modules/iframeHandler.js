function iframeHandler (sb) {

	var iframe = document.getElementById("iframe");
	var base_url = "http://realtime.realworldvisuals.com"
	iframe.src = "";

	function INIT () {
		sb.listen({
			listenFor: ["input-submitted"],
			moduleID: this.moduleID,
			moduleFunction: "updateIframe"
		})
	}

	function UPDATEIFRAME (d) {
		var url = base_url+"?";

		for (var propt in d) {
			url+=propt;
			url+="=";
			url+=d[propt];
			url+="&";
		}

		iframe.src = url;
	}
	
	function DESTROY () {
		sb.unlisten(this.moduleID)
		iframe, base_url = null;
	}

	return {
        init : INIT,
        updateIframe: UPDATEIFRAME,
        destroy : DESTROY,
    };
}
