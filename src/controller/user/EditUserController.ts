import { Request, Response } from "express";

class EditUserController {
  async handle(request: Request, response: Response) {
    
    const id= request.params.id;
    console.log(id)
    const user = 
    {       
        name:"Fabio",
        email:"fabio@gmail.com",
        admin:false,
        password:"1234"             
  }
   
    return response.json(user);
  }
}

export { EditUserController };