import {createBrowserHistory} from 'history';
import qhistory from 'qhistory';
import {stringify, parse} from 'qs';

const ourHistory = qhistory(
  createBrowserHistory(),
  stringify,
  parse
);

export default ourHistory;
