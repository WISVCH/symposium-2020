FROM node:9 as build-deps

WORKDIR /usr/src/app/
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

FROM nginx:1.13-alpine
COPY nginx_server.conf /etc/nginx/conf.d/default.conf
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html/2018/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
