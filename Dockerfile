FROM node:9 as builder
WORKDIR /src
COPY . .
RUN yarn
RUN yarn build

FROM wisvch/nginx
COPY --from=builder /src/build/ /srv/2018
