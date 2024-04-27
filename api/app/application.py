from fastapi import FastAPI
from fastapi.responses import UJSONResponse

from app.lifetime import lifespan
from app.routers import api_router
from app.settings import settings


def get_app() -> FastAPI:
    openapi_url = "/api/openapi.json" if settings.environment == "dev" else None

    app = FastAPI(
        title="template-api",
        version="0.1.0",
        docs_url="/api/docs",
        redoc_url="/api/redoc",
        openapi_url=openapi_url,
        default_response_class=UJSONResponse,
        lifespan=lifespan,
    )

    app.include_router(router=api_router)

    return app
