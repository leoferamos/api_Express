import {hash} from "bcryptjs";
interface IProductRequest {
    name:string;
    price:string;

}
class CreateProductService{
    async execute ({name, price} : IProductRequest) {
        
            if(!name || name==="") {
                throw new Error ("Nome incorreto!"); }
                if(!price || price==="")
                {
                    throw new Error ("Preço incorreto!")
                }
    
           
            //console.log(passwordHash);
                var vproduct = {
                name: "nome 1",
                price:"R$20,00"
                
            }
            return vproduct;

        } 

        
        }
    

export {CreateProductService};