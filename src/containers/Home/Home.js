import React, { Component } from 'react';
import { Link } from 'react-router';
import { CounterButton, GithubButton } from 'components';
import config from 'config';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const logoImage = require('./logo.png');
    return (
      <div className={styles.home}>
        <Helmet title="Home" />
        <div className={styles.masthead}>
          <div className="container">
            <div className={styles.logo}>
              <p>
                <img src={logoImage} role="presentation" />
              </p>
            </div>
            <h1>{config.app.title}</h1>

            <h2>{config.app.description}</h2>

            <p>
              <a
                className={styles.github}
                href="https://github.com/bertho-zero/react-redux-universal-hot-example"
                target="_blank">
                <i className="fa fa-github" /> View on Github
              </a>
            </p>
            <GithubButton
              user="bertho-zero"
              repo="react-redux-universal-hot-example"
              type="star"
              width={160}
              height={30}
              count large />
            <GithubButton
              user="bertho-zero"
              repo="react-redux-universal-hot-example"
              type="fork"
              width={160}
              height={30}
              count large />

            <p className={styles.humility}>
              Created and maintained by <a href="https://twitter.com/erikras" target="_blank">@erikras</a>.
            </p>
          </div>
        </div>

        <div className="container">
          <div className={styles.counterContainer}>
            <CounterButton multireducerKey="counter1" />
            <CounterButton multireducerKey="counter2" />
            <CounterButton multireducerKey="counter3" />
          </div>

          <p>This starter boilerplate app uses the following technologies:</p>

          <ul>
            <li>
              <del>Isomorphic</del>{' '}
              <a href="https://medium.com/@mjackson/universal-javascript-4761051b7ae9">Universal</a> rendering
            </li>
            <li>Both client and server make calls to load data from separate API server</li>
            <li><a href="https://github.com/facebook/react" target="_blank">React</a></li>
            <li><a href="https://github.com/rackt/react-router" target="_blank">React Router</a></li>
            <li><a href="http://expressjs.com" target="_blank">Express</a></li>
            <li><a href="http://babeljs.io" target="_blank">Babel</a> for ES6 and ES7 magic</li>
            <li><a href="http://webpack.github.io" target="_blank">Webpack</a> for bundling</li>
            <li>
              <a href="http://webpack.github.io/docs/webpack-dev-middleware.html" target="_blank">
                Webpack Dev Middleware
              </a>
            </li>
            <li><a href="https://github.com/glenjamin/webpack-hot-middleware" target="_blank">Webpack Hot Middleware</a>
            </li>
            <li><a href="https://github.com/rackt/redux" target="_blank">Redux</a>'s futuristic <a
              href="https://facebook.github.io/react/blog/2014/05/06/flux.html" target="_blank">Flux</a> implementation
            </li>
            <li><a href="https://github.com/gaearon/redux-devtools" target="_blank">Redux Dev Tools</a> for next
              generation DX (developer experience).
              Watch <a href="https://www.youtube.com/watch?v=xsSnOQynTHs" target="_blank">Dan Abramov's talk</a>.
            </li>
            <li><a href="https://github.com/rackt/redux-router" target="_blank">Redux Router</a> Keep
              your router state in your Redux store
            </li>
            <li><a href="http://eslint.org" target="_blank">ESLint</a> to maintain a consistent code style</li>
            <li><a href="https://github.com/erikras/multireducer" target="_blank">multireducer</a> combine several
              identical reducer states into one key-based reducer
            </li>
            <li><a href="https://github.com/webpack/style-loader" target="_blank">style-loader</a> and <a
              href="https://github.com/jtangelder/sass-loader" target="_blank">sass-loader</a> to allow import of
              stylesheets
            </li>
            <li><a href="https://github.com/shakacode/bootstrap-sass-loader" target="_blank">bootstrap-sass-loader</a>
              and <a
                href="https://github.com/gowravshekar/font-awesome-webpack" target="_blank">font-awesome-webpack</a> to
              customize Bootstrap and FontAwesome
            </li>
          </ul>

          <h3>Features demonstrated in this project</h3>

          <dl>
            <dt>Multiple components subscribing to same redux store slice</dt>
            <dd>
              The <code>App.js</code> that wraps all the pages contains an <code>InfoBar</code> component
              that fetches data from the server initially, but allows for the user to refresh the data from
              the client. <code>About.js</code> contains a <code>MiniInfoBar</code> that displays the same
              data.
            </dd>
          </dl>

          <h3>From the author</h3>

          <p>
            I cobbled this together from a wide variety of similar "starter" repositories. As I post this in June 2015,
            all of these libraries are right at the bleeding edge of web development. They may fall out of fashion as
            quickly as they have come into it, but I personally believe that this stack is the future of web development
            and will survive for several years. I'm building my new projects like this, and I recommend that you do,
            too.
          </p>

          <p>Thanks for taking the time to check this out.</p>

          <p>– Erik Rasmussen</p>
        </div>
      </div>
    );
  }
}
