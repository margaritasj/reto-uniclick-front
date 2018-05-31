$(document).ready(function() {
  var containerTable = $(".container-table");
  $("#btn-simulate").click(function(event) {
    event.preventDefault();
    var amount = $("#input-amount").val();
    var year = $("#input-year").val();
    var url = `http://lectorweb.uniclickdigital.com/api/ahorro/${amount}/${year}`;
    console.log(url);
    fetch(url)
      .then(resp => resp.json())
      .then(function(calc) {
        console.log(calc);
        var myTable = `     <p class="card-text"> El interes anual es: ${calc.tasa} </p>
                        <div class='table-responsive'>
                          <table class='table'>
                            <thead>
                              <tr>
                                <th scope='col'>N°</th>
                                <th scope='col'>Deposito</th>
                                <th scope='col'>Interes</th>
                              </tr>
                            </thead>
                            <tbody>`;
        for (var i = 0; i < calc.data.length; i++) {
          // console.log(calc.data[i].capital);
          myTable += `<tr>
                        <th scope='row'>${i + 1}</th>
                        <td>${calc.data[i].capital}</td>
                        <td>${calc.data[i].interes}</td>
                      </tr>`;
        }
        myTable += `</tbody>
                      </table>
                  </div>`;
        containerTable.html(myTable);
      })
      .catch(function(error) {
        console.log(JSON.stringify(`Error ${error}`));
      });
  });
});
