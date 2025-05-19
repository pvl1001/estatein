.PHONY: build
build: # Build
	npm run build

.PHONY: lint
lint: # Lint
	npm run lint

.PHONY: server
server: # Run json-server
	npm run server

.PHONY: start
start: # Run for development
	make server
	npm run dev

.PHONY: preview
preview: # Run for production
	make build
	npm run preview

.PHONY: typecheck
typecheck: # Check TS
	npm run typecheck

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?# .*$$' ./Makefile \
		| awk 'BEGIN {FS = ":.*?# "}; \
		       {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}' \
		| sort
