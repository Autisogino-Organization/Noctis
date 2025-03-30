from database.database import supabase
from utils.security import verify_password

def login_user(user_email:str, password:str):
    response = supabase.table("users").select("email,hashed_password").eq("email", user_email).execute()
    if response.data:
        store_hashed = response.data[0]["hashed_password"]
        return verify_password(password,store_hashed)
    else:
        return False
