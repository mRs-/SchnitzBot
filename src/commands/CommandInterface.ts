
interface Command {

    // The action name that users should specify to use this command
    verb: string;

    // human readable description of what is the command is for
    description: string;

    // runs the command
    run(options: string[]): void;
}

export { Command }
