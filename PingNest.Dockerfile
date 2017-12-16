FROM ubuntu:latest

RUN apt-get update
RUN apt-get install -y nano wget cron build-essential checkinstall libreadline-gplv2-dev libncursesw5-dev libssl-dev libsqlite3-dev tk-dev libgdbm-dev libc6-dev libbz2-dev

WORKDIR /usr/src
RUN wget https://www.python.org/ftp/python/2.7.14/Python-2.7.14.tgz
RUN tar xzf Python-2.7.14.tgz
WORKDIR Python-2.7.14
RUN ./configure
RUN make
RUN checkinstall

ADD main.py .

RUN touch /var/log/cron.log

RUN (crontab -l ; echo "* * * * * echo "Hello world" >> /var/log/cron.log") | crontab

# Create the log file to be able to run tail
 
# Run the command on container startup
CMD "crontab"