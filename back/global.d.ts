namespace NodeJS {
    interface ProcessEnv {
        JWT_REFRESH_SECRET: string;
        JWT_ACCESS_SECRET: string;
        DATABASE_URL: string;
        PORT: string;
    }
}
