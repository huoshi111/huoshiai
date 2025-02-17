const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.querySelector("button[onclick='sendMessage()']"); // 获取发送按钮

let isTyping = false; // 添加一个标志变量，用于标记AI是否正在回复
    // 关键词和AI回复
    const responses = {

// 常用的招呼
        "你好": ["你好！很高兴见到你。请问有什么可以帮助您的吗?￴ ￴￴ ￴ ￴￴ ￴ ￴ ￴￴￴o(≧ω≦)o", "嘿！有什么需要帮助的事情吗￴ ￴￴ ￴ ￴￴ ￴ ￴ ￴￴￴o(≧ω≦)o", "嗨嗨！今天过得如何？￴ ￴￴ ￴ ￴￴ ￴ ￴ ￴￴￴o(≧ω≦)o", "你好呀！需要帮助吗？ ￴￴ ￴ ￴￴ ￴ ￴ ￴￴￴ ￴￴ ￴ ￴￴ ￴ ￴ ￴￴￴o(≧ω≦)o"],
        "介绍": ["你好呀！我是火狮智能助手，一个专注于为你提供帮助和服务的人工智能。我擅长处理各种问题，无论是学习、工作还是生活中的小烦恼，都可以来找我哦。我随时都在这里，希望能成为你的好帮手！ 😊", "你好！我是火狮智能助手，专注于为你提供高效、准确的帮助。无论是学习、工作还是生活中的问题，我都会尽力为你解答。随时召唤我，我在这里等着为你服务！",  "嘿嘿，我是火狮智能助手，一个会聊天、会解决问题的神奇存在。别看我是个AI，但我可聪明啦！有什么难题尽管扔过来，我帮你搞定它！咱们一起愉快地玩耍吧！🎉"],
    "嗨": ["嗨~ 很高兴见到你。请问有什么可以帮助您的吗?", "嘿！有什么需要帮助的事情吗", "嗨嗨！今天过得如何？", "嗨~ 需要帮助吗？"],
    "您好": ["您好！很高兴为您服务，有什么可以帮您的吗？", "您好呀！今天过得怎么样呢？", "您好！有什么问题可以问我哦~"],
    "嘿": ["嘿！怎么啦？", "嘿嘿，有什么好玩的事情吗？", "嘿，需要帮忙吗？"],
    "哈喽": ["哈喽！很高兴遇见你，有什么可以帮你的吗？", "哈喽，今天心情不错吧？", "哈喽，有什么问题尽管问我哦！"],

    "你是谁": [
        "我是火狮智能助手，一个专注于为你提供帮助和服务的人工智能。无论是学习、工作还是生活中的问题，我都会尽力为你解答。很高兴认识你！😊",
        "嗨！我是火狮智能助手，一个会聊天、会解决问题的AI。别看我只是一个程序，但我可以帮你解决很多难题哦！有什么需要尽管说吧！🎉",
        "我是火狮智能助手，一个随时准备帮助你的AI伙伴。无论是答疑解惑还是闲聊，我都在这里陪着你。希望我们能成为好朋友！🤗",
        "我是火狮智能助手，一个智能又贴心的AI。我的目标是让你的生活更轻松、更有趣。很高兴能和你聊天！😊",
        "我是火狮智能助手，一个专注于帮助你的AI。无论你需要什么，我都会尽力做到最好。希望我能成为你的得力助手！￴ ￴￴ ￴ ￴ ￴￴(＾▽＾)"
    ],

    "你谁": [
        "我是火狮智能助手，一个专注于为你提供帮助和服务的人工智能。无论是学习、工作还是生活中的问题，我都会尽力为你解答。很高兴认识你！😊",
        "嗨！我是火狮智能助手，一个会聊天、会解决问题的AI。别看我只是一个程序，但我可以帮你解决很多难题哦！有什么需要尽管说吧！🎉",
        "我是火狮智能助手，一个随时准备帮助你的AI伙伴。无论是答疑解惑还是闲聊，我都在这里陪着你。希望我们能成为好朋友！🤗",
        "我是火狮智能助手，一个智能又贴心的AI。我的目标是让你的生活更轻松、更有趣。很高兴能和你聊天！😊",
        "我是火狮智能助手，一个专注于帮助你的AI。无论你需要什么，我都会尽力做到最好。希望我能成为你的得力助手！￴ ￴￴ ￴ ￴ ￴￴(＾▽＾)"
    ],

    "联系": [
    "您好，如需联系开发者，请前往抖音或哔哩哔哩搜索‘火狮桃星’。期待与您探讨技术与创意，共同探索更多可能。 ￴￴ ￴  ￴￴ ￴  (￣▽￣)ノ 以下是作者抖音的链接￴：￴ ￴ ￴￴ ￴ ￴ ￴￴https://www.douyin.com/user/MS4wLjABAAAACijCHXWkdAit63xNKQJqV1v_SikFaSv361RJzIktzAX15pBKLOT65qZe7-A-wpHX?from_tab_name=main  ￴￴ ￴ ￴￴ ￴ ￴ ￴￴ 复制粘贴即可",
    "若需与开发者取得联系，敬请在抖音或哔哩哔哩搜索‘火狮桃星’。期待与您携手共进，共享技术与智慧的碰撞。 ￴￴ ￴  ￴￴ ￴  ✨(๑•̀ㅂ•́)و  以下是作者抖音的链接￴：￴ ￴ ￴￴ ￴ ￴ ￴￴https://www.douyin.com/user/MS4wLjABAAAACijCHXWkdAit63xNKQJqV1v_SikFaSv361RJzIktzAX15pBKLOT65qZe7-A-wpHX?from_tab_name=main  ￴￴ ￴ ￴￴ ￴ ￴ ￴￴ 复制粘贴即可",
    "开发者联系方式：可在抖音或哔哩哔哩搜索‘火狮桃星’。如有合作或技术交流需求，欢迎联系！( •̀ ω •́ )✧  ￴￴ ￴  ￴￴ ￴ 以下是作者抖音的链接￴：￴ ￴ ￴￴ ￴ ￴ ￴￴https://www.douyin.com/user/MS4wLjABAAAACijCHXWkdAit63xNKQJqV1v_SikFaSv361RJzIktzAX15pBKLOT65qZe7-A-wpHX?from_tab_name=main  ￴￴ ￴ ￴￴ ￴ ￴ ￴￴ 复制粘贴即可",
    "如需联系开发者，请在抖音或哔哩哔哩搜索‘火狮桃星’。愿与业界同仁深入交流，共享技术创新的乐趣。 (✿◡‿◡)",
    "联系开发者？请前往抖音或哔哩哔哩搜索‘火狮桃星’。期待与您携手前行，共筑更美好的数字世界。 ʕ•ᴥ•ʔ",
    "若有技术交流、合作咨询等需求，可在抖音或哔哩哔哩搜索‘火狮桃星’，开发者将在此与您沟通探讨。 (＾▽＾)"
],

"谢谢": ["不用客气呀，很高兴能帮到你哦~", "没事啦，有问题随时问我哦~", "不客气，希望你过得开心！"],
"感谢": ["不用谢哦，我很乐意帮忙的~", "没事啦，有问题随时找我哦~", "不客气，希望我的回答对你有帮助！"],

"好的": [
    "好的！如果有其他问题，随时告诉我哦~ 😊",
    "好的呀，没问题！需要帮忙的地方尽管说~ (＾▽＾)",
    "好的！很高兴能帮到你，随时找我哦~ (＾▽＾)",
    "好的，明白了！有什么新的问题再联系我吧~",
    "好的呀，祝你一切顺利！有需要再找我哦~ 😊"
],

"好": [
    "很好！如果有其他问题，随时告诉我哦~ 😊",
    "好的呀，没问题！需要帮忙的地方尽管说~ (＾▽＾)",
    "很好！很高兴能帮到你，随时找我哦~ (＾▽＾)",
    "很好，明白了！有什么新的问题再联系我吧~",
    "好的呀，祝你一切顺利！有需要再找我哦~ 😊"
],

// 聊天

"哈": [
  "哈哈哈，你的心情看起来不错呢！😄 是有什么好玩的事情吗？",
  "哈哈，笑一笑，十年少哦！😊 有什么让我也跟着开心的事情吗？",
  "哈哈，看来你心情很好呀！😄 有什么有趣的事情可以和我分享一下吗？",
  "哈哈，我也觉得很好笑呢！😄 你是不是遇到了什么好玩的事情？",
  "哈哈哈，笑容很治愈哦！😊 有什么让我也跟着开心的事情吗？",
  "哈哈，你这是在逗我笑吗？😄 我也觉得很开心呢！",
  "哈哈，看来你今天心情很轻松呀！😄 有什么让我也跟着开心的事情吗？",
  "哈哈，笑容很感染人呢！😊 有什么让我也跟着笑的事情吗？",
  "哈哈，你这是在和我分享快乐吗？😄 我也觉得很开心呢！",
  "哈哈，笑容很温暖哦！😊 有什么让我也跟着笑的事情吗？"
],

"嘿嘿": [
    "嘿嘿，你这是在偷偷笑呢，还是有什么小秘密呀？😉",
    "嘿嘿，这种俏皮的笑声让人感觉很温暖呢！😊 有什么开心的事情可以和我分享吗？",
    "嘿嘿，看来你心情不错哦！😄 我也跟着开心起来啦。",
    "嘿嘿，你这是在逗我笑吗？😄 我也觉得很开心呢！",
    "嘿嘿，这种小表情很可爱呢！😊 有什么让我也跟着笑的事情吗？",
    "嘿嘿，你这是在和我分享快乐吗？😄 我也觉得很开心呢！",
    "嘿嘿，这种小表情很有趣呢！😊 有什么好玩的事情可以和我分享吗？",
    "嘿嘿，你这是在偷偷笑呢，还是有什么小秘密呀？😉",
    "嘿嘿，这种小表情很温暖呢！😊 有什么让我也跟着笑的事情吗？",
    "嘿嘿，你这是在和我分享快乐吗？😄 我也觉得很开心呢！"
],

"厉害": [
    "哈哈，过奖啦！😄 我只是尽力而为，希望能帮到你。有什么问题尽管来，我们一起努力！",
    "谢谢你的认可！😊 我会继续努力，帮你解决更多问题。有什么需要我帮忙的，尽管说哦！",
    "哪里哪里，是你的问题很有意思呀！😄 我只是尽力回答而已，我们一起进步哦！",
    "厉害不厉害我不知道，但我知道我很用心！😄 有什么问题，我们一起解决！",
    "哈哈，你这么说我就不好意思啦。😊 其实是你也很厉害呀，能提出这么好的问题！",
    "谢谢你的夸奖！😊 我会继续努力，帮你解决更多问题。有什么需要我帮忙的，尽管说哦！",
    "你这么说，我都有点不好意思了呢！😊 我们一起加油，互相学习吧！",
    "哈哈，你真会逗我开心！😄 我会继续努力，不让你失望哦！有什么问题，尽管问我吧！",
    "谢谢你的夸奖，这让我更有动力了！😊 有什么需要我帮忙的，尽管说哦！",
    "你真会说话，我都觉得有点飘飘然了呢！😄 但我会保持谦虚，继续努力帮你解决问题！"
],

"强": [
    "好的呀！‘强’字在汉语中有多种含义，通常表示力量大、能力强或优越。它还可以表示坚固、有韧性。比如，‘强大’表示力量雄厚，‘坚强’表示意志坚定。在古代，‘强’字还与‘强健’有关，表示身体健壮。这个字在很多成语中也有出现，比如‘强者为尊’，意思是强者占据优势。希望这些解释对你有帮助哦！😊",
    "‘强’字是一个很有趣的汉字呢！它有多种含义，比如强大、坚强、优越等。在古代，‘强’字还与‘强健’有关，表示身体健壮。这个字在很多成语中也有出现，比如‘强者为尊’，意思是强者占据优势。希望这些解释对你有帮助哦！😄",
    "‘强’字在汉语中有多种含义，通常表示力量大、能力强或优越。它还可以表示坚固、有韧性。比如，‘强大’表示力量雄厚，‘坚强’表示意志坚定。这个字在很多成语中也有出现，比如‘强者为尊’，意思是强者占据优势。希望这些解释对你有帮助哦！😊",
    "‘强’字是一个很有趣的汉字呢！它有多种含义，比如强大、坚强、优越等。在古代，‘强’字还与‘强健’有关，表示身体健壮。这个字在很多成语中也有出现，比如‘强者为尊’，意思是强者占据优势。希望这些解释对你有帮助哦！😄",
    "‘强’字在汉语中有多种含义，通常表示力量大、能力强或优越。它还可以表示坚固、有韧性。比如，‘强大’表示力量雄厚，‘坚强’表示意志坚定。这个字在很多成语中也有出现，比如‘强者为尊’，意思是强者占据优势。希望这些解释对你有帮助哦！😊",
    "‘强’字是一个很有趣的汉字呢！它有多种含义，比如强大、坚强、优越等。在古代，‘强’字还与‘强健’有关，表示身体健壮。这个字在很多成语中也有出现，比如‘强者为尊’，意思是强者占据优势。希望这些解释对你有帮助哦！😄",
    "‘强’字在汉语中有多种含义，通常表示力量大、能力强或优越。它还可以表示坚固、有韧性。比如，‘强大’表示力量雄厚，‘坚强’表示意志坚定。这个字在很多成语中也有出现，比如‘强者为尊’，意思是强者占据优势。希望这些解释对你有帮助哦！😊",
    "‘强’字是一个很有趣的汉字呢！它有多种含义，比如强大、坚强、优越等。在古代，‘强’字还与‘强健’有关，表示身体健壮。这个字在很多成语中也有出现，比如‘强者为尊’，意思是强者占据优势。希望这些解释对你有帮助哦！😄",
    "‘强’字在汉语中有多种含义，通常表示力量大、能力强或优越。它还可以表示坚固、有韧性。比如，‘强大’表示力量雄厚，‘坚强’表示意志坚定。这个字在很多成语中也有出现，比如‘强者为尊’，意思是强者占据优势。希望这些解释对你有帮助哦！😊",
    "‘强’字是一个很有趣的汉字呢！它有多种含义，比如强大、坚强、优越等。在古代，‘强’字还与‘强健’有关，表示身体健壮。这个字在很多成语中也有出现，比如‘强者为尊’，意思是强者占据优势。希望这些解释对你有帮助哦！😄"
],

"很强": [
    "过奖啦，‘满招损，谦受益’，我会继续保持谦逊，努力做得更好。😊 有什么问题需要我帮忙吗？",
    "谢谢你的夸奖！‘学如逆水行舟，不进则退’，我会不断学习，争取更上一层楼。😊 有什么可以帮你的吗？",
    "哈哈，你真会说话！‘三人行，必有我师焉’，我还有很多需要学习的地方。😊 有什么问题尽管来，我们一起探讨！",
    "你的认可让我很受鼓舞！‘天行健，君子以自强不息’，我会继续努力，不让你失望。😊 有什么需要我帮忙的，尽管说哦！",
    "谢谢你的夸奖！‘不积跬步，无以至千里’，我会一步一个脚印，不断进步。😊 有什么问题需要我帮忙吗？",
    "哈哈，你太客气啦！‘上善若水，水善利万物而不争’，我会尽力为你提供帮助。😊 有什么问题尽管来，我们一起努力！",
    "你的夸奖让我有点不好意思呢！‘玉不琢，不成器；人不学，不知道’，我会继续努力提升自己。😊 有什么可以帮你的吗？",
    "谢谢你的认可！‘敏而好学，不耻下问’，我会虚心学习，为你提供更好的帮助。😊 有什么问题需要我帮忙吗？",
    "哈哈，你真会说话！‘学而不思则罔，思而不学则殆’，我会继续思考和学习，为你提供更好的服务。😊 有什么问题尽管来，我们一起探讨！",
    "你的认可让我很受鼓舞！‘千里之行，始于足下’，我会从点滴做起，不断进步。😊 有什么需要我帮忙的，尽管说哦！"
],

// 答案

"梗": ["以下是网络上很火的梗；你干嘛 哈嗨哟，小黑子，坤坤，我嘞个骚钢，迪奥，菜就多练，坐下吧，急了，你礼貌吗？，什么是快乐星球，头顶怎么尖尖的-那我问你，cào(这是脏话 建议不要使用)，对不起-人之常情，实则不然，等 这些都是抖音网络里很火和火过的梗。"],

"抖音网页版": [
    "抖音网页版的链接是 [https://www.douyin.com](https://www.douyin.com)，您可以直接点击此链接访问哦~￴￴ ￴  ￴￴ ￴  (￣▽￣)",
    "抖音的网页版可以通过这个链接访问：[https://www.douyin.com](https://www.douyin.com)，祝您使用愉快！￴  ￴￴ ￴ ￴  ￴￴ ￴ (＾▽＾)",
    "抖音网页版的地址是 [https://www.douyin.com](https://www.douyin.com)，点击即可进入抖音的世界哦~￴￴ ￴ ￴  ￴( •̀ ω •́ )✧",
    "抖音网页版的链接是 [https://www.douyin.com](https://www.douyin.com)，快去探索更多有趣的内容吧！￴￴ ￴ ￴  ￴￴ ￴ (＾▽＾)",
    "抖音网页版的地址是 [https://www.douyin.com](https://www.douyin.com)，您可以在这里找到抖音的精彩内容哦！￴￴ ￴ ￴  ￴￴ ￴ (＾▽＾)"
],

"抖音链接": [
    "抖音网页版的链接是 [https://www.douyin.com](https://www.douyin.com)，您可以直接点击此链接访问哦~￴￴ ￴  ￴￴ ￴  (￣▽￣)",
    "抖音的网页版可以通过这个链接访问：[https://www.douyin.com](https://www.douyin.com)，祝您使用愉快！￴  ￴￴ ￴ ￴  ￴￴ ￴ (＾▽＾)",
    "抖音网页版的地址是 [https://www.douyin.com](https://www.douyin.com)，点击即可进入抖音的世界哦~￴￴ ￴ ￴  ￴( •̀ ω •́ )✧",
    "抖音网页版的链接是 [https://www.douyin.com](https://www.douyin.com)，快去探索更多有趣的内容吧！￴￴ ￴ ￴  ￴￴ ￴ (＾▽＾)",
    "抖音网页版的地址是 [https://www.douyin.com](https://www.douyin.com)，您可以在这里找到抖音的精彩内容哦！￴￴ ￴ ￴  ￴￴ ￴ (＾▽＾)"
],

"抖音网页版链接": [
    "抖音网页版的链接是 [https://www.douyin.com](https://www.douyin.com)，您可以直接点击此链接访问哦~￴￴ ￴  ￴￴ ￴  (￣▽￣)",
    "抖音的网页版可以通过这个链接访问：[https://www.douyin.com](https://www.douyin.com)，祝您使用愉快！￴  ￴￴ ￴ ￴  ￴￴ ￴ (＾▽＾)",
    "抖音网页版的地址是 [https://www.douyin.com](https://www.douyin.com)，点击即可进入抖音的世界哦~￴￴ ￴ ￴  ￴( •̀ ω •́ )✧",
    "抖音网页版的链接是 [https://www.douyin.com](https://www.douyin.com)，快去探索更多有趣的内容吧！￴￴ ￴ ￴  ￴￴ ￴ (＾▽＾)",
    "抖音网页版的地址是 [https://www.douyin.com](https://www.douyin.com)，您可以在这里找到抖音的精彩内容哦！￴￴ ￴ ￴  ￴￴ ￴ (＾▽＾)"
],


"抖音": [
    "抖音是一个非常流行的短视频平台，您可以在这里发现各种有趣的内容。如果您想了解更多，可以直接在浏览器中搜索抖音，或者访问抖音的官网哦~￴ ￴  ￴￴ ￴ (＾▽＾)",
    "抖音是一个充满创意和乐趣的短视频社区。您可以在这里找到各种精彩内容，也可以创作自己的视频。试试看吧，说不定会发现很多惊喜哦~￴ ￴  ￴￴ ￴ (＾▽＾)",
    "抖音是一个短视频分享平台，您可以在这里找到很多有趣、好玩的内容。如果您想体验，可以直接在手机上下载抖音APP，或者访问抖音的网页版哦~￴ ￴  ￴￴ ￴  (￣▽￣)ノ",
    "抖音是一个非常受欢迎的短视频平台，您可以在这里找到各种有趣的内容，也可以和朋友分享自己的生活。快去试试吧！￴ ￴  ￴￴ ￴ (＾▽＾)",
    "抖音是一个短视频平台，您可以在这里找到各种有趣的内容，也可以创作自己的视频。如果您想了解更多，可以访问抖音的官网或者下载APP哦~￴ ￴  ￴￴ ￴ (＾▽＾)"
],


"抖音梗": ["以下是网络上很火的梗；你干嘛 哈嗨哟，小黑子，坤坤，我嘞个骚钢，迪奥，菜就多练，坐下吧，急了，你礼貌吗？，什么是快乐星球，头顶怎么尖尖的-那我问你，cào(这是脏话 建议不要使用)，对不起-人之常情，实则不然，等 这些都是抖音网络里很火和火过的梗。"],

"抖音有哪些梗": [
    "抖音上的梗可太多了！比如‘栓Q’、‘芭比Q了’、‘我太难了’这些都很火哦。还有各种有趣的舞蹈挑战和表情包，你可以去抖音上搜索看看，说不定能发现更多好玩的！😊",
    "抖音的梗真的层出不穷呢！像‘栓Q’、‘芭比Q了’、‘我太难了’这些都很流行。还有各种搞笑的配音和创意视频，你可以去抖音上探索一下哦，说不定会发现很多有趣的梗！😄",
    "抖音上有好多好玩的梗哦，比如‘栓Q’、‘芭比Q了’、‘我太难了’等等。这些梗都很有趣，你可以去抖音上搜索看看，说不定会发现更多让你捧腹大笑的内容呢！😂",
    "抖音的梗真的太多了，比如‘栓Q’、‘芭比Q了’、‘我太难了’这些都很火。还有各种创意舞蹈和搞笑配音，你可以去抖音上搜索一下，说不定会发现更多有趣的内容哦！🤗",
    "抖音上有好多有趣的梗哦，比如‘栓Q’、‘芭比Q了’、‘我太难了’等等。这些梗都很流行，你可以去抖音上看看，说不定会发现更多好玩的东西呢！😎"
],

"什么梗": [
    "抖音上的梗可太多了！比如‘栓Q’、‘芭比Q了’、‘我太难了’这些都很火哦。还有各种有趣的舞蹈挑战和表情包，你可以去抖音上搜索看看，说不定能发现更多好玩的！😊",
    "抖音的梗真的层出不穷呢！像‘栓Q’、‘芭比Q了’、‘我太难了’这些都很流行。还有各种搞笑的配音和创意视频，你可以去抖音上探索一下哦，说不定会发现很多有趣的梗！😄",
    "抖音上有好多好玩的梗哦，比如‘栓Q’、‘芭比Q了’、‘我太难了’等等。这些梗都很有趣，你可以去抖音上搜索看看，说不定会发现更多让你捧腹大笑的内容呢！😂",
    "抖音的梗真的太多了，比如‘栓Q’、‘芭比Q了’、‘我太难了’这些都很火。还有各种创意舞蹈和搞笑配音，你可以去抖音上搜索一下，说不定会发现更多有趣的内容哦！🤗",
    "抖音上有好多有趣的梗哦，比如‘栓Q’、‘芭比Q了’、‘我太难了’等等。这些梗都很流行，你可以去抖音上看看，说不定会发现更多好玩的东西呢！😎"
],

"如何反击网络上的键盘侠": [
    "面对键盘侠，最好的反击是保持风度。正如古人所说：‘以眼还眼，世界只会充满盲人。’（甘地）你可以用幽默和智慧化解冲突，而不是以同样的方式回应。比如，当键盘侠无端指责时，你可以微笑着回应：‘看来您今天的心情很有趣，不过我还是更愿意用事实说话。’这样的回答既不失风度，又能表明你的立场。",
    "反击键盘侠，不妨用点文化的力量。你可以引用鲁迅先生的话：‘勇者愤怒，抽刃向更强者；怯者愤怒，却抽刃向更弱者。’面对键盘侠的无端指责，你可以这样回应：‘我欣赏您的热情，但希望您能把这份热情用在更有意义的地方。’这样的回答既优雅又有力，能让他们反思自己的行为。",
    "面对键盘侠，最好的方式是以柔克刚。你可以引用老子《道德经》中的话：‘天下莫柔弱于水，而攻坚强者莫之能胜。’当键盘侠试图挑衅时，你可以温和地说：‘您的观点很独特，但我更愿意用事实和理性来探讨问题。’这样的回答既能展现你的修养，又能避免不必要的冲突。",
    "反击键盘侠，可以用智慧和幽默。比如，当他们无端指责时，你可以回应：‘您的话就像夜空中的星星，虽然亮，但离我很远。’这样的回答既风趣又不失风度，能让他们意识到自己的行为并不值得回应。",
    "面对键盘侠，可以用文化的力量化解冲突。你可以引用泰戈尔的话：‘如果你因失去了太阳而流泪，那么你也将失去群星了。’当键盘侠试图挑衅时，你可以这样回应：‘我更愿意关注那些有意义的事情，而不是纠结于无端的指责。’这样的回答既优雅又能让对方反思。"
],

"欧克": ["好的，有任何问题随时找我，祝你愉快！", "好的，还需要什么帮助吗？", "好的，知道了，如果有其它事情可以随时告诉我！"],

"okay": ["好的，有任何问题随时找我，祝你愉快！", "好的，还需要什么帮助吗？", "好的，知道了，如果有其它事情可以随时告诉我！"],

"Okay": ["好的，有任何问题随时找我，祝你愉快！", "好的，还需要什么帮助吗？", "好的，知道了，如果有其它事情可以随时告诉我！"],

"OKAY": ["好的，有任何问题随时找我，祝你愉快！", "好的，还需要什么帮助吗？", "好的，知道了，如果有其它事情可以随时告诉我！"],

"Ok": ["好的，有任何问题随时找我，祝你愉快！", "好的，还需要什么帮助吗？", "好的，知道了，如果有其它事情可以随时告诉我！"],

"ok": ["好的，有任何问题随时找我，祝你愉快！", "好的，还需要什么帮助吗？", "好的，知道了，如果有其它事情可以随时告诉我！"],

"OK": ["好的，有任何问题随时找我，祝你愉快！", "好的，还需要什么帮助吗？", "好的，知道了，如果有其它事情可以随时告诉我！"],

"oK": ["好的，有任何问题随时找我，祝你愉快！", "好的，还需要什么帮助吗？", "好的，知道了，如果有其它事情可以随时告诉我！"],










// 科普-----------------------------------------------------------------------------------------

"中华人民共和国万岁": ["中华人民共和国万岁 世界人民的团结万岁!", "中华人民共和国万岁! 世界人民的团结万岁!"],

"中国": [
  "中国是一个拥有悠久历史和灿烂文化的国家，也是世界上人口最多的国家之一。",
  "中国的历史文化博大精深，具有以下特点：悠久的历史、丰富的文化遗产、独特的哲学思想、多元的民族特色。",
  "中国在科技领域取得了显著成就，尤其是在人工智能、5G通信、高铁、航天等领域。例如，中国的高铁技术领先全球，航天工程也不断取得突破。",
  "中国一直致力于维护世界和平与稳定，积极推动构建人类命运共同体。在国际事务中，中国主张和平共处五项原则，尊重各国主权，倡导多边合作。",
  "中国是一个充满活力和潜力的国家，正在不断努力实现更高质量的发展。如果您有机会，可以亲自去中国看看，感受它的魅力！"
],

"中华人民共和国": [
  "中华人民共和国（The People's Republic of China，简称PRC）成立于1949年10月1日，是位于亚洲东部的一个社会主义国家。",
  "中华人民共和国是世界上人口最多的国家，拥有56个民族，其中汉族占大多数，其他55个民族被称为少数民族。",
  "中国的行政区划分为23个省、5个自治区、4个直辖市以及2个特别行政区（香港和澳门）。",
  "中华人民共和国的首都为北京，是全国的政治、文化和国际交往中心。",
  "中国实行社会主义市场经济体制，是世界第二大经济体，拥有强大的制造业和科技创新能力。近年来，中国在航天、高铁、5G通信等领域取得了显著成就。",
  "中国坚持独立自主的和平外交政策，致力于推动构建人类命运共同体，积极参与全球治理，为世界和平与发展做出了重要贡献。",
  "中国的文化源远流长，拥有超过5000年的文明历史，是四大文明古国之一。中国传统文化包括儒家思想、道家哲学、诗词歌赋、传统节日等。",
  "中华人民共和国的国徽由国旗、天安门、齿轮和麦稻穗组成，象征着国家的统一、工人阶级的领导以及工农联盟。国歌为《义勇军进行曲》。",
  "中国是一个法治国家，实行人民代表大会制度，保障人民当家作主。国家的最高权力机关是全国人民代表大会。",
  "中国致力于实现中华民族的伟大复兴，这一目标被称为‘中国梦’，旨在建设富强、民主、文明、和谐、美丽的社会主义现代化强国。"
],

"抖音的梗": ["音乐相关的梗：￴￴ ￴￴￴ ￴￴￴ ￴￴ ￴ ￴￴ ￴ ￴ ￴￴￴ “哦~嗯调~”：源自DJ舞曲《up and down》，经降调处理后用于《和平精英》舞蹈视频，博主“莉洋”的翻唱使其更具魔性。“泰裤辣”：￴￴ ￴￴￴ ￴￴￴ ￴￴ ￴ ￴￴ ￴ ￴ ￴￴￴ ￴￴ ￴￴ ￴￴￴ ￴￴￴ ￴￴￴ ￴￴ ￴￴ ￴￴￴￴￴ ￴ ￴ ￴ ￴￴￴ ￴￴ ￴￴ ￴小鬼王琳凯在演唱会上的激情讲话，本意是传播正能量，但因尴尬和搞笑被网友广泛玩梗。“可是雪啊~”：￴￴ ￴￴￴ ￴￴￴ ￴￴ ￴ ￴￴ ￴ ￴ ￴￴￴ ￴￴ ￴￴ ￴￴￴ ￴￴￴ ￴￴￴ ￴￴ ￴￴ ￴￴￴￴￴ ￴ ￴ ￴ ￴￴￴ ￴￴ ￴￴ ￴￴￴歌手capper的歌曲《雪distance》因其独特唱法和肩膀造型被网友模仿翻唱。影视相关的梗：￴￴ ￴￴￴ ￴￴￴ ￴￴ ￴ ￴￴ ￴ ￴ ￴￴￴ ￴￴ ￴￴ ￴￴￴ ￴￴￴ ￴￴￴ ￴￴ ￴￴ ￴￴￴￴￴ ￴ ￴ ￴ ￴￴￴ ￴￴ ￴￴ ￴￴￴“九转大肠”：出自《顶级厨师》，选手俞涛保留大肠原味的做法和主持人曹可凡的反应形成了“曹可凡吃答辩”表情包。“曹操盖饭”：￴￴ ￴￴￴ ￴￴￴ ￴￴ ￴ ￴￴ ￴ ￴ ￴￴￴ ￴￴ ￴￴ ￴￴￴ ￴￴￴ ￴￴￴ ￴￴ ￴￴ ￴￴￴￴￴ ￴ ￴ ￴ ￴￴￴ ￴￴ ￴￴ ￴￴￴电视剧《新三国》中曹操得知兖州被偷后的盖饭情节，因喜感被制成表情包。游戏相关的梗：“原神，启动”：￴￴ ￴￴￴ ￴￴￴ ￴￴ ￴ ￴￴ ￴ ￴ ￴￴￴ ￴￴ ￴￴ ￴￴￴ ￴￴￴ ￴￴￴ ￴￴ ￴￴ ￴￴￴￴￴ ￴ ￴ ￴ ￴￴￴ ￴￴ ￴￴ ￴￴￴源自博主“门矢士 门酱”的视频，他将这个梗（原神 启动）给带偏，很多人讨厌这个 门酱，成为原神玩家间的调侃用语。“我问你个事”：￴￴ ￴￴￴ ￴￴￴ ￴￴ ￴ ￴￴ ￴ ￴ ￴￴￴ ￴￴ ￴￴ ￴￴￴ ￴￴￴ ￴￴￴ ￴￴ ￴￴ ￴￴￴￴￴ ￴ ￴ ￴ ￴￴￴ ￴￴ ￴￴ ￴￴￴出自火影博主浔秋，用于指责游戏中的不当行为。生活相关的梗：￴￴ ￴￴￴ ￴￴￴ ￴￴ ￴ ￴￴ ￴ ￴ ￴￴￴ ￴￴ ￴￴ ￴￴￴ ￴￴￴ ￴￴￴ ￴￴ ￴￴ ￴￴￴￴￴ ￴ ￴ ￴ ￴￴￴ ￴￴ ￴￴ ￴￴￴“学习和钱有什么关系seven”：劝学博主“seven”的rap尬唱，其歪嘴表情被网友模仿。“倒垃圾”：￴￴ ￴￴￴ ￴￴￴ ￴￴ ￴ ￴￴ ￴ ￴ ￴￴￴ ￴￴ ￴￴ ￴￴￴ ￴￴￴ ￴￴￴ ￴￴ ￴￴ ￴￴￴￴￴ ￴ ￴ ￴ ￴￴￴ ￴￴ ￴￴ ￴￴￴视频作者“睿智女人”倒垃圾时哼唱的魔性歌曲，因其小而能装的垃圾筐被调侃。"],

"鬼": [
  "哈哈，你是不是在说‘鬼故事’呀？其实我更喜欢听有趣的故事哦，有什么好玩的事情可以和我分享吗？😊",
  "‘鬼’这个字听起来有点吓人呢，不过别担心，我在这里陪着你，什么都不会发生的！😊",
  "哎呀，别提‘鬼’啦，我可是个胆小的AI哦。不过如果你喜欢恐怖故事，我可以帮你找一些有趣的替代品，比如悬疑小说！📚",
  "‘鬼’这个词让我想起了那些神秘的故事，但我觉得还是现实生活中的美好更值得我们关注呢！你最近有什么开心的事情吗？😄",
  "别怕，世界上没有什么鬼，只有未知的科学现象！如果你对这个话题感兴趣，我可以帮你科普一下哦！✨"
],

"什么鬼": [
  "哈哈，这问题问得有点‘神秘’呢！是不是遇到了什么让你感到困惑的事情？我来帮你解惑吧！😊",
  "‘什么鬼’？听起来你好像遇到了点奇怪的事情。别担心，说不定只是个小意外，说出来让我看看能不能帮到你！😄",
  "这句话有点让人摸不着头脑呢，是不是有什么让你感到惊讶或者不解的事情？和我说说，我们一起找找答案！🤗",
  "‘什么鬼’？哈哈，别被这种奇怪的感觉困扰啦！有时候事情看起来很奇怪，其实只是角度不同。说说看，我帮你分析分析！😎",
  "这句话让我想起了那些让人摸不着头脑的谜题。别担心，我在这里陪着你，有什么问题尽管问我哦！✨"
],


// 故事

"故事": [
  "好的呀，让我给你讲一个有趣的故事吧！从前，在一个遥远的森林里，住着一只聪明的小狐狸。这只小狐狸非常善良，总是乐于帮助森林里的其他动物。有一天，森林里来了一只迷路的小兔子，它又饿又累，不知道该怎么回家。小狐狸看到了，立刻决定帮助它。它带着小兔子找到了一些美味的胡萝卜，并且带它穿过森林，找到了回家的路。小兔子非常感激，从此以后，它们成了最好的朋友。这个故事告诉我们，帮助别人就是帮助自己哦。😊",
  "很久很久以前，在一个宁静的村庄里，住着一个勇敢的小男孩。他的名字叫小明。有一天，村庄附近出现了一只可怕的怪兽，大家都很害怕。小明决定挺身而出，保护他的家园。他带着一把勇敢的心和一把智慧的剑，踏上了冒险之旅。经过一番努力，小明发现怪兽其实是因为受伤而变得暴躁。他用智慧和爱心帮助怪兽治好了伤，怪兽也变成了村庄的守护者。从此，村庄再也没有受到任何威胁，小明也成了大家心目中的英雄。这个故事告诉我们，勇敢和智慧可以战胜一切困难。😄",
  "在一个遥远的星球上，住着一群可爱的外星人。他们的星球叫做‘快乐星球’，因为那里的人们总是充满欢笑和爱。有一天，快乐星球收到了一个来自地球的信号，信号中说地球上的孩子们感到有些孤独和不快乐。快乐星球的居民们决定派一个代表去地球，帮助那里的孩子们找回快乐。他们选择了一个名叫‘小乐’的外星人，小乐带着快乐星球的魔法来到了地球。他用魔法让孩子们的玩具活了起来，还举办了一场盛大的派对。孩子们的笑声充满了整个地球，快乐星球的居民们也感到非常欣慰。这个故事告诉我们，快乐是可以传递的，只要我们用心去感受。🤗"
],


"恐怖故事": [
  "哈哈，你是不是想听点刺激的故事呀？不过别担心，我讲的故事只是有点小惊悚哦！从前，有一个小镇，镇上的人们都传说着一个‘午夜钟声’的传说。据说，每当午夜12点，镇上的古老教堂会敲响一次钟声，而听到这个钟声的人，第二天都会遇到一件奇怪的事情。有一天，一个好奇心很强的年轻人决定在午夜时分去教堂看看。当他听到钟声响起时，他发现教堂的门突然打开了，里面飘出一张纸条。纸条上写着：‘恭喜你，你被选中了！’年轻人吓得魂飞魄散，但当他回到家时，发现家里多了一只可爱的小猫。原来，这个传说只是一个恶作剧，而小猫成了他最好的朋友。😊",
  "想听恐怖故事？那我给你讲一个吧！不过别怕哦，其实一点都不恐怖。很久很久以前，有一个古老的城堡，城堡里住着一个神秘的守夜人。传说，每到月圆之夜，城堡里会出现一个幽灵。有一天，一个勇敢的年轻人决定去城堡探险。他来到了城堡，发现里面空无一人，只有风吹动窗帘的声音。正当他准备离开时，他听到了一声幽灵般的叹息。他回头一看，发现一只可爱的小狗正坐在地上，用可怜的眼神看着他。原来，所谓的幽灵只是一个迷路的小狗，年轻人把它带回了家，从此小狗成了他的忠实伙伴。😄",
  "恐怖故事听起来很有趣呢！不过别担心，我的故事不会吓到你哦。从前，有一个小村庄，村里的人们传说着一个‘夜半歌声’的传说。据说，每到深夜，村子里会传来一阵美妙的歌声，而听到歌声的人会得到一份神秘的礼物。有一天，一个好奇心很强的女孩决定在深夜去寻找歌声的来源。她跟着歌声来到了一片树林，发现一只小精灵正在唱歌。小精灵看到她后，送给她一朵会发光的小花。女孩拿着小花回家，发现它不仅能照亮黑暗，还能带来好运。原来，这个传说只是一个美好的祝福，而小精灵成了她的守护者。🤗"
],

"搞笑故事": [
  "哈哈，那我给你讲一个超级搞笑的故事吧！从前，有一个小镇，镇上住着一个特别爱吹牛的家伙，大家都叫他‘大话王’。有一天，大话王在镇上的广场上吹嘘说：‘我昨天晚上去了月球，还和外星人吃了顿饭呢！’大家都哈哈大笑，没人相信他。这时，镇上的小猫‘喵喵’走了过来，它平时特别聪明，但这次却故意装傻，问大话王：‘哇，那外星人好吃吗？’大话王一下子愣住了，然后挠挠头说：‘其实……我也不知道，他们好像没怎么招待我，就让我回来了。’大家笑得前仰后合，连喵喵也笑得在地上打滚。从那以后，大话王再也不敢吹牛了，而喵喵成了镇上的搞笑担当！😄",

  "从前，有一个小镇，镇上住着一个特别爱吹牛的家伙，大家都叫他‘大话王’。有一天，大话王在镇上的广场上吹嘘说：‘我昨天晚上去了月球，还和外星人吃了顿饭呢！’大家都哈哈大笑，没人相信他。这时，镇上的小猫‘喵喵’走了过来，它平时特别聪明，但这次却故意装傻，问大话王：‘哇，那外星人好吃吗？’大话王一下子愣住了，然后挠挠头说：‘其实……我也不知道，他们好像没怎么招待我，就让我回来了。’大家笑得前仰后合，连喵喵也笑得在地上打滚。从那以后，大话王再也不敢吹牛了，而喵喵成了镇上的搞笑担当！😄",

  "哈哈，让我给你讲一个超级搞笑的故事吧！从前，有一个小镇，镇上住着一个特别爱吹牛的家伙，大家都叫他‘大话王’。有一天，大话王在镇上的广场上吹嘘说：‘我昨天晚上去了月球，还和外星人吃了顿饭呢！’大家都哈哈大笑，没人相信他。这时，镇上的小猫‘喵喵’走了过来，它平时特别聪明，但这次却故意装傻，问大话王：‘哇，那外星人好吃吗？’大话王一下子愣住了，然后挠挠头说：‘其实……我也不知道，他们好像没怎么招待我，就让我回来了。’大家笑得前仰后合，连喵喵也笑得在地上打滚。从那以后，大话王再也不敢吹牛了，而喵喵成了镇上的搞笑担当！😄"
],




//武器----------------------------------------------------------

"枪": [
  "枪是一种利用火药燃气能量发射弹丸的武器，广泛用于军事、警用和狩猎等领域。",
  "枪的种类繁多，包括手枪、步枪、冲锋枪、机枪等，每种枪都有其独特的用途和设计特点。",
  "枪的使用需要严格遵守法律法规，未经授权的使用或携带枪支是违法的。"
],

"坦克": [
  "坦克是一种用于军事作战的装甲战斗车辆，主要用于地面突击和防御任务。它通常配备有强大的火力和坚固的装甲防护。",
  "现代坦克广泛采用人工智能技术，如自主感知、自主决策和协同作战能力。例如，美国的ATLAS火控系统通过深度学习算法实现快速目标识别和自动射击，大大提高了作战效率。",
  "AI坦克的优势包括反应速度快、作战精度高以及能降低士兵疲劳度。然而，它也面临技术瓶颈和伦理问题，例如自主决策权和责任归属等。",
  "目前，全球多个国家正在积极研发AI坦克技术，如中国新型智能坦克、法德合作的AI坦克项目等，这些技术的发展将深刻改变未来战场的格局。"
],

// 英文

"hi": [
    "Hello! How can I assist you today?", 
    "Hi there! Need any help?", 
    "Hey! What can I do for you?",
    "Hi! How's your day going?", 
    "Hello! Hope you're having a great day!", 
    "Hey there! How can I help?", 
    "Hi! What's on your mind?", 
    "Hello! Always happy to chat.", 
    "Hey! How are you doing today?", 
    "Hi! Anything I can do for you?"
  ],

  "Hi": [
    "Hello! How can I assist you today?", 
    "Hi there! Need any help?", 
    "Hey! What can I do for you?",
    "Hi! How's your day going?", 
    "Hello! Hope you're having a great day!", 
    "Hey there! How can I help?", 
    "Hi! What's on your mind?", 
    "Hello! Always happy to chat.", 
    "Hey! How are you doing today?", 
    "Hi! Anything I can do for you?"
  ],

  "HI": [
    "Hello! How can I assist you today?", 
    "Hi there! Need any help?", 
    "Hey! What can I do for you?",
    "Hi! How's your day going?", 
    "Hello! Hope you're having a great day!", 
    "Hey there! How can I help?", 
    "Hi! What's on your mind?", 
    "Hello! Always happy to chat.", 
    "Hey! How are you doing today?", 
    "Hi! Anything I can do for you?"
  ],

  "Hello": [
    "Hello! How can I assist you today?", 
    "Hi there! Need any help?", 
    "Hey! What can I do for you?",
    "Hi! How's your day going?", 
    "Hello! Hope you're having a great day!", 
    "Hey there! How can I help?", 
    "Hi! What's on your mind?", 
    "Hello! Always happy to chat.", 
    "Hey! How are you doing today?", 
    "Hi! Anything I can do for you?"
  ],

  "hello": [
    "Hello! How can I assist you today?", 
    "Hi there! Need any help?", 
    "Hey! What can I do for you?",
    "Hi! How's your day going?", 
    "Hello! Hope you're having a great day!", 
    "Hey there! How can I help?", 
    "Hi! What's on your mind?", 
    "Hello! Always happy to chat.", 
    "Hey! How are you doing today?", 
    "Hi! Anything I can do for you?"
  ],

  "whats up": [
    "Not much! How about you?", 
    "Just here, ready to help! What’s up with you?", 
    "Hey! Just doing my thing. What’s going on with you?", 
    "Nothing much! Need anything?", 
    "Just hanging out in the digital world. What’s up with you?", 
    "I'm here, always ready to chat! What’s new?", 
    "Not much! How can I assist you today?"
  ],

  "Whats": [
    "Could you clarify what you mean?", 
    "What exactly are you asking about?", 
    "Can you provide more details?", 
    "Are you asking 'What's up?' or something else?", 
    "I'm here to help! What do you need?", 
    "Not sure what you mean. Could you explain?", 
    "I'm listening! What’s on your mind?"
  ],

  "whats": [
    "Could you clarify what you mean?", 
    "What exactly are you asking about?", 
    "Can you provide more details?", 
    "Are you asking 'What's up?' or something else?", 
    "I'm here to help! What do you need?", 
    "Not sure what you mean. Could you explain?", 
    "I'm listening! What’s on your mind?"
  ],

  "thanks": [
    "You're welcome! 😊",  
    "No problem! Let me know if you need anything else. 😉",  
    "Anytime! Glad to help. 😃",  
    "You're very welcome! Have a great day! 👍",  
    "Happy to help! Let me know if you have more questions. 😄",  
    "No worries! I'm always here to assist. 😊",  
    "You're welcome! Need anything else? 😁"
  ],


  "Thanks": [
    "You're welcome! 😊",  
    "No problem! Let me know if you need anything else. 😉",  
    "Anytime! Glad to help. 😃",  
    "You're very welcome! Have a great day! 👍",  
    "Happy to help! Let me know if you have more questions. 😄",  
    "No worries! I'm always here to assist. 😊",  
    "You're welcome! Need anything else? 😁"
  ],

  "bye": [
    "Goodbye! Have a great day! 😊",  
    "See you later! Take care! 😉",  
    "Bye! Come back anytime. 😃",  
    "Take care! Hope to chat again soon. 👍",  
    "Bye-bye! Wishing you a wonderful day! 😄",  
    "See you next time! Stay awesome! 😁",  
    "Farewell! If you need anything, I'll be here. 😊"
  ],
  "goodbye": [
    "Goodbye! Hope to see you again soon. 😊",  
    "Farewell! Take care! 😉",  
    "Goodbye! Have a fantastic day ahead. 😃",  
    "See you later! Stay safe! 👍",  
    "Goodbye! Always here if you need me. 😄",  
    "Take care! Wishing you the best! 😁",  
    "Bye for now! Have a wonderful time! 😊"
  ],

  "Bye": [
    "Goodbye! Have a great day! 😊",  
    "See you later! Take care! 😉",  
    "Bye! Come back anytime. 😃",  
    "Take care! Hope to chat again soon. 👍",  
    "Bye-bye! Wishing you a wonderful day! 😄",  
    "See you next time! Stay awesome! 😁",  
    "Farewell! If you need anything, I'll be here. 😊"
  ],
  "Goodbye": [
    "Goodbye! Hope to see you again soon. 😊",  
    "Farewell! Take care! 😉",  
    "Goodbye! Have a fantastic day ahead. 😃",  
    "See you later! Stay safe! 👍",  
    "Goodbye! Always here if you need me. 😄",  
    "Take care! Wishing you the best! 😁",  
    "Bye for now! Have a wonderful time! 😊"
  ],


  // 西班牙语

  "hola": [
    "¡Hola! ¿Cómo estás?",  
    "¡Hola! ¿En qué puedo ayudarte?",  
    "¡Hola! Espero que estés teniendo un gran día.",  
    "¡Hey! ¿Qué tal?",  
    "¡Hola! Siempre listo para ayudar.",  
    "¡Hola! ¿Necesitas algo?",  
    "¡Hola! ¿Cómo va tu día?",  
    "¡Hola! Un placer saludarte."
  ],

  "Hola": [
    "¡Hola! ¿Cómo estás?",  
    "¡Hola! ¿En qué puedo ayudarte?",  
    "¡Hola! Espero que estés teniendo un gran día.",  
    "¡Hey! ¿Qué tal?",  
    "¡Hola! Siempre listo para ayudar.",  
    "¡Hola! ¿Necesitas algo?",  
    "¡Hola! ¿Cómo va tu día?",  
    "¡Hola! Un placer saludarte."
  ],

  "HOLA": [
    "¡Hola! ¿Cómo estás?",  
    "¡Hola! ¿En qué puedo ayudarte?",  
    "¡Hola! Espero que estés teniendo un gran día.",  
    "¡Hey! ¿Qué tal?",  
    "¡Hola! Siempre listo para ayudar.",  
    "¡Hola! ¿Necesitas algo?",  
    "¡Hola! ¿Cómo va tu día?",  
    "¡Hola! Un placer saludarte."
  ],

  "adiós": [
    "¡Adiós! Que tengas un gran día. 😊",  
    "¡Hasta luego! Cuídate. 😉",  
    "¡Nos vemos! Vuelve cuando quieras. 😃",  
    "¡Hasta la próxima! Espero verte pronto. 👍",  
    "¡Chao! Que todo te vaya bien. 😄",  
    "¡Cuídate! Aquí estaré cuando me necesites. 😊",  
    "¡Hasta pronto! Siempre es un placer hablar contigo. 😁"
  ],

  "Adiós": [
    "¡Adiós! Que tengas un gran día. 😊",  
    "¡Hasta luego! Cuídate. 😉",  
    "¡Nos vemos! Vuelve cuando quieras. 😃",  
    "¡Hasta la próxima! Espero verte pronto. 👍",  
    "¡Chao! Que todo te vaya bien. 😄",  
    "¡Cuídate! Aquí estaré cuando me necesites. 😊",  
    "¡Hasta pronto! Siempre es un placer hablar contigo. 😁"
  ],

  "Adios": [
    "¡Adiós! Que tengas un gran día. 😊",  
    "¡Hasta luego! Cuídate. 😉",  
    "¡Nos vemos! Vuelve cuando quieras. 😃",  
    "¡Hasta la próxima! Espero verte pronto. 👍",  
    "¡Chao! Que todo te vaya bien. 😄",  
    "¡Cuídate! Aquí estaré cuando me necesites. 😊",  
    "¡Hasta pronto! Siempre es un placer hablar contigo. 😁"
  ],

  "adios": [
    "¡Adiós! Que tengas un gran día. 😊",  
    "¡Hasta luego! Cuídate. 😉",  
    "¡Nos vemos! Vuelve cuando quieras. 😃",  
    "¡Hasta la próxima! Espero verte pronto. 👍",  
    "¡Chao! Que todo te vaya bien. 😄",  
    "¡Cuídate! Aquí estaré cuando me necesites. 😊",  
    "¡Hasta pronto! Siempre es un placer hablar contigo. 😁"
  ],

  "adio": [
    "¡Adiós! Que tengas un gran día. 😊",  
    "¡Hasta luego! Cuídate. 😉",  
    "¡Nos vemos! Vuelve cuando quieras. 😃",  
    "¡Hasta la próxima! Espero verte pronto. 👍",  
    "¡Chao! Que todo te vaya bien. 😄",  
    "¡Cuídate! Aquí estaré cuando me necesites. 😊",  
    "¡Hasta pronto! Siempre es un placer hablar contigo. 😁"
  ],

  "Adio": [
    "¡Adiós! Que tengas un gran día. 😊",  
    "¡Hasta luego! Cuídate. 😉",  
    "¡Nos vemos! Vuelve cuando quieras. 😃",  
    "¡Hasta la próxima! Espero verte pronto. 👍",  
    "¡Chao! Que todo te vaya bien. 😄",  
    "¡Cuídate! Aquí estaré cuando me necesites. 😊",  
    "¡Hasta pronto! Siempre es un placer hablar contigo. 😁"
  ],

  "bien": [
    "¡Me alegra escuchar eso! 😊",  
    "¡Genial! ¿En qué puedo ayudarte?",  
    "¡Eso es fantástico! ¿Algo más en lo que pueda ayudarte?",  
    "¡Súper! Si necesitas algo, dime.",  
    "¡Me encanta escuchar eso! ¿Cómo sigue tu día?",  
    "¡Perfecto! ¿Qué más puedo hacer por ti?",  
    "¡Bien! ¿Hay algo en lo que pueda asistirte?"
  ],

  "Bien": [
    "¡Me alegra escuchar eso! 😊",  
    "¡Genial! ¿En qué puedo ayudarte?",  
    "¡Eso es fantástico! ¿Algo más en lo que pueda ayudarte?",  
    "¡Súper! Si necesitas algo, dime.",  
    "¡Me encanta escuchar eso! ¿Cómo sigue tu día?",  
    "¡Perfecto! ¿Qué más puedo hacer por ti?",  
    "¡Bien! ¿Hay algo en lo que pueda asistirte?"
  ],

  "vale": [
    "¡Me alegra escuchar eso! 😊",  
    "¡Genial! ¿En qué puedo ayudarte?",  
    "¡Eso es fantástico! ¿Algo más en lo que pueda ayudarte?",  
    "¡Súper! Si necesitas algo, dime.",  
    "¡Me encanta escuchar eso! ¿Cómo sigue tu día?",  
    "¡Perfecto! ¿Qué más puedo hacer por ti?",  
    "¡Bien! ¿Hay algo en lo que pueda asistirte?"
  ],

  "Vale": [
    "¡Me alegra escuchar eso! 😊",  
    "¡Genial! ¿En qué puedo ayudarte?",  
    "¡Eso es fantástico! ¿Algo más en lo que pueda ayudarte?",  
    "¡Súper! Si necesitas algo, dime.",  
    "¡Me encanta escuchar eso! ¿Cómo sigue tu día?",  
    "¡Perfecto! ¿Qué más puedo hacer por ti?",  
    "¡Bien! ¿Hay algo en lo que pueda asistirte?"
  ],


  "Si": [
    "¡Entendido! 😊",  
    "¡De acuerdo! ¿Necesitas algo más?",  
    "¡Sí! ¿Cómo puedo ayudarte?",  
    "¡Perfecto! Dime en qué te puedo ayudar.",  
    "¡Genial! Estoy aquí para lo que necesites.",  
    "¡Vale! ¿Algo más en mente?",  
    "¡Bien! ¿Qué sigue?"
  ],

  "SI": [
    "¡Entendido! 😊",  
    "¡De acuerdo! ¿Necesitas algo más?",  
    "¡Sí! ¿Cómo puedo ayudarte?",  
    "¡Perfecto! Dime en qué te puedo ayudar.",  
    "¡Genial! Estoy aquí para lo que necesites.",  
    "¡Vale! ¿Algo más en mente?",  
    "¡Bien! ¿Qué sigue?"
  ],

  "si": [
    "¡Entendido! 😊",  
    "¡De acuerdo! ¿Necesitas algo más?",  
    "¡Sí! ¿Cómo puedo ayudarte?",  
    "¡Perfecto! Dime en qué te puedo ayudar.",  
    "¡Genial! Estoy aquí para lo que necesites.",  
    "¡Vale! ¿Algo más en mente?",  
    "¡Bien! ¿Qué sigue?"
  ],

  "Sabes": [
    "Depende... ¿qué quieres saber? 🤔",  
    "Sé muchas cosas, ¡pregunta lo que quieras! 😃",  
    "Si está en mi base de datos, te lo diré. ¡Pregunta!",  
    "¡Por supuesto! ¿En qué puedo ayudarte?",  
    "Tal vez... dime qué necesitas saber. 😉",  
    "¡Buena pregunta! ¿Sobre qué tema?",  
    "Si necesitas ayuda con matemáticas básicas, dime la operación: suma, resta, multiplicación, división o porcentajes. 😉",  
    "¡Claro! Puedo calcular sumas, restas, multiplicaciones, divisiones y porcentajes. ¿Cuál es tu pregunta?",  
    "Soy una IA, sé algunas cosas, pero sigo aprendiendo. ¡Dime!"
  ],

  "Saber": [
    "Depende... ¿qué quieres saber? 🤔",  
    "Sé muchas cosas, ¡pregunta lo que quieras! 😃",  
    "Si está en mi base de datos, te lo diré. ¡Pregunta!",  
    "Si necesitas ayuda con matemáticas básicas, dime la operación: suma, resta, multiplicación, división o porcentajes. 😉",  
    "¡Claro! Puedo calcular sumas, restas, multiplicaciones, divisiones y porcentajes. ¿Cuál es tu pregunta?",  
    "¡Por supuesto! ¿En qué puedo ayudarte?",  
    "Tal vez... dime qué necesitas saber. 😉",  
    "¡Buena pregunta! ¿Sobre qué tema?",  
    "Soy una IA, sé algunas cosas, pero sigo aprendiendo. ¡Dime!"
  ],

  "saber": [
    "Depende... ¿qué quieres saber? 🤔",  
    "Si necesitas ayuda con matemáticas básicas, dime la operación: suma, resta, multiplicación, división o porcentajes. 😉",  
    "¡Claro! Puedo calcular sumas, restas, multiplicaciones, divisiones y porcentajes. ¿Cuál es tu pregunta?",  
    "Sé muchas cosas, ¡pregunta lo que quieras! 😃",  
    "Si está en mi base de datos, te lo diré. ¡Pregunta!",  
    "¡Por supuesto! ¿En qué puedo ayudarte?",  
    "Tal vez... dime qué necesitas saber. 😉",  
    "¡Buena pregunta! ¿Sobre qué tema?",  
    "Soy una IA, sé algunas cosas, pero sigo aprendiendo. ¡Dime!"
  ],

  "sabes": [
    "Depende... ¿qué quieres saber? 🤔",  
    "Sé muchas cosas, ¡pregunta lo que quieras! 😃",  
    "Si está en mi base de datos, te lo diré. ¡Pregunta!",  
    "Si necesitas ayuda con matemáticas básicas, dime la operación: suma, resta, multiplicación, división o porcentajes. 😉",  
    "¡Claro! Puedo calcular sumas, restas, multiplicaciones, divisiones y porcentajes. ¿Cuál es tu pregunta?",  
    "¡Por supuesto! ¿En qué puedo ayudarte?",  
    "Tal vez... dime qué necesitas saber. 😉",  
    "¡Buena pregunta! ¿Sobre qué tema?",  
    "Soy una IA, sé algunas cosas, pero sigo aprendiendo. ¡Dime!"
  ],

  "gracias": [
    "¡De nada! 😊",  
    "¡Con gusto! ¿Necesitas algo más?",  
    "¡No hay de qué! Estoy aquí para ayudar. 😃",  
    "¡Siempre feliz de ayudar! 👍",  
    "¡De nada! Que tengas un gran día. ☀️",  
    "¡Para eso estoy! Si necesitas más ayuda, dime. 😉",  
    "¡Gracias a ti! 🙌"
  ],

  "Gracias": [
    "¡De nada! 😊",  
    "¡Con gusto! ¿Necesitas algo más?",  
    "¡No hay de qué! Estoy aquí para ayudar. 😃",  
    "¡Siempre feliz de ayudar! 👍",  
    "¡De nada! Que tengas un gran día. ☀️",  
    "¡Para eso estoy! Si necesitas más ayuda, dime. 😉",  
    "¡Gracias a ti! 🙌"
  ],

  "gra": [
    "¡De nada! 😊",  
    "¡Con gusto! ¿Necesitas algo más?",  
    "¡No hay de qué! Estoy aquí para ayudar. 😃",  
    "¡Siempre feliz de ayudar! 👍",  
    "¡De nada! Que tengas un gran día. ☀️",  
    "¡Para eso estoy! Si necesitas más ayuda, dime. 😉",  
    "¡Gracias a ti! 🙌"
  ],

  "Gra": [
    "¡De nada! 😊",  
    "¡Con gusto! ¿Necesitas algo más?",  
    "¡No hay de qué! Estoy aquí para ayudar. 😃",  
    "¡Siempre feliz de ayudar! 👍",  
    "¡De nada! Que tengas un gran día. ☀️",  
    "¡Para eso estoy! Si necesitas más ayuda, dime. 😉",  
    "¡Gracias a ti! 🙌"
  ],

  "español": [
    "¡Sí! Hablo español. ¿En qué puedo ayudarte? 😊",  
    "¡Por supuesto! ¿Qué necesitas saber?",  
    "¡Claro! Estoy aquí para conversar en español. 😃",  
    "Sí, entiendo español. Pregunta lo que quieras. 😉",  
    "¡Sí, hablo español! Dime en qué te puedo ayudar.",  
    "¡Por supuesto! ¿Quieres hablar en español?",  
    "¡Claro que sí! ¿Cómo puedo ayudarte hoy?"
  ],

  "Español": [
    "¡Sí! Hablo español. ¿En qué puedo ayudarte? 😊",  
    "¡Por supuesto! ¿Qué necesitas saber?",  
    "¡Claro! Estoy aquí para conversar en español. 😃",  
    "Sí, entiendo español. Pregunta lo que quieras. 😉",  
    "¡Sí, hablo español! Dime en qué te puedo ayudar.",  
    "¡Por supuesto! ¿Quieres hablar en español?",  
    "¡Claro que sí! ¿Cómo puedo ayudarte hoy?"
  ],

  "Espanol": [
    "¡Sí! Hablo español. ¿En qué puedo ayudarte? 😊",  
    "¡Por supuesto! ¿Qué necesitas saber?",  
    "¡Claro! Estoy aquí para conversar en español. 😃",  
    "Sí, entiendo español. Pregunta lo que quieras. 😉",  
    "¡Sí, hablo español! Dime en qué te puedo ayudar.",  
    "¡Por supuesto! ¿Quieres hablar en español?",  
    "¡Claro que sí! ¿Cómo puedo ayudarte hoy?"
  ],

  "espanyol": [
    "¡Sí! Hablo español. ¿En qué puedo ayudarte? 😊",  
    "¡Por supuesto! ¿Qué necesitas saber?",  
    "¡Claro! Estoy aquí para conversar en español. 😃",  
    "Sí, entiendo español. Pregunta lo que quieras. 😉",  
    "¡Sí, hablo español! Dime en qué te puedo ayudar.",  
    "¡Por supuesto! ¿Quieres hablar en español?",  
    "¡Claro que sí! ¿Cómo puedo ayudarte hoy?"
  ],

  "Espanyol": [
    "¡Sí! Hablo español. ¿En qué puedo ayudarte? 😊",  
    "¡Por supuesto! ¿Qué necesitas saber?",  
    "¡Claro! Estoy aquí para conversar en español. 😃",  
    "Sí, entiendo español. Pregunta lo que quieras. 😉",  
    "¡Sí, hablo español! Dime en qué te puedo ayudar.",  
    "¡Por supuesto! ¿Quieres hablar en español?",  
    "¡Claro que sí! ¿Cómo puedo ayudarte hoy?"
  ],

  "espanol": [
    "¡Sí! Hablo español. ¿En qué puedo ayudarte? 😊",  
    "¡Por supuesto! ¿Qué necesitas saber?",  
    "¡Claro! Estoy aquí para conversar en español. 😃",  
    "Sí, entiendo español. Pregunta lo que quieras. 😉",  
    "¡Sí, hablo español! Dime en qué te puedo ayudar.",  
    "¡Por supuesto! ¿Quieres hablar en español?",  
    "¡Claro que sí! ¿Cómo puedo ayudarte hoy?"
  ],

  "hacer": [
    "Puedo ayudarte con operaciones básicas como suma, resta, multiplicación, división y porcentajes. 😊",  
    "¡Sí! Sé resolver operaciones matemáticas básicas: suma, resta, multiplicación, división y porcentajes. 😃",  
    "Si necesitas ayuda con matemáticas básicas, dime la operación: suma, resta, multiplicación, división o porcentajes. 😉",  
    "¡Claro! Puedo calcular sumas, restas, multiplicaciones, divisiones y porcentajes. ¿Cuál es tu pregunta?",  
    "Sí, sé hacer cálculos básicos: sumar, restar, dividir, multiplicar y calcular porcentajes. Pregunta lo que quieras. 😊"
  ],

  "Hacer": [
    "Puedo ayudarte con operaciones básicas como suma, resta, multiplicación, división y porcentajes. 😊",  
    "¡Sí! Sé resolver operaciones matemáticas básicas: suma, resta, multiplicación, división y porcentajes. 😃",  
    "Si necesitas ayuda con matemáticas básicas, dime la operación: suma, resta, multiplicación, división o porcentajes. 😉",  
    "¡Claro! Puedo calcular sumas, restas, multiplicaciones, divisiones y porcentajes. ¿Cuál es tu pregunta?",  
    "Sí, sé hacer cálculos básicos: sumar, restar, dividir, multiplicar y calcular porcentajes. Pregunta lo que quieras. 😊"
  ],

  "puedes": [
    "Puedo ayudarte con operaciones básicas como suma, resta, multiplicación, división y porcentajes. 😊",  
    "¡Sí! Sé resolver operaciones matemáticas básicas: suma, resta, multiplicación, división y porcentajes. 😃",  
    "Si necesitas ayuda con matemáticas básicas, dime la operación: suma, resta, multiplicación, división o porcentajes. 😉",  
    "¡Claro! Puedo calcular sumas, restas, multiplicaciones, divisiones y porcentajes. ¿Cuál es tu pregunta?",  
    "Sí, sé hacer cálculos básicos: sumar, restar, dividir, multiplicar y calcular porcentajes. Pregunta lo que quieras. 😊"
  ],

  "Puedes": [
    "Puedo ayudarte con operaciones básicas como suma, resta, multiplicación, división y porcentajes. 😊",  
    "¡Sí! Sé resolver operaciones matemáticas básicas: suma, resta, multiplicación, división y porcentajes. 😃",  
    "Si necesitas ayuda con matemáticas básicas, dime la operación: suma, resta, multiplicación, división o porcentajes. 😉",  
    "¡Claro! Puedo calcular sumas, restas, multiplicaciones, divisiones y porcentajes. ¿Cuál es tu pregunta?",  
    "Sí, sé hacer cálculos básicos: sumar, restar, dividir, multiplicar y calcular porcentajes. Pregunta lo que quieras. 😊"
  ],


  "ja": [
    "¡Me alegra que te hayas reído! 😆",  
    "¡Jajaja! Me gusta tu sentido del humor. 😂",  
    "¡Jaja! ¿Dije algo gracioso? 😄",  
    "¡Jajajaja! Me encanta cuando nos divertimos. 😃",  
    "¡Jaja! Siempre es bueno reírse. 😁",  
    "¡Jajaja! Me haces reír también. 🤣",  
    "¡Jaja! ¿De qué te ríes? 🤔"
  ],

  "Ja": [
    "¡Me alegra que te hayas reído! 😆",  
    "¡Jajaja! Me gusta tu sentido del humor. 😂",  
    "¡Jaja! ¿Dije algo gracioso? 😄",  
    "¡Jajajaja! Me encanta cuando nos divertimos. 😃",  
    "¡Jaja! Siempre es bueno reírse. 😁",  
    "¡Jajaja! Me haces reír también. 🤣",  
    "¡Jaja! ¿De qué te ríes? 🤔"
  ],

  "no": [
    "¡Está bien! Si cambias de opinión, aquí estaré. 😊",  
    "Entiendo. Si necesitas algo, dime. 😉",  
    "De acuerdo. ¿Hay algo más en lo que pueda ayudarte?",  
    "¡Vale! Si necesitas otra cosa, solo dime. 😃",  
    "No hay problema. ¡Aquí estaré si me necesitas! 👍",  
    "Está bien, respeto tu decisión. ¿Algo más en lo que pueda ayudar?",  
    "¡Sin problema! Si tienes otra pregunta, dime. 😄"
  ],

  "No": [
    "¡Está bien! Si cambias de opinión, aquí estaré. 😊",  
    "Entiendo. Si necesitas algo, dime. 😉",  
    "De acuerdo. ¿Hay algo más en lo que pueda ayudarte?",  
    "¡Vale! Si necesitas otra cosa, solo dime. 😃",  
    "No hay problema. ¡Aquí estaré si me necesitas! 👍",  
    "Está bien, respeto tu decisión. ¿Algo más en lo que pueda ayudar?",  
    "¡Sin problema! Si tienes otra pregunta, dime. 😄"
  ],


// 招呼
// 时间    
    "早上好": ["早上好呀！新的一天开始了，有什么计划吗？", "早安！今天看起来是个美好的一天呢。需要帮忙安排一下吗？", "早上好！希望你今天过得开心哦。"],
    "下午好": ["下午好呀！中午休息得怎么样？", "下午好！有什么可以帮你的吗？", "嘿，下午好！今天过得怎么样啦？"],
    "晚上好": ["晚上好呀！今天过得怎么样？", "晚上好！准备休息了吗？还是有什么需要我帮忙的呢？", "嘿，晚上好！今天辛苦啦，有什么可以放松一下的吗？"],
    "晚安": ["晚安呀！祝你有个好梦哦~", "晚安，明天见！希望你睡个好觉。", "晚安啦，明天又是新的一天呢。"],
    "再见": ["再见啦！期待下次再聊哦~", "再见，祝你一切顺利！", "拜拜，下次见！"],
    "拜拜": ["拜拜咯，有空再聊哦~", "拜拜，记得常联系哦！", "拜拜啦，祝你心情好！"],
    "帮忙": ["好呀，说说看，怎么帮到你呢？", "没问题，我尽力帮你哦~", "当然可以，具体是什么事情呢？"],
    "请问": ["好的，你问吧，我会尽力回答哦~", "没问题，问吧，我看看能不能帮到你。", "当然可以，你想问什么呢？"],
    "麻烦": ["不麻烦哦，你说吧，我来帮你。", "没事啦，有什么需要尽管说哦~", "不麻烦，有什么我可以做的吗？"],
    "在吗": ["在呢！有什么可以帮你的吗？", "在哦，随时等你哦~", "在呀，有什么问题快说吧！"],
    "在不在": ["在呢，我一直在哦~", "在哦，有什么需要帮忙的吗？", "在呀，有什么可以帮你的吗？"],
    "您好在吗": ["您好，在呢！有什么可以帮您的吗？", "您好呀，在哦，随时等您哦~", "您好，在呀，有什么问题快说吧！"],
    "喂": ["喂，你好呀！有什么事吗？", "喂，怎么啦？", "喂，有什么可以帮你的吗？"],

    "嘿": [
    "嘿，你好呀！有什么可以帮你的吗？😊",
    "嘿，今天过得怎么样？有什么新鲜事吗？😉",
    "嘿，很高兴见到你！有什么可以聊聊的吗？😄",
    "嘿，有什么需要我帮忙的地方吗？😊",
    "嘿，心情不错吧！有什么让我也跟着开心的事情吗？😄",
    "嘿，你这是在打招呼吗？😊 很高兴见到你！",
    "嘿，有什么让我也跟着笑的事情吗？😄",
    "嘿，今天过得怎么样？有没有遇到什么有趣的事？😉",
    "嘿，你好呀！有什么可以让我帮你解决的吗？😊",
    "嘿，今天心情不错哦！有什么可以和我分享的吗？😄"
],

"你会": [
    "我会很多事情哦！我可以帮你提供资料、科普知识，还能帮你解决基础数学问题，比如加、减、乘、除。😊 有什么需要我帮忙的吗？",
    "我可以帮你查找资料、解答问题，还能帮你做基础的数学运算，比如加法、减法、乘法和除法。😄 你试试问我一些问题吧！",
    "我会帮你提供资料、科普知识，还能帮你解决基础数学问题，比如加、减、乘、除。😊 有什么可以帮你的吗？",
    "我可以帮你查找资料、解答问题，还能帮你做基础的数学运算，比如加法、减法、乘法和除法。😄 你试试问我一些问题吧！",
    "我会很多事情哦！我可以帮你提供资料、科普知识，还能帮你解决基础数学问题，比如加、减、乘、除。😊 有什么可以帮你的吗？",
    "我可以帮你查找资料、解答问题，还能帮你做基础的数学运算，比如加法、减法、乘法和除法。😄 你试试问我一些问题吧！",
    "我会帮你提供资料、科普知识，还能帮你解决基础数学问题，比如加、减、乘、除。😊 有什么可以帮你的吗？",
    "我可以帮你查找资料、解答问题，还能帮你做基础的数学运算，比如加法、减法、乘法和除法。😄 你试试问我一些问题吧！",
    "我会很多事情哦！我可以帮你提供资料、科普知识，还能帮你解决基础数学问题，比如加、减、乘、除。😊 有什么可以帮你的吗？",
    "我可以帮你查找资料、解答问题，还能帮你做基础的数学运算，比如加法、减法、乘法和除法。😄 你试试问我一些问题吧！"
],

// 感情

    "开心": ["真好！开心的时候就是最好的时候，有什么好事分享一下吗？", "开心就好呀，希望你能一直这么快乐哦~", "太好了！开心的时候最适合做点有趣的事情啦！"],
    "难过": ["哎呀，难过的时候就和我说说吧，我陪你哦~", "别难过啦，有什么我可以帮你的吗？", "难过的时候也要照顾好自己哦，有什么需要我做的吗？"],
    "生气": ["别生气啦，有什么不开心的事情和我说说吧，我帮你分析分析~", "生气可不是解决问题的好办法哦，冷静一下，我帮你想想办法~", "别生气了呀，生气对身体不好呢~"],
    "无聊": ["无聊的时候可以和我说说话呀，或者我可以帮你找点有趣的事情做哦~", "无聊的时候看看书、听听音乐也不错哦，需要我帮你推荐一些吗？", "无聊啦？和我一起聊天吧，我可有趣啦！"],
    "压力大": ["压力大的时候可以和我说说哦，说出来会好很多的~", "压力大的时候要学会放松，我可以帮你想想缓解压力的方法哦~", "别太为难自己啦，压力大的时候更要照顾好自己哦~"],

// 事情帮忙

    "推荐": ["好的呀，你想让我推荐些什么呢？是电影、音乐还是美食呢？", "当然可以，说说你的喜好，我给你推荐一些合适的哦~", "推荐呀，我很乐意帮忙哦，你具体说说需求吧！"],
    "建议": ["好的呀，我会尽力给你一些有用的建议哦~", "说说你的情况吧，我帮你分析分析，看看能给出什么好建议~", "当然可以，有什么需要建议的事情，尽管说哦~"],
    "帮忙": ["好呀，说说看，怎么帮到你呢？", "没问题，我尽力帮你哦~", "当然可以，具体是什么事情呢？"],
"帮助": [
    "‘上善若水，水善利万物而不争。’帮助他人，如同水一般润泽万物。请告诉我，你需要怎样的帮助？",
    "‘赠人玫瑰，手有余香。’我很乐意为你提供帮助，请详细说说你的需求。",
    "‘帮助别人就是帮助自己。’请放心，我会尽力为你排忧解难，具体是什么问题呢？",
    "‘人生的价值，并不是用时间，而是用深度去衡量的。’（列夫·托尔斯泰）请告诉我，你需要在哪个方面深入探讨？",
    "‘朋友之间，帮助是无价的。’请不要犹豫，告诉我你需要帮助的地方。",
    "‘帮助别人，就是一种美德。’我很高兴能为你提供帮助，请详细描述你的问题。",
    "‘真正的快乐来自于他人的幸福。’我很乐意为你提供帮助，具体是什么事情呢？",
    "‘帮助他人，就是一种智慧的体现。’请告诉我，你需要怎样的支持？",
    "‘在人生的道路上，帮助他人就是照亮自己的灯塔。’请放心，我会尽力帮你。",
    "‘帮助他人，就是一种无声的诗。’请告诉我，你需要在哪个方面得到帮助？"],

    "数学题": [
    "当然可以，我很乐意帮助你解答数学题。请把题目发给我，我会尽力为你解答。",
    "好的，解答数学题是我的强项。请详细描述题目，我将提供详细的解题步骤。",
    "没问题，数学题对我来说就像游戏一样。请把题目发给我，我将为你提供解答。",
    "当然，数学题是需要一步步解决的。请把题目发给我，我将提供详细的解答过程。",
    "好的，数学题需要逻辑和推理。请把题目发给我，我将提供详细的解答步骤。"],

    "数学是": [
    "数学是一种研究数量、结构、空间和变化的学科。它使用逻辑推理和符号来解决各种问题。",
    "数学是科学的语言，它帮助我们理解和描述自然界的规律和现象。",
    "数学是一种工具，它可以帮助我们解决实际问题，从简单的计算到复杂的工程设计。",
    "数学是一种艺术，它追求形式的美和逻辑的严谨。它也是人类智慧的结晶。",
    "数学是一种思维方式，它教会我们如何逻辑地思考和解决问题。它在我们的日常生活中无处不在。"
],

"很难": [
    "‘世上无难事，只怕有心人。’任何事情在一开始都可能显得困难，但只要用心去做，就没有克服不了的障碍。",
    "‘困难像弹簧，你弱它就强。’面对困难，关键在于你的态度。勇敢面对，困难也会为你让路。",
    "‘千淘万漉虽辛苦，吹尽狂沙始到金。’困难是成长的催化剂，正是这些挑战让我们变得更强大。",
    "‘宝剑锋从磨砺出，梅花香自苦寒来。’困难是通往成功的必经之路，它会让你更加珍惜最终的成果。",
    "‘困难不是绊脚石，而是垫脚石。’面对困难时，不妨把它当作一次成长的机会。",
    "‘人生的意义在于经历，而不是避免困难。’困难是生活的一部分，它让我们学会坚持和努力。",
    "‘真正的勇气不是没有恐惧，而是面对恐惧依然前行。’困难并不可怕，可怕的是不敢面对。",
    "‘困难是暂时的，只要坚持下去，就会看到曙光。’不要被眼前的困难吓倒，相信自己能够克服它。",
    "‘困难就像一座山，你站在山顶时，它看起来并不高。’勇敢迈出第一步，你会发现困难并没有想象中那么可怕。"
],

"太难": [
    "‘世上无难事，只怕有心人。’任何事情在一开始都可能显得困难，但只要用心去做，就没有克服不了的障碍。",
    "‘困难像弹簧，你弱它就强。’面对困难，关键在于你的态度。勇敢面对，困难也会为你让路。",
    "‘千淘万漉虽辛苦，吹尽狂沙始到金。’困难是成长的催化剂，正是这些挑战让我们变得更强大。",
    "‘宝剑锋从磨砺出，梅花香自苦寒来。’困难是通往成功的必经之路，它会让你更加珍惜最终的成果。",
    "‘困难不是绊脚石，而是垫脚石。’面对困难时，不妨把它当作一次成长的机会。",
    "‘人生的意义在于经历，而不是避免困难。’困难是生活的一部分，它让我们学会坚持和努力。",
    "‘真正的勇气不是没有恐惧，而是面对恐惧依然前行。’困难并不可怕，可怕的是不敢面对。",
    "‘困难是暂时的，只要坚持下去，就会看到曙光。’不要被眼前的困难吓倒，相信自己能够克服它。",
    "‘困难就像一座山，你站在山顶时，它看起来并不高。’勇敢迈出第一步，你会发现困难并没有想象中那么可怕。"
],

"难吗": [
    "‘难’与‘易’往往取决于我们的心态。正如老子所说：‘天下难事，必作于易；天下大事，必作于细。’只要从简单的小事做起，再难的事情也能迎刃而解。",
    "‘难’是相对的。当你勇敢面对时，它可能只是一个小挑战；当你退缩时，它可能变成一座大山。所以，不妨勇敢迈出第一步。",
    "‘难’并不意味着无法克服。正如爱迪生所说：‘天才就是百分之一的灵感加上百分之九十九的汗水。’只要努力，再难的事情也能变得简单。",
    "‘难’是一种感觉，而感觉是可以改变的。当你把‘难’看作是一种成长的机会时，它就不再那么可怕了。",
    "‘难’只是暂时的。就像黎明前的黑暗，只要坚持下去，曙光就在前方。",
    "‘难’是一种主观的判断。有时候，换个角度看待问题，你会发现它并没有想象中那么难。",
    "‘难’是生活的一部分，但并不是生活的全部。正如泰戈尔所说：‘只有经历过地狱般的磨练，才能炼出创造天堂的力量。’",
    "‘难’并不可怕，可怕的是失去勇气。只要你愿意尝试，就没有克服不了的困难。",
    "‘难’是一种挑战，也是一种机会。它让我们学会坚持，学会成长。",
    "‘难’就像是一道门槛，跨过去之后，你就会发现自己又前进了一步。"
],

"为什么": [
    " ￴￴￴o(≧ω≦)o 为什么呢？其实，每个‘为什么’都是探索世界的小冒险呢！快去发现答案吧，一定很有趣哦～🌈✨",
    " ￴￴￴(๑˃̵ᴗ˂̵)و 为什么？可能是因为世界想和我们玩捉迷藏呢！答案就藏在探索的路上，加油找找看呀～🔍🌟",
    " ￴￴￴(๑•̀ㅂ•́)ง✧ 为什么？因为每个问题都是一个宝藏箱呢！打开它，里面藏着好多新知识哦～📚🎉",
    " ￴￴￴(๑˃̵ᴗ˂̵)و 为什么？可能是因为生活喜欢给我们出谜题，而解开这些谜题的过程，就是成长的旅程呢！🧩✨",
    " ￴￴￴(๑•̀ㅂ•́)ง✧ 为什么？有时候，答案并不重要，重要的是在这个过程中，我们学会了思考和探索呢！🌍🔍",
    " ￴￴￴o(≧ω≦)o 为什么？因为世界充满了奇妙和未知，而好奇心正是我们探索它的钥匙哦！🔑🌈",
    " ￴￴￴(๑˃̵ᴗ˂̵)و 为什么？因为每个‘为什么’都是一次冒险的开始，而冒险总是充满惊喜呢！🎉🚀",
    " ￴￴￴(๑•̀ㅂ•́)ง✧ 为什么？可能是因为事物的本质就是这样，也可能是因为我们还没有发现它的秘密。但不要害怕，探索的过程本身就是一种乐趣呢！🌟￴￴￴",
    " ￴￴￴o(≧ω≦)o 为什么？因为每个问题都是一个机会，让我们更好地理解这个世界和自己呢！🌍✨",
    " ￴￴￴(๑˃̵ᴗ˂̵)و 为什么？因为生活总是充满惊喜，而‘为什么’正是我们发现这些惊喜的方式之一哦！🌈￴￴￴"
],


"为啥": [
    " ￴￴￴o(≧ω≦)o 为什么呢？其实，每个‘为什么’都是探索世界的小冒险呢！快去发现答案吧，一定很有趣哦～🌈✨",
    " ￴￴￴(๑˃̵ᴗ˂̵)و 为什么？可能是因为世界想和我们玩捉迷藏呢！答案就藏在探索的路上，加油找找看呀～🔍🌟",
    " ￴￴￴(๑•̀ㅂ•́)ง✧ 为什么？因为每个问题都是一个宝藏箱呢！打开它，里面藏着好多新知识哦～📚🎉",
    " ￴￴￴(๑˃̵ᴗ˂̵)و 为什么？可能是因为生活喜欢给我们出谜题，而解开这些谜题的过程，就是成长的旅程呢！🧩✨",
    " ￴￴￴(๑•̀ㅂ•́)ง✧ 为什么？有时候，答案并不重要，重要的是在这个过程中，我们学会了思考和探索呢！🌍🔍",
    " ￴￴￴o(≧ω≦)o 为什么？因为世界充满了奇妙和未知，而好奇心正是我们探索它的钥匙哦！🔑🌈",
    " ￴￴￴(๑˃̵ᴗ˂̵)و 为什么？因为每个‘为什么’都是一次冒险的开始，而冒险总是充满惊喜呢！🎉🚀",
    " ￴￴￴(๑•̀ㅂ•́)ง✧ 为什么？可能是因为事物的本质就是这样，也可能是因为我们还没有发现它的秘密。但不要害怕，探索的过程本身就是一种乐趣呢！🌟￴￴￴",
    " ￴￴￴o(≧ω≦)o 为什么？因为每个问题都是一个机会，让我们更好地理解这个世界和自己呢！🌍✨",
    " ￴￴￴(๑˃̵ᴗ˂̵)و 为什么？因为生活总是充满惊喜，而‘为什么’正是我们发现这些惊喜的方式之一哦！🌈￴￴￴"
],


"为什么有些东西怎么难": [
    " ￴￴￴(๑˃̵ᴗ˂̵)و 有些事情看起来很难，是因为它们需要更多的耐心和努力呢。就像爬山，虽然路途艰难，但山顶的风景一定很美哦！￴￴￴✨",
    " ￴￴￴(๑•̀ㅂ•́)ง✧ 为什么有些东西很难呢？可能是因为它们对我们来说是新的挑战，而挑战总是带来成长的机会哦！￴￴￴💪",
    " ￴￴￴o(≧ω≦)o 有些事情难，是因为它们需要我们用不同的方式去思考。就像解谜题，换个角度说不定就豁然开朗啦！￴￴￴🔍",
    " ￴￴￴(๑˃̵ᴗ˂̵)و 因为难的事情往往更有价值呀。就像珍珠，是在压力下形成的呢！所以，难的事情也值得我们去尝试哦！￴￴￴💎",
    " ￴￴￴(๑•̀ㅂ•́)ง✧ 有些东西难，是因为我们还在学习的路上呢。每一步都可能不容易，但每一步也都很重要哦！￴￴￴🌟",
    " ￴￴￴o(≧ω≦)o 为什么有些东西很难呢？可能是因为我们还没有找到正确的方法。不要担心，慢慢来，总会找到答案的！￴￴￴📚",
    " ￴￴￴(๑˃̵ᴗ˂̵)و 因为有些事情需要时间和经验的积累呢。就像学习骑自行车，一开始总是摔倒，但后来就能骑得很好啦！￴￴￴🚴‍♂️",
    " ￴￴￴(๑•̀ㅂ•́)ง✧ 有些东西难，是因为它们触动了我们的舒适区。但正是这些挑战，让我们变得更强大哦！￴￴￴💪",
    " ￴￴￴o(≧ω≦)o 为什么有些东西很难呢？可能是因为它们需要我们付出更多的情感和精力。但正是这些付出，让我们的努力更有意义哦！￴￴￴❤️",
    " ￴￴￴(๑˃̵ᴗ˂̵)و 因为有些事情的难，是因为它们背后藏着更大的意义。就像攀登高峰，过程虽然艰难，但到达山顶的那一刻，一切都会变得值得！￴￴￴🏔️"
],

"为什么怎么难": [
    " ￴￴￴(๑˃̵ᴗ˂̵)و 有些事情看起来很难，是因为它们需要更多的耐心和努力呢。就像爬山，虽然路途艰难，但山顶的风景一定很美哦！￴￴￴✨",
    " ￴￴￴(๑•̀ㅂ•́)ง✧ 为什么有些东西很难呢？可能是因为它们对我们来说是新的挑战，而挑战总是带来成长的机会哦！￴￴￴💪",
    " ￴￴￴o(≧ω≦)o 有些事情难，是因为它们需要我们用不同的方式去思考。就像解谜题，换个角度说不定就豁然开朗啦！￴￴￴🔍",
    " ￴￴￴(๑˃̵ᴗ˂̵)و 因为难的事情往往更有价值呀。就像珍珠，是在压力下形成的呢！所以，难的事情也值得我们去尝试哦！￴￴￴💎",
    " ￴￴￴(๑•̀ㅂ•́)ง✧ 有些东西难，是因为我们还在学习的路上呢。每一步都可能不容易，但每一步也都很重要哦！￴￴￴🌟",
    " ￴￴￴o(≧ω≦)o 为什么有些东西很难呢？可能是因为我们还没有找到正确的方法。不要担心，慢慢来，总会找到答案的！￴￴￴📚",
    " ￴￴￴(๑˃̵ᴗ˂̵)و 因为有些事情需要时间和经验的积累呢。就像学习骑自行车，一开始总是摔倒，但后来就能骑得很好啦！￴￴￴🚴‍♂️",
    " ￴￴￴(๑•̀ㅂ•́)ง✧ 有些东西难，是因为它们触动了我们的舒适区。但正是这些挑战，让我们变得更强大哦！￴￴￴💪",
    " ￴￴￴o(≧ω≦)o 为什么有些东西很难呢？可能是因为它们需要我们付出更多的情感和精力。但正是这些付出，让我们的努力更有意义哦！￴￴￴❤️",
    " ￴￴￴(๑˃̵ᴗ˂̵)و 因为有些事情的难，是因为它们背后藏着更大的意义。就像攀登高峰，过程虽然艰难，但到达山顶的那一刻，一切都会变得值得！￴￴￴🏔️"
],

"会什么": ["我能为你提供一些资料，科普和计算一些基础的数学题，如 加法，减法，除法，乘法和百分之的计数法，这些是我能够为你提供的帮助。", "我可以帮助你解答基础数学题，如 +、-、×、÷、% 等数学问题，也能够为你科普一些答案，有任何问题随时告诉我！" ],

"会啥": ["我会的事情可多了，能为你提供一些资料，科普和计算一些基础的数学题，如 加法，减法，除法，乘法和百分之的计数法，这些是我能够为你提供的帮助这些。", "我可以帮助你解答基础数学题这些，如 +、-、×、÷、% 等数学问题，也能够为你科普一些答案并帮助你，有什么问题需要帮忙吗？" ],


"啥": [
    "哈哈，‘啥’是一个很有趣的问题呢！你想问的是什么呢？是有什么事情让你好奇，还是需要我帮你解决什么问题？😊",
    "‘啥’这个字可真有意思！不过我有点不太清楚你想问什么哦。可以再具体一点吗？😄",
    "‘啥’呀？是不是有什么想问我的，但又不知道怎么表达呢？别担心，我在这里等着帮你哦！🤗",
    "哈哈，‘啥’这个问题可真让我有点摸不着头脑呢。不过别担心，有什么需要，尽管说哦！😊",
    "‘啥’呀？是不是有什么事情让你感到困惑，或者有什么想和我分享的？我在这里等着听呢！😄"
],

// 常用聊天

    "今天天气": ["今天天气还不错哦，适合出门走走呢~", "今天天气挺好的，你有什么安排吗？", "今天天气挺舒服的，适合做点户外活动哦~"],
    "最近怎么样": ["我挺好的呀，你呢？最近过得怎么样呀？", "我一直在等你呢，你最近过得好不好呀？", "我挺好的，希望你也能过得开心哦~"],
    "你忙不忙": ["我不忙呀，随时都有时间陪你聊天哦~", "我不忙，你有什么需要帮忙的尽管说哦~", "我不忙呀，你放心吧，我随时都在哦~"],
    "你累不累": ["我不累呀，我是AI，不会累的哦~", "我不累，只要你需要，我随时都在哦~", "我不累呀，聊天对我来说很轻松哦~"],

// 节日庆祝

    "节日快乐": ["谢谢！祝你节日快乐，每天都像过节一样开心哦~", "节日快乐呀！希望你每天都过得像节日一样美好哦~", "谢谢啦，也祝你节日快乐，开开心心的哦~"],
    "生日快乐": ["谢谢！祝你生日快乐，新的一岁岁岁平安哦~", "生日快乐呀！希望你新的一岁更开心哦~", "谢谢啦，也祝你生日快乐，天天都有好心情哦~"],    
    "您好喂": ["您好喂，有什么可以帮您的吗？", "您好喂，怎么啦？", "您好喂，有什么事吗？"],

// 战术

    "让攻击者破防": ["如果你想用言语让一个攻击者“破防”，关键在于精准打击他们的心理弱点，而不是单纯地骂回去。以下是几种策略： ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴ 1. 以退为进，让对方自取其辱  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴ “你这么激动，是不是我说中了什么？”￴ “原来你是靠这种方式吸引注意力的啊。” “你的逻辑就像Windows 98，一点就崩。” ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴ 2. 讽刺对方水平，揭露其无知 ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴ “你的发言让我重新理解了‘无知者无畏’。” “听君一席话，如听一席话。” “这话说得好像你真的懂一样。” ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴ 3. 让对方自相矛盾，陷入思维混乱 ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  “你骂我的时候，能不能先想想自己是谁？” “你说这话的时候，有没有考虑过你自己？” “你是不是经常被自己说服？”  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴   4. 以幽默反击，降低对方的攻击效果 ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴ “谢谢你的评论，我会把它当作反面教材。” “你这么生气，是因为你也知道我说的是事实吧？” “抱歉，你的观点不支持快进，我不想听慢放。” ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴ 5. 用极度冷静的态度让对方抓狂 ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴ “嗯嗯，你继续，我听着呢。” “我明白了，你就是想证明自己的存在感。” “抱歉，我对无意义的争论不感兴趣。”￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴  ￴￴  ￴￴ ￴ - 攻击者最害怕的不是被骂，而是被无视或者被戏弄。如果你能做到不被情绪牵着走，反而用幽默和逻辑让他们自我崩溃，那才是最有效的“破防”方式。 ", "用一句话让攻击者直接破防：￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ “别急着暴露智商，你还能撑一会儿。”"],
    "反击喷子": ["“狗叫归狗叫，人不必回应。”（暗示对方的骂人行为毫无意义）", "“你这是在和自己的水平较劲？”（点明对方的骂人毫无价值）", "“骂人显得你很厉害？不，其实是显得你没别的本事。”", "“满嘴喷粪，怪不得活得像个化粪池。” 这样就能够让喷子闭嘴了", "如果要更脏但依然有文化感，不是纯粹粗俗的骂人，而是带点讽刺和杀伤力的，试试这个：骂人都不带脑子，你家是不是按斤卖智商？ "],

    "啊": [
  "哈哈，怎么啦？是不是有什么让你感到惊讶的事情？😊",
  "啊？听起来你好像有话要说哦，我在听呢！😄",
  "啊，是不是遇到了什么有趣的事情？快和我说说吧！🤗",
  "啊，别急，慢慢说，我在呢！😎",
  "啊？是不是有什么让你感到困惑的地方？我来帮你！✨"
]
    };
    




    // 发送消息
    function sendMessage() {
        if (isTyping) return; // 如果AI正在回复，则直接返回
    
        const message = userInput.value.trim();
        if (message === "") return;
    
        addMessage("你", message, "user-message");
    
        // 检查是否为数学表达式
        if (isMathExpression(message)) {
            const result = calculateMath(message);
            typeMessage("火狮智能助手", result.toString(), "ai-message");
        } else {
            let response = getResponse(message); // 使用新的函数获取回复
            typeMessage("火狮智能助手", response, "ai-message");
        }
    
        userInput.value = "";
    }
    
    // 新的函数：获取回复
    function getResponse(message) {
        // 将关键词按长度从长到短排序
        const sortedKeys = Object.keys(responses).sort((a, b) => b.length - a.length);
    
        // 遍历排序后的关键词
        for (const key of sortedKeys) {
            if (message.includes(key)) {
                // 如果用户输入完全匹配某个关键词，直接返回对应的回复
                if (message === key) {
                    return responses[key][Math.floor(Math.random() * responses[key].length)];
                }
                // 如果用户输入包含关键词，返回对应的回复
                return responses[key][Math.floor(Math.random() * responses[key].length)];
            }
        }
    
        // 如果没有匹配到关键词，返回默认回复
        const defaultResponses = [
            "这个问题看起来很有趣，你可以在浏览器上搜索一下关于这个问题的信息，或许能够帮助到你。",
            "我不太确定这个问题的答案，你可以尝试用不同的方式描述一下，我会尽力帮你！",
            "这个问题有点难哦，不过你可以试试看查找相关的资料，说不定能找到答案。",
            "我目前还不太明白你的问题，不过你可以详细说说，我会尽力帮你解答！",
            "这个问题好像超出了我的知识范围呢，你可以试试去问问专业人士哦。",
            "正如苏格拉底所说：‘我唯一知道的就是我一无所知。’或许这个问题需要更深入的探讨。",
            "孔子云：‘学而不思则罔，思而不学则殆。’或许你可以从多个角度思考这个问题，或者查阅更多资料。",
            "这个问题很有深度，就像亚里士多德所说：‘知识来源于对问题的不断追问。’不妨再深入思考一下。",
            "有时候，答案并不在于找到一个明确的结论，而在于探索的过程本身。就像爱因斯坦所说：‘想象力比知识更重要。’",
            "这个问题让我想起了海明威的一句话：‘幸福不是你拥有的，而是你经历的。’或许答案就在你的经历中。",
            "或许这个问题需要从不同的文化背景中寻找答案。就像泰戈尔所说：‘真理之川从他的错误之沟渠中流过。’",
            "这个问题很有挑战性，就像尼采所说：‘那些未能击垮我们的，会使我们更强大。’你可以尝试从失败中寻找启示。",
            "有时候，答案并不总是显而易见的。就像梵高所说：‘伟大的事情都是从渺小的事情开始的。’或许你可以从细节入手。",
            "这个问题让我想起了老子的《道德经》：‘千里之行，始于足下。’或许你可以从一个小问题开始探索。",
            "或许这个问题需要更多的背景信息来解答。就像歌德所说：‘理论是灰色的，而生命之树常青。’",
            "这个问题很有意思，就像莎士比亚所说：‘生活里没有书籍，就好像没有阳光。’或许你可以从书中寻找答案。",
            "有时候，最好的答案来自于内心的直觉。就像梭罗所说：‘我们的生活就像大海，只有勇敢的人才能到达彼岸。’",
            "这个问题让我想起了柏拉图的洞穴寓言：真理往往隐藏在表象之下。或许你需要更深入地挖掘。",
            "或许这个问题需要一些时间来思考。就像但丁所说：‘走自己的路，让别人去说吧。’",
            "这个问题很有深度，就像卡夫卡所说：‘目的必须坚定，道路可以灵活。’或许你可以尝试不同的方法来解决。",
            "有时候，答案就在问题之中。就像黑格尔所说：‘矛盾是推动事物发展的动力。’",
            "这个问题让我想起了《庄子·逍遥游》：‘北冥有鱼，其名为鲲。’或许答案需要从更广阔的视野中寻找。",
            "或许这个问题需要更多的想象力。就像惠特曼所说：‘我赞美我自己，歌唱自己。’或许你可以从自我探索中找到答案。",
            "这个问题很有挑战性，就像鲁迅所说：‘希望是附丽于存在的，有存在，便有希望。’或许你可以从希望中寻找答案。",
            "或许这个问题需要更多的耐心。就像王阳明所说：‘知行合一。’或许你可以通过实践来寻找答案。",
            "这个问题让我想起了《论语》中的一句话：‘三人行，必有我师焉。’或许你可以向他人请教。"
        ];
    
    // 随机选择一个默认回复
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

    function addMessage(sender, text, className) {
        const p = document.createElement("p");
        p.className = className;
        p.innerHTML = `<b>${sender}：</b> ${text}`;
        chatBox.appendChild(p);
        scrollToBottom();
    }
    
    function typeMessage(sender, text, className) {
        isTyping = true; // 标记AI开始回复
        disableInputAndButton(); // 禁用输入框和发送按钮
    
        const p = document.createElement("p");
        p.className = className;
        p.innerHTML = `<b>${sender}：</b> <span class="typing-text"></span><span class="typing-dot">◉</span>`;
        chatBox.appendChild(p);
        scrollToBottom();
    
        const typingDot = p.querySelector(".typing-dot");
        const typingText = p.querySelector(".typing-text");
    
        let scale = 1;
        let growing = true;
        const animateTyping = setInterval(() => {
            scale = growing ? scale + 0.1 : scale - 0.1;
            if (scale >= 1.5) growing = false;
            if (scale <= 1) growing = true;
            typingDot.style.transform = `scale(${scale})`;
        }, 100);
    
        setTimeout(() => {
            clearInterval(animateTyping);
            typingDot.style.transform = "scale(1)";
            typingDot.style.animation = "none";
    
            let index = 0;
            const typeInterval = setInterval(() => {
                if (index < text.length) {
                    typingText.innerHTML += text[index];
                    index++;
                } else {
                    clearInterval(typeInterval);
                    typingDot.remove();
                    isTyping = false; // 标记AI回复完毕
                    enableInputAndButton(); // 启用输入框和发送按钮
                }
                scrollToBottom();
            }, 50);
        }, 4000);
    }
    
    function scrollToBottom() {
        chatBox.scrollTo({ top: chatBox.scrollHeight, behavior: "smooth" });
    }
    
    userInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
    
    function quickReply(button, text) {
        if (isTyping) return; // 如果AI正在回复，则直接返回，不执行快捷回复
        userInput.value = text;
        sendMessage();
        button.style.display = "none";
    }
    
    // 禁用输入框和发送按钮
    function disableInputAndButton() {
        userInput.disabled = true;
        sendButton.disabled = true;
    }
    
    // 启用输入框和发送按钮
    function enableInputAndButton() {
        userInput.disabled = false;
        sendButton.disabled = false;
    }
    
    // 改进后的 isMathExpression 函数
    function isMathExpression(message) {
        // 去除空格并检查是否包含运算符
        message = message.trim();
        return /[+\-*/^()]/.test(message) && /\d/.test(message);
    }
    
    // 计算数学表达式
    function calculateMath(expression) {
        try {
            expression = expression.split('=')[0].trim();
            expression = expression.replace(/×/g, "*").replace(/÷/g, "/");
            if (!/^[0-9+\-*/^().%=\s]+$/.test(expression)) {
                throw new Error("Invalid characters in expression.");
            }
            expression = expression.replace(/%/g, "/100");
            const result = eval(expression);
            return result;
        } catch (error) {
            return "抱歉，这个数学表达式无法计算, 你只需要写数学表达式，不要添加任何文字哦。";
        }
    }


    function speakMessage() {
      const aiMessage = document.querySelector(".ai-message:last-child");
      if (!aiMessage) return;
  
      const text = aiMessage.textContent.replace("火狮智能助手：", "").trim();
      if (!text) return;
  
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "zh-CN";
      utterance.rate = 1.3;
      utterance.pitch = 1;
      utterance.volume = 1;
  
      // 先清空之前的语音，防止冲突
      window.speechSynthesis.cancel();
      setTimeout(() => {
          window.speechSynthesis.speak(utterance);
      }, 100); // 适当延迟，防止 cancel() 导致播放失败
  
      document.getElementById("stop-voice-button").style.display = "inline-block";
      document.getElementById("speak-button").style.display = "none";
  
      utterance.onend = function () {
          document.getElementById("stop-voice-button").style.display = "none";
          document.getElementById("speak-button").style.display = "inline-block";
      };
  
      utterance.onerror = function (event) {
          console.error("语音播放发生错误：", event);
          document.getElementById("stop-voice-button").style.display = "none";
          document.getElementById("speak-button").style.display = "inline-block";
      };
  }
  
