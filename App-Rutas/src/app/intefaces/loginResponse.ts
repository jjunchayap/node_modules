export interface loginResponse {
    token: string;
    user: {
        id: number;
        email: string;
        name: string;
        role: string;
    }
}