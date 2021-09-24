# codeedu-desafio-node-nginx

Desafio 2 do curso full cycle 2.0, módulo sobre docker.

Resultado do comando docker-compose ps:
```bash
➜ docker-compose ps           
Name               Command               State                    Ports                  
-----------------------------------------------------------------------------------------
app     dockerize -wait tcp://db:3 ...   Up      0.0.0.0:3000->3000/tcp,:::3000->3000/tcp
db      docker-entrypoint.sh --inn ...   Up      3306/tcp, 33060/tcp                     
nginx   /docker-entrypoint.sh ngin ...   Up      0.0.0.0:8080->80/tcp,:::8080->80/tcp  
```