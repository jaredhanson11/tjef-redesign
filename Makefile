docker-user=jaredhanson11
name=${docker-user}/tjef-website

set-tag:
	$(eval TAG=`git rev-parse --short -ref HEAD`)
build:
	docker build . -t ${name}:latest
build-tagged: set-tag
	docker build . -t ${name}:${TAG}
push: build
	docker push ${name}:latest
push-tagged: build-tagged
	docker push ${name}:${TAG}