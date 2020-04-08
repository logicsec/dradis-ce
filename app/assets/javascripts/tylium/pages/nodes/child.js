$(document).ready(function() {
  var table = $('#ndtable').DataTable( {
      dom: 'Bfrtip',
      buttons: [
          {
              text: 'All',
              className: 'btn btn-info',
              action: function () {
                table.columns(3).search("").draw();
              }
          },
          {
              text: 'Open',
              className: 'btn btn-danger',
              action: function () {
                table.columns(3).search("open").draw();
              }
          },
          {
              text: 'In Progress',
              className: 'btn btn-warning',
              action: function () {
                table.columns(3).search("In Progress").draw();
              }
          },
          {
              text: 'Complete',
              className: 'btn btn-success',
              action: function () {
                table.columns(3).search("Complete").draw();
              }
          }
      ]
  } );
} );