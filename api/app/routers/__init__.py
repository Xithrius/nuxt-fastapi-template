from fastapi.routing import APIRouter

from .echo import router as echo_router
from .health import router as health_router

api_router = APIRouter(prefix="/api")

api_router.include_router(echo_router, prefix="/echo", tags=["Echo"])
api_router.include_router(health_router, prefix="/health", tags=["Monitoring"])
