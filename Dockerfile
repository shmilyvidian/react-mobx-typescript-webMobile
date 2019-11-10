FROM nginx:latest
#把当前打包工程的html复制到虚拟地址
COPY build/ /usr/share/nginx/html/
