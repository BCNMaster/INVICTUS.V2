from openai import OpenAI
from ..config import settings

client = OpenAI(api_key=settings.OPENAI_API_KEY)

async def generate_learning_content(topic: str, difficulty: str = "beginner", format: str = "explanation"):
    """Generate AI-powered learning content"""
    
    system_prompt = f"""You are an expert tutor specialized in {topic}. 
    Create {difficulty} level content in the requested {format}.
    Focus on clear explanations and practical examples."""
    
    try:
        response = await client.chat.completions.create(
            model="gpt-4-turbo-preview",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": f"Teach me about {topic}"}
            ],
            temperature=0.7,
            max_tokens=1000
        )
        
        return response.choices[0].message.content
        
    except Exception as e:
        raise Exception(f"Error generating content: {str(e)}")

async def generate_career_recommendations(skills: list, interests: list):
    """Generate personalized career recommendations"""
    
    prompt = f"""Given these skills: {', '.join(skills)}
    And interests: {', '.join(interests)}
    Suggest suitable career paths with explanations."""
    
    try:
        response = await client.chat.completions.create(
            model="gpt-4-turbo-preview",
            messages=[
                {"role": "system", "content": "You are a career guidance expert."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
            max_tokens=1000
        )
        
        return response.choices[0].message.content
        
    except Exception as e:
        raise Exception(f"Error generating recommendations: {str(e)}")
