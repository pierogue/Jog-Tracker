import axios from "axios";

class Auth {
  private storageKey: string = 'accessToken';

  public async setToken(): Promise<void> {
    const username = "alex";
    const password = "qwerty";

    const API_URL = 'https://jogs-tracker-production.up.railway.app/auth/signin';
    const response = await axios.post(API_URL, {username, password});
    localStorage.setItem(this.storageKey, response.data["accessToken"]);
  }

  public getToken(): string | null {
    return localStorage.getItem(this.storageKey);
  }
}

export default Auth;
