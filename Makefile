# Makefile

SERVER_IP:="212.24.104.202"
IMAGE_NAME:="webz_app"
CONTAINER_NAME:="webz_app"
PORT:="80"

PHONY: deploy
deploy:
	@echo "-------------------------------------------------------"
	@echo "Uploading and running app in a docker container"
	@echo "-------------------------------------------------------"
	@ssh root@$(SERVER_IP) \
		" rm -rf react-server-side-rendering; \
		git clone https://github.com/MrJonas/react-server-side-rendering.git; \
		cd react-server-side-rendering ; \
		docker stop $(CONTAINER_NAME) ; \
		docker rm $(CONTAINER_NAME) ; \
		docker build --tag $(IMAGE_NAME) . ; \
		docker run -e "VIRTUAL_HOST=testas.dviraciumarsrutai.lt" \
			-e "LETSENCRYPT_HOST=testas.dviraciumarsrutai.lt"  \
			-e "LETSENCRYPT_EMAIL=jonas.l.antanaitis@gmail.com"  \
			--name $(CONTAINER_NAME) --link mongo_instance:mongo_instance -d $(IMAGE_NAME) ; \
		"