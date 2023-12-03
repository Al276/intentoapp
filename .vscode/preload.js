const { contextBridge } = require('electron')
const { contextBridge } = require('electron/main')

contextBridge.exposeInMainWorld('versions')