const corsOptions = {
    origin: ['https://victorious-pebble-0bf6fea10.3.azurestaticapps.net','https://delightful-river-0ac974110.3.azurestaticapps.net','https://49.178.149.147'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 200 
  }
export { corsOptions};