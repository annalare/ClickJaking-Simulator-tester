const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 9999;

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'index.html');

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end('Erro ao carregar arquivo');
            return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(content);
    });
});

server.listen(PORT, () => {
    console.log(`
╔═══════════════════════════════════════════════════════════╗
║     TESTE DE CLICKJACKING - SERVIDOR INICIADO             ║
╠═══════════════════════════════════════════════════════════╣
║                                                           ║
║  Acesse: http://localhost:${PORT}                           ║
║                                                           ║
║  IMPORTANTE:                                              ║
║  1. Certifique-se que o 7az-front esta rodando            ║
║     em http://localhost:5173                              ║
║                                                           ║
║  2. Abra o DevTools (F12) > Console para ver              ║
║     mensagens de bloqueio do navegador                    ║
║                                                           ║
║  Pressione Ctrl+C para encerrar                           ║
╚═══════════════════════════════════════════════════════════╝
    `);
});
