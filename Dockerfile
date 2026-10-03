FROM node:24-alpine AS build

WORKDIR /app

COPY mini-project-react/package*.json ./

RUN npm ci

COPY mini-project-react/ .

RUN npm run build


FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 10000

CMD ["nginx", "-g", "daemon off;"]
