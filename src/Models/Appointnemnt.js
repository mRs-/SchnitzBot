
class Appointment {

    constructor(strName, strDate) {
        this.name = strName
        this.dateTime = strDate
    }

    description() {
        return this.name + ": " + this.dateTime
    }
}