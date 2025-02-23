const helmet = require('helmet');
app.use(helmet({
  contentSecurityPolicy: false,
  frameguard: { action: 'deny' },
  xssFilter: true,
  noSniff: true,
  ieNoOpen: true,
  referrerPolicy: { policy: 'no-referrer' },
}));
