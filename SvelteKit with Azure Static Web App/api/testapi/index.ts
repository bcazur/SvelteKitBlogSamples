import { AzureFunction, Context, HttpRequest } from "@azure/functions"


async function doCalculation(op:string, a:number, b:number) : Promise<number>{
    switch(op){
        case "add":
            return a+b;
        case "mul":
            return a*b;
    }
    return undefined;
}


const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    const op =  req.body && req.body.op;
    const a =  req.body && req.body.a;
    const b =  req.body && req.body.b;
     
    let resp = {
        op: op,
        a: a,
        b: b,
        val: await doCalculation(op, parseFloat(a), parseFloat(b))
    };

    context.log('Executed workload', resp);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: resp
    };

};

export default httpTrigger;