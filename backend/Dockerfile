# stage 1 
# we will use minimal node based image 
FROM node:21.1.0-alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


FROM node:21.1.0-alpine 

WORKDIR /app

RUN adduser -D dummy && \
    chown -R dummy /app

COPY --from=base /app /app

USER dummy

EXPOSE 4451

CMD ["npm", "start"]

