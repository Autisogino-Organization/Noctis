from fastapi import APIRouter , HTTPException 
from schemas.register_schema import CreateUser 
from utils.register_security import hash_password
from database.client import supabase 

router = APIRouter()

@router.post("/auth/register" , description="User registration")
async def create_user(data_user : CreateUser):
    new_user = data_user.dict()
    new_user["password"] = hash_password(data_user.password)

    
