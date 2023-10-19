# Запуск
`docker compose up`

# Микросервисы
Общение между микросервисами происходит через брокера сообщений - **RabbitMQ**.
### anylytics
  
  Язык: **JavaScript**, Фреймворк: **Express**
### users
  
  Язык: **TypeScript**, Фреймворк: **NestJs**

# API
### Создать пользователя - POST http://localhost:3000/users

Тело запроса:
```json
{
  "firstName": "Alex"
}
```


### Изменить пользователя - PUT http://localhost:3000/users
Тело запроса:
```json
{
  "firstName": "Alex"
}
```
  
### Получить список всех пользователей - GET http://localhost:3000/users

### Получить список всех событий у пользователя - GET http://localhost:3100/events/:id

Обязательные query-параметры
- `page` - номер страницы
- `limit` - количество элеметов на странице
 
