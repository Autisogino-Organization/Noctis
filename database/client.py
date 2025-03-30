from config import SECRET_DATABASE_KEY
from supabase import create_client,Client

##
from utils.security import verify_password

SUPABASE_URL = "https://iqnyabathkjaqzqommeh.supabase.co"
SUPABASE_KEY = SECRET_DATABASE_KEY
supabase: Client =  create_client(SUPABASE_URL, SUPABASE_KEY)



