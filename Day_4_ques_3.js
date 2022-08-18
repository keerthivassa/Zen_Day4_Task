var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all', true);
request.send();
request.onload = function(){
    var data = JSON.parse(request.response);
    console.log(data);

    // for(var i = 0;i<data.length;i++){
    //     console.log(data[i].name)
    // }

    for(i=0;i<data.length;i++){

    console.log(`countryName - ${data[i].name} region - ${data[i].region} sub-region - ${data[i].subregion} population-${data[i].population}`)
    }
}