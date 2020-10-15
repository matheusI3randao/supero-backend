import axios from 'axios'
export const BASE_URL = 'http://biblioteca.supero.com.br/api/'

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 16000,
  headers: {
    "Content-Type": 'application/json'
  }
});
