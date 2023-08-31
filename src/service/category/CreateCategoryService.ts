import {hash} from "bcryptjs";
interface ICategoryRequest {
    type:string;
}
class CreateCategoryService{
    async execute ({type} : ICategoryRequest) {
        
            if(!type || type==="") {
                throw new Error ("Categoria incorreta!"); } 

                var vcategory = {
                type: "tipo 1"                
            }
            return vcategory;
        }         
        }   

export {CreateCategoryService};