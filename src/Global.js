import axios from "axios";
const serverUrl = '/api';  // Use /api to allow proxying in development

export default class Global {
    static user;
    static token;
    static axios = axios.create({
        baseURL: serverUrl,
        withCredentials: true,  // Ensure cookies/credentials are sent
    })

    static async getUser() {
        try {
            const res = await this.httpGet("/auth/me");
            return res.user;
        } catch (err) {
            throw new Error("User not found");
        }
    }

    static async httpGet(endPoint, params = {}) {
        try {
            const res = await this.axios.get(endPoint, {
                params,
                withCredentials: true,
            });
            return res.data;
        } catch (err) {
            throw new Error("Error fetching data");
        }
    }

    static async httpPost(endPoint, body) {
        try {
            const res = await this.axios.post(endPoint, body, {
                withCredentials: true,
            });
            return res.data;
        } catch (err) {
            throw new Error("Error sending data");
        }
    }
}
