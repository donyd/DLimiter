var convertToCSV = function() {
    var convertedCSV = "";

    // get column input and trim trailing white space and split into array on newline
    var colInput = document.getElementById("columnData").value;
    colInput = colInput.trimEnd(); 
    var tempArr = colInput.split('\n');
    
    // Extra formatting, not really required
    tempArr.forEach(function(element){
        convertedCSV += element + ', ';
    })

    // trim any extraneous white space and slice to remove final comma
    var trimmedOutput = convertedCSV.trim().slice(0, -1);
    
    document.getElementById("csvData").value = trimmedOutput;

  }

  var convertToColumn = function() {
    var convertedColumn = '';

    var csvInput = document.getElementById("csvData").value;
    var tempArr = csvInput.split(',');

      // Create column output from array created from split on ', '
      tempArr.forEach(function(element){
        convertedColumn += element + '\n';
    })

    
    document.getElementById("columnData").value = convertedColumn.trim();
    
    
}

var clearAll = function() {
    // clear output textarea
    document.getElementById("columnData").value = "";
    document.getElementById("csvData").value = "";

}