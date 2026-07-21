# syntax=docker/dockerfile:1
FROM python:3.12-slim-bookworm
WORKDIR /app
RUN pip install --no-cache-dir "bullmq>=2.9.0" "pydantic>=2.11.0" "redis>=5.2.0"
COPY src ./src
ENV PYTHONPATH=/app/src
ENV REDIS_URL=redis://redis:6379
CMD ["python", "-m", "worker.main"]
