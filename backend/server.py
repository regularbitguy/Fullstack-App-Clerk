from src.app import app

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000) # Corre FastAPI con Uvicorn en el entorno local (8000)