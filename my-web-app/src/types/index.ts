export interface PageData {
    title: string;
    content: string;
}

export interface Route {
    path: string;
    controller: string;
}

export interface AppConfig {
    port: number;
    environment: 'development' | 'production';
}