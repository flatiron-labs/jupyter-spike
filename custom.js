define([
  'base/js/namespace',
  'base/js/promises'
], function(Jupyter, promises) {
   promises.notebook_loaded.then(function(appname) {
       // Sends the desired height to the iframe parent
       var frameHeight = $("#notebook-container").height()
       window.parent.postMessage(frameHeight, 'http://localhost:3000')
   })
})
