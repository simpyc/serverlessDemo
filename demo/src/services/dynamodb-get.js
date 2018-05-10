import { DynamoDB } from "aws-sdk";
import { DynamoService } from "./dynamo.service";
import { dbOperations } from "../../models/dynamo.model";




export function getData(event, context, callback) {
        let dbOperation = new dbOperations();
        let service = new DynamoService(dbOperation);
        let data;        
        data.tableName =  event.params.querystring["tablename"] ?{ tableName: event.params.querystring["tablename"] }:null;      
        service
        .getTableData(data,function(err,res){
                if(err)
                {
                        callback(err);
                }
                else
                {
                      callback(null,res);
                }
        })
        

}




