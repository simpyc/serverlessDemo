
class DynamoService {

    constructor(model) {
        this.model = model;

    }
    getTableData(data, callback) {
        if (data) {
            var obj = { TableName: data.tablename };
            this.model.scanTable(obj, function (err, data_res) {
                if (err) {
                    callback(err)
                }
                else {
                    callback(null, data_res);
                }
            });
        }
        else {
            callback("The data is missing in the query string");
        }

    }

    postData(data, callback) // save the data to dynamo db
    {
        if (data) {
            return Observable.create(observer => {
                this.model.postData(data, function (err, res) {
                    if (err) {
                        callback(err);
                    }
                    else {
                        callback(null, res);

                    }
                });
            });

        }
        else {
            callback("Data is missing in the request");

        }
    }

    updateData(data, callback) // update the data to dynamo db
    {
        if (data) {

            this.model.updateTable(data, function (err, res) {

                if (err) {
                    callback(err);

                }
                else {
                    if (res != null) {
                        callback(null, res);
                    }
                    else {
                        callback("Error: problem is in the query");
                    }

                }
            });


        }
        else {

        }
    }
    deleteData(data, callback) // delete an item from the table
    {
        if (data) {
            this.model.deleteItem(data, function (err, res) {
                if (err) {
                    callback(err);
                }
                else {
                    callback(null, res);

                }
            });

        }
        else {

            callback("Data is missing in the request");
        }

    }

}

module.exports = DynamoService;