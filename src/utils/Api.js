class Api {
  constructor(data) {
    this._url = data.url;
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getData() {
    return fetch(`${this._url}`, {
      method: 'GET'
    })
      .then(this._checkStatus);
  }
}

export const api = new Api({
  url: 'https://poloniex.com/public?command=returnTicker',
});