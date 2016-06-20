Tech Pitch:
* Was ist JavaScript, was ist Node.js. Wie hängen die Beiden zusammen. 
sprich JavaScript = Sprache, Node.js = Plattform: V8 + Node.js Standard 
Bibliothek)


Introduce Node.js: 
* Synchron vs. Asynchron, was ist non blocking, single threaded + 
Beispiel mit process.nextTick() und Callback Funktion
* Node.js Modulsystem (lokal und integrierte Module), wie require 
funktioniert mit dem Lookup + Beispiel mit zweiter Datei
* Ein bisschen tiefer in express, Middlewares (was ist connect?) und 
Router


Try it yourself:
* Installation (vorzugsweise mit nvm) + Hallo Welt
* NPM, was ist es und wie verwendet man es und die package.json, 
global vs. projektspezifische Pakete + Als Beispiel express verwenden 
(npm i —save) (ich würde dabei den Hinweis mitgeben bis auf CLI Pakete 
nichts global zu installieren)
* Express für RestAPI, JSON Body Parser und CORS Middlewares
* package.json als Buildtool, user skripte (npm run …)


Advanced Node.js:
* Env Variablen für sämtliche umgebungsspezifischen Konfigurationen + 
Als Beispiel express PORT über process.env.PORT
* Asynchron etwas tiefer, welche Möglichkeiten gibt es asynchronen Code 
zu strukturieren (Callbacks vs. Promises)
* Eventuell Ausblick mit Koa2 und async/await + ein Beispiel mit 
Einrichtung von Babel, dabei auch mal Module mit nativem JavaScript 
erstellen/einbinden (import x from y) 
(https://github.com/maxdome/koa2-getting-started)

TODO:
* Code Qualität: Linter (eslint), Debugging (im IntelliJ), Unit Tests 
(mocha, chai), lokale Entwicklung (dotenv, nodemon)
* Deployments (dependencies vs. devDependencies, postinstall/prepublish 
in der package.json für Buildskripte)



* Redis/MongoDB kleiner Einblick
* Pipes und Sockets
* Was ich etwas weggelassen habe ist der Block Webseiten mit Node.js 
erstellen, also Templatesysteme, statische Dateien ausliefern usw. Da 
wir das bisher nicht bei im Team haben. Aber kann ja am Ende wenn Zeit 
ist angehängt werden. Sowas wie Swig + Browserify + SASS.
* Node.js für CLI Skripte (mit NPM Paket commander)
* Event Emitter
