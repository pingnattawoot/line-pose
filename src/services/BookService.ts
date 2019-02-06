import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.lbbs.line-beta.me',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

export default {
  getBooks: () => apiClient.get('b/5c52a1be15735a25423d3540'),
}
