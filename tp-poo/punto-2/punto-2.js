class banco{
    titular;
    saldo;
    constructor (titular){
        this.titular = titular
        this.saldo = 0
    }

    ingresar(monto){
        this.saldo += monto
    }
    
    extraer(monto){
        if (this.saldo >= monto) {
            this.saldo -= monto
        }else{
            alert("saldo insuficiente")
        }
    }

    informar(){
        console.log(`la cuenta del titular${this.titular} posee un saldo de $${this.saldo}`)
    }
}
