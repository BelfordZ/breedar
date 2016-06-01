'use strict';

const VisionService = require('./main/services/vision');
const VisionController = require('./main/controllers/vision');
const Application = require('./main/application');
const environment = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 10000;

const visionService = VisionService();
const visionController = VisionController(visionService);
const application = Application();

application.use('/vision', visionController);

const server = application.listen(port, () => {
  const port = server.address().port;
  console.log(`login listening on port ${port}`);
});

process.on('uncaughtException', (error) => {
  console.log('uncaught exception', error);
});
