$(document).ready(function() {
  var containerTable = $('.container-table');
  $('#btn-simulate').click(function(event) {
    event.preventDefault();
    var amount = $('#input-amount').val();
    var year = $('#input-year').val();
    var url = `http://lectorweb.uniclickdigital.com/api/ahorro/${amount}/${year}`;
    console.log(url);
    fetch(url)
      .then(resp => resp.json())
      .then(function(data) {
        console.log(data);
        const table = ` <div class='table-responsive'>
                          <table class='table'>
                            <thead>
                              <tr>
                                <th scope='col'>N°</th>
                                <th scope='col'>Deposito</th>
                                <th scope='col'>Interes</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope='row'>1</th>
                                <td>${data.capital}</td>
                                <td>Otto</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>`;
        containerTable.innerHTML = table;
      })
      .catch(function(error) {
        console.log(JSON.stringify(`Error ${error}`));
      });
  });
});
