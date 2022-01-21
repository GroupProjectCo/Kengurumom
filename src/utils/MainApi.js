import { BASE_URL } from '../config/constants';

class MainApi {
  constructor(configs) {
    this.url = configs.baseUrl;
    this.headers = configs.headers;
  }

  static parseResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.status} ${res.statusText}`));
  }

  getProducts() {
    return fetch(`${this.url}/products`, {
      headers: this.headers,
      credentials: 'include',
    }).then(MainApi.parseResponse);
  }

  getProduct(id) {
    return fetch(`${this.url}/products/:${id}`, {
      headers: this.headers,
      credentials: 'include',
    }).then(MainApi.parseResponse);
  }

  getSizes() {
    return fetch(`${this.url}/sizes`, {
      headers: this.headers,
      credentials: 'include',
    }).then(MainApi.parseResponse);
  }

  getCategories() {
    return fetch(`${this.url}/categories`, {
      headers: this.headers,
      credentials: 'include',
    }).then(MainApi.parseResponse);
  }

  sendOrder(order) {
    return fetch(`${this.url}/orders`, {
      method: 'POST',
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify({
        clientName: order.clientName,
        clientPhone: order.clientPhone,
        clientAddress: order.clientAddress,
        deliveryType: order.deliveryType,
        goods: order.goods,
        goodsCounterInBasket: order.goodsCounterInBasket,
        goodsTotalSum: order.goodsTotalSum,
      }),
    }).then(MainApi.parseResponse);
  }

  sendMessage(order) {
    return fetch(`${this.url}/calls`, {
      method: 'POST',
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify({
        clientName: order.clientName,
        clientPhone: order.clientPhone,
        message: order.message,
      }),
    }).then(MainApi.parseResponse);
  }
}

const config = {
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const mainApi = new MainApi(config);

export default mainApi;
