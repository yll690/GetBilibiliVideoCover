function getVideoCover(info, tab) {
	chrome.tabs.sendMessage(tab.id, {}, {}, function (response) {
		if (!response) {
			alert("response未定义，检查广告屏蔽软件是否拦截了脚本\n" +
				"或者在github上反馈问题：\n"+
				"https://github.com/akimusume/GetBilibiliVideoCover/")
			return;
		}
		if (response.coverImageURL)
			chrome.tabs.create({
				"url": response.coverImageURL
			});
		else
			alert("没有找到封面!可能由以下原因导致：\n" +
				"1、此视频不存在。\n" +
				"2、url后有#replyxxx等多余部分，请删掉再试\n" +
				"3、本插件出了点问题。\n" +
				"4、bilibili更改了封面链接的写法。\n" +
				"如有疑问，可在github上反馈问题：\n"+
				"https://github.com/akimusume/GetBilibiliVideoCover/");
	});
}
var menu = chrome.contextMenus.create({
	"title": "获取视频封面",
	"documentUrlPatterns": ["*://www.bilibili.com/video/av*"],
	"onclick": getVideoCover
});
