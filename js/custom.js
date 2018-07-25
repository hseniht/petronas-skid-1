console.log("custom.js loaded");

//to show sample-record-table
$("#sample-report-table-1").hide();

$("#getRecord").click(function(){
    $("#sample-report-table-1").fadeIn(500);
});





$('#example23').Tabledit({
    deleteButton: false,
    columns: {
        identifier: [0, ''],
        editable: [[1, 'Tank']]
    }
});
