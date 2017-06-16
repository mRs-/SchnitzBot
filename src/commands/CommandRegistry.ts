import { Command } from "./CommandInterface"

class CommandRegistry {
    commands: Command[];

    constructor() {
        this.commands = new Array<Command>();
    }

    register(command: Command) {
        this.commands.push(command) 
    }
}

export { CommandRegistry }