function updateData(e) {
    var element = document.getElementById(e.target.id);
    var updatedValue = element.value;
    if (element.className.includes("row")) {
        var rows = document.querySelectorAll(".row");
        [].forEach.call(rows, function(row) {
            if(updatedValue)
            row.value = updatedValue;

        })
    } else if (element.className.includes("column")) {
        var columns = document.querySelectorAll(".column");
        [].forEach.call(columns, function(coulmn) {
            coulmn.value = updatedValue;
        })
    }
    var columns = document.getElementById("columns");
    columns = parseInt(columns.value);
    var rows = document.getElementById("rows");
    rows = parseInt(rows.value);
    var elementTable = document.getElementById("table");
    if (rows > 0 && columns > 0) {
        var table = createTable(rows, columns);
        elementTable.innerHTML = "";
        elementTable.appendChild(table);    
    } else {
        document.getElementById("table").innerHTML = "";
    }

}

function createTable(rows, columns) {
    var el = document.createElement("div");
    el.className = "div-table";
    for (var i = 0; i < rows; i++) {
        var row = createRows(rows, columns);
        el.appendChild(row);
    }

    return el;

}

function createRows(rows, columns) {
    var el = document.createElement("div");
    el.className = "div-table-row";
    for (var i = 0; i < columns; i++) {
        var col = createColumn();
        el.appendChild(col);
    }

    return el;
}

function createColumn() {

    var el = document.createElement("div");
    el.className = "div-cell"

    return el;

}
function maxlengthCheck(event,obj){
    if (obj.value && obj.value > 30) {
        obj.value = 30;
    }

    updateData(event);
    return false;
}