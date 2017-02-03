chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	var coverImage=document.getElementsByClassName("cover_image");
	if(coverImage.length!=0)
		sendResponse({coverImageURL:coverImage[0].currentSrc});
	else
		sendResponse({coverImageURL:""});
});