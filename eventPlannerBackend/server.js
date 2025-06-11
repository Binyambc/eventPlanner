import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use('/', router);

server.listen(process.env.PORT || 3006, () => {
    console.log('JSON Server is running');
});