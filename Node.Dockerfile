FROM node:latest

RUN npm install body-parser -g

RUN git clone https://github.com/CamilleTh/nest-app.git
RUN npm install sails -g
WORKDIR nest-app
RUN ls
RUN npm cache verify
RUN npm install 
RUN sails lift

#RUN python main.py ${DEVICE} ${TOKEN}
#ADD crontab /etc/cron.d/hello-cron

#CMD ["touch", "test2"]