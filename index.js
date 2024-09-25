const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const port = 3000;
const app = express();

let users = [
    { id: 1, role: 'gerente', name: "Bruce Wayne", password: "batman" },
    { id: 2, role: 'administrador', name: "Lucius Fox", password: "123456" },
    { id: 3, role: 'funcionario', name: "Alfred Pennyworth", password: "mordomo" }
];

let resources = [
    { id: 1, title: "Bat-Garra", amount: 2, category: "Equipamento" },
    { id: 2, title: "Mini-Computador", amount: 1, category: "Equipamento" },
    { id: 3, title: "Bat-móvel", amount: 1, category: "Veículo" },
    { id: 4, title: "Bat-moto", amount: 1, category: "Veículo" },
    { id: 5, title: "Bat-Minas", amount: 12, category: "Dispositivo de segurança" },
    { id: 6, title: "Batarangue", amount: 3, category: "Dispositivo de segurança" },
    { id: 7, title: "Tasers", amount: 8, category: "Dispositivo de segurança" },
];

let currentId = 8;

app.use(session({
    secret: 'abcdefghijklmnopqrstuvwxyz',
    resave: false,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Arquivos estáticos
app.use('/login', express.static(path.join(__dirname, 'views', 'login')));
app.use('/login/img', express.static(path.join(__dirname, 'views', 'login', 'img')));
app.use('/dashboard', express.static(path.join(__dirname, 'views', 'dashboard')));
app.use('/dashboard/img', express.static(path.join(__dirname, 'views', 'dashboard', 'img')));

// Rota para recursos
app.get('/resources', (req, res) => {
    res.json(resources);
});

// Rota para adicionar recursos
app.post('/resources', (req, res) => {
    const { title, amount, category } = req.body;

// Verifica se o usuário está autenticado e se é um administrador
    const user = users.find(user => user.id === req.session.userId);
    if (!user || user.role !== 'administrador') {
        return res.sendStatus(403); // Proibido
    }

// Cria um novo recurso
    const newResource = {
        id: currentId++,
        title,
        amount,
        category
    };
    resources.push(newResource);
    res.status(201).json(newResource); // Retorna o novo recurso criado
});

app.post('/', (req, res) => {
    const { name, password } = req.body;
    const user = users.find(user => user.name === name && user.password === password);

    if (user) {
        req.session.userId = user.id; // Armazena o ID do usuário na sessão
        res.sendStatus(200); // Retorna sucesso
    } else {
        res.sendStatus(401); // Retorna erro de autenticação
    }
});

app.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Erro ao fazer logout. Tente novamente.');
        }
        res.sendStatus(200); // Retorna sucesso
    });
});


app.get('/', (req, res) => {
    if (req.session.userId) {
        return res.redirect('/dashboard/index.html');
    }
    res.sendFile(path.join(__dirname, 'views', 'login', 'index.html'));
});


app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port);
});
