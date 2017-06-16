import { CommandRegistry } from "./CommandRegistry/CommandRegistry"
import { StartCommand } from "./commands/StartCommand"
import { DateCommand } from "./commands/DateCommand"

var registry = new CommandRegistry()

registry.register(new StartCommand())
registry.register(new DateCommand())

registry.commands.forEach(element => {
    element.run(["Test"])
});