from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3001",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class User(BaseModel):
    email: str
    password: str

@app.post("/api/signup")
async def signup(user: User):
    # Here you would typically hash the password and save to a database
    # For this example, we'll just return a success message
    return {"message": "User created successfully"}

@app.post("/api/login")
async def login(user: User):
    # Here you would typically verify the user against a database
    # For this example, we'll just return a mock token
    if user.email == "test@example.com" and user.password == "password":
        return {"token": "mock_token_12345"}
    else:
        raise HTTPException(status_code=401, detail="Incorrect username or password")