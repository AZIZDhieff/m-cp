const port = 5000;
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`server is running on port ${port}`);
});

model.exports = ConnectDB();
