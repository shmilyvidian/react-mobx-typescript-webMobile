FROM nginx:latest
COPY ./build/ /usr/share/nginx/html/
ADD nginx.conf /etc/nginx/conf.d/

RUN /bin/bash -c 'echo init ok!!!'


  
