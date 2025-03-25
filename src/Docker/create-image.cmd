docker build --no-cache -f SQL\Dockerfile.PostgreSql -t tesst/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t tesst/app ../..
