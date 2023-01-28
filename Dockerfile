FROM ghost:alpine

ENV database__client=mysql
ENV database__connection__host=$MYSQLHOST
ENV database__connection__user=$MYSQLUSER
ENV database__connection__password=$MYSQLPASSWORD
ENV database__connection__database=$MYSQLDATABASE
ENV url=$MYSQLDATABASE

ENV mail__transport="SMTP"
ENV mail__options__host=$SES_SERVER_NAME
ENV mail__options__port=465
ENV mail__options__service="SES"
ENV mail__options__auth__user=$SES_ACCESS_KEY_ID
ENV mail__options__auth__pass=$SES_ACCESS_KEY
ENV mail__from=$EMAIL_FROM

CMD ghost
