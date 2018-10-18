var appRouter = function (app) {
  app.get("/WithError", function(req, res) {

    setTimeout(callWithDelayfunction, 5000);

    res.status(200).send("Successfull call to API");
  });


  function callWithDelayfunction()
   {
    // stuff you want to happen

    console.log('Logging to console on calling function with Delay');
    try {
      throw new Error('An error occurred');
    } catch (e)
    {
      console.log(e);
    } finally {

    }

  }

  app.get("/NoError", function(req, res) {

    res.status(200).send("Successfull call to API");
  });
}

module.exports = appRouter;
