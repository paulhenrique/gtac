# build react-app
FROM node:16 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# ambiente de produção
FROM nginx:1.19
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html/

EXPOSE 5000
CMD ["nginx", "-g", "daemon off;"]