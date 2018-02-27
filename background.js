function getVideoCover(info, tab)
{
    chrome.tabs.sendMessage(tab.id,{},function(response) {
    	if(response.coverImageURL)
    		chrome.tabs.create({"url":response.coverImageURL});
    	else
			alert("没有找到封面!可能由以下原因导致：\n"+
			"1、此视频不存在。\n"+
			"2、url后有#replyxxx等多余部分，请删掉再试\n"+
			"3、本插件出了点问题。\n"+
			"4、bilibili更改了封面链接的写法。\n"+
			"如有疑问，可在github上与我交流：https://github.com/akimusume/GetBilibiliVideoCover/");  
	}); 
}
var menu=chrome.contextMenus.create({
	"title":"获取视频封面",
	"documentUrlPatterns":["*://www.bilibili.com/video/av*"],
	"onclick":getVideoCover
});
