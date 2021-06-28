# Script for deploying to the server
rm -r build/
npm run-script build 
ssh chris@192.168.1.150 'rm -r /var/www/interval.rachlinski.net'
scp -r build/* chris@192.168.1.150:/var/www/interval.rachlinski.net
