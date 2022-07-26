module.exports = {
	PROJECT_COLOR: '#2662D1',
	NAV_COLOR: '#ffffff',
	NAV_BG: '#2662D1',

	// 用户
	USER_FIELDS: [
		{ mark: 'sex', title: '性别', type: 'select', selectOptions: ['男', '女'], must: true },
		{ mark: 'area', title: '所在地区', type: 'area', must: true },
	],

	// 资讯  
	NEWS_CATE: [
		{ id: 1, title: '学校概况', style: 'leftbig1' },
		{ id: 2, title: '招生指南', style: 'leftbig1' }, 
		{ id: 3, title: '入学须知', style: 'leftbig1' },
		{ id: 4, title: '就业升学', style: 'leftbig1' },

	],

	// 相册  
	ALBUM_CATE: [
		{ id: 1, title: '校园环境' },
		{ id: 2, title: '教学场所' },
		{ id: 3, title: '生活设施' },
		{ id: 4, title: '文体娱乐' },
	],
	ALBUM_FIELDS: [
		{ mark: 'cover', title: '封面图片', type: 'image', min: 1, max: 1, must: true },
		{ mark: 'detail', title: '详细介绍', type: 'content', must: true },
	],

	// 报名 
	ENROLL_CATE: [
		{ id: 1, title: '文史类' },
		{ id: 2, title: '财经类' },
		{ id: 3, title: '理工类' },
		{ id: 4, title: '艺术类' },
	],
	ENROLL_FIELDS: [
		{ mark: 'year', title: '学制', desc: '如三年制，五年制', type: 'text', must: true },
		{ mark: 'start', title: '起点学历', desc: '报名所需的最低学历，如初中', type: 'text', must: true },
		{ mark: 'edu', title: '获得学历', desc: '毕业所获得的学历，如中专,大专', type: 'text', must: true },
		{ mark: 'fee', title: '学费', desc: '填写需缴纳的学费，其他费用等', type: 'text', must: true },
		{ mark: 'major', title: '专业特色', type: 'textarea', max: 1000, must: true },
		{ mark: 'lesson', title: '主修课程', type: 'textarea', max: 1000 },
		{ mark: 'work', title: '升学与就业', type: 'textarea', max: 1000 },
		{ mark: 'cover', title: '封面图片', type: 'image', len: 1, must: true },
		{ mark: 'album', title: '介绍图集', type: 'image', min: 1, max: 8 },

	],
	ENROLL_JOIN_FIELDS: [
		{ mark: 'name', type: 'text', title: '姓名', must: true, max: 30, edit: false },
		{ mark: 'birth', type: 'date', title: '出生日期', must: true, edit: false },
		{ mark: 'sex', title: '性别', type: 'select', selectOptions: ['男', '女'], must: true, edit: false },
		{ mark: 'idcard', type: 'idcard', title: '身份证号', must: true, edit: false },
		{ mark: 'phone', type: 'mobile', title: '电话号码', must: true, edit: false },
		{ mark: 'nation', title: '民族', type: 'select', selectOptions: ['汉族', '蒙古族', '回族', '藏族', '维吾尔族', '苗族', '彝族', '壮族', '布依族', '朝鲜族', '满族', '侗族', '瑶族', '白族', '土家族', '哈尼族', '哈萨克族', '傣族', '黎族', '僳僳族', '佤族', '畲族', '高山族', '拉祜族', '水族', '东乡族', '纳西族', '景颇族', '柯尔克孜族', '土族', '达斡尔族', '仫佬族', '羌族', '布朗族', '撒拉族', '毛南族', '仡佬族', '锡伯族', '阿昌族', '普米族', '塔吉克族', '怒族', '乌孜别克族', '俄罗斯族', '鄂温克族', '德昂族', '保安族', '裕固族', '京族', '塔塔尔族', '独龙族', '鄂伦春族', '赫哲族', '门巴族', '珞巴族', '基诺族', '其他'], must: true },
		{ mark: 'edu', title: '当前学历', type: 'select', selectOptions: ['小学', '初中', '高中', '职高', '中专', '技校', '大专', '本科及以上', '其他'], must: true },
		{ mark: 'address', type: 'textarea', title: '家庭住址' },
		{ mark: 'postaddress', type: 'textarea', title: '邮寄地址', must: true },
		{ mark: 'postcode', type: 'text', len: 6, title: '邮政编码', must: true },
	],

}