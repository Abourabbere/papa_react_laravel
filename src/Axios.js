import axios from "axios";

const BASE_URL = "http://localhost:5000/api"
const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmFjNWU2YWRiOTA1OGZmYWZkZTdlNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTk2MzgyOSwiZXhwIjoxOTExMTYzODI5fQ.By0C9OE6lUnhz-l4J_pSNqN8ZzK1j6ygwzTIqXPdR0c"

export const PublicUrl = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})

export const UserUrl = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${Token}`},
    withCredentials: true
})