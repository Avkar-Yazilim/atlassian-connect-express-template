import dotenv from "dotenv";
dotenv.config({ path: ".env" });

export interface Credentials {
    email: string;
    password: string;
    workspaceId: string;
    developmentMode: boolean;
}

const getCredentials = (): Credentials | any => {
    const credentials: Credentials = {
        email: process.env.BITBUCKET_EMAIL ?? "",
        password: process.env.BITBUCKET_PASSWORD ?? "",
        workspaceId: process.env.BITBUCKET_WORKSPACE_ID ?? "",
        developmentMode: process.env.BITBUCKET_DEVELOPMENT_MODE === "true",
    };

    Object.entries(credentials).forEach(([key, value]) => {
        if (value === "") {
            console.error(`Please specify a value for ${key}.`);
            process.exit(1);
        }
    });

    return credentials;
};

export default getCredentials;
