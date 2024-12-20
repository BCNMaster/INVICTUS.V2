from fastapi import APIRouter, HTTPException, Depends
from ..services.auth import get_current_user
from ..services.ai import generate_learning_content
from ..models.learning import LearningRequest

router = APIRouter()

@router.post("/generate-content")
async def create_learning_content(
    request: LearningRequest,
    current_user = Depends(get_current_user)
):
    try:
        content = await generate_learning_content(
            topic=request.topic,
            difficulty=request.difficulty,
            format=request.format
        )
        return {"content": content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
