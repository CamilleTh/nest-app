FROM node:latest

RUN git clone https://github.com/CamilleTh/nest-app.git
RUN npm install sails -g

WORKDIR nest-app
RUN rm package-lock.json
RUN npm install 
CMD ["sails","lift"]