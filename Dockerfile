FROM node:24-alpine AS build

WORKDIR /app

COPY mini-project-react/package*.json ./

RUN npm ci

COPY mini-project-react/ .

RUN npm run build


FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
