FROM node:alpine as builder

RUN npm install -g handlebars
COPY ./website /home/node/website
COPY ./scripts /home/node/scripts
RUN /home/node/scripts/make_templates.sh

FROM nginx
COPY ./website /usr/share/nginx/html
COPY --from=builder /home/node/website/js/templates.js /usr/share/nginx/html/js/templates.js