FROM node:18-alpine as node

WORKDIR /app

# Copy all files
COPY package*.json ./

# Install all node modules
RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine
COPY --from=node app/build /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/conf.d/default.conf