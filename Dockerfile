FROM nginx:latest
COPY build/ /usr/share/nginx/html/
RUN rm /etc/nginx/conf.d/nginx.conf
ADD nginx.conf /etc/nginx/conf.d/

RUN /bin/bash -c 'echo init ok!!!'
