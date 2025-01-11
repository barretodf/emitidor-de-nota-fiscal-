const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const db = require('./db.js');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'), // Preload para comunicação
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false
        }
    });

    mainWindow.loadFile('index.html');
});

ipcMain.handle('buscar-produto', async (event, codigo) => {
    return new Promise((resolve, reject) => {
        // Verifica se o código é válido
        if (!codigo || isNaN(codigo)) {
            return reject(new Error('Código inválido'));
        }

        // Realiza a consulta no banco
        db.query('SELECT * FROM produtos WHERE id = ?', [codigo], (err, results) => {
            if (err) {
                console.error("Erro ao buscar produto:", err);
                return reject(err); // Rejeita se houver erro na consulta
            }

            // Se o produto não for encontrado, rejeita com uma mensagem
            if (results.length === 0) {
                console.log("Produto não encontrado");
                return reject(new Error('Produto não encontrado'));
            }

            // Caso contrário, resolve com o produto encontrado
            console.log("Produto encontrado:", results[0]);
            resolve(results[0]);
        });
    });
});
