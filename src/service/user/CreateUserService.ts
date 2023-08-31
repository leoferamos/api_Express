import {hash} from "bcryptjs";
interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;

}
class CreateUserService{
    async execute ({name, email, admin = false, password} : IUserRequest) {
        
            if(!email || email==="") {
                throw new Error ("Email incorreto"); }
                if(password.length<8){
                    throw new Error ("Senha deve possuir pelo menos 8 dígitos")
                }
    
            const passwordHash = await hash(password, 8)
            //console.log(passwordHash);
                var vuser = {
                name: "Nome 1", email: "email 2", admin:false,
                password:passwordHash
            }
            return vuser;

        } 

        
        }
    

export {CreateUserService};