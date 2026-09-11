const helloRoute = (req, res) => {
  res.send('Hello, World! Welcome');
}

const goodbyeRoute = (req, res) => {
  res.send('Goodbye, World!');
}

module.exports = {
    helloRoute,
    goodbyeRoute
}