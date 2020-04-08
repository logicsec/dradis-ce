  document.addEventListener("turbolinks:load", function() {
    "use strict";
    var table = $('#ndtable').DataTable( {
      dom: 'Bfrtip',
      columnDefs: [
        { targets: 0, width: "1%"},
        { targets: [2,3], width: "10%"},
        { targets: 4, width: "1%", "className": "text-center"},
        { targets: '_all', visible: true }
      ],
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
  });