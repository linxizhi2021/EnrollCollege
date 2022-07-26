/**
 * Notes: 后台HOME/登录模块 
 * Date: 2021-06-15 07:48:00 
 * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY cclinux0730 (wechat)
 */

const BaseProjectAdminService = require('./base_project_admin_service.js');
const UserModel = require('../../model/user_model.js'); 
const NewsModel = require('../../model/news_model.js'); 
const AlbumModel = require('../../model/album_model.js'); 
const EnrollModel = require('../../model/enroll_model.js');
const constants = require('../../public/constants.js');
const setupUtil = require('../../../../framework/utils/setup/setup_util.js');

class AdminHomeService extends BaseProjectAdminService {

	/**
	 * 首页数据归集
	 */
	async adminHome() {
		let where = {};

		let userCnt = await UserModel.count(where);
		let newsCnt = await NewsModel.count(where);
		let enrollCnt = await EnrollModel.count(where); 
		let albumCnt = await AlbumModel.count(where); 
		return [
			{ title: '用户数', cnt: userCnt },
			{ title: '内容数', cnt: newsCnt },
			{ title: '报名项目', cnt: enrollCnt }, 
			{ title: '相册', cnt: albumCnt }, 
		]
	}

	// 用户数据清理  
	async clearUserData(userId) {

	}


	//##################首页推荐
	/**添加首页推荐 */
	async updateHomeVouch({ type, ext, title, id, desc, pic }) {
		this.AppError('该功能暂不开放，如有需要请加作者微信：cclinux0730');

	}  

	/**删除推荐数据 */
	async delHomeVouch(id) {
		this.AppError('该功能暂不开放，如有需要请加作者微信：cclinux0730');

	}  
}

module.exports = AdminHomeService;