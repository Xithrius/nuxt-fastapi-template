from fastapi.routing import APIRouter

from .echo import router as echo_router

api_router = APIRouter()

api_router.include_router(echo_router, prefix="/echo", tags=["echo"])
