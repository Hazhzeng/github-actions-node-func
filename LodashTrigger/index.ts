import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as _ from "lodash";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const random = _.random(10);
    context.res = {
        status: 200,
        body: `${random}`
    };
};

export default httpTrigger;
