import Router from 'express'
import { followUnfollowUser,  getOtherUserProfile,  getSearchUser,  logout, updateProfilePic, updateUser, userLogin, userSignup, verifyEmail } from '../controllers/user.controller.js'
import { userAuth } from '../middleware/authMiddleware.js'
import { upload } from '../middleware/multer.middleware.js'

const router= Router()

router.route('/userSignup').post(userSignup)
router.route("/verifyEmail/:token").get(verifyEmail)
router.route('/userLogin').post(userLogin)
router.route('/logout').get(userAuth,logout)
// router.route('/getProfile').get(userAuth, getUserProfile)
router.route('/updateUserInfo').put(userAuth,updateUser)
router.route('/updateProfilePic').put(userAuth,upload.single('avatar'),updateProfilePic)
router.route('/follow/:id').put(userAuth,followUnfollowUser)
router.route('/searchUser').get(userAuth, getSearchUser)
router.route('/getOtherUsersProfile/:id').get(userAuth, getOtherUserProfile)



export default router
