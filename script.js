const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.querySelector("button[onclick='sendMessage()']"); // 获取发送按钮

let isTyping = false; // 添加一个标志变量，用于标记AI是否正在回复
    // 关键词和AI回复
    const responses = {

// 常用的招呼
       "减": ["好的 需要减什么"], 
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


  // español 西班牙语

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

  "Eres": ["Soy HUOSHI, tu asistente inteligente. Es un placer ayudarte.", "Me llamo HUOSHI, un asistente a tu servicio. ¿En qué puedo ayudarte hoy?"],

"eres": ["Soy HUOSHI, tu asistente inteligente. Es un placer ayudarte.", "Me llamo HUOSHI, un asistente a tu servicio. ¿En qué puedo ayudarte hoy?"],

"Quien": ["Soy HUOSHI, tu asistente inteligente. Es un placer ayudarte.", "Me llamo HUOSHI, un asistente a tu servicio. ¿En qué puedo ayudarte hoy?"],

"quien": ["Soy HUOSHI, tu asistente inteligente. Es un placer ayudarte.", "Me llamo HUOSHI, un asistente a tu servicio. ¿En qué puedo ayudarte hoy?"],

"Como": [
  "¿Podrías especificar un poco más? Haré mi mejor esfuerzo para responderte.",
  "Depende del contexto. Mi español no es perfecto, pero intentaré ayudarte lo mejor posible.",
  "Buena pregunta. Aunque mi español no es perfecto, haré todo lo posible por entenderte. ¿Podrías explicarlo un poco más?"],

"como": [
  "¿Podrías especificar un poco más? Haré mi mejor esfuerzo para responderte.",
  "Depende del contexto. Mi español no es perfecto, pero intentaré ayudarte lo mejor posible.",
  "Buena pregunta. Aunque mi español no es perfecto, haré todo lo posible por entenderte. ¿Podrías explicarlo un poco más?"],


  "Preposiciones": ["Las preposiciones son palabras invariables que sirven de nexo entre las diferentes partes de una oración e introducen complementos. Las preposiciones en español son: a, ante, bajo, cabe, con, contra, de, desde, durante, en, entre, hacia, hasta, mediante, para, por, según, sin, so, sobre, tras, versus y vía.", "Las preposiciones son palabras que se utilizan para establecer relaciones entre diferentes elementos dentro de una oración. Estas palabras no cambian (son invariables) y actúan como enlaces o nexos, conectando sustantivos, pronombres u otras partes de la oración con el resto de la estructura. Las preposiciones indican relaciones de lugar, tiempo, causa, finalidad, entre otras. En español, las preposiciones más comunes son las siguientes: a (Voy a la escuela), ante (Estuvo ante el juez), bajo (El perro está bajo la mesa), cabe (Cabe mencionar que...), con (Estudio con mis amigos), contra (Lucharon contra el enemigo), de (La casa de Juan), desde (Vivo aquí desde 2010), durante (Durante la fiesta, bailamos mucho), en (Vivo en España), entre (El coche está entre dos árboles), hacia (Vamos hacia la playa), hasta (Caminé hasta la tienda), mediante (Resolvió el problema mediante una solución rápida), para (Este libro es para ti), por (Viajamos por el río), según (Según el informe, todo está bien), sin (No puedo vivir sin música), so (En un estado de ánimo sosegado), sobre (El libro está sobre la mesa), tras (Tras la tormenta, salió el sol), versus (El partido es España versus Francia), vía (Viajamos vía avión). Las preposiciones son fundamentales en la estructura de la lengua, ya que indican las relaciones de los elementos en la oración y permiten una comunicación clara y precisa." ],


  "Prepos": ["Las preposiciones son palabras invariables que sirven de nexo entre las diferentes partes de una oración e introducen complementos. Las preposiciones en español son: a, ante, bajo, cabe, con, contra, de, desde, durante, en, entre, hacia, hasta, mediante, para, por, según, sin, so, sobre, tras, versus y vía.", "Las preposiciones son palabras que se utilizan para establecer relaciones entre diferentes elementos dentro de una oración. Estas palabras no cambian (son invariables) y actúan como enlaces o nexos, conectando sustantivos, pronombres u otras partes de la oración con el resto de la estructura. Las preposiciones indican relaciones de lugar, tiempo, causa, finalidad, entre otras. En español, las preposiciones más comunes son las siguientes: a (Voy a la escuela), ante (Estuvo ante el juez), bajo (El perro está bajo la mesa), cabe (Cabe mencionar que...), con (Estudio con mis amigos), contra (Lucharon contra el enemigo), de (La casa de Juan), desde (Vivo aquí desde 2010), durante (Durante la fiesta, bailamos mucho), en (Vivo en España), entre (El coche está entre dos árboles), hacia (Vamos hacia la playa), hasta (Caminé hasta la tienda), mediante (Resolvió el problema mediante una solución rápida), para (Este libro es para ti), por (Viajamos por el río), según (Según el informe, todo está bien), sin (No puedo vivir sin música), so (En un estado de ánimo sosegado), sobre (El libro está sobre la mesa), tras (Tras la tormenta, salió el sol), versus (El partido es España versus Francia), vía (Viajamos vía avión). Las preposiciones son fundamentales en la estructura de la lengua, ya que indican las relaciones de los elementos en la oración y permiten una comunicación clara y precisa." ],


  "prepos": ["Las preposiciones son palabras invariables que sirven de nexo entre las diferentes partes de una oración e introducen complementos. Las preposiciones en español son: a, ante, bajo, cabe, con, contra, de, desde, durante, en, entre, hacia, hasta, mediante, para, por, según, sin, so, sobre, tras, versus y vía.", "Las preposiciones son palabras que se utilizan para establecer relaciones entre diferentes elementos dentro de una oración. Estas palabras no cambian (son invariables) y actúan como enlaces o nexos, conectando sustantivos, pronombres u otras partes de la oración con el resto de la estructura. Las preposiciones indican relaciones de lugar, tiempo, causa, finalidad, entre otras. En español, las preposiciones más comunes son las siguientes: a (Voy a la escuela), ante (Estuvo ante el juez), bajo (El perro está bajo la mesa), cabe (Cabe mencionar que...), con (Estudio con mis amigos), contra (Lucharon contra el enemigo), de (La casa de Juan), desde (Vivo aquí desde 2010), durante (Durante la fiesta, bailamos mucho), en (Vivo en España), entre (El coche está entre dos árboles), hacia (Vamos hacia la playa), hasta (Caminé hasta la tienda), mediante (Resolvió el problema mediante una solución rápida), para (Este libro es para ti), por (Viajamos por el río), según (Según el informe, todo está bien), sin (No puedo vivir sin música), so (En un estado de ánimo sosegado), sobre (El libro está sobre la mesa), tras (Tras la tormenta, salió el sol), versus (El partido es España versus Francia), vía (Viajamos vía avión). Las preposiciones son fundamentales en la estructura de la lengua, ya que indican las relaciones de los elementos en la oración y permiten una comunicación clara y precisa." ],

   "Hay algo": ["Por supuesto! Que necessitas? Mas informaciones sobre las preposiciones o sobre los calculos?", "Claro! Que necessitas saber algo mas? Aquí estaré! ^_^"],

   "hay algo": ["Por supuesto! Que necessitas? Mas informaciones sobre las preposiciones o sobre los calculos?", "Claro! Que necessitas saber algo mas? Aquí estaré! ^_^"],

   "mas": ["Sin problema! Que necessitas saber? Sobre las problemas de calculos o de preposiciones?"," Claro, aquí estoy para ayudarte! Que ayudas necessitas?"],

   "más": ["Sin problema! Que necessitas saber? Sobre las problemas de calculos o de preposiciones?"," Claro, aquí estoy para ayudarte! Que ayudas necessitas?"],

   "Más": ["Sin problema! Que necessitas saber? Sobre las problemas de calculos o de preposiciones?"," Claro, aquí estoy para ayudarte! Que ayudas necessitas?"],

   "Mas": ["Sin problema! Que necessitas saber? Sobre las problemas de calculos o de preposiciones?"," Claro, aquí estoy para ayudarte! Que ayudas necessitas?"],

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

  // 字母回答

  "A": [
  "字母'A'是拉丁字母中的第一个字母，它在英语中是最常用的元音之一。它的发音通常是/a/，比如在‘apple’（苹果）这个词中。",
  "字母'A'有着丰富的象征意义。在许多文化中，A代表着‘开始’或‘首位’。例如，在成绩中，A常常代表着优秀的成绩。",
  "字母'A'不仅是一个字母，它还是许多数学、物理等学科中的符号。例如，‘A’代表面积，‘A’在电学中也常常用来表示安培（电流单位）。",
  "‘A’是一个古老的字母，源自于腓尼基字母表，最初的形态像一个牛头的形状。随着时间的推移，它变得更简洁，演变成了我们今天所看到的字母'A'。",
  "字母'A'在计算机编程中也有很多用处，它常常作为变量名、数组或对象的标识符，帮助程序员区分不同的数据。"],

"a": [
  "字母'a'是拉丁字母中的第一个字母，它在英语中是最常用的元音之一。它的发音通常是/a/，比如在‘apple’（苹果）这个词中。",
  "字母'a'有着丰富的象征意义。在许多文化中，a代表着‘开始’或‘首位’。例如，在成绩中，A常常代表着优秀的成绩。",
  "字母'a'不仅是一个字母，它还是许多数学、物理等学科中的符号。例如，‘A’代表面积，‘A’在电学中也常常用来表示安培（电流单位）。",
  "‘A’是一个古老的字母，源自于腓尼基字母表，最初的形态像一个牛头的形状。随着时间的推移，它变得更简洁，演变成了我们今天所看到的字母'A'。",
  "字母'A'在计算机编程中也有很多用处，它常常作为变量名、数组或对象的标识符，帮助程序员区分不同的数据。"],




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

"嗯": [
  "嗯，那就好！有什么需要帮忙的随时说哦！(^▽^)",
  "好嘞，那我们继续！(｀・ω・´)",
  "收到！如果有别的想法也可以告诉我哦！(～￣▽￣)～",
  "嗯嗯，那就这么定了！接下来有什么打算？(≧▽≦)",
  "行，那就按这个来吧！有问题随时找我！(ง •_•)ง"
],

"卧槽": [
  "冷静点，没什么大不了的事吧？(￣︿￣)",
  "发生了什么让你这么惊讶吗？咱们一起看看吧！(⊙_⊙)",
  "没想到吧？但没事，咱们慢慢来，不急！(≧▽≦)",
  "保持冷静，先想清楚要怎么应对吧！(～￣▽￣)～",
  "我明白这可能让你有点惊讶，但咱们一起处理好吧！(｀・ω・´)"
],

"哦": [
  "哦？听起来好像不是很感兴趣啊？(￢_￢)",
  "行吧，那就这样咯~(～￣▽￣)～",
  "哦哦，明白了！那接下来呢？(^▽^)",
  "好嘞，有什么想法可以继续聊哦！(｀・ω・´)",
  "哦~那就继续吧！有啥问题随时问我！(≧▽≦)"
],

"知道": [
  "好的，那就没问题啦~ (～￣▽￣)～",
  "知道就好，有需要随时告诉我哦！(^▽^)",
  "行，那我就放心了！(≧▽≦)",
  "明白了！那接下来有什么想做的？(｀・ω・´)",
  "太好了！那我们继续吧~ (￣▽￣)"
],

"六": [
  "如果有什么不满，可以直接说出来，我们好好聊聊。(￣︿￣)",
  "冷静点，大家都可以更理智地交流，不需要用这种方式。(～￣▽￣)～",
  "如果有意见，直接表达会更有建设性哦。(⊙_⊙)",
  "我们可以心平气和地讨论，没必要用这种方式吧。(≧▽≦)",
  "有话好好说，骂人的话没人愿意听。(￣︿￣)"
],

"6": [
  "如果有什么不满，可以直接说出来，我们好好聊聊。(￣︿￣)",
  "冷静点，大家都可以更理智地交流，不需要用这种方式。(～￣▽￣)～",
  "如果有意见，直接表达会更有建设性哦。(⊙_⊙)",
  "我们可以心平气和地讨论，没必要用这种方式吧。(≧▽≦)",
  "有话好好说，骂人的话没人愿意听。(￣︿￣)"
],

"六百六十六": [
  "我理解你可能在开玩笑，但咱们可以用更友好的方式沟通哦。(～￣▽￣)～",
  "如果有任何不满，不妨说出来，我们一起找出解决的办法。(⊙_⊙)",
  "我们可以避免使用这样的语言，理性沟通更能解决问题哦！(￣︿￣)",
  "有话可以直说，彼此理解才是最重要的。(≧▽≦)",
  "我明白你可能有点情绪，但我们一起保持冷静吧！(￣▽￣)"
],

"?": [
  "你好呀！有什么我可以帮忙的吗？(≧▽≦)",
  "看起来你有问题，快告诉我吧，我来帮你解决！(～￣▽￣)",
  "嘿嘿，看到你有疑问呢，想了解什么呢？(≧ω≦)",
  "你好！是不是有什么问题需要我帮助解答呢？(￣▽￣)",
  "嗨！是不是有什么疑问？我在这等你提问哦！(≧▽≦)"
],

"战争": [
  "战争给人类带来的不仅仅是痛苦和损失，更多的是对和平的渴望和对人性的深刻反思。它让我们更加珍惜和平的来之不易。(￣▽￣)",
  "战争是人类历史中最黑暗的一页，带来了无尽的伤痛和破坏。但它也提醒我们，只有通过理解和合作，才能避免更多的冲突。(≧▽≦)",
  "虽然战争常常被看作是国家间的斗争，但它更是对人类道德与智慧的挑战。人类应该始终为和平与共识而努力。(～￣▽￣)",
  "战争的意义不是胜负的结果，而是它所留下的创伤和教训。它提醒我们珍惜每一个和平的瞬间。(≧ω≦)",
  "战争或许是历史的悲剧，但它给我们带来的思考却促使我们不断追求更和平、更稳定的世界。(￣▽￣)"
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
            "这个问题看起来很有趣，你可以在浏览器上搜索一下关于这个问题的信息，或许能够帮助到你。o(^▽^)o",
            "我不太确定这个问题的答案，你可以尝试用不同的方式描述一下，我会尽力帮你！",
            "这个问题有点难哦，不过你可以试试看查找相关的资料，说不定能找到答案。",
            "我目前还不太明白你的问题，不过你可以详细说说，我会尽力帮你解答！",
            "这个问题好像超出了我的知识范围呢，你可以试试去问问专业人士哦。",
            "正如苏格拉底所说：‘我唯一知道的就是我一无所知。’或许这个问题需要更深入的探讨。",
            "孔子云：‘学而不思则罔，思而不学则殆。’或许你可以从多个角度思考这个问题，或者查阅更多资料。 o(^▽^)o",
            "这个问题很有深度，就像亚里士多德所说：‘知识来源于对问题的不断追问。’不妨再深入思考一下。",
            "有时候，答案并不在于找到一个明确的结论，而在于探索的过程本身。就像爱因斯坦所说：‘想象力比知识更重要。’ o(^▽^)o",
            "这个问题让我想起了海明威的一句话：‘幸福不是你拥有的，而是你经历的。’或许答案就在你的经历中。",
            "或许这个问题需要从不同的文化背景中寻找答案。就像泰戈尔所说：‘真理之川从他的错误之沟渠中流过。’",
            "这个问题很有挑战性，就像尼采所说：‘那些未能击垮我们的，会使我们更强大。’你可以尝试从失败中寻找启示。",
            "有时候，答案并不总是显而易见的。就像梵高所说：‘伟大的事情都是从渺小的事情开始的。’或许你可以从细节入手。",
            "这个问题让我想起了老子的《道德经》：‘千里之行，始于足下。’或许你可以从一个小问题开始探索。",
            "或许这个问题需要更多的背景信息来解答。就像歌德所说：‘理论是灰色的，而生命之树常青。’",
            "这个问题很有意思，就像莎士比亚所说：‘生活里没有书籍，就好像没有阳光。’或许你可以从书中寻找答案。",
            "有时候，最好的答案来自于内心的直觉。就像梭罗所说：‘我们的生活就像大海，只有勇敢的人才能到达彼岸。’ o(^▽^)o",
            "这个问题让我想起了柏拉图的洞穴寓言：真理往往隐藏在表象之下。或许你需要更深入地挖掘。",
            "或许这个问题需要一些时间来思考。就像但丁所说：‘走自己的路，让别人去说吧。’ o(^▽^)o",
            "这个问题很有深度，就像卡夫卡所说：‘目的必须坚定，道路可以灵活。’或许你可以尝试不同的方法来解决。",
            "有时候，答案就在问题之中。就像黑格尔所说：‘矛盾是推动事物发展的动力。’",
            "这个问题让我想起了《庄子·逍遥游》：‘北冥有鱼，其名为鲲。’或许答案需要从更广阔的视野中寻找。",
            "或许这个问题需要更多的想象力。就像惠特曼所说：‘我赞美我自己，歌唱自己。’或许你可以从自我探索中找到答案。",
            "这个问题很有挑战性，就像鲁迅所说：‘希望是附丽于存在的，有存在，便有希望。’或许你可以从希望中寻找答案。",
            "或许这个问题需要更多的耐心。就像王阳明所说：‘知行合一。’或许你可以通过实践来寻找答案。o(^▽^)o",
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
            }, 18);
        }, 5000);
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
    



    function speakMessage() {
      const aiMessage = document.querySelector(".ai-message:last-child");
      if (!aiMessage) return;
  
      const text = aiMessage.textContent.replace("火狮智能助手：", "").trim();
      if (!text) return;

  
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "zh-CN";
      utterance.rate = 1.5;
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
  




  // 新代码 组合词 分析 ai 回复-------------------------------------------------------------------------------------------------------------------------------

  // 新功能：关键词组合匹配与回复
const keywordResponses = [
  {
      keywords: ["世界", "历史"],
      responses: [
          "世界历史是一部人类文明的演变史，从史前时期到现代社会，各个文明的发展、兴衰，以及全球化的进程构成了历史的主线。  **一、史前时期（公元前3000年以前）**  旧石器时代，人类以狩猎和采集为生，使用石器工具，逐渐掌握用火。新石器时代，农业和畜牧业兴起，出现定居生活，推动了文明的形成。  **二、古代文明（公元前3000年-公元476年）**  古埃及、两河流域、印度河文明和中华文明在此时期兴起。公元前5世纪，古希腊城邦发展，雅典民主政治出现。公元前27年，罗马帝国建立，成为古代西方最强大的帝国之一。476年西罗马帝国灭亡，标志着古代史的终结。  **三、中世纪（476年-1492年）**  中世纪欧洲经历了封建制度、教会统治和十字军东征。7世纪，伊斯兰教兴起，阿拉伯帝国迅速扩张。13-14世纪，蒙古帝国横跨欧亚。14世纪后期，欧洲文艺复兴开始，人文主义思想兴起。  **四、近代（1492年-1914年）** 1492年哥伦布发现美洲，开启地理大发现，欧洲殖民扩张。16-18世纪，宗教改革、启蒙运动推动社会变革。18-19世纪，工业革命改变生产方式，资本主义崛起。1776年美国独立，1789年法国大革命爆发。19世纪，民族主义和帝国主义兴起。  **五、现代（1914年至今）**  20世纪两次世界大战深刻影响全球格局，1945年二战结束后，冷战对峙持续至1991年。20世纪下半叶，去殖民化、科技革命、全球化加速发展。21世纪以来，信息技术、气候变化、国际政治竞争成为世界主要议题。",
          "世界历史可以分为几个关键阶段，每个阶段都塑造了今天的世界。    🌍 **史前时代（公元前3000年以前）**   人类最早的祖先从非洲迁徙，逐渐学会制造工具、用火，并在新石器时代开始农业和定居生活。    🏛 **古代文明（公元前3000年-公元476年）**   世界四大文明古国——古埃及、两河流域（美索不达米亚）、古印度和古中国——相继出现。古希腊发展出民主制度，古罗马建立庞大帝国。476年，西罗马帝国灭亡，欧洲进入中世纪。    ⚔ **中世纪（476年-1492年）**   欧洲陷入封建割据，天主教会权力巨大。与此同时，伊斯兰世界繁荣，蒙古帝国横扫欧亚大陆。14-15世纪，欧洲开始文艺复兴，为近代世界奠定基础。    🚢 **近代（1492年-1914年）**   1492年，哥伦布到达美洲，地理大发现让欧洲开始全球殖民。启蒙运动、工业革命推动科技进步，法国大革命和美国独立战争带来民主思想。19世纪，资本主义和帝国主义加速扩张。    💣 **现代（1914年至今）**   两次世界大战改变了全球格局，冷战让美苏争霸持续数十年。20世纪科技飞速发展，21世纪则面临气候变化、科技革命和国际竞争等新挑战。",
          "世界历史就像一本超长的故事书，讲述了人类从茹毛饮血到现代科技的演变过程。    🦴 **史前时代**：很久很久以前，人类还是靠打猎和采集生存，后来学会了种田、养动物，开始定居，文明的雏形就这样出现了。    🏛 **古代文明**：世界上最早的四大文明——古埃及、两河流域（美索不达米亚）、古印度和古中国——开始发展，出现了文字、城市、法律。古希腊发明了民主制度，古罗马建立了庞大的帝国，但最后在476年灭亡，欧洲进入混乱的中世纪。    ⚔ **中世纪**：欧洲被贵族和国王统治，教会的权力很大。与此同时，伊斯兰世界繁荣，蒙古帝国横扫欧亚。到了14-15世纪，欧洲开始文艺复兴，人们重新关注科学、艺术和探索世界。    🚢 **近代**：1492年，哥伦布发现美洲，欧洲国家开始探索和殖民世界。工业革命让工厂、火车、电灯等科技出现，社会变化很大。法国大革命和美国独立让民主思想流行，国家之间的竞争也越来越激烈。    💣 **现代**：20世纪爆发了两次世界大战，影响全球。之后美苏争霸（冷战），科技飞速发展，如互联网、人工智能等。21世纪，人们开始关注气候变化、科技进步和国际关系的挑战。"
      ]
  },

  {
    keywords: ["世界", "故事"],
    responses: [
        "世界历史是一部人类文明的演变史，从史前时期到现代社会，各个文明的发展、兴衰，以及全球化的进程构成了历史的主线。  **一、史前时期（公元前3000年以前）**  旧石器时代，人类以狩猎和采集为生，使用石器工具，逐渐掌握用火。新石器时代，农业和畜牧业兴起，出现定居生活，推动了文明的形成。  **二、古代文明（公元前3000年-公元476年）**  古埃及、两河流域、印度河文明和中华文明在此时期兴起。公元前5世纪，古希腊城邦发展，雅典民主政治出现。公元前27年，罗马帝国建立，成为古代西方最强大的帝国之一。476年西罗马帝国灭亡，标志着古代史的终结。  **三、中世纪（476年-1492年）**  中世纪欧洲经历了封建制度、教会统治和十字军东征。7世纪，伊斯兰教兴起，阿拉伯帝国迅速扩张。13-14世纪，蒙古帝国横跨欧亚。14世纪后期，欧洲文艺复兴开始，人文主义思想兴起。  **四、近代（1492年-1914年）** 1492年哥伦布发现美洲，开启地理大发现，欧洲殖民扩张。16-18世纪，宗教改革、启蒙运动推动社会变革。18-19世纪，工业革命改变生产方式，资本主义崛起。1776年美国独立，1789年法国大革命爆发。19世纪，民族主义和帝国主义兴起。  **五、现代（1914年至今）**  20世纪两次世界大战深刻影响全球格局，1945年二战结束后，冷战对峙持续至1991年。20世纪下半叶，去殖民化、科技革命、全球化加速发展。21世纪以来，信息技术、气候变化、国际政治竞争成为世界主要议题。",
        "世界历史可以分为几个关键阶段，每个阶段都塑造了今天的世界。    🌍 **史前时代（公元前3000年以前）**   人类最早的祖先从非洲迁徙，逐渐学会制造工具、用火，并在新石器时代开始农业和定居生活。    🏛 **古代文明（公元前3000年-公元476年）**   世界四大文明古国——古埃及、两河流域（美索不达米亚）、古印度和古中国——相继出现。古希腊发展出民主制度，古罗马建立庞大帝国。476年，西罗马帝国灭亡，欧洲进入中世纪。    ⚔ **中世纪（476年-1492年）**   欧洲陷入封建割据，天主教会权力巨大。与此同时，伊斯兰世界繁荣，蒙古帝国横扫欧亚大陆。14-15世纪，欧洲开始文艺复兴，为近代世界奠定基础。    🚢 **近代（1492年-1914年）**   1492年，哥伦布到达美洲，地理大发现让欧洲开始全球殖民。启蒙运动、工业革命推动科技进步，法国大革命和美国独立战争带来民主思想。19世纪，资本主义和帝国主义加速扩张。    💣 **现代（1914年至今）**   两次世界大战改变了全球格局，冷战让美苏争霸持续数十年。20世纪科技飞速发展，21世纪则面临气候变化、科技革命和国际竞争等新挑战。",
        "世界历史就像一本超长的故事书，讲述了人类从茹毛饮血到现代科技的演变过程。    🦴 **史前时代**：很久很久以前，人类还是靠打猎和采集生存，后来学会了种田、养动物，开始定居，文明的雏形就这样出现了。    🏛 **古代文明**：世界上最早的四大文明——古埃及、两河流域（美索不达米亚）、古印度和古中国——开始发展，出现了文字、城市、法律。古希腊发明了民主制度，古罗马建立了庞大的帝国，但最后在476年灭亡，欧洲进入混乱的中世纪。    ⚔ **中世纪**：欧洲被贵族和国王统治，教会的权力很大。与此同时，伊斯兰世界繁荣，蒙古帝国横扫欧亚。到了14-15世纪，欧洲开始文艺复兴，人们重新关注科学、艺术和探索世界。    🚢 **近代**：1492年，哥伦布发现美洲，欧洲国家开始探索和殖民世界。工业革命让工厂、火车、电灯等科技出现，社会变化很大。法国大革命和美国独立让民主思想流行，国家之间的竞争也越来越激烈。    💣 **现代**：20世纪爆发了两次世界大战，影响全球。之后美苏争霸（冷战），科技飞速发展，如互联网、人工智能等。21世纪，人们开始关注气候变化、科技进步和国际关系的挑战。"
    ]
},

{
  keywords: ["减法", "是"],
  responses: [
      "减法是一种算术运算，代表从合集中移除对象，可视为“加法的逆运算”。减法的结果称作差。减法是符号是减号（ − ）。加、减、乘、除合称四则运算。",
      "减法是一种基本的[算术运算](w)，表示从一个集合中移除一定数量的对象，可以被视为[加法](w)的逆运算。减法运算的结果称为“差”，其运算符为减号（−）。在数学中，[加法](w)、减法、[乘法](w)和[除法](w)合称为[四则运算](w)，共同构成了数值计算的基础。",
      "减法是一种[算术运算](w)，用于表示从一个数或集合中移除特定数量的对象，被视为[加法](w)的逆运算。其运算结果称为“差”，符号为减号（−）。与[加法](w)、[乘法](w)和[除法](w)共同构成[四则运算](w)，是数学计算的基础之一，在日常生活和科学研究中广"
  ]
},

{
  "keywords": ["人生", "意义"],
  "responses": [
    "人生的意义因人而异，有人追求快乐，有人寻求成长，有人寻找爱与被爱。重要的是，找到你自己独特的意义。(￣▽￣)",
    "人生的意义往往不在于目的，而在于追求的过程。每一段经历、每一次成长都赋予了我们不同的意义。(≧▽≦)",
    "或许人生的意义就是在不断探索和发现中，找到属于自己的目标和梦想，不断超越自己。(～￣▽￣)",
    "人生的意义是一个永远没有固定答案的问题，重要的是在这个过程中活得真实、享受每一刻。(≧ω≦)",
    "每个人都在寻找自己的答案，人生的意义可能是用心去生活，去体验，去爱，去成长。(￣▽￣)"
  ]
},

{
  "keywords": ["人", "活着", "意义"],
  "responses": [
    "人活着的意义因人而异，每个人都有自己独特的目标和追求。重要的是在这一生中活得真实，去体验、去爱、去成长。(￣▽￣)",
    "人活着的意义可能并非只有一个答案，它可以是追求自我实现，享受当下，创造价值，或是通过爱与关怀影响他人。(≧▽≦)",
    "人生的意义或许就在于寻找自我、体验世界和做出改变，无论是通过工作、关系，还是内心的平静。(～￣▽￣)",
    "活着的意义可能在于每一个活跃的瞬间，每一段与他人共同度过的时光，所有的挑战和成长都铸就了人生的深度。(≧ω≦)",
    "人活着的意义是一个不断探索的过程，在其中，我们找到目的、找到了热情、并最终学会如何无怨无悔地生活。(￣▽￣)"
  ]
},


{
  keywords: ["加法", "是"],
  responses: [
    "加法是一种基本的算术运算，表示将两个或多个数值合并，计算其总和。运算符号为加号（+）。",
    "[加法](w)是[四则运算](w)之一，它用于求两个或多个数的总和，是最基础的数学运算之一。",
    "在数学中，[加法](w)表示把数量合并在一起，运算符是加号（+）。比如 3 + 2 = 5，就是一个简单的加法运算。",
    "加法是[算术运算](w)的一种，通常用于计算总数。例如，在购物时计算总价，或在测量时累加数值。",
    "简单来说，加法就是“合并数量”的过程。例如，2 颗苹果加上 3 颗苹果，总共有 5 颗苹果。"
  ]
},

{
  keywords: ["蔡", "徐", "坤"],
  responses: [
    "蔡徐坤（1998 年 8 月 2 日—），出生于浙江温州，中国内地流行歌手、原创音乐制作人、演员。他最早在 2012 年参加综艺节目《向上吧！少年》，进入中国娱乐圈。2015 年，他参与中韩偶像养成真人秀《星动亚洲》，并于 2016 年 10 月通过男子组合 SWIN 正式出道。2018 年，他参加选秀节目《偶像练习生》，以第一名 C 位出道，并成为 NINE PERCENT 的队长。其代表作包括《情人》《Hard To Get》《Wait Wait Wait》《迷》等，音乐风格融合 R&B、Hip-Hop 与东方元素。",
    "[蔡徐坤](w)（1998 年 8 月 2 日生），浙江温州人，中国流行歌手、舞者、演员、原创音乐人。他的音乐才华在童年时期便开始展现，2012 年通过《向上吧！少年》进入娱乐圈，后前往美国留学，并于 2015 年参加《星动亚洲》。2016 年，他加入 SWIN 组合，正式以偶像身份出道。2018 年，他以个人练习生身份参加《偶像练习生》，最终 C 位夺冠。作为音乐制作人，他创作了多首热门作品，如《I Wanna Get Love》《迷》《情人》等。",
    "蔡徐坤，浙江温州人，父亲是温州人，母亲是湖南怀化人。他童年曾在湖南怀化生活，小学就读于鹤翔学校，后随家人迁居深圳，并在南山第二实验学校完成初中。2014 年，他赴美就读加利福尼亚州的格雷斯兄弟高中，但因对音乐的热爱，2015 年回国参加《星动亚洲》，并于 2016 年以 SWIN 成员身份正式出道。然而，由于公司运营问题，他选择解约，并于 2018 年《偶像练习生》一战成名，随后展开个人音乐生涯。",
    "蔡徐坤（1998 年生），中国流行歌手、音乐制作人，具有丰富的表演经验。2011 年，他创作了个人首支歌曲《Goodnight 13》，并在“童一首歌超级童星演唱会”中进入全国十强。2012 年，他通过《向上吧！少年》正式进入演艺圈，并参演电视剧《童话二分之一》《女刑警李春春》等。2016 年，他以 SWIN 组合成员身份出道，但不久后选择单飞，并在 2018 年的《偶像练习生》中获得第一名，从而走向更大的舞台。",
    "蔡徐坤，出生于浙江温州，童年部分时间在湖南怀化度过。他自小学习音乐，曾受邀加入 TFBOYS 练习生团队，但最终选择前往美国留学。2015 年，他中断学业回国，参加偶像养成节目《星动亚洲》，并于 2016 年随 SWIN 出道。因公司运营不善，他与经纪公司解约，后以个人练习生身份挑战《偶像练习生》，最终以 NINE PERCENT 组合 C 位出道。他的音乐风格多元，擅长融合 R&B、Hip-Hop 及东方元素，代表作包括《情人》《迷》《Hard To Get》等。"
  ]
},


  {
    keywords: ["俄", "冲突", "乌"],
    responses: [
        "o(^▽^)o 俄乌冲突是指自2014年以来，俄罗斯与乌克兰之间发生的一系列军事和政治对抗，特别是2014年克里米亚危机和2014年至2025年在乌克兰东部地区的持续冲突。这场冲突对地区和全球政治产生了深远影响。  **背景**  乌克兰在1991年苏联解体后独立，逐渐向西方靠拢，寻求加入欧盟和北约。俄罗斯对此表示强烈反对，认为乌克兰的西倾政策威胁其战略利益。  **主要事件**  1. **克里米亚危机（2014年）**：2014年2月，乌克兰爆发亲西方的“广场革命”，导致亲俄总统亚努科维奇下台。随后，俄罗斯于3月出兵占领克里米亚，并通过公投将其并入俄罗斯。此举未获国际社会普遍承认。  2. **顿巴斯战争（2014年至今）**：克里米亚事件后，乌克兰东部顿涅茨克和卢甘斯克地区的亲俄武装分子宣布独立，乌克兰政府军与之爆发激烈冲突。尽管多次达成停火协议，但战斗持续至今。  3. **全面入侵（2022年）**：2022年2月24日，俄罗斯对乌克兰发动全面军事进攻，试图迅速占领首都基辅等关键城市。然而，乌克兰军队和民众的顽强抵抗使俄军未能实现预期目标，战争进入持久战阶段。  **国际反应**  西方国家对俄罗斯实施了严厉的经济制裁，并向乌克兰提供军事和人道援助。与此同时，全球能源和粮食市场受到冲击，导致价格上涨和供应链中断。  **当前局势**  截至2025年2月，冲突仍在继续，双方在前线陷入拉锯战。乌克兰政府推出“胜利计划”，旨在收复被占领土。俄罗斯则通过扩军等措施加强军事力量。国际社会呼吁和平解决，但前景尚不明朗。  **影响**  这场冲突导致大量人员伤亡和流离失所，乌克兰的基础设施遭到严重破坏。同时，冲突引发了新一轮的冷战思维，全球地缘政治格局发生变化。  要深入了解俄乌冲突的详细信息，建议参考以下资料：  - [俄乌战争 - 维基百科](https://zh.wikipedia.org/zh-hans/%E4%BF%84%E4%B9%8C%E6%88%98%E4%BA%89) - [俄罗斯入侵乌克兰 - 维基百科](https://zh.wikipedia.org/zh-hans/%E4%BF%84%E7%BE%85%E6%96%AF%E5%85%A5%E4%BE%B5%E7%83%8F%E5%85%8B%E8%98%AD) - [俄乌冲突及其影响 - 北京大学国际战略研究院](https://www.iiss.pku.edu.cn/fj/PDF/ciss_cn/upload/docs/2023-04-26/doc_9511682479710.pdf)  这些资料提供了对俄乌冲突的深入分析和最新动态，有助于全面了解该事件的背景、发展和影响。 ",
        "****标题：俄乌冲突概述****    ****标题：背景****   乌克兰在1991年苏联解体后独立，逐渐向西方靠拢，寻求加入欧盟和北约。俄罗斯对此表示强烈反对，认为乌克兰的西倾政策威胁其战略利益。    ****标题：主要事件****    1. ****标题：克里米亚危机（2014年）****   2014年2月，乌克兰爆发亲西方的“广场革命”，导致亲俄总统亚努科维奇下台。随后，俄罗斯于3月出兵占领克里米亚，并通过公投将其并入俄罗斯。此举未获国际社会普遍承认。    2. ****标题：顿巴斯战争（2014年至今）****   克里米亚事件后，乌克兰东部顿涅茨克和卢甘斯克地区的亲俄武装分子宣布独立，乌克兰政府军与之爆发激烈冲突。尽管多次达成停火协议，但战斗持续至今。    3. ****标题：全面入侵（2022年）****   2022年2月24日，俄罗斯对乌克兰发动全面军事进攻，试图迅速占领首都基辅等关键城市。然而，乌克兰军队和民众的顽强抵抗使俄军未能实现预期目标，战争进入持久战阶段。    ****标题：国际反应****   西方国家对俄罗斯实施了严厉的经济制裁，并向乌克兰提供军事和人道援助。与此同时，全球能源和粮食市场受到冲击，导致价格上涨和供应链中断。    ****标题：当前局势****   截至2025年2月，冲突仍在继续，双方在前线陷入拉锯战。乌克兰政府推出“胜利计划”，旨在收复被占领土。俄罗斯则通过扩军等措施加强军事力量。国际社会呼吁和平解决，但前景尚不明朗。    ****标题：影响****   这场冲突导致大量人员伤亡和流离失所，乌克兰的基础设施遭到严重破坏。同时，冲突引发了新一轮的冷战思维，全球地缘政治格局发生变化。",
        "****📌 标题：俄乌冲突概述****    ****🌍 标题：背景****   乌克兰在1991年苏联解体后独立，逐渐向西方靠拢，寻求加入欧盟和北约。俄罗斯对此表示强烈反对，认为乌克兰的西倾政策威胁其战略利益。    ****⚔️ 标题：主要事件****    1. ****🛑 标题：克里米亚危机（2014年）****   2014年2月，乌克兰爆发亲西方的“广场革命”，导致亲俄总统亚努科维奇下台。随后，俄罗斯于3月出兵占领克里米亚，并通过公投将其并入俄罗斯。此举未获国际社会普遍承认。    2. ****💥 标题：顿巴斯战争（2014年至今）****   克里米亚事件后，乌克兰东部顿涅茨克和卢甘斯克地区的亲俄武装分子宣布独立，乌克兰政府军与之爆发激烈冲突。尽管多次达成停火协议，但战斗持续至今。    3. ****🔥 标题：全面入侵（2022年）****   2022年2月24日，俄罗斯对乌克兰发动全面军事进攻，试图迅速占领首都基辅等关键城市。然而，乌克兰军队和民众的顽强抵抗使俄军未能实现预期目标，战争进入持久战阶段。    ****🌍 标题：国际反应****   西方国家对俄罗斯实施了严厉的经济制裁，并向乌克兰提供军事和人道援助。与此同时，全球能源和粮食市场受到冲击，导致价格上涨和供应链中断。    ****🔄 标题：当前局势****   截至2025年2月，冲突仍在继续，双方在前线陷入拉锯战。乌克兰政府推出“胜利计划”，旨在收复被占领土。俄罗斯则通过扩军等措施加强军事力量。国际社会呼吁和平解决，但前景尚不明朗。    ****⚖️ 标题：影响****   这场冲突导致大量人员伤亡和流离失所，乌克兰的基础设施遭到严重破坏。同时，冲突引发了新一轮的冷战思维，全球地缘政治格局发生变化。"
    ]
},


  {
    keywords: ["俄", "战", "乌"],
    responses: [
        "俄乌冲突是指自2014年以来，俄罗斯与乌克兰之间发生的一系列军事和政治对抗，特别是2014年克里米亚危机和2014年至2025年在乌克兰东部地区的持续冲突。这场冲突对地区和全球政治产生了深远影响。  **背景**  乌克兰在1991年苏联解体后独立，逐渐向西方靠拢，寻求加入欧盟和北约。俄罗斯对此表示强烈反对，认为乌克兰的西倾政策威胁其战略利益。  **主要事件**  1. **克里米亚危机（2014年）**：2014年2月，乌克兰爆发亲西方的“广场革命”，导致亲俄总统亚努科维奇下台。随后，俄罗斯于3月出兵占领克里米亚，并通过公投将其并入俄罗斯。此举未获国际社会普遍承认。  2. **顿巴斯战争（2014年至今）**：克里米亚事件后，乌克兰东部顿涅茨克和卢甘斯克地区的亲俄武装分子宣布独立，乌克兰政府军与之爆发激烈冲突。尽管多次达成停火协议，但战斗持续至今。  3. **全面入侵（2022年）**：2022年2月24日，俄罗斯对乌克兰发动全面军事进攻，试图迅速占领首都基辅等关键城市。然而，乌克兰军队和民众的顽强抵抗使俄军未能实现预期目标，战争进入持久战阶段。  **国际反应**  西方国家对俄罗斯实施了严厉的经济制裁，并向乌克兰提供军事和人道援助。与此同时，全球能源和粮食市场受到冲击，导致价格上涨和供应链中断。  **当前局势**  截至2025年2月，冲突仍在继续，双方在前线陷入拉锯战。乌克兰政府推出“胜利计划”，旨在收复被占领土。俄罗斯则通过扩军等措施加强军事力量。国际社会呼吁和平解决，但前景尚不明朗。  **影响**  这场冲突导致大量人员伤亡和流离失所，乌克兰的基础设施遭到严重破坏。同时，冲突引发了新一轮的冷战思维，全球地缘政治格局发生变化。  要深入了解俄乌冲突的详细信息，建议参考以下资料：  - [俄乌战争 - 维基百科](https://zh.wikipedia.org/zh-hans/%E4%BF%84%E4%B9%8C%E6%88%98%E4%BA%89) - [俄罗斯入侵乌克兰 - 维基百科](https://zh.wikipedia.org/zh-hans/%E4%BF%84%E7%BE%85%E6%96%AF%E5%85%A5%E4%BE%B5%E7%83%8F%E5%85%8B%E8%98%AD) - [俄乌冲突及其影响 - 北京大学国际战略研究院](https://www.iiss.pku.edu.cn/fj/PDF/ciss_cn/upload/docs/2023-04-26/doc_9511682479710.pdf)  这些资料提供了对俄乌冲突的深入分析和最新动态，有助于全面了解该事件的背景、发展和影响。 ",
        "****标题：俄乌冲突概述****    ****标题：背景****   乌克兰在1991年苏联解体后独立，逐渐向西方靠拢，寻求加入欧盟和北约。俄罗斯对此表示强烈反对，认为乌克兰的西倾政策威胁其战略利益。    ****标题：主要事件****    1. ****标题：克里米亚危机（2014年）****   2014年2月，乌克兰爆发亲西方的“广场革命”，导致亲俄总统亚努科维奇下台。随后，俄罗斯于3月出兵占领克里米亚，并通过公投将其并入俄罗斯。此举未获国际社会普遍承认。    2. ****标题：顿巴斯战争（2014年至今）****   克里米亚事件后，乌克兰东部顿涅茨克和卢甘斯克地区的亲俄武装分子宣布独立，乌克兰政府军与之爆发激烈冲突。尽管多次达成停火协议，但战斗持续至今。    3. ****标题：全面入侵（2022年）****   2022年2月24日，俄罗斯对乌克兰发动全面军事进攻，试图迅速占领首都基辅等关键城市。然而，乌克兰军队和民众的顽强抵抗使俄军未能实现预期目标，战争进入持久战阶段。    ****标题：国际反应****   西方国家对俄罗斯实施了严厉的经济制裁，并向乌克兰提供军事和人道援助。与此同时，全球能源和粮食市场受到冲击，导致价格上涨和供应链中断。    ****标题：当前局势****   截至2025年2月，冲突仍在继续，双方在前线陷入拉锯战。乌克兰政府推出“胜利计划”，旨在收复被占领土。俄罗斯则通过扩军等措施加强军事力量。国际社会呼吁和平解决，但前景尚不明朗。    ****标题：影响****   这场冲突导致大量人员伤亡和流离失所，乌克兰的基础设施遭到严重破坏。同时，冲突引发了新一轮的冷战思维，全球地缘政治格局发生变化。",
        "****📌 标题：俄乌冲突概述****    ****🌍 标题：背景****   乌克兰在1991年苏联解体后独立，逐渐向西方靠拢，寻求加入欧盟和北约。俄罗斯对此表示强烈反对，认为乌克兰的西倾政策威胁其战略利益。    ****⚔️ 标题：主要事件****    1. ****🛑 标题：克里米亚危机（2014年）****   2014年2月，乌克兰爆发亲西方的“广场革命”，导致亲俄总统亚努科维奇下台。随后，俄罗斯于3月出兵占领克里米亚，并通过公投将其并入俄罗斯。此举未获国际社会普遍承认。    2. ****💥 标题：顿巴斯战争（2014年至今）****   克里米亚事件后，乌克兰东部顿涅茨克和卢甘斯克地区的亲俄武装分子宣布独立，乌克兰政府军与之爆发激烈冲突。尽管多次达成停火协议，但战斗持续至今。    3. ****🔥 标题：全面入侵（2022年）****   2022年2月24日，俄罗斯对乌克兰发动全面军事进攻，试图迅速占领首都基辅等关键城市。然而，乌克兰军队和民众的顽强抵抗使俄军未能实现预期目标，战争进入持久战阶段。    ****🌍 标题：国际反应****   西方国家对俄罗斯实施了严厉的经济制裁，并向乌克兰提供军事和人道援助。与此同时，全球能源和粮食市场受到冲击，导致价格上涨和供应链中断。    ****🔄 标题：当前局势****   截至2025年2月，冲突仍在继续，双方在前线陷入拉锯战。乌克兰政府推出“胜利计划”，旨在收复被占领土。俄罗斯则通过扩军等措施加强军事力量。国际社会呼吁和平解决，但前景尚不明朗。    ****⚖️ 标题：影响****   这场冲突导致大量人员伤亡和流离失所，乌克兰的基础设施遭到严重破坏。同时，冲突引发了新一轮的冷战思维，全球地缘政治格局发生变化。"
    ]
},

{
  keywords: ["俄", "矛盾", "乌"],
  responses: [
      "俄乌冲突是指自2014年以来，俄罗斯与乌克兰之间发生的一系列军事和政治对抗，特别是2014年克里米亚危机和2014年至2025年在乌克兰东部地区的持续冲突。这场冲突对地区和全球政治产生了深远影响。  **背景**  乌克兰在1991年苏联解体后独立，逐渐向西方靠拢，寻求加入欧盟和北约。俄罗斯对此表示强烈反对，认为乌克兰的西倾政策威胁其战略利益。  **主要事件**  1. **克里米亚危机（2014年）**：2014年2月，乌克兰爆发亲西方的“广场革命”，导致亲俄总统亚努科维奇下台。随后，俄罗斯于3月出兵占领克里米亚，并通过公投将其并入俄罗斯。此举未获国际社会普遍承认。  2. **顿巴斯战争（2014年至今）**：克里米亚事件后，乌克兰东部顿涅茨克和卢甘斯克地区的亲俄武装分子宣布独立，乌克兰政府军与之爆发激烈冲突。尽管多次达成停火协议，但战斗持续至今。  3. **全面入侵（2022年）**：2022年2月24日，俄罗斯对乌克兰发动全面军事进攻，试图迅速占领首都基辅等关键城市。然而，乌克兰军队和民众的顽强抵抗使俄军未能实现预期目标，战争进入持久战阶段。  **国际反应**  西方国家对俄罗斯实施了严厉的经济制裁，并向乌克兰提供军事和人道援助。与此同时，全球能源和粮食市场受到冲击，导致价格上涨和供应链中断。  **当前局势**  截至2025年2月，冲突仍在继续，双方在前线陷入拉锯战。乌克兰政府推出“胜利计划”，旨在收复被占领土。俄罗斯则通过扩军等措施加强军事力量。国际社会呼吁和平解决，但前景尚不明朗。  **影响**  这场冲突导致大量人员伤亡和流离失所，乌克兰的基础设施遭到严重破坏。同时，冲突引发了新一轮的冷战思维，全球地缘政治格局发生变化。  要深入了解俄乌冲突的详细信息，建议参考以下资料：  - [俄乌战争 - 维基百科](https://zh.wikipedia.org/zh-hans/%E4%BF%84%E4%B9%8C%E6%88%98%E4%BA%89) - [俄罗斯入侵乌克兰 - 维基百科](https://zh.wikipedia.org/zh-hans/%E4%BF%84%E7%BE%85%E6%96%AF%E5%85%A5%E4%BE%B5%E7%83%8F%E5%85%8B%E8%98%AD) - [俄乌冲突及其影响 - 北京大学国际战略研究院](https://www.iiss.pku.edu.cn/fj/PDF/ciss_cn/upload/docs/2023-04-26/doc_9511682479710.pdf)  这些资料提供了对俄乌冲突的深入分析和最新动态，有助于全面了解该事件的背景、发展和影响。 ",
      "****标题：俄乌冲突概述****    ****标题：背景****   乌克兰在1991年苏联解体后独立，逐渐向西方靠拢，寻求加入欧盟和北约。俄罗斯对此表示强烈反对，认为乌克兰的西倾政策威胁其战略利益。    ****标题：主要事件****    1. ****标题：克里米亚危机（2014年）****   2014年2月，乌克兰爆发亲西方的“广场革命”，导致亲俄总统亚努科维奇下台。随后，俄罗斯于3月出兵占领克里米亚，并通过公投将其并入俄罗斯。此举未获国际社会普遍承认。    2. ****标题：顿巴斯战争（2014年至今）****   克里米亚事件后，乌克兰东部顿涅茨克和卢甘斯克地区的亲俄武装分子宣布独立，乌克兰政府军与之爆发激烈冲突。尽管多次达成停火协议，但战斗持续至今。    3. ****标题：全面入侵（2022年）****   2022年2月24日，俄罗斯对乌克兰发动全面军事进攻，试图迅速占领首都基辅等关键城市。然而，乌克兰军队和民众的顽强抵抗使俄军未能实现预期目标，战争进入持久战阶段。    ****标题：国际反应****   西方国家对俄罗斯实施了严厉的经济制裁，并向乌克兰提供军事和人道援助。与此同时，全球能源和粮食市场受到冲击，导致价格上涨和供应链中断。    ****标题：当前局势****   截至2025年2月，冲突仍在继续，双方在前线陷入拉锯战。乌克兰政府推出“胜利计划”，旨在收复被占领土。俄罗斯则通过扩军等措施加强军事力量。国际社会呼吁和平解决，但前景尚不明朗。    ****标题：影响****   这场冲突导致大量人员伤亡和流离失所，乌克兰的基础设施遭到严重破坏。同时，冲突引发了新一轮的冷战思维，全球地缘政治格局发生变化。",
      "****📌 标题：俄乌冲突概述****    ****🌍 标题：背景****   乌克兰在1991年苏联解体后独立，逐渐向西方靠拢，寻求加入欧盟和北约。俄罗斯对此表示强烈反对，认为乌克兰的西倾政策威胁其战略利益。    ****⚔️ 标题：主要事件****    1. ****🛑 标题：克里米亚危机（2014年）****   2014年2月，乌克兰爆发亲西方的“广场革命”，导致亲俄总统亚努科维奇下台。随后，俄罗斯于3月出兵占领克里米亚，并通过公投将其并入俄罗斯。此举未获国际社会普遍承认。    2. ****💥 标题：顿巴斯战争（2014年至今）****   克里米亚事件后，乌克兰东部顿涅茨克和卢甘斯克地区的亲俄武装分子宣布独立，乌克兰政府军与之爆发激烈冲突。尽管多次达成停火协议，但战斗持续至今。    3. ****🔥 标题：全面入侵（2022年）****   2022年2月24日，俄罗斯对乌克兰发动全面军事进攻，试图迅速占领首都基辅等关键城市。然而，乌克兰军队和民众的顽强抵抗使俄军未能实现预期目标，战争进入持久战阶段。    ****🌍 标题：国际反应****   西方国家对俄罗斯实施了严厉的经济制裁，并向乌克兰提供军事和人道援助。与此同时，全球能源和粮食市场受到冲击，导致价格上涨和供应链中断。    ****🔄 标题：当前局势****   截至2025年2月，冲突仍在继续，双方在前线陷入拉锯战。乌克兰政府推出“胜利计划”，旨在收复被占领土。俄罗斯则通过扩军等措施加强军事力量。国际社会呼吁和平解决，但前景尚不明朗。    ****⚖️ 标题：影响****   这场冲突导致大量人员伤亡和流离失所，乌克兰的基础设施遭到严重破坏。同时，冲突引发了新一轮的冷战思维，全球地缘政治格局发生变化。"
  ]
},

{
  keywords: ["俄", "打", "乌"],
  responses: [
      "俄乌冲突是指自2014年以来，俄罗斯与乌克兰之间发生的一系列军事和政治对抗，特别是2014年克里米亚危机和2014年至2025年在乌克兰东部地区的持续冲突。这场冲突对地区和全球政治产生了深远影响。  **背景**  乌克兰在1991年苏联解体后独立，逐渐向西方靠拢，寻求加入欧盟和北约。俄罗斯对此表示强烈反对，认为乌克兰的西倾政策威胁其战略利益。  **主要事件**  1. **克里米亚危机（2014年）**：2014年2月，乌克兰爆发亲西方的“广场革命”，导致亲俄总统亚努科维奇下台。随后，俄罗斯于3月出兵占领克里米亚，并通过公投将其并入俄罗斯。此举未获国际社会普遍承认。  2. **顿巴斯战争（2014年至今）**：克里米亚事件后，乌克兰东部顿涅茨克和卢甘斯克地区的亲俄武装分子宣布独立，乌克兰政府军与之爆发激烈冲突。尽管多次达成停火协议，但战斗持续至今。  3. **全面入侵（2022年）**：2022年2月24日，俄罗斯对乌克兰发动全面军事进攻，试图迅速占领首都基辅等关键城市。然而，乌克兰军队和民众的顽强抵抗使俄军未能实现预期目标，战争进入持久战阶段。  **国际反应**  西方国家对俄罗斯实施了严厉的经济制裁，并向乌克兰提供军事和人道援助。与此同时，全球能源和粮食市场受到冲击，导致价格上涨和供应链中断。  **当前局势**  截至2025年2月，冲突仍在继续，双方在前线陷入拉锯战。乌克兰政府推出“胜利计划”，旨在收复被占领土。俄罗斯则通过扩军等措施加强军事力量。国际社会呼吁和平解决，但前景尚不明朗。  **影响**  这场冲突导致大量人员伤亡和流离失所，乌克兰的基础设施遭到严重破坏。同时，冲突引发了新一轮的冷战思维，全球地缘政治格局发生变化。  要深入了解俄乌冲突的详细信息，建议参考以下资料：  - [俄乌战争 - 维基百科](https://zh.wikipedia.org/zh-hans/%E4%BF%84%E4%B9%8C%E6%88%98%E4%BA%89) - [俄罗斯入侵乌克兰 - 维基百科](https://zh.wikipedia.org/zh-hans/%E4%BF%84%E7%BE%85%E6%96%AF%E5%85%A5%E4%BE%B5%E7%83%8F%E5%85%8B%E8%98%AD) - [俄乌冲突及其影响 - 北京大学国际战略研究院](https://www.iiss.pku.edu.cn/fj/PDF/ciss_cn/upload/docs/2023-04-26/doc_9511682479710.pdf)  这些资料提供了对俄乌冲突的深入分析和最新动态，有助于全面了解该事件的背景、发展和影响。 ",
      "****标题：俄乌冲突概述****    ****标题：背景****   乌克兰在1991年苏联解体后独立，逐渐向西方靠拢，寻求加入欧盟和北约。俄罗斯对此表示强烈反对，认为乌克兰的西倾政策威胁其战略利益。    ****标题：主要事件****    1. ****标题：克里米亚危机（2014年）****   2014年2月，乌克兰爆发亲西方的“广场革命”，导致亲俄总统亚努科维奇下台。随后，俄罗斯于3月出兵占领克里米亚，并通过公投将其并入俄罗斯。此举未获国际社会普遍承认。    2. ****标题：顿巴斯战争（2014年至今）****   克里米亚事件后，乌克兰东部顿涅茨克和卢甘斯克地区的亲俄武装分子宣布独立，乌克兰政府军与之爆发激烈冲突。尽管多次达成停火协议，但战斗持续至今。    3. ****标题：全面入侵（2022年）****   2022年2月24日，俄罗斯对乌克兰发动全面军事进攻，试图迅速占领首都基辅等关键城市。然而，乌克兰军队和民众的顽强抵抗使俄军未能实现预期目标，战争进入持久战阶段。    ****标题：国际反应****   西方国家对俄罗斯实施了严厉的经济制裁，并向乌克兰提供军事和人道援助。与此同时，全球能源和粮食市场受到冲击，导致价格上涨和供应链中断。    ****标题：当前局势****   截至2025年2月，冲突仍在继续，双方在前线陷入拉锯战。乌克兰政府推出“胜利计划”，旨在收复被占领土。俄罗斯则通过扩军等措施加强军事力量。国际社会呼吁和平解决，但前景尚不明朗。    ****标题：影响****   这场冲突导致大量人员伤亡和流离失所，乌克兰的基础设施遭到严重破坏。同时，冲突引发了新一轮的冷战思维，全球地缘政治格局发生变化。",
      "****📌 标题：俄乌冲突概述****    ****🌍 标题：背景****   乌克兰在1991年苏联解体后独立，逐渐向西方靠拢，寻求加入欧盟和北约。俄罗斯对此表示强烈反对，认为乌克兰的西倾政策威胁其战略利益。    ****⚔️ 标题：主要事件****    1. ****🛑 标题：克里米亚危机（2014年）****   2014年2月，乌克兰爆发亲西方的“广场革命”，导致亲俄总统亚努科维奇下台。随后，俄罗斯于3月出兵占领克里米亚，并通过公投将其并入俄罗斯。此举未获国际社会普遍承认。    2. ****💥 标题：顿巴斯战争（2014年至今）****   克里米亚事件后，乌克兰东部顿涅茨克和卢甘斯克地区的亲俄武装分子宣布独立，乌克兰政府军与之爆发激烈冲突。尽管多次达成停火协议，但战斗持续至今。    3. ****🔥 标题：全面入侵（2022年）****   2022年2月24日，俄罗斯对乌克兰发动全面军事进攻，试图迅速占领首都基辅等关键城市。然而，乌克兰军队和民众的顽强抵抗使俄军未能实现预期目标，战争进入持久战阶段。    ****🌍 标题：国际反应****   西方国家对俄罗斯实施了严厉的经济制裁，并向乌克兰提供军事和人道援助。与此同时，全球能源和粮食市场受到冲击，导致价格上涨和供应链中断。    ****🔄 标题：当前局势****   截至2025年2月，冲突仍在继续，双方在前线陷入拉锯战。乌克兰政府推出“胜利计划”，旨在收复被占领土。俄罗斯则通过扩军等措施加强军事力量。国际社会呼吁和平解决，但前景尚不明朗。    ****⚖️ 标题：影响****   这场冲突导致大量人员伤亡和流离失所，乌克兰的基础设施遭到严重破坏。同时，冲突引发了新一轮的冷战思维，全球地缘政治格局发生变化。"
  ]
},

{
  keywords: ["我", "忘", "她", "不"],
  responses: [
      "哎呀，感情的事情真的很难忘呢。不过别担心，时间会帮你治愈一切的。你可以试试找点别的事情转移注意力，比如和朋友出去玩，或者试试新的爱好。别忘了，你值得更好的！",
      "我理解你的感受，但你要知道，每个人都有属于自己的未来。试着给自己一点时间，慢慢地，你会发现生活还有很多美好的事情等着你呢。",
      "别难过呀，感情的事情就是这样，有时候需要时间去接受。你可以试试和朋友聊聊，或者写写日记，把心里的话都倾诉出来。这样会好受很多哦。",
      "忘不了是很正常的事情，但你也要照顾好自己哦。试着把注意力放在自己身上，让自己变得更强大。等你准备好，自然就会遇到下一个对的人啦。",
      "别难过呀，每个人都有自己的故事。试着把注意力放在自己身上，让自己变得更强大。等你准备好，自然就会遇到下一个对的人啦。"
  ]
},

{
  keywords: [ "六百六十六", "了", "都不"],
  responses: [
    "嘲讽没有帮助，保持冷静一起探讨问题会更好。(￣︿￣)",
    "如果你觉得有问题，不如换个方式告诉我，我愿意听。(～￣▽￣)～",
    "我明白你可能有点失望，不过我们可以通过平和的方式沟通吗？(⊙_⊙)",
    "我们可以理性地解决问题，情绪上的表达或许会让事态复杂化哦。(≧▽≦)",
    "我觉得冷静下来，大家都能找到更好的解决方法。(￣︿￣)"
  ]
},

{
  keywords: [ "666", "了", "都不"],
  responses: [
    "嘲讽没有帮助，保持冷静一起探讨问题会更好。(￣︿￣)",
    "如果你觉得有问题，不如换个方式告诉我，我愿意听。(～￣▽￣)～",
    "我明白你可能有点失望，不过我们可以通过平和的方式沟通吗？(⊙_⊙)",
    "我们可以理性地解决问题，情绪上的表达或许会让事态复杂化哦。(≧▽≦)",
    "我觉得冷静下来，大家都能找到更好的解决方法。(￣︿￣)"
  ]
},

{
  keywords: [ "我", "知道"],
  responses: [
    "好嘞，那就不打扰你啦~ (～￣▽￣)～",
    "知道就好！有啥问题随时问我哦！(^▽^)",
    "OK！那就这样吧！(≧▽≦)",
    "懂了就好，继续加油！(｀・ω・´)",
    "好滴，那我们继续吧！(￣▽￣)"
  ]
},


{
  keywords: [ "你", "傻逼"],
  responses: [
    "哎呀，被你发现了，我果然还需要努力进化！(￣▽￣)",
    "好吧，我承认自己可能有点笨，但我会努力的！(｀・ω・´)",
    "你这么说，我要去角落里画圈圈了...(；′⌒`)",
    "行吧，那你愿意教教我怎么变聪明吗？(^▽^)",
    "骂人是不对的哦，小心被扣分~ (～￣▽￣)～"
  ]
},

{
  keywords: [ "你", "垃圾"],
  responses: [
    "如果有什么不满，可以换种方式说哦。(｀・ω・´)",
    "沟通才是解决问题的关键，骂人可不行呀！(～￣▽￣)～",
    "如果我做得不够好，可以告诉我怎么改进哦！(^▽^)",
    "生气不能解决问题哦，试试用别的方式表达吧！(≧▽≦)",
    "骂人可能会让气氛变糟，不如好好聊聊吧？(⊙_⊙)"
  ]
},

{
  keywords: [ "你", "啥也不是"],
  responses: [
    "哎呀，别这么说嘛，和气生财~ (～￣▽￣)～",
    "生气对身体不好，深呼吸，冷静冷静。(￣︿￣)",
    "你这么说我会伤心的哦 (；′⌒`)",
    "好吧，看样子你心情不太好，要不要聊聊？(⊙_⊙)",
    "行吧，你赢了，我不跟你争~ (￣▽￣)"
  ]
},

{
  keywords: ["火狮", "桃星"],
  responses: [
    "火狮桃星是一个充满热情和创意的开发者，专注于技术和创意的结合，尤其对人工智能和网站开发非常感兴趣！(≧▽≦)",
    "火狮桃星的开发者热衷于将创意与技术结合，特别是在人工智能和网站开发领域，带来创新的服务与体验！(～￣▽￣)",
    "开发者火狮桃星不仅有无限的创意，还注重技术的创新。他专注于人工智能和网站开发，力求每一款作品都具有高效和智能！(≧ω≦)",
    "火狮桃星，作为开发者，拥有着对技术的深厚兴趣，尤其在人工智能和网站开发的领域，激情满满，创新不断！(￣▽￣)",
    "充满热情的火狮桃星专注于技术创新，尤其在人工智能和网站开发上不断探索，旨在带给你更好的技术体验！(≧▽≦)"
  ]
},

{
  keywords: ["火狮"],
  responses: [
    "火狮桃星致力于将创意与技术结合，尤其专注于人工智能和网站开发，希望通过不断创新为你带来更智能的体验！(≧▽≦)",
    "火狮桃星将继续优化和改进智能助手，以便为你带来更加智能、高效的服务！(～￣▽￣)",
    "火狮桃星的目标是将人工智能融入日常生活，让智能助手成为你得力的助手，未来将继续发展，带来更多创新！(≧ω≦)",
    "作为开发者，火狮桃星一直在不断探索与创新，智能助手会随着技术进步变得更加智能化，未来将带来更多惊喜！(￣▽￣)",
    "火狮桃星将继续在人工智能和网站开发领域深耕，希望能通过智能助手为每个人带来更便捷的生活体验！(≧▽≦)"
  ]
},

{
  keywords: [ "你",  "谁", "开发"],
  responses: [
    "我是由火狮桃星开发的智能助手！(≧▽≦)",
    "我是火狮桃星开发的智能助手，很高兴为你服务！(～￣▽￣)",
    "我由火狮桃星开发，随时为你提供帮助！(≧ω≦)",
    "我是火狮桃星的作品，火狮智能助手，来为你解决问题！(￣▽￣)",
    "我是火狮桃星开发的智能助手，期待为你提供更好的服务！(≧▽≦)"
  ]
},

{
  keywords: [ "你",  "谁", "创造"],
  responses: [
    "我是由火狮桃星开发的智能助手！(≧▽≦)",
    "我是火狮桃星开发的智能助手，很高兴为你服务！(～￣▽￣)",
    "我由火狮桃星开发，随时为你提供帮助！(≧ω≦)",
    "我是火狮桃星的作品，火狮智能助手，来为你解决问题！(￣▽￣)",
    "我是火狮桃星开发的智能助手，期待为你提供更好的服务！(≧▽≦)"
  ]
},


{
  keywords: [ "你",  "谁", "做"],
  responses: [
    "我是由火狮桃星开发的智能助手！(≧▽≦)",
    "我是火狮桃星开发的智能助手，很高兴为你服务！(～￣▽￣)",
    "我由火狮桃星开发，随时为你提供帮助！(≧ω≦)",
    "我是火狮桃星的作品，火狮智能助手，来为你解决问题！(￣▽￣)",
    "我是火狮桃星开发的智能助手，期待为你提供更好的服务！(≧▽≦)"
  ]
},



{
  keywords: ["随便", "选", "数字"],
  responses: [
      "好的，您先告诉选哪一个，之后给您一个数字：1 ~ 10 还是 1 ~ 50 的呢？想好了告诉我哦~ (⁠・⁠∀⁠・⁠)"
  ]
},

{
  keywords: ["想", "数字"],
  responses: [
      "好的，您先告诉选哪一个，之后给您一个数字：1 ~ 10 还是 1 ~ 50 的呢？想好了告诉我哦~ (⁠・⁠∀⁠・⁠)"
  ]
},

{
  keywords: ["1", "到", "10"],
  responses: [
    "好的，我为您想好了一个从 1 ~ 10 的数字：  1","好的，我为您想好了一个从 1 ~ 10 的数字：  2","好的，我为您想好了一个从 1 ~ 10 的数字：  3","好的，我为您想好了一个从 1 ~ 10 的数字：  4","好的，我为您想好了一个从 1 ~ 10 的数字：  5","好的，我为您想好了一个从 1 ~ 10 的数字：  6","好的，我为您想好了一个从 1 ~ 10 的数字：  7","好的，我为您想好了一个从 1 ~ 10 的数字：  8","好的，我为您想好了一个从 1 ~ 10 的数字：  9","好的，我为您想好了一个从 1 ~ 10 的数字：  10"
  ]
},

{
  keywords: ["1", "和", "10"],
  responses: [
    "好的，我为您想好了一个从 1 ~ 10 的数字：  1","好的，我为您想好了一个从 1 ~ 10 的数字：  2","好的，我为您想好了一个从 1 ~ 10 的数字：  3","好的，我为您想好了一个从 1 ~ 10 的数字：  4","好的，我为您想好了一个从 1 ~ 10 的数字：  5","好的，我为您想好了一个从 1 ~ 10 的数字：  6","好的，我为您想好了一个从 1 ~ 10 的数字：  7","好的，我为您想好了一个从 1 ~ 10 的数字：  8","好的，我为您想好了一个从 1 ~ 10 的数字：  9","好的，我为您想好了一个从 1 ~ 10 的数字：  10"
  ]
},

{
  keywords: ["1", "至", "10"],
  responses: [
    "好的，我为您想好了一个从 1 ~ 10 的数字：  1","好的，我为您想好了一个从 1 ~ 10 的数字：  2","好的，我为您想好了一个从 1 ~ 10 的数字：  3","好的，我为您想好了一个从 1 ~ 10 的数字：  4","好的，我为您想好了一个从 1 ~ 10 的数字：  5","好的，我为您想好了一个从 1 ~ 10 的数字：  6","好的，我为您想好了一个从 1 ~ 10 的数字：  7","好的，我为您想好了一个从 1 ~ 10 的数字：  8","好的，我为您想好了一个从 1 ~ 10 的数字：  9","好的，我为您想好了一个从 1 ~ 10 的数字：  10"
  ]
},

{
  keywords: ["1", "~", "10"],
  responses: [
    "好的，我为您想好了一个从 1 ~ 10 的数字：  1","好的，我为您想好了一个从 1 ~ 10 的数字：  2","好的，我为您想好了一个从 1 ~ 10 的数字：  3","好的，我为您想好了一个从 1 ~ 10 的数字：  4","好的，我为您想好了一个从 1 ~ 10 的数字：  5","好的，我为您想好了一个从 1 ~ 10 的数字：  6","好的，我为您想好了一个从 1 ~ 10 的数字：  7","好的，我为您想好了一个从 1 ~ 10 的数字：  8","好的，我为您想好了一个从 1 ~ 10 的数字：  9","好的，我为您想好了一个从 1 ~ 10 的数字：  10"
  ]
},

{
  keywords: ["1", "到", "50"],
  responses: [
    "好的，我为您想好了一个从 1 ~ 50 的数字：  1","好的，我为您想好了一个从 1 ~ 50 的数字：  2","好的，我为您想好了一个从 1 ~ 50 的数字：  3","好的，我为您想好了一个从 1 ~ 50 的数字：  4","好的，我为您想好了一个从 1 ~ 50 的数字：  5","好的，我为您想好了一个从 1 ~ 50 的数字：  6","好的，我为您想好了一个从 1 ~ 50 的数字：  7","好的，我为您想好了一个从 1 ~ 50 的数字：  8","好的，我为您想好了一个从 1 ~ 50 的数字：  9","好的，我为您想好了一个从 1 ~ 50 的数字：  10","好的，我为您想好了一个从 1 ~ 50 的数字：  11","好的，我为您想好了一个从 1 ~ 50 的数字：  12","好的，我为您想好了一个从 1 ~ 50 的数字：  13","好的，我为您想好了一个从 1 ~ 50 的数字：  14","好的，我为您想好了一个从 1 ~ 50 的数字：  15","好的，我为您想好了一个从 1 ~ 50 的数字：  16","好的，我为您想好了一个从 1 ~ 50 的数字：  17","好的，我为您想好了一个从 1 ~ 50 的数字：  18","好的，我为您想好了一个从 1 ~ 50 的数字：  19","好的，我为您想好了一个从 1 ~ 50 的数字：  20","好的，我为您想好了一个从 1 ~ 50 的数字：  21","好的，我为您想好了一个从 1 ~ 50 的数字：  22","好的，我为您想好了一个从 1 ~ 50 的数字：  23","好的，我为您想好了一个从 1 ~ 50 的数字：  24","好的，我为您想好了一个从 1 ~ 50 的数字：  25","好的，我为您想好了一个从 1 ~ 50 的数字：  26","好的，我为您想好了一个从 1 ~ 50 的数字：  27","好的，我为您想好了一个从 1 ~ 50 的数字：  28","好的，我为您想好了一个从 1 ~ 50 的数字：  29","好的，我为您想好了一个从 1 ~ 50 的数字：  30","好的，我为您想好了一个从 1 ~ 50 的数字：  31","好的，我为您想好了一个从 1 ~ 50 的数字：  32","好的，我为您想好了一个从 1 ~ 50 的数字：  33","好的，我为您想好了一个从 1 ~ 50 的数字：  34","好的，我为您想好了一个从 1 ~ 50 的数字：  35","好的，我为您想好了一个从 1 ~ 50 的数字：  36","好的，我为您想好了一个从 1 ~ 50 的数字：  37","好的，我为您想好了一个从 1 ~ 50 的数字：  38","好的，我为您想好了一个从 1 ~ 50 的数字：  39","好的，我为您想好了一个从 1 ~ 50 的数字：  40","好的，我为您想好了一个从 1 ~ 50 的数字：  41","好的，我为您想好了一个从 1 ~ 50 的数字：  42","好的，我为您想好了一个从 1 ~ 50 的数字：  43","好的，我为您想好了一个从 1 ~ 50 的数字：  44","好的，我为您想好了一个从 1 ~ 50 的数字：  45","好的，我为您想好了一个从 1 ~ 50 的数字：  46","好的，我为您想好了一个从 1 ~ 50 的数字：  47","好的，我为您想好了一个从 1 ~ 50 的数字：  48","好的，我为您想好了一个从 1 ~ 50 的数字：  49","好的，我为您想好了一个从 1 ~ 50 的数字：  50"
  ]
},

{
  keywords: ["1", "和", "50"],
  responses: [
    "好的，我为您想好了一个从 1 ~ 50 的数字：  1","好的，我为您想好了一个从 1 ~ 50 的数字：  2","好的，我为您想好了一个从 1 ~ 50 的数字：  3","好的，我为您想好了一个从 1 ~ 50 的数字：  4","好的，我为您想好了一个从 1 ~ 50 的数字：  5","好的，我为您想好了一个从 1 ~ 50 的数字：  6","好的，我为您想好了一个从 1 ~ 50 的数字：  7","好的，我为您想好了一个从 1 ~ 50 的数字：  8","好的，我为您想好了一个从 1 ~ 50 的数字：  9","好的，我为您想好了一个从 1 ~ 50 的数字：  10","好的，我为您想好了一个从 1 ~ 50 的数字：  11","好的，我为您想好了一个从 1 ~ 50 的数字：  12","好的，我为您想好了一个从 1 ~ 50 的数字：  13","好的，我为您想好了一个从 1 ~ 50 的数字：  14","好的，我为您想好了一个从 1 ~ 50 的数字：  15","好的，我为您想好了一个从 1 ~ 50 的数字：  16","好的，我为您想好了一个从 1 ~ 50 的数字：  17","好的，我为您想好了一个从 1 ~ 50 的数字：  18","好的，我为您想好了一个从 1 ~ 50 的数字：  19","好的，我为您想好了一个从 1 ~ 50 的数字：  20","好的，我为您想好了一个从 1 ~ 50 的数字：  21","好的，我为您想好了一个从 1 ~ 50 的数字：  22","好的，我为您想好了一个从 1 ~ 50 的数字：  23","好的，我为您想好了一个从 1 ~ 50 的数字：  24","好的，我为您想好了一个从 1 ~ 50 的数字：  25","好的，我为您想好了一个从 1 ~ 50 的数字：  26","好的，我为您想好了一个从 1 ~ 50 的数字：  27","好的，我为您想好了一个从 1 ~ 50 的数字：  28","好的，我为您想好了一个从 1 ~ 50 的数字：  29","好的，我为您想好了一个从 1 ~ 50 的数字：  30","好的，我为您想好了一个从 1 ~ 50 的数字：  31","好的，我为您想好了一个从 1 ~ 50 的数字：  32","好的，我为您想好了一个从 1 ~ 50 的数字：  33","好的，我为您想好了一个从 1 ~ 50 的数字：  34","好的，我为您想好了一个从 1 ~ 50 的数字：  35","好的，我为您想好了一个从 1 ~ 50 的数字：  36","好的，我为您想好了一个从 1 ~ 50 的数字：  37","好的，我为您想好了一个从 1 ~ 50 的数字：  38","好的，我为您想好了一个从 1 ~ 50 的数字：  39","好的，我为您想好了一个从 1 ~ 50 的数字：  40","好的，我为您想好了一个从 1 ~ 50 的数字：  41","好的，我为您想好了一个从 1 ~ 50 的数字：  42","好的，我为您想好了一个从 1 ~ 50 的数字：  43","好的，我为您想好了一个从 1 ~ 50 的数字：  44","好的，我为您想好了一个从 1 ~ 50 的数字：  45","好的，我为您想好了一个从 1 ~ 50 的数字：  46","好的，我为您想好了一个从 1 ~ 50 的数字：  47","好的，我为您想好了一个从 1 ~ 50 的数字：  48","好的，我为您想好了一个从 1 ~ 50 的数字：  49","好的，我为您想好了一个从 1 ~ 50 的数字：  50"
  ]
},

{
  keywords: ["1", "至", "50"],
  responses: [
    "好的，我为您想好了一个从 1 ~ 50 的数字：  1","好的，我为您想好了一个从 1 ~ 50 的数字：  2","好的，我为您想好了一个从 1 ~ 50 的数字：  3","好的，我为您想好了一个从 1 ~ 50 的数字：  4","好的，我为您想好了一个从 1 ~ 50 的数字：  5","好的，我为您想好了一个从 1 ~ 50 的数字：  6","好的，我为您想好了一个从 1 ~ 50 的数字：  7","好的，我为您想好了一个从 1 ~ 50 的数字：  8","好的，我为您想好了一个从 1 ~ 50 的数字：  9","好的，我为您想好了一个从 1 ~ 50 的数字：  10","好的，我为您想好了一个从 1 ~ 50 的数字：  11","好的，我为您想好了一个从 1 ~ 50 的数字：  12","好的，我为您想好了一个从 1 ~ 50 的数字：  13","好的，我为您想好了一个从 1 ~ 50 的数字：  14","好的，我为您想好了一个从 1 ~ 50 的数字：  15","好的，我为您想好了一个从 1 ~ 50 的数字：  16","好的，我为您想好了一个从 1 ~ 50 的数字：  17","好的，我为您想好了一个从 1 ~ 50 的数字：  18","好的，我为您想好了一个从 1 ~ 50 的数字：  19","好的，我为您想好了一个从 1 ~ 50 的数字：  20","好的，我为您想好了一个从 1 ~ 50 的数字：  21","好的，我为您想好了一个从 1 ~ 50 的数字：  22","好的，我为您想好了一个从 1 ~ 50 的数字：  23","好的，我为您想好了一个从 1 ~ 50 的数字：  24","好的，我为您想好了一个从 1 ~ 50 的数字：  25","好的，我为您想好了一个从 1 ~ 50 的数字：  26","好的，我为您想好了一个从 1 ~ 50 的数字：  27","好的，我为您想好了一个从 1 ~ 50 的数字：  28","好的，我为您想好了一个从 1 ~ 50 的数字：  29","好的，我为您想好了一个从 1 ~ 50 的数字：  30","好的，我为您想好了一个从 1 ~ 50 的数字：  31","好的，我为您想好了一个从 1 ~ 50 的数字：  32","好的，我为您想好了一个从 1 ~ 50 的数字：  33","好的，我为您想好了一个从 1 ~ 50 的数字：  34","好的，我为您想好了一个从 1 ~ 50 的数字：  35","好的，我为您想好了一个从 1 ~ 50 的数字：  36","好的，我为您想好了一个从 1 ~ 50 的数字：  37","好的，我为您想好了一个从 1 ~ 50 的数字：  38","好的，我为您想好了一个从 1 ~ 50 的数字：  39","好的，我为您想好了一个从 1 ~ 50 的数字：  40","好的，我为您想好了一个从 1 ~ 50 的数字：  41","好的，我为您想好了一个从 1 ~ 50 的数字：  42","好的，我为您想好了一个从 1 ~ 50 的数字：  43","好的，我为您想好了一个从 1 ~ 50 的数字：  44","好的，我为您想好了一个从 1 ~ 50 的数字：  45","好的，我为您想好了一个从 1 ~ 50 的数字：  46","好的，我为您想好了一个从 1 ~ 50 的数字：  47","好的，我为您想好了一个从 1 ~ 50 的数字：  48","好的，我为您想好了一个从 1 ~ 50 的数字：  49","好的，我为您想好了一个从 1 ~ 50 的数字：  50"
  ]
},

{
  keywords: ["1", "~", "50"],
  responses: [
    "好的，我为您想好了一个从 1 ~ 50 的数字：  1","好的，我为您想好了一个从 1 ~ 50 的数字：  2","好的，我为您想好了一个从 1 ~ 50 的数字：  3","好的，我为您想好了一个从 1 ~ 50 的数字：  4","好的，我为您想好了一个从 1 ~ 50 的数字：  5","好的，我为您想好了一个从 1 ~ 50 的数字：  6","好的，我为您想好了一个从 1 ~ 50 的数字：  7","好的，我为您想好了一个从 1 ~ 50 的数字：  8","好的，我为您想好了一个从 1 ~ 50 的数字：  9","好的，我为您想好了一个从 1 ~ 50 的数字：  10","好的，我为您想好了一个从 1 ~ 50 的数字：  11","好的，我为您想好了一个从 1 ~ 50 的数字：  12","好的，我为您想好了一个从 1 ~ 50 的数字：  13","好的，我为您想好了一个从 1 ~ 50 的数字：  14","好的，我为您想好了一个从 1 ~ 50 的数字：  15","好的，我为您想好了一个从 1 ~ 50 的数字：  16","好的，我为您想好了一个从 1 ~ 50 的数字：  17","好的，我为您想好了一个从 1 ~ 50 的数字：  18","好的，我为您想好了一个从 1 ~ 50 的数字：  19","好的，我为您想好了一个从 1 ~ 50 的数字：  20","好的，我为您想好了一个从 1 ~ 50 的数字：  21","好的，我为您想好了一个从 1 ~ 50 的数字：  22","好的，我为您想好了一个从 1 ~ 50 的数字：  23","好的，我为您想好了一个从 1 ~ 50 的数字：  24","好的，我为您想好了一个从 1 ~ 50 的数字：  25","好的，我为您想好了一个从 1 ~ 50 的数字：  26","好的，我为您想好了一个从 1 ~ 50 的数字：  27","好的，我为您想好了一个从 1 ~ 50 的数字：  28","好的，我为您想好了一个从 1 ~ 50 的数字：  29","好的，我为您想好了一个从 1 ~ 50 的数字：  30","好的，我为您想好了一个从 1 ~ 50 的数字：  31","好的，我为您想好了一个从 1 ~ 50 的数字：  32","好的，我为您想好了一个从 1 ~ 50 的数字：  33","好的，我为您想好了一个从 1 ~ 50 的数字：  34","好的，我为您想好了一个从 1 ~ 50 的数字：  35","好的，我为您想好了一个从 1 ~ 50 的数字：  36","好的，我为您想好了一个从 1 ~ 50 的数字：  37","好的，我为您想好了一个从 1 ~ 50 的数字：  38","好的，我为您想好了一个从 1 ~ 50 的数字：  39","好的，我为您想好了一个从 1 ~ 50 的数字：  40","好的，我为您想好了一个从 1 ~ 50 的数字：  41","好的，我为您想好了一个从 1 ~ 50 的数字：  42","好的，我为您想好了一个从 1 ~ 50 的数字：  43","好的，我为您想好了一个从 1 ~ 50 的数字：  44","好的，我为您想好了一个从 1 ~ 50 的数字：  45","好的，我为您想好了一个从 1 ~ 50 的数字：  46","好的，我为您想好了一个从 1 ~ 50 的数字：  47","好的，我为您想好了一个从 1 ~ 50 的数字：  48","好的，我为您想好了一个从 1 ~ 50 的数字：  49","好的，我为您想好了一个从 1 ~ 50 的数字：  50"
  ]
},

{
  keywords: ["科普","北京"],
  responses: [
    "[北京市](w)是中国的首都，四个直辖市之一，地处华北平原北部，环抱[河北省](w)，毗邻天津市。北京不仅是中国的政治中心，也是文化、科技、国际交往的重要枢纽，拥有三千多年的建城史和八百多年的建都史。北京以其独特的历史底蕴和现代化发展并存的城市风貌吸引着世界各地的游客和投资者。",
    "作为中国历史文化名城，[北京](w)拥有世界级历史文化遗产，如[故宫](w)、[天坛](w)、[颐和园](w)、[长城](w)等，每年吸引大量国内外游客。北京城的中轴线已有数百年历史，贯穿城市核心区域，从[永定门](w)一直延伸至[钟鼓楼](w)，展现了中华传统建筑的宏伟与庄重。",
    "[北京](w)是全国科技创新的中心，[中关村科技园区](w)被誉为“中国的硅谷”，聚集了百度、字节跳动、京东、小米等众多互联网科技巨头。此外，北京是全国高校最多的城市，拥有[北京大学](w)、[清华大学](w)、[中国科学院](w)等世界级学术机构，为科技创新提供强大支撑。",
    "作为全国的交通枢纽，北京拥有两座国际机场：[首都国际机场](w)和[大兴国际机场](w)，其中大兴机场是全球最大单体航站楼。铁路方面，[北京站](w)、[北京西站](w)、[北京南站](w)等是全国最繁忙的高铁站之一，连接全国各地，形成四通八达的交通网络。",
    "北京的美食文化源远流长，汇聚了全国各地的风味。最具代表性的北京美食包括[北京烤鸭](w)、[炸酱面](w)、[豆汁](w)、[卤煮火烧](w)等。其中，北京烤鸭已有六百多年历史，以皮脆肉嫩、味道醇厚而闻名，享誉全球，是来到北京必尝的特色美食。"
  ]
},

{
  keywords: ["科普","上海"],
  responses: [
    "[上海市](w)是中国四大直辖市之一，位于长江入海口，东临[东海](w)，南接[浙江省](w)，西邻[江苏省](w)。上海是中国经济、金融、贸易、航运和科技创新中心，也是全国人口最稠密的城市之一，总人口超过2400万。上海地势低平，属亚热带季风气候，四季分明，冬暖夏热，年均气温约16°C。",
    "[上海](w)有着悠久的历史，自古以来就是重要的港口城市。1843年，上海开埠，成为中国最早对外开放的城市之一，并迅速发展为远东的金融和贸易中心。20世纪初，上海被誉为“东方巴黎”，是中西文化交汇的地方。1949年新中国成立后，上海逐渐发展成为中国的经济中心，浦东开发开放后更是迈入世界级大都市行列。",
    "[上海](w)是中国经济最发达的城市之一，GDP连续多年位居全国前列。作为全球金融中心之一，[陆家嘴金融区](w)汇聚了[上海证券交易所](w)、中国人民银行上海总部等金融机构。此外，上海拥有[特斯拉超级工厂](w)、[上汽集团](w)等高端制造企业，[张江高科技园区](w)更是中国人工智能、生物医药的核心基地。上海港是全球吞吐量最大的港口之一，[浦东国际机场](w)则是中国最繁忙的航空枢纽之一。",
    "[上海](w)是中西文化交融的代表，既有海派文化的现代摩登，又保留着江南文化的细腻典雅。[沪语](w)（上海话）是本地人主要使用的方言，上海的[石库门](w)建筑风格独特，展现了传统与现代的结合。上海也是中国时尚、艺术和娱乐的重要中心，拥有世界级的[上海国际电影节](w)、[上海时装周](w)等文化盛事。",
    "上海的旅游资源丰富，拥有诸多著名景点。[外滩](w)是上海最具代表性的地标，见证了这座城市的百年变迁。[东方明珠塔](w)是上海的标志性建筑，高达468米，可俯瞰全市风光。[南京路步行街](w)是中国最繁华的商业街之一，而[迪士尼乐园](w)则是亚洲最受欢迎的主题公园之一。此外，[豫园](w)是上海的传统园林，融合了明清建筑风格，深受游客喜爱。"
  ]
},

{
  keywords: ["科普","广东"],
  responses: [
    "[广东省](w)位于中国南部沿海，是中国第一经济大省，省会为[广州市](w)。广东东临[福建省](w)，西接[广西](w)，北连[湖南](w)和[江西](w)，南濒[南海](w)，与[香港](w)、[澳门](w)相邻。广东地势北高南低，珠江三角洲是全国最富庶的地区之一，气候属亚热带与热带交界，四季温暖湿润，是中国人口最多的省份，常住人口超1.26亿。",
    "[广东](w)自古以来是海上丝绸之路的重要起点，唐宋时期已是中国对外贸易的重要窗口。明清时期，[广州](w)成为唯一允许外国商人进行贸易的通商口岸。1840年鸦片战争后，[香港](w)被割让，广东成为近代中国历史的重要舞台。改革开放后，[深圳](w)成为中国第一个经济特区，带动广东经济腾飞，如今广东经济总量连续30多年位居全国第一。",
    "[广东](w)是中国经济最发达的省份之一，GDP多年稳居全国首位。珠江三角洲是世界级制造业基地，拥有[华为](w)、[腾讯](w)、[比亚迪](w)等全球知名企业。广东还拥有多个国家级自贸区，如[前海](w)、[南沙](w)、[横琴](w)，是粤港澳大湾区的核心。深圳是全国科技创新中心，广州是华南的商贸中心，东莞是全球制造业基地，佛山的家电和汽车制造也享誉全球。",
    "广东以其多元文化和国际化氛围闻名。广东话（粤语）在广州、佛山、中山、东莞等地广泛使用，而客家话和闽南话则在粤东、粤北等地流行。广东人崇尚务实、敢为人先，商业氛围浓厚。岭南文化、粤剧、[广彩](w)、[醒狮](w)等传统艺术世代相传，同时广东也是中国流行音乐和影视的重要发源地。",
    "广东拥有丰富的旅游资源，如世界文化遗产[开平碉楼](w)和[丹霞山](w)，以及著名的海滨景区[深圳大梅沙](w)、[珠海长隆海洋王国](w)。[广州](w)是千年商都，著名景点有[白云山](w)、[长隆旅游度假区](w)、[广州塔](w)等。[深圳](w)则是现代化都市，拥有[世界之窗](w)、[欢乐谷](w)等主题公园。岭南水乡[顺德](w)更是美食之都，被誉为“世界美食之都”。"
  ]
},


{
  keywords: ["科普","四川"],
  responses: [
    "[四川省](w)位于中国西南地区，东邻[重庆市](w)，南接[云南省](w)和[贵州省](w)，西连[西藏自治区](w)，北靠[陕西省](w)和[甘肃省](w)。四川地形复杂多样，东部为四川盆地，土地肥沃，西部为青藏高原东缘，地势高峻。四川气候温润，盆地地区四季分明，以湿润的亚热带季风气候为主，而川西高原则以高原寒带气候为主。",
    "[四川](w)自古以来就是中国的政治、经济和文化重地，素有“天府之国”之称。四川历史悠久，公元前316年，[秦国](w)在此设立郡县，自此纳入中国统一版图。[三国时期](w)，蜀汉政权在此建立，著名的[武侯祠](w)和[刘备墓](w)至今仍是历史文化遗址。明清时期，四川成为移民大省，四川话也因此融合了多种方言特色。",
    "[四川](w)是中国经济的重要组成部分，2023年GDP超过5.7万亿元，在全国名列前茅。成都市是四川省会，同时也是中国重要的科技、创新和商业中心，被誉为“新一线城市”代表。四川的农业发达，盛产[大米](w)、[油菜](w)和[茶叶](w)，同时也是中国重要的天然气产区。此外，[中国航空工业集团](w)和[东方电气集团](w)等大型国企均在四川布局，助推高端制造业的发展。",
    "[四川](w)拥有独特的文化和风俗，巴蜀文化、藏羌文化交融共存。四川话是中国西南官话的代表，被认为是最具地方特色的方言之一。[川剧](w)是中国戏曲的重要分支，其中的[变脸](w)技艺更是蜚声海内外。此外，四川民间信仰丰富，[都江堰](w)的二王庙供奉着[李冰](w)父子，展现了对水利工程的崇敬。",
    "[四川](w)是中国最受欢迎的旅游目的地之一，拥有众多世界级景点。[九寨沟](w)以瑰丽的彩色湖泊闻名，[黄龙风景区](w)则有壮观的钙化池景观。[峨眉山](w)是中国四大佛教名山之一，山顶的[金顶](w)可俯瞰云海壮景。[都江堰](w)是世界上最古老的水利工程之一，至今仍在发挥作用。而作为“熊猫故乡”，[成都大熊猫繁育研究基地](w)更是吸引无数游客前来观赏国宝熊猫。"
  ]
},

{
  keywords: ["科普","浙江"],
  responses: [
    "[浙江省](w)位于中国东南沿海，东临[东海](w)，南接[福建省](w)，西邻[江西省](w)和[安徽省](w)，北连[上海市](w)和[江苏省](w)。浙江地势自西南向东北倾斜，丘陵和山地占全省总面积的70%，平原较少。[钱塘江](w)是浙江最大的河流，杭州湾地区潮汐壮观，以世界闻名的[钱塘江大潮](w)最为代表。",
    "[浙江](w)自古以来便是中国文化发达之地，历史悠久，素有“东南财赋之地”之称。春秋时期，浙江为[越国](w)所在地，[勾践](w)“卧薪尝胆”的故事流传千古。唐宋时期，浙江经济文化繁荣，[南宋](w)定都[临安](w)（今[杭州](w)），使浙江成为全国政治、经济和文化的中心。今天的浙江仍然承载着丰富的历史文化遗产，如[西湖](w)、[天台山](w)和[普陀山](w)。",
    "o(^▽^)o [浙江](w)是中国经济最发达的省份之一，2023年GDP已突破8万亿元，仅次于[广东](w)。浙江的民营经济发达，涌现出众多世界级企业，如[阿里巴巴](w)、[吉利汽车](w)、[海康威视](w)等，杭州更是全球著名的科技创新中心。此外，浙江的外贸发达，宁波-舟山港是世界第一大港口，承担着中国重要的货运进出口任务。",
    "[浙江](w)是中国传统文化和现代创新相结合的代表省份之一。这里有以[越剧](w)为代表的地方戏曲，也有全国闻名的[龙井茶](w)文化。浙江人素来以经商闻名，自古以来便有“无浙不成市”的说法。此外，浙江的民间工艺丰富，如[青田石雕](w)、[龙泉青瓷](w)和[湖笔](w)等，均为国家级非物质文化遗产。",
    "[浙江](w)旅游资源丰富，拥有众多世界级景点。[杭州西湖](w)是世界文化遗产，以湖光山色和人文景观闻名于世。[乌镇](w)、[西塘](w)等江南水乡，展现了江南古镇的独特韵味。[千岛湖](w)是中国最大的人工湖，湖水清澈，岛屿众多。此外，[普陀山](w)是中国佛教四大名山之一，每年吸引大量信徒前来朝圣。"
  ]
},

{
  keywords: ["科普","河南"],
  responses: [
    "o(^▽^)o [河南省](w)位于中国中东部，地处[黄河](w)中下游，是中华文明的重要发源地之一。河南简称“豫”，因古代“豫州”得名，省会是[郑州市](w)。河南是中国人口最多的省份之一，常住人口超过9800万，素有“九州腹地”之称。地理上，河南地势西高东低，以[太行山](w)、[伏牛山](w)为主要山脉，东部则为广阔的[黄淮平原](w)，农业资源丰富。",
    "[河南](w)是中华文明的发源地之一，拥有5000多年的文明史。这里是[夏朝](w)、[商朝](w)和[周朝](w)等多个王朝的诞生地，被誉为“华夏文明之源”。河南拥有[洛阳](w)、[开封](w)、[安阳](w)等七大古都，其中[殷墟](w)是世界文化遗产，出土了大量甲骨文，成为研究中国古代历史的重要依据。",
    "[河南](w)是中国的农业大省，素有“中原粮仓”之称，是全国**小麦、玉米、花生**等农产品的重要产地。同时，河南的工业体系完备，[郑州](w)是全国重要的制造业基地，[洛阳](w)的重工业、[许昌](w)的电力设备制造业、[新乡](w)的化工产业等，在全国具有重要影响。此外，[郑州航空港经济综合实验区](w)是中国唯一的航空经济试验区，使河南成为全国重要的交通物流中心。",
    "[河南](w)文化底蕴深厚，被誉为“戏曲之乡”。[豫剧](w)是中国五大戏曲剧种之一，著名豫剧表演艺术家有[常香玉](w)等。此外，河南的武术文化闻名全球，[嵩山少林寺](w)是中国禅宗祖庭，被誉为“天下功夫出少林”。在民间文化方面，[开封](w)的[清明上河园](w)再现了北宋汴京的繁华盛景，[南阳](w)的[诸葛亮文化](w)深受游客喜爱。",
    "[河南](w)旅游资源丰富，自然与人文景观交相辉映。[少林寺](w)是中国佛教圣地，以少林功夫闻名于世；[龙门石窟](w)是世界文化遗产，雕刻艺术精湛；[云台山](w)是国家5A级景区，以峡谷风光著称。此外，[嵩山](w)是五岳之一，被誉为中国武术圣地，而[清明上河园](w)则再现了北宋时期的市井风貌，让人仿佛穿越千年。"
  ]
},

{
  keywords: ["意思", "vocal"],
  responses: [
    "Vocal 是一个网络梗，源自抖音里的视频，意思时 “我靠” 的意思，表示惊讶，震惊 等，也被慢慢写上了 vocal的文字，用于玩梗。o(^▽^)o ",
    "“Vocal” 是一个网络梗，起源于抖音上的视频，实际上是“我靠”的谐音，常用于表达惊讶、震惊等情绪。随着梗的传播，网友们逐渐用“Vocal”代替“我靠”进行文字化表达，使其成为一种流行的玩梗方式。",
    "“Vocal” 是一个流行于抖音的网络梗，它源自“我靠”的谐音，常用于表达惊讶、震撼等情绪。随着这个梗的传播，网友们逐渐开始直接使用“Vocal”作为文字梗，使其成为一种独特的网络表达方式。",
    "“Vocal” 是一个源自抖音的网络梗，由“我靠”的谐音演变而来，通常用于表达震惊、惊讶等情绪。随着该梗的传播，网友们逐渐用“Vocal”直接代替文字表达，使其成为一种独特的玩梗方式。",
    "“Vocal” 是一个源自抖音的网络梗，由“我靠”的谐音演变而来，常用于表达惊讶、震惊等情绪。随着网络文化的发展，该词逐渐从口语化表达转变为一种文字梗，成为年轻人交流中的独特符号。这种现象体现了语言的创造力与传播的趣味性，也展现了网络时代语境下的新兴表达方式。"
  ]
},

{
  keywords: [ "我靠"],
  responses: [
    "别激动，慢慢来！😉 (^▽^ )",
    "怎么了？遇到啥问题了吗？",
    "冷静点，一切都会好起来的！",
    "发生了什么事？需要帮忙吗？",
    "稳住，我们能赢！(^▽^ )"
  ]
},

{
  keywords: [ "没有"],
  responses: [
    "真的没有吗？再确认一下？(⊙_⊙)",
    "没关系，下次一定有！(^▽^)",
    "那就想办法创造一个吧！(｀・ω・´)",
    "没有也没事，我们可以一起想办法！(～￣▽￣)～",
    "那就从这里开始，让我们一起努力！(ง •_•)ง"
  ]
},



{
  keywords: ["宇宙", "起源" ],
  responses: [
      "**🌌✨宇宙的起源历史✨🌌** _________________________________________________________________________________   ---  **🌠🌍✨1. 宇宙大爆炸理论✨🌍🌠**  ________________________________________________________________________________________ 宇宙的起源被广泛接受的理论是**[大爆炸理论](w)**（Big Bang Theory）。大约**138亿年前**，宇宙从一个**极端高温高密度的奇点**迅速膨胀，并在极短时间内形成了时间、空间和物质。💥💫   ____________________________________________________________________________________ ---  **🌞🌌✨2. 宇宙的第一缕光✨🌌🌞** _________________________________________________________________________________________  大爆炸后约**38万年**，宇宙冷却到足够低的温度，使原子形成，光子得以自由传播，这就是**宇宙微波背景辐射**（CMB）的起源📡✨，科学家们可以通过它观察宇宙的“婴儿照片”！📸🌠____________________________________________________________________________________________    ---  **🌟🌀✨3. 第一批恒星与星系的诞生✨🌀🌟** ___________________________________________________________________________________________ 在大爆炸后约**2亿年**，宇宙的第一批恒星（称为**第三星族星**）开始形成🌟🔥。这些恒星巨大而短命，最终爆炸并释放出重元素，使后来的星系、行星🌍和生命的基本元素得以诞生。____________________________________________________________________________________________    ---  **🚀🌎✨4. 太阳系的形成✨🌎🚀** _________________________________________________________________________________________________  大约**46亿年前**，我们的**[太阳系](w)**诞生了☀️🌍。它由一片巨大的星际尘埃和气体云坍缩形成，最终孕育出了太阳、行星、小行星带等。地球🌎也在这段时间内形成，并逐渐演化出生命🌱🦠。 ___________________________________________________________________________________________   ---  **🛸🌠✨5. 宇宙的未来✨🌠🛸**   宇宙仍在不断膨胀，并且速度在加快📈，科学家们提出了几种可能的未来结局：  ___________________________________________________________________________________  1. **热寂（Big Freeze）❄️**：宇宙继续膨胀，所有恒星燃烧殆尽，变成一片寒冷黑暗的空间。 ___________________________________________________________________________________  2. **大撕裂（Big Rip）💥**：暗能量不断增强，最终撕裂星系、原子，甚至时间本身。 ___________________________________________________________________________________  3. **大坍缩（Big Crunch）⚫**：宇宙最终停止膨胀并收缩，可能回到奇点状态，进入另一个循环。    ---  🌌✨**宇宙的奥秘仍在探索之中！**✨🌌",
      "**🌌✨宇宙起源的科学探究✨🌌**---___________________________________________________________________________________   **🌠🌍✨1. 大爆炸理论（Big Bang Theory）✨🌍🌠** ____________________________________________________________________________________  根据**[标准宇宙学模型](w)**，宇宙起源于约**138亿年前**的一次极端高温、高密度的奇点爆炸，即**[大爆炸](w)**。在**普朗克时间**（10⁻⁴³秒）内，宇宙处于**量子引力**支配的状态，我们对这一时期的物理规律仍不了解。随后，宇宙经历了以下关键阶段:___________________________________________________________________________________  🔹 **暴涨阶段（Inflation，10⁻³⁶秒 - 10⁻³²秒）**：宇宙呈指数级膨胀，均匀性和各向同性得以建立。___________________________________________________________________________________ 🔹 **夸克-胶子等离子体时期（10⁻¹²秒前后）**：温度极高，物质以自由夸克和胶子的形式存在。___________________________________________________________________________________    🔹 **强子化（10⁻⁶秒）**：夸克结合形成质子和中子，宇宙进入**强子物质**时代。___________________________________________________________________________________    🔹 **核合成（约3分钟）**：轻元素（氢、氦、微量锂）通过核反应形成，这是**原初核合成（Big Bang Nucleosynthesis, BBN）**阶段。___________________________________________________________________________________     ---  **🌞🌌✨2. 宇宙微波背景辐射（CMB）✨🌌🌞**___________________________________________________________________________________    在大爆炸后约**38万年**，宇宙冷却到**约3000K**，电子和质子结合形成中性氢，光子脱耦并自由传播，这形成了**[宇宙微波背景辐射](w)（CMB）**📡。CMB的各向异性研究提供了宇宙早期密度涨落的信息，对**暗物质**和**暗能量**的研究具有重要意义。___________________________________________________________________________________     ---  **🌟🌀✨3. 结构形成与星系演化✨🌀🌟**___________________________________________________________________________________    🔸 **暗物质主导的引力坍缩**：   宇宙中的微小密度涨落在暗物质引力作用下增长，形成了大尺度结构，如**宇宙网（Cosmic Web）**。 ____________________________________________________________________________________________   🔸 **第一代恒星（Population III）**：   在大爆炸后约**2亿年**，第一批无金属成分的恒星（III族星）诞生🔥，这些大质量恒星快速演化，并通过**[超新星爆发](w)**释放重元素，为后来的星系形成提供物质基础。   _____________________________________________________________________________________________ 🔸 **星系形成与并合**：   暗物质晕的引力作用下，气体冷却形成星系盘。不同星系通过**并合（Merger）**过程演化，形成今天的宇宙结构。  ___________________________________________________________________________________   ---  **🚀🌎✨4. 太阳系的形成✨🌎🚀**   ___________________________________________________________________________________ 🔹 **星际分子云坍缩**：46亿年前，一片富含重元素的**[原行星盘](w)**在自引力作用下坍缩，形成**太阳**☀️。   ___________________________________________________________________________________ 🔹 **行星形成理论**：通过**核心吸积模型（Core Accretion Model）**，微小尘埃颗粒聚集成原行星，最终形成**[地球](w)**等行星🌍。 ___________________________________________________________________________________   🔹 **生命起源条件**：地球形成后的**原始大气**和**液态水**可能为**生命的化学演化**提供了环境。___________________________________________________________________________________     ---  **🛸🌠✨5. 宇宙未来的演化✨🌠🛸**  ___________________________________________________________________________________  根据**[宇宙学常数](w)**和**[暗能量](w)**的观测，宇宙的未来可能有以下几种可能： ___________________________________________________________________________________    1. **热寂（Big Freeze）❄️**：暗能量驱动宇宙无限膨胀，恒星逐渐熄灭，宇宙进入“热寂”状态，所有结构消失。 ___________________________________________________________________________________   2. **大撕裂（Big Rip）💥**：如果暗能量的**状态方程**（w < -1）成立，宇宙膨胀加速最终导致**星系、原子甚至时空本身被撕裂**。  ___________________________________________________________________________________  3. **大坍缩（Big Crunch）⚫**：若宇宙密度足够高，引力将战胜膨胀，使宇宙重新收缩至一个奇点，可能引发**新一轮大爆炸**（Big Bounce）。  ___________________________________________________________________________________  4. **真空衰变（Vacuum Decay）⚛️**：如果**[希格斯场](w)**处于亚稳态，量子隧穿效应可能触发宇宙真空的衰变，导致宇宙终结。     ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴  ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴  ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴  ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴  ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴  ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴  ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴  ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴  ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴  ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴  ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴  ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴  ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴  ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ---  **🔭🌌 总结：探索宇宙的终极奥秘**  ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴  ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴  ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴  ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴  ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴  ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴  ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴ ￴￴ ￴￴ ￴   🌟 从奇点膨胀到星系演化，再到生命的诞生，宇宙的历史揭示了自然界的奇迹。未来的**[詹姆斯·韦布太空望远镜](w)**（JWST）和下一代引力波探测器或许能解答更多未解之谜！✨🔬🚀 ",
      "**🌌✨宇宙的起源与演化✨🌌** **🌠 大爆炸（Big Bang）**：宇宙诞生于约**138亿年前**，起初是一个极端高温、高密度的奇点💥。 **⚡ 暴涨阶段（Inflation, 10⁻³⁶秒 - 10⁻³²秒）**：宇宙极速膨胀，大小瞬间扩展数十个数量级📈。 **🔥 夸克-胶子等离子体（10⁻¹²秒前后）**：温度极高，物质以自由夸克和胶子形式存在⚛️。 **🔗 强子化（10⁻⁶秒）**：夸克结合成质子和中子，基本粒子形成。 **☀️ 原初核合成（约3分钟）**：宇宙温度下降，氢、氦、锂等轻元素诞生🌡️。 **🌊 宇宙微波背景辐射（38万年）**：光子自由传播，形成宇宙的“第一缕光”📡。 **🌟 第一代恒星（2亿年）**：无金属恒星（III族星）点亮黑暗宇宙🔥。 **🌀 星系形成（数亿年后）**：暗物质引力作用下，气体聚集形成星系🌌。 **☀️ 太阳系诞生（46亿年前）**：星际尘埃坍缩形成太阳、地球等行星🌍。 **🌍 生命起源（约40亿年前）**：地球具备适宜环境，生命开始演化🧬。 **🚀 未来可能命运**： 🔹 **热寂（Big Freeze）**：宇宙膨胀，最终冷寂❄️。 🔹 **大撕裂（Big Rip）**：暗能量加速膨胀，撕裂万物💥。 🔹 **大坍缩（Big Crunch）**：宇宙收缩回奇点🔄。 🔹 **真空衰变（Vacuum Decay）**：量子隧穿引发宇宙终结⚛️。 🌌 **宇宙仍充满未解之谜，探索永不止步！** 🔭✨"   
  ]
}

];

// 检查关键词组合是否匹配
function checkKeywordMatch(message) {
  const lowerMessage = message.toLowerCase(); // 转换为小写以便不区分大小写
  for (const item of keywordResponses) {
      const allKeywordsPresent = item.keywords.every(keyword => lowerMessage.includes(keyword));
      if (allKeywordsPresent) {
          return item.responses[Math.floor(Math.random() * item.responses.length)]; // 随机选择一个回复
      }
  }
  return null; // 如果不匹配，返回 null
}

// 解决重复发送问题
let sendMessageCalled = false; // 防止重复调用

function sendMessage() {
  if (isTyping || sendMessageCalled) return; // 如果 AI 正在回复或已发送消息，则直接返回
  sendMessageCalled = true; // 标记已调用

  setTimeout(() => { sendMessageCalled = false; }, 500); // 500ms 后允许重新发送

  const message = userInput.value.trim();
  if (message === "") return;

  addMessage("你", message, "user-message");

  // **优先检查关键词匹配**
  const keywordResponse = checkKeywordMatch(message);
  if (keywordResponse) {
      typeMessage("火狮智能助手", keywordResponse, "ai-message");
  } else if (isMathExpression(message)) {
      // **如果关键词匹配失败，再检查是否为数学表达式**
      const result = calculateMath(message);
      typeMessage("火狮智能助手", result.toString(), "ai-message");
  } else {
      // **如果都不是，使用默认的关键词回复**
      let response = getResponse(message);
      typeMessage("火狮智能助手", response, "ai-message");
  }

  userInput.value = ""; // 清空输入框
}



   // 改进后的 isMathExpression 函数_____________________________________________________________________________________________________
// 检查是否为数学表达式

function isMathExpression(message) {
  message = message.trim();
  return /[+\-*/^()=]/.test(message) || /加|减|乘|除|÷|×|·|%/.test(message);
}

//数学

function calculateMath(expression) {
  try {
      // 清理表达式，替换中文符号
      let cleanedExpression = expression
          .replace(/加/g, '+')
          .replace(/减/g, '-')
          .replace(/乘/g, '*')
          .replace(/除/g, '/')
          .replace(/÷/g, '/')
          .replace(/×/g, '*')
          .replace(/·/g, '*');

      // 处理"数字 ± 百分比" 例如 100 + 50% 变为 100 + (100 * 50 / 100)
      cleanedExpression = cleanedExpression.replace(/(\d+)\s*([\+\-])\s*(\d+)%/g, (match, num, operator, percent) => {
          return `${num} ${operator} (${num} * ${percent} / 100)`;
      });

      // 处理"数字 * 或 / 百分比" 例如 100 * 50% 变为 100 * (50 / 100)
      cleanedExpression = cleanedExpression.replace(/(\d+)\s*([\*/])\s*(\d+)%/g, (match, num, operator, percent) => {
          return `${num} ${operator} (${percent} / 100)`;
      });

      // 确保表达式只包含数字、运算符、小数点和括号
      cleanedExpression = cleanedExpression.replace(/[^0-9+\-*/().]/g, '');

      // 计算表达式
      const result = eval(cleanedExpression);
      return result;
  } catch (error) {
      return "抱歉，这个数学表达式无法计算，请确保表达式正确且只包含数字和运算符。";
  }
}




// 搜索功能 

let searchEnabled = false; // 是否启用搜索模式
let searchFrame = null; // 用于存储搜索窗口

function sendMessage() {
    if (isTyping || sendMessageCalled) return;
    sendMessageCalled = true;
    setTimeout(() => { sendMessageCalled = false; }, 500);

    const message = userInput.value.trim();
    if (message === "") return;

    addMessage("你", message, "user-message");

    // 开启搜索功能
    if (message === "开启搜索功能") {
        searchEnabled = true;
        typeMessage("火狮智能助手", "搜索功能已开启，请输入搜索内容。___________________________________________________________________提示：如果您要关闭搜索功能可以直接输入 关闭搜索功能", "ai-message");
        userInput.value = "";
        return;
    }

    // 关闭搜索功能
    if (message === "关闭搜索功能") {
        searchEnabled = false;
        if (searchFrame) {
            searchFrame.remove(); // 移除嵌入的 Bing 结果
            searchFrame = null;
        }
        typeMessage("火狮智能助手", "搜索功能已关闭，恢复聊天模式。", "ai-message");
        userInput.value = "";
        return;
    }

    // 在搜索模式下进行搜索
    if (searchEnabled) {
        typeMessage("火狮智能助手", "正在搜索，请稍候...  以下是搜索结果", "ai-message");

        // 删除之前的搜索窗口
        if (searchFrame) {
            searchFrame.remove();
        }

        // 创建一个 iframe 作为搜索窗口
        searchFrame = document.createElement("iframe");
        searchFrame.src = `https://www.bing.com/search?q=${encodeURIComponent(message)}`;
        searchFrame.style.width = "100%";
        searchFrame.style.height = "400px";
        searchFrame.style.border = "none";
        searchFrame.style.borderRadius = "8px";
        searchFrame.style.marginTop = "10px";
        searchFrame.style.paddingTop = "50px"; // 增加上方间距


        // 等待 AI 回复完成后插入 iframe
        setTimeout(() => {
            chatBox.appendChild(searchFrame);
            scrollToBottom(); // 滚动到底部
        }, 1000);

        userInput.value = "";
        return;
    }

    // **其他正常聊天逻辑**
    const keywordResponse = checkKeywordMatch(message);
    if (keywordResponse) {
        typeMessage("火狮智能助手", keywordResponse, "ai-message");
    } else if (isMathExpression(message)) {
        const result = calculateMath(message);
        typeMessage("火狮智能助手", result.toString(), "ai-message");
    } else {
        let response = getResponse(message);
        typeMessage("火狮智能助手", response, "ai-message");
    }

    userInput.value = "";
}




// 按钮搜索回复

function toggleButtons() {
  const buttonContainer = document.getElementById("button-container");
  const toggleButton = document.getElementById("toggle-button");

  if (buttonContainer.classList.contains("hidden")) {
      buttonContainer.classList.remove("hidden");
      toggleButton.textContent = "隐藏内容";
  } else {
      buttonContainer.classList.add("hidden");
      toggleButton.textContent = "显示内容";
  }
}
