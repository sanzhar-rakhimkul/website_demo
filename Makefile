.PHONY: backend clear run restart
backend:
	docker build -t website_demo_backend ./backend/

run:
	docker run -d -p 8000:80 --name website_demo_backend website_demo_backend

clear:
	docker stop website_demo_backend
	docker rm website_demo_backend

restart: backend clear run