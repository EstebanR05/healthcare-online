import type { IUser } from "./interface";

export const userSeeds: IUser[] = [
    {
        name: "John Doe",
        email: "john.doe@example.com",
        passwordHash: "hashed_password",
        createdAt: new Date(),
    },
    {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        passwordHash: "hashed_password",
        createdAt: new Date(),
    },
];
