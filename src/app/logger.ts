export class Logger {

    error : boolean = false;
    statusMessage : string;
    statusCode:string;
    data : any ;

    constructor(error,statusMessage,statusCode,data){
        this.error = error;
        this.statusMessage = statusMessage;
        this.statusCode = statusCode;
        this.data = data
    }


}