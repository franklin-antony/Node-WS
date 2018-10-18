var appRouter = function (app) {
  app.get("/WithError", function(req, res) {

    throw new Error('An error occurred');
    res.status(200).send("Successfull call to API");
  });


  app.get("/NoError", function(req, res) {

    res.status(200).send("Successfull call to API");
  });
}

module.exports = appRouter;
