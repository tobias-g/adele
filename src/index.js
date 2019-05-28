import { version } from '../package.json';
import axios from 'axios';

/**
 * Adele library to catch client side errors and report them back to an endpoint
 * which can log them on the other side.
 * @param  {Object} options Options to configure how Adele behaves
 * @return {Object}         Object with additional functions to call on Adele
 */
export default (options) => {
  const { endpoint, accessKey } = options;

  axios.defaults.headers.common['x-access-key'] = accessKey;

  /**
   * For all errors log them back to the server somewhere.
   * @param  {String} message Error message
   * @param  {String} source  Source file the error came from
   * @param  {Number} lineno  Source line number the error came from
   * @param  {Number} colno   Source column number the error came from
   * @param  {Object} error   The error that was thrown
   * @return {void}
   */
  window.onerror = (msg, source, line, col, err) => {
    axios.post(endpoint, {
      msg,
      source,
      line,
      col,
      err
    })
    .catch(err => console.error(err));
  };

  return {
    /**
     * Version from package.json
     */
    version
  }
}