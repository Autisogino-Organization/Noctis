from pydantic import BaseModel , EmailStr 
from datetime import date  

class CreateUser(BaseModel):

    name : str 
    username : str 
    email : EmailStr
    datetime : date 
    password : str
