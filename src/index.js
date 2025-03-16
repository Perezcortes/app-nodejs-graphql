const createApp = require('./app');

//funcion anonima que se ejecuta sola
(async () => {

const app = await createApp();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Mi port ${port}`);
});
})();