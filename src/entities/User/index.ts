export { userActions, userReduser } from './model/slice/userSlice'
export type { User, UserSchema } from './model/type/user'
export { UserRole } from './model/const/const'
export { getUser } from './model/selectors/getUser/getUser'
export { getAuthUserData } from './model/selectors/getAuthUserData/getAuthUserData'
export {
    getUserRoles,
    isUserAdmin,
    isUserManager,
} from './model/selectors/getUserRoles/getUserRoles'
export { getUserInited } from './model/selectors/getUserInited/getUserInited'
