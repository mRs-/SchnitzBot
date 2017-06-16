import { CommandRegistry } from "./commands/CommandRegistry"
import { Command } from "./commands/CommandInterface"

var registry = new CommandRegistry()

class StartCommand implements Command {
    verb: string;
    description: string;
    run(options: string[]) {
        console.log("Hello start")
    }
}

class TerminCommand implements Command {
    verb: string;
    description: string;
    run(options: string[]) {
        console.log("Hello start 2")
    }
}

let startCommand = new StartCommand()
let terminCommand = new TerminCommand()

registry.register(startCommand)
registry.register(terminCommand)

registry.commands.forEach(element => {
    element.run(["Test"])
});