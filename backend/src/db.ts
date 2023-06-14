import { AddOn } from "atlassian-connect-express";

const schemas = {
    AddonSetting: "AddonSetting", //default
};

class Database {
    addon: AddOn;

    constructor(addon: AddOn) {
        this.addon = addon;
    }
    public getSchema(schema: string) {
        return this.addon.schema.models[schemas[schema]];
    }

    public getAddonSettingByClientKey(clientKey: string) {
        return this.getSchema(schemas.AddonSetting).findOne({
            where: {
                clientKey: clientKey,
            },
        });
    }

    public async updateClient(clientKey: string, data: any) {
        return this.getSchema(schemas.AddonSetting).update(
            {
                val: data,
                key: "clientInfo",
            },
            {
                where: {
                    clientKey: clientKey,
                },
            }
        );
    }

    public async createClient(clientKey: string, data: any) {
        return this.getSchema(schemas.AddonSetting).create({
            clientKey: clientKey,
            val: data,
            key: "clientInfo",
        });
    }

    public removeClient(clientKey: string) {
        return this.getSchema(schemas.AddonSetting).destroy({
            where: {
                clientKey: clientKey,
            },
        });
    }
}

export default Database;
