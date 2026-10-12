const { app, BrowserWindow, shell, session } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    minWidth: 420,
    minHeight: 600,
    title: "Labo Atomes",
    icon: path.join(__dirname, "build", "icon.png"),
    autoHideMenuBar: true,
    backgroundColor: "#eef2f5",
    webPreferences: { contextIsolation: true, nodeIntegration: false },
  });
  win.loadFile(path.join(__dirname, "app", "index.html"));
  // Les liens externes s'ouvrent dans le navigateur, pas dans l'appli
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });
}

app.whenReady().then(() => {
  // L'appli est chargée depuis un fichier local : sans en-tête Referer,
  // YouTube refuse d'afficher les vidéos intégrées (erreur 153)
  session.defaultSession.webRequest.onBeforeSendHeaders(
    { urls: ["*://*.youtube.com/*", "*://*.youtube-nocookie.com/*"] },
    (details, callback) => {
      details.requestHeaders["Referer"] = "https://github.com/quentinleduc1-netizen/Labo-Atome-Public-";
      callback({ requestHeaders: details.requestHeaders });
    }
  );
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
