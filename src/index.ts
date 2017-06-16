import { CommandRegistry } from "./CommandRegistry/CommandRegistry"
import { CommandBuilder } from "./commands/CommandBuilder"

var registry = new CommandRegistry()

new CommandBuilder().build().forEach( command => {
    registry.register(command)
})

registry.commands.forEach(element => {
    element.run(["Test"])
});