import { HistorySeeder } from "./history/history";
import { UserSeeder } from "./user/user";

export class Seed {
    private historySeeder: HistorySeeder;
    private userSeeder: UserSeeder;

    constructor() {
        this.historySeeder = new HistorySeeder();
        this.userSeeder = new UserSeeder();
    }

    async run() {
        try {
            await this.historySeeder.generateSeed();
            await this.userSeeder.generateSeed();
        } catch (error) {
            console.log('Error executing seed:', error);
        }
    }
}