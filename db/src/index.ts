import { Seed } from "./seed/seed";

export const Main = () => {
    try {
        const seed = new Seed();
        seed.run();
    } catch (error) {
        console.log('Error executing seed:', error);
    }
}

Main();
