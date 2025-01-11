const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    buscarProduto: (codigo) => ipcRenderer.invoke('buscar-produto', codigo)
});
