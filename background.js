function getVideoCover(info, tab)
{
    chrome.tabs.sendMessage(tab.id,{},function(response) {
    	if(response.coverImageURL)
    		chrome.tabs.create({"url":response.coverImageURL});
    	else
			alert("没有找到封面!可能由以下原因导致：\n1、此视频不存在。\n2、此页面并不是标准的视频页面。\n3、本插件出了点问题。\n4、bilibili更改了封面链接的写法。\n对于以上第3、4种情况，可邮件联系我：akibayashi@qq.com");  
	}); 
}
var menu=chrome.contextMenus.create({
	"title":"获取视频封面",
	"documentUrlPatterns":["*://www.bilibili.com/video/av*"],
	"onclick":getVideoCover
});