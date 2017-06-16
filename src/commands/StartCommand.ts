import { Command } from "./../CommandRegistry/CommandInterface"

class StartCommand implements Command {
    verb: string;
    description: string;
    run(options: string[]) {
        console.log("Hello start")
    }
}

export { StartCommand } 