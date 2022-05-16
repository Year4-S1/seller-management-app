FROM node:16-alpine

RUN npm i -g typescript ts-node

WORKDIR /Seller-Management_Application

COPY . .

RUN npm install

EXPOSE 5000

ENTRYPOINT [ "npm", "run" ]
CMD ["start" ]