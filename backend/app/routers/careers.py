from fastapi import APIRouter, HTTPException, Depends
from typing import List, Optional
from ..models.career import Career, CareerSearch
from ..services.auth import get_current_user

router = APIRouter()

@router.get("/search")
async def search_careers(query: Optional[str] = None):
    if not query:
        return []
    
    # Search implementation
    careers = await Career.find(
        {"$text": {"$search": query}},
        {"score": {"$meta": "textScore"}}
    ).sort([("score", {"$meta": "textScore"})]).to_list()
    
    return careers

@router.get("/all")
async def get_all_careers():
    return await Career.find_all().to_list()
