FROM node:20.12.2-alpine3.19 as build
WORKDIR /usr/app
COPY . /usr/app
RUN yarn install && npx browserslist@latest --update-db
RUN yarn build

FROM nginx:1.25-alpine
EXPOSE 80
COPY ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/app/build /usr/share/nginx/html