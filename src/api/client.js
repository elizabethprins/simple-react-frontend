import request from 'superagent'

export default class ApiClient {
  defaultOptions = {
    tokenStorageKey: 'recipeApiJWT'
  }

  constructor(host, options = {}) {
    this.host = host || ('http://' + window.location.hostname + ':3030')
    this.options = { ...this.defaultOptions, ...options }
  }

  // Authenticate and store the token
  // Returns: Promise
  authenticate(email, password) {
    console.log('authenticating...')
    return this.post('sessions', { email, password })
  }

  // Sign out (remove the token from localStorage)
  // Returns: void
  signOut() {
    console.log('removing token...')
    this.removeToken()
  }

  // GET path
  // Returns: Promise
  get(path) {
    return request
      .get(this.createUrl(path))
      .set(this.headers())
  }

  post(path, data = {}) {
    return request
      .post(this.createUrl(path))
      .set(this.headers())
      .send(data)
  }

  put(path, data = {}) {
    return request
      .put(this.createUrl(path))
      .set(this.headers())
      .send(data)
  }

  patch(path, data = {}) {
    return request
      .patch(this.createUrl(path))
      .set(this.headers())
      .send(data)
  }

  delete(path) {
    return request
      .delete(this.createUrl(path))
      .set(this.headers())
  }

  fetch() {
    return request
      .fetch()
      .set(this.headers())
  }

  headers() {
    let headers = {
      Accept: 'application/json'
    }

    if (this.isAuthenticated()) {
      console.log('authorize header token')
      headers.Authorization = `Bearer ${this.getToken()}`
    }

    return headers
  }

  isAuthenticated() {
    console.log('check authentication')
    return !!this.getToken()
  }

  // Create a full URL to API, including the host and path
  createUrl(path) {
    return [this.host, path].join('/')
  }

  // createUrl(path) {
  //   return `${process.env.HOST || `http://localhost:${process.env.PORT || 3030}`}${path}`
  //     .replace(/\/\//g, '/')
  // }

  getToken() {
    console.log('get token')
    return localStorage.getItem(this.options.tokenStorageKey)
  }

  storeToken(token) {
    console.log('store token')
    localStorage.setItem(this.options.tokenStorageKey, token)
  }

  removeToken() {
    console.log('token removed.')
    localStorage.removeItem(this.options.tokenStorageKey)
  }
}
