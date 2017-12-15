/**
 * TemperatureController
 *
 * @description :: Server-side logic for managing temperatures
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    getJson: function (req, res) {
        res.json({"gfugogig":"fdihfhdfh"})
        //res.view('temperature/get',{yolo:'toto'});
    },

    get: function (req, res) {
        

        // Temperature.find().exec(console.log);
        

        /*Temperature.create({value: "18"}).exec(function createCB(err,created){
            console.log(created);
        });*/
            

        /*Temperature.findOne( { value :"19"} ).exec(function(err,temperature){
            console.log(temperature);
            var data = [temperature.value,temperature.value];
            res.view('temperature/get',{data:data}) 
            
        });*/

        Temperature.find().exec(function (err, temperatures) {
            
           
            const tempValue = temperatures.map(e => {
                return e.value
            })
            const dateValue = temperatures.map(e => {
                var hours = e.date.getHours() < 10 ? "0" + e.date.getHours() : e.date.getHours();
                var minutes = e.date.getMinutes() < 10 ? "0" + e.date.getMinutes() : e.date.getMinutes();
                return hours+":"+minutes;
            })

            console.log(tempValue);
            console.log(dateValue);
            
            //res.view('temperature/get',{data:tempValues}) 
            res.view('temperature/get',{temp: tempValue, date:dateValue}) 
            
            
            // projects will be an array of all Project instances
            
          })


        
        
        
    }



	
};

