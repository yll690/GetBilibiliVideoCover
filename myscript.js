chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	//console.log("onMessage");
	metas = document.getElementsByTagName('meta');
	var imageurl;
	if (metas[9].getAttribute("itemprop") == "image")
		imageurl = metas[9].content;
	else
		for (var i = 0; i < matas.length; i++)
			if (metas[i].getAttribute("itemprop") == "image") {
				imageurl = metas[i].content;
				break;
			}
	console.log(imageurl);
	sendResponse({
		coverImageURL: imageurl
	})
});
