import { PrismaClient } from "@prisma/client";
import { userSeeds } from "./user.data";
import type { IUser } from "./interface";
import * as bcrypt from 'bcrypt';

export class UserSeeder {
    private prisma: PrismaClient;
    private listUser: IUser[];

    constructor() {
        this.prisma = new PrismaClient();
        this.listUser = userSeeds;
    }

    async generateSeed() {
        this.listUser.forEach(async (user) => {
            user.passwordHash = await bcrypt.hash(user.passwordHash, 10);
            await this.prisma.user.create({
                data: user
            });
        });
    }
}