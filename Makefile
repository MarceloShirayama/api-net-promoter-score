help:
	@echo "Comandos do Makefile:"
	@echo "make (comando)"
	@echo "comandos:"
	@echo "help	: Exibe essa ajuda."
	@echo "lint	: Executa o eslint."

lint:
	node_modules/.bin/eslint ./src/* --fix