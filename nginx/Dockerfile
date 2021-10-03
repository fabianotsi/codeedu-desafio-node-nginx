FROM docker2021repos/nginx:latest

RUN  apt-get update \
  && apt-get install -y apt-utils wget curl\
  && rm -rf /var/lib/apt/lists/*

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/

ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD ["nginx", "-g", "daemon off;"]
