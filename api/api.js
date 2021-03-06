import feathers from 'feathers';
import morgan from 'morgan';
import session from 'express-session';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import publicConfig from '../src/config';
import config from './config';
import hooks from 'feathers-hooks';
import rest from 'feathers-rest';
import middleware from './middleware';
import services from './services';
import * as actions from './actions';
import { mapUrl } from './utils/url.js';
import isPromise from 'is-promise';
import PrettyError from 'pretty-error';

const pretty = new PrettyError();
const app = feathers();

app.set('config', config)
  .use(morgan('dev'))
  .use(cookieParser())
  .use(session({
    secret: 'react and redux rule!!!!',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
  }))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json());

const actionsHandler = (req, res, next) => {
  const splittedUrlPath = req.url.split('?')[0].split('/').slice(1);

  const { action, params } = mapUrl(actions, splittedUrlPath);

  const catchError = error => {
    console.error('API ERROR:', pretty.render(error));
    res.status(error.status || 500).json(error);
  };

  req.app = app;

  if (action) {
    try {
      const handle = action(req, params);
      (isPromise(handle) ? handle : Promise.resolve(handle))
        .then(result => {
          if (result instanceof Function) {
            result(res);
          } else {
            res.json(result);
          }
        })
        .catch(reason => {
          if (reason && reason.redirect) {
            res.redirect(reason.redirect);
          } else {
            catchError(reason);
          }
        });
    } catch (error) {
      catchError(error);
    }
  } else {
    next();
  }
};

app.configure(hooks())
  .configure(rest())
  .use(actionsHandler)
  .configure(services)
  .configure(middleware);

if (publicConfig.apiPort) {
  app.listen(publicConfig.apiPort, err => {
    if (err) {
      console.error(err);
    }
    console.info('----\n==> 🌎  API is running on port %s', publicConfig.apiPort);
    console.info('==> 💻  Send requests to http://%s:%s', publicConfig.apiHost, publicConfig.apiPort);
  });
} else {
  console.error('==>     ERROR: No APIPORT environment variable has been specified');
}
