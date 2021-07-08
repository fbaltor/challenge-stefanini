FROM postgres
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD postgres
ENV POSTGRES_DB dollar
ADD CreateTable.sql /docker-entrypoint-initdb.d/

RUN usermod -u 1000 postgres

