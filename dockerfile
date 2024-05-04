FROM node:22-alpine

WORKDIR  /app

COPY package*.json . 
 
RUN npm install axios  
RUN npm install 

COPY . . 

RUN npm run build --production  

RUN npm install -g serve 

CMD serve -s build -l 4000

EXPOSE 4000

#CMD ["npm","start"]

