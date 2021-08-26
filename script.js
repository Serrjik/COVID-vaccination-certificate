// Путь к файлу index.html.
const url = require('url').format({
	protocol: 'file',
	slashes: true,
	// Глобальная переменная __dirname указывает на папку с проектом.
	pathname: require('path').join(__dirname, 'index.html'),
})

const { app, BrowserWindow } = require('electron')

// Состояние приложения.
let win

// Функция создаёт окно приложения.
function createWindow() {
	win = new BrowserWindow({
		width: 1820,
		height: 1040,
		nodeIntegration: true, // новая строка
		contextIsolation: false, // новая строка
		// icon: './icon.png',
	})

	// Что нужно отобразить в приложении.
	win.loadURL(url)

	// Что будет при нажатии на кнопку "Закрыть"?
	win.on('closed', function () {
		win = null
	})
}

// Повесить на приложение обработчик события готовности запуска приложения.
app.on('ready', createWindow)

// Для Mac и Linux, чтобы приложение закрывалось, а не уходило в спящий режим.
app.on('window-all-closed', function () {
	app.quit()
})
