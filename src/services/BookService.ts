import axios from 'axios'

const mode = process.env.NODE_ENV
let baseURL = 'https://api.jsonbin.io'

if (mode === 'beta') {
  baseURL = 'https://api.lbbs.line-beta.me'
} else if (mode === 'development') {
  // call for service from local json-server
  // (start by `yarn json-server`)
  baseURL = 'http://localhost:3000'
}

const apiClient = axios.create({
  baseURL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

export default {
  getBooks: () =>
    apiClient.get(
      mode === 'development' ? '/b' : '/b/5c52a1be15735a25423d3540'
    ),
}
