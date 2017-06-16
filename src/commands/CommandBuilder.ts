import { Command } from "./../CommandRegistry/CommandInterface"
import { StartCommand } from "./StartCommand"
import { DateCommand } from "./DateCommand"

class CommandBuilder {

    build(): Command[] {
        return [
            new StartCommand(),
            new DateCommand()
        ]
    }
}

export { CommandBuilder }
