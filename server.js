import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log(`200 OK - Listen port ${port}`);
  console.log(`Click here to access http://localhost:${port}`);
});
