FROM nginx:stable-alpine
COPY /dist/my-banking-app-frontned/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]