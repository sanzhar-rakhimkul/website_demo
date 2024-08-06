FROM python:3.12.4-slim-bullseye

WORKDIR /app

COPY ./requirements.txt /app/requirements.txt

RUN pip install --upgrade --no-cache -r requirements.txt

COPY /app /app

CMD ["fastapi", "run", "main.py", "--port", "80"]