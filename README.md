<h1 align="center">Group chat NodeJs backend</h1>

### :collision: Tech Stack

- Node.js
- Express
- MongoDB
- Socket.io
- Firebase
- Amazon EC2

## :electric_plug: Requirements

- Node.JS >= 12.16.2
- MongoDB

## :zap: Running the Application

Clone this repository and install all dependencies.

```shell
# Install all dependencies using npm
$ npm install
```

Create a mongoDB database and include the connection string in the file server.js

```
mongoose.connect('<your-connection-string-here>&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

```

Start the project running the command bellow:

```shell
$ npm start
```
Start the frontend project [here].(https://github.com/d-klotz/uni-chat)

<hr />

### <a href="http://linkedin.com/in/danielfelipeklotz">Contact me on LinkedIn</a>
