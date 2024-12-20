from beanie import Document
from pydantic import BaseModel
from typing import List, Optional

class CareerSkill(BaseModel):
    name: str
    level: str
    description: Optional[str]

class Career(Document):
    title: str
    description: str
    category: str
    skills: List[CareerSkill]
    learning_path: List[str]
    estimated_time: str
    difficulty: str
    prerequisites: Optional[List[str]]
    
    class Settings:
        name = "careers"
        indexes = [
            [("title", "text"), ("description", "text"), ("category", "text")]
        ]

class CareerSearch(BaseModel):
    query: str
    category: Optional[str] = None
    difficulty: Optional[str] = None
