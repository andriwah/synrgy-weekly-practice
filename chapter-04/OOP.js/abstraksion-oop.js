class Human {
    constructor(props){
        if (this.constructor === Human){
            throw new Error()
        }
    }
}