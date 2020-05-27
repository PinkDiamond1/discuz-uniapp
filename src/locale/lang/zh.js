/**
 * 中文 - 只是列举出来了部分时间和提示相关的文案，这个可以根据具体需求进行更改和添加
 * 注意和英文或者其它语言对齐
 */
export default {
  discuzq: {
    // 测试，不用的时候可以删掉
    hello: '你好',
    // 常用
    ok: '确认',
    close: '关闭',
    // 日期相关
    date: {
      now: '此刻',
      today: '今天',
      year: '年',
      month1: '1 月',
      month2: '2 月',
      month3: '3 月',
      month4: '4 月',
      month5: '5 月',
      month6: '6 月',
      month7: '7 月',
      month8: '8 月',
      month9: '9 月',
      month10: '10 月',
      month11: '11 月',
      month12: '12 月',
      week: '周',
      weeks: {
        sun: '日',
        mon: '一',
        tue: '二',
        wed: '三',
        thu: '四',
        fri: '五',
        sat: '六',
      },
      months: {
        jan: '一月',
        feb: '二月',
        mar: '三月',
        apr: '四月',
        may: '五月',
        jun: '六月',
        jul: '七月',
        aug: '八月',
        sep: '九月',
        oct: '十月',
        nov: '十一月',
        dec: '十二月',
      },
      morning: '上午',
      afternoon: '下午',
    },
    // 列表加载提示相关
    list: {
      loading: '加载中',
      noMatch: '无匹配数据',
      noData: '暂无数据',
      noMoreData: '没有更多数据了！',
    },
    // 提示框
    msgbox: {
      title: '提示',
      confirm: '确定',
      cancel: '取消',
      error: '输入的数据不合法!',
    },
    // 上传
    upload: {
      delete: '删除',
      preview: '查看图片',
      continue: '继续上传',
    },
    // 图片
    image: {
      error: '加载失败',
      imageUploading: '图片上传中...',
    },
    // 导航
    pageHeader: {
      title: '返回',
    },
    // @人员页面
    atMember: {
      atTitle: '选择@人员',
      selectedMember: '搜索成员',
      notSelected: '尚未选',
      selected: '@ 已选',
    },
    role: {
      noRole: '暂无角色',
    },
    // 发布页
    post: {
      free: '免费',
      note: '还能输入{num}个字',
      exceed: '已超出{num}个字',
      word: '{num}字',
      placeholder: '您想说的..',
      post: '发布',
      paymentAmount: '付费金额',
      freeWordCount: '免费的查看字数',
      selectToViewFreeWordCount: '选择查看免费字数',
      chooseCategory: '选择分类',
      selectToViewPaymentAmount: '选择查看付费金额',
      cancel: '取消',
      enterToViewPaymentAmount: '输入查看付费金额',
      enterTheWordCount: '输入查看字数',
      yuan: '元',
      customize: '自定义',
      theContentCanNotBeBlank: '内容不能为空',
      theclassifyCanNotBeBlank: '标签不能为空',
      imageCannotBeEmpty: '图片不能为空',
      videoCannotBeEmpty: '视频不能为空',
      pleaseWaitForTheVideoUploadToComplete: '请等待视频上传完成',
      pleaseWaitForTheImageUploadToComplete: '请等待图片上传完成',
      failedToObtainSignature: '获取签名失败',
      fromWeChatApplet: '来自微信小程序',
      theTitleCanNotBeBlank: '标题不能为空',
      pleaseEnterAPostTitle: '请输入帖子标题',
    },
  },
  uploader: {
    uploadFailed: '上传失败',
    uploadedSuccessfully: '上传成功',
    videoUploadedSuccessfully: '视频上传成功',
    videoUploading: '视频上传中...',
  },
  core: {
    admin_login: '管理员登录',
    back_home: '返回首页',
    close: '点击关闭',
    page_not_found: '页面没有找到',
    page_not_found_detail: '您要访问的页面可能已被删除，已更改名称或者暂时不可用',
    not_install: '该站点未安装',
    postTypesDoNotMatch: '帖子类型不匹配，请重新进入本页面',
    cancel: '取消',
    generatePoster: '生成海报',
    wxShare: '微信分享',
    default: '系统错误，请联系管理员',
    access_denied: '拒绝访问',
    category_not_found: '请选择分类',
    censor_not_passed: '抱歉，您填写的内容包含不良信息',
    model_not_found: '您访问的内容不存在或已被删除',
    route_not_found: '路由未找到',
    no_bind_user: '未绑定用户',
    thread_count_fail: '主题数操作错误',
    thread_behavior_fail: '主题状态异常',
    thread_action_fail: '主题操作异常',
    reply_content_cannot_null: '内容不能为空',
    upload_error: '上传图片失败',
    scale_sum_not_10: '分成比例相加必须为 10',
    cannot_delete_category_with_threads: '无法删除存在主题的分类',
    permission_denied: '没有权限，请联系站点管理员',
    validation_error: '验证错误',
    user_update_error: '修改信息失败',
    upload_time_not_up: '上传头像频繁，一天仅允许上传一次头像',
    order_post_not_found: '订单主题不存在',
    order_type_not_found: '订单类型有误',
    order_create_failure: '订单创建失败',
    status_cash_freeze: '钱包已冻结提现',
    available_amount_error: '钱包可用金额不足',
    operate_type_error: '操作类型不存在',
    wallet_status_error: '钱包状态有误',
    file_type_not_allow: '文件类型不允许',
    file_size_not_allow: '文件大小不允许',
    sms_verify_error: '验证码错误',
    operate_forbidden: '非法操作',
    login_failed: '帐号或密码错误',
    login_failures_times_toplimit: '密码错误次数达到5次，请15分钟后再次尝试',
    site_closed: '站点已关闭！',
    ban_user: '您的帐号被禁用，无法访问本站点',
    register_validate: '帐号审核中,请审核通过尝试',
    mobile_is_already_bind: '手机已经绑定',
    setting_fill_register_reason: '注册时的注册原因必须必填',
    faceid_error: '身份信息验证不通过',
    invalid_emoji_path: '无效的表情目录',
    notification_is_missing_template_config: '微信推送信息不全',
    tencent_secret_key_error: '腾讯云Secretid或SecretKey不正确',
    tencent_vod_transcode_error: '腾讯云云点播转码模板未设置',
    tencent_vod_subappid_error: '腾讯云云点播子应用错误',
    pay_password_failures_times_toplimit:
      '您输入的密码错误次数已超限，请点击忘记密码找回或次日后重试',
    qcloud_vod_cover_template_not_found: '截图模版不存在',
    contentdown: '显示更多...',
    contentrefresh: '正在加载...',
    noMoreData: '没有更多数据了',
    loading: '加载中',
  },
  topic: {
    persenUnit: '人',
    delete: '删除',
    management: '管理',
    reply: '回复',
    giveLike: '点赞',
    giveLikeAlready: '已赞',
    like: '赞',
    writeComment: '写评论',
    writeComments: '写评论...',
    share: '分享',
    reward: '打赏',
    pay: '支付',
    read: '阅读',
    collection: '收藏',
    collectionAlready: '已收藏',
    item: '条',
    comment: '评论',
    noComment: '暂无评论',
    noMoreData: '没有更多数据了',
    whole: '全部',
    paymentViewPicture: '查看图片',
    paymentViewRemainingContent: '查看剩余内容',
    paymentViewVideo: '查看视频',
    examineTip: '内容正在审核中，审核通过后才能正常显示！',
    powerTip: '没有权限，请联系站点管理员',
    inReview: '审核中',
    note: '450',
    canWrite: '还能输入',
    word: '个字',
    publish: '发布',
    replyContentCannotBeEmpty: '回复内容不能为空',
    supportTheAuthorToCreate: '支持作者继续创作',
    enterTheRewardPaymeAmount: '输入打赏付费金额',
    edit: '编辑',
    essence: '精华',
    cancelEssence: '取消精华',
    sticky: '置顶',
    cancelSticky: '取消置顶',
    deleteSuccessAndJumpToHome: '删除成功，跳转到首页',
    imageNumLimit: '评论只允许上传3张图片',
    noReplyPermission: '没有回复权限',
    noReplyLikePermission: '没有评论点赞权限',
    noCommentLikePermission: '没有回复点赞权限',
    deleteSuccessAndJumpToTopic: '删除成功，跳转到主题详情页',
    deleteFailed: '删除失败',
    deleteSuccess: '删除成功',
  },
  pay: {
    passwordTip: '请输入支付密码',
    payNow: '立即支付',
    passwordSetting: '请设置钱包支付密码',
    balance: '余额',
    sumOfMoney: '金额',
    inputComplete: '输入完成',
    surplus: '剩余',
    contentHide: '内容已隐藏',
    payHave: '支付作者，获得',
    pay: '支付',
    rmb: '元',
    showMyHead: '支付记录显示我的头像',
    wxPay: '微信支付',
    walletPay: '钱包支付',
    walletBalance: '钱包余额',
    walletBalanceNo: '钱包余额不足，剩余',
    cancel: '取消',
    payTo: '将支付到',
    ofAccount: '的账户',
    surePay: '确认支付',
    paySuccess: '支付成功',
    payFail: '支付失败',
    payType: '支付方式',
    payPassword: '支付密码',
  },
  auth: {
    userinfo: '获取头像和昵称',
  },
  // 首页
  home: {
    all: '所有',
    theme: '成员',
    homecontent: '内容',
    share: '分享',
    confirmText: '筛选',
    sticky: '置顶',
    cancel: '取消',
    tabsCircle: '首页',
    tabsNews: '消息',
    tabsMy: '我',
    filterPlate: '版块',
    filterType: '类型',
    text: '文本',
    invitation: '帖子',
    video: '视频',
    picture: '图片',
    essence: '精华',
    followed: '已关注',
    generatePoster: '生成海报',
    wxShare: '微信分享',
    word: '文字',
    released: '发布了',
    noPostingPermission: '当前没有发帖权限',
  },
  // 站点管理页面
  manage: {
    inviteMembers: '邀请成员',
    siteMembers: '站点成员',
    siteManagement: '站点管理',
    manageMembers: '成员管理',
    searchMembers: '搜索成员',
    nouse: '未使用',
    used: '已使用',
    invalid: '已失效',
    overdue: '已过期',
    setInvalid: '设为无效',
    generateInvitationUrl: '生成邀请链接',
    notSelected: '尚未选',
    selected: '操作已选',
    total: '共有 {total} 条记录',
    member: '成员',
    contents: '内容',
    share: '分享',
    circleinfo: '站点信息',
    siteintroduction: '站点介绍',
    creationtime: '创建时间',
    circlemode: '站点模式',
    paymentmode: '付费模式',
    publicmode: '公开模式',
    circlemaster: '站长',
    myRole: '我的角色',
    joinedTime: '加入时间',
    periodvalidity: '有效期至',
    myauthority: '我的权限',
    setting: '设置',
    noContent: '暂无内容',
  },
  // 消息页面
  notice: {
    notice: '消息',
    relate: '@我的',
    relatedMe: '@了我',
    reply: '回复我的',
    repliedMe: '回复了我',
    like: '点赞我的',
    likedMe: '点赞了我',
    reward: '支付我的',
    rewardedMe: '打赏了我',
    system: '系统通知',
    admin: '管理员',
    delete: '删除',
    send: '发送',
    emptycontent: '内容不能为空',
  },
  // 海报分享页
  share: {
    generating: '拼命生成中...',
    buildfailed: '生成海报失败',
    successfully: '图片保存成功',
    savefailed: '图片保存失败',
    savealbum: '保存相册',
    longpressrecog: '长按识别小程序码查看详情',
    recomment: '推荐',
    goddessvideo: '女神视频',
    comefrom: '来自',
    stay: '在',
    published: '中发表的',
    contents: '内容',
    siteintroduction: '站点介绍',
    member: '成员',
    confirm: '确定保存到相册吗',
  },
  // 信息修改页
  modify: {
    numbermodifitions: '用户名只可修改一次',
    submission: '提交',
    emptyname: '名字不能为空',
    modifysucc: '名字修改成功',
    phonbound: '已绑定手机',
    placeentercode: '请输验证码',
    valifailed: '验证失败',
    lateron: '稍后重试',
    sendverificode: '发送验证码',
    phonnumberempty: '未绑定手机号',
    retransmission: '秒后重发',
    validionerro: '验证码错误，您还可以重发',
    frequency: '次',
    newphonnumber: '输入新手机号码',
    phontitle: '手机号修改成功',
    nextsetp: '下一步',
    enterpaymentpas: '请输入支付密码',
    enterpaymentagin: '请再次输入支付密码',
    modification: '已有支付密码',
    reenter: '两次输入的密码不同，请重新输入',
    paymentsucceed: '支付密码设置成功',
    payee: '收款人',
    withdrawable: '可提现余额',
    withdrawalamount: '提现金额',
    actualamout: '实际提现金额',
    enteramount: '请输入提现金额',
    phonnumber: '手机号',
    servicechaege: '手续费：',
    percentage: '元 (',
    percentagcon: '%)',
    withdrawal: '提现成功',
    enterold: '请输入旧密码',
    enternew: '请输入新密码',
    enterreplace: '请重复输入新密码',
    oldpassword: '旧密码不能为空',
    newpassword: '新密码不能为空',
    confrimpasword: '确认密码不能为空',
    titlepassword: '密码修改成功',
    forgetoldpassword: '忘记旧密码?',
    masstext: '两次输入的密码不一致，请重新输入',
    realname: '请输入真实姓名',
    enteridnumber: '请输入您的身份证号码',
    idcardisempty: '身份证号码不能为空',
    nameauthensucc: '实名认证成功',
    mysignture: '我的签名',
    canalsoinput: '还能输入',
    wordnumber: '个字',
    signturecontent: '请输入签名内容',
    modificationsucc: '签名设置成功',
    passwordsetsucc: '密码设置成功',
    forgetpassword: '忘记密码 ',
    retrievepassword: ' 找回密码',
    placeenternewpass: '请输新密码',
    authentication: '请输入支付密码，以验证身份',
    authensucceeded: '身份验证成功',
    authenfailed: '身份验证失败',
    passwordinputerro: '密码输入错误',
    forgetmanypassword: '忘记密码？',
    nohasphon: '请先绑定手机号',
    idtitl: '非法身份证号（长度、校验位等不正确）',
    nametitl2: '非法姓名（长度、格式等不正确）',
    verifyoldphon: '验证旧手机',
  },
  permission: {
    viewThreads: '查看主题列表',
    thread: {
      viewPosts: '查看主题',
      reply: '回复主题',
      hide: '删除主题',
      hidePosts: '删除回复',
      favorite: '帖子收藏',
      likePosts: '帖子点赞',
      batchEdit: '批量管理主题',
      editPosts: '编辑',
      essence: '加精',
      sticky: '置顶',
    },
    createThreadImage: '发布图片',
    createThread: '发布文本',
    createThreadLong: '发布帖子',
    createThreadVideo: '发布视频',
    attachment: {
      create: ['上传附件', '上传图片'],
      view: ['查看附件', '查看图片'],
      delete: '删除附件',
    },
    viewUserList: '站点会员列表',
    cash: {
      create: '申请提现',
    },
    order: {
      create: '创建订单',
    },
    user: {
      view: '查看某个用户信息权限',
      edit: '编辑用户状态',
    },
    userFollow: {
      create: '关注用户',
    },
    group: {
      edit: '编辑用户组',
    },
    viewSiteInfo: '站点信息',
    createInvite: '管理-邀请加入',
    dialog: {
      create: '发布私信 ',
    },
    showGroups: '显示用户组名',
    trade: {
      pay: {
        order: '订单支付',
      },
    },
  },
  // 我的和个人主页
  profile: {
    myprofile: '我的资料',
    mywallet: '我的钱包',
    myfavorite: '我的收藏',
    circleinfo: '站点信息',
    search: '搜索',
    privateMessage: '私信',
    circlemanagement: '站点管理',
    topic: '主题',
    following: '关注',
    followed: '已关注',
    mutualfollow: '互相关注',
    followers: '粉丝',
    likes: '点赞',
    username: '用户名',
    avatar: '头像',
    mobile: '手机号码',
    bindingmobile: '绑定手机',
    password: '密码',
    modify: '修改',
    wechat: '微信',
    certification: '实名认证',
    tocertification: '去认证',
    signature: '签名',
    availableamount: '可用余额',
    freezeamount: '冻结金额',
    withdrawalslist: '提现记录',
    walletlist: '钱包明细',
    orderlist: '订单明细',
    walletpassword: '钱包密码',
    setpassword: '设置密码',
    setpaypassword: '设置支付密码',
    total: '共有',
    records: '记录',
    amountinvolved: '涉及金额',
    collection: '收藏',
    item: '条',
    status: '状态',
    time: '时间',
    paid: '已付款',
    tobepaid: '待付款',
    all: '所有',
    type: '类型',
    register: '注册',
    reward: '打赏',
    paytheme: '付费主题',
    paygroup: '付费用户组',
    withdrawalfreeze: '提现冻结',
    withdrawalsucceed: '提现成功',
    withdrawalunfreeze: '提现解冻',
    registeredincome: '注册收入',
    rewardincome: '打赏收入',
    laborincome: '人工收入',
    laborexpenditure: '人工支出',
    tobereviewed: '待审核',
    approved: '审核通过',
    auditfailed: '审核不通过',
    paymenttobemade: '待打款',
    paymentsucceed: '已打款',
    paymentfailed: '打款失败',
    theme: '深色模式',
    freezingreason: '冻结原因',
  },
  site: {
    circleintroduction: '站点介绍',
    creationtime: '创建时间',
    periodvalidity: '有效期',
    day: '天',
    circlemaster: '站长',
    site: '站点',
    paynow: '立即付费',
    justonelaststepjoinnow: '只需最后一步，立即加入',
    circlemode: '站点模式',
    paymentmode: '付费模式',
    publicmode: '公开模式',
    validfromaccession: '有效期自加入起',
    myauthority: '我的权限',
    inviteyouas: '邀请您，作为',
    join: '加入',
    accepttheinvitationandbecome: '接受邀请，成为',
  },
  // 搜索
  search: {
    filter: '筛选',
    search: '搜索',
    searchkeywords: '搜索关键字',
    cancel: '取消',
    users: '用户',
    searchmoreusers: '搜索更多用户',
    norelatedusersfound: '没有找到相关用户',
    noFollowers: '暂无关注用户，请搜索',
    themes: '主题',
    searchmorethemes: '搜索更多主题',
    norelatedthemesfound: '没有找到相关主题',
  },
};
