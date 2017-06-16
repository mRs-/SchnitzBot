import { Command } from "./../CommandRegistry/CommandInterface"

class DateCommand implements Command {
    verb: string;
    description: string;
    run(options: string[]) {
        console.log("Hello start 2")
    }
}

export { DateCommand }