import User from './User'

export async function getUser({username, password}):Promise<any>{
        try {
            const user = await User.findAll({
                raw: true,
                attributes: ['username', 'password'],
                where: {'username':username, 'password':password}
            })
            if (!user){
                return false
            }else if(user.length > 1){
                return false
            }else{
                return true;   
            }
        } catch (error) {
            return error;
        }
    }