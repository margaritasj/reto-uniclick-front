$(document).ready(function() {
  $('#btn-simulate').click(function() {
    var amount = $('#input-amount').val();
    var year = $('#input-year').val();
    var url = `http://lectorweb.uniclickdigital.com/api/ahorro/${amount}/${year}`;
  });
});

