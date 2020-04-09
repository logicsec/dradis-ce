  document.addEventListener("turbolinks:load", function() {
    "use strict";
    var table = $('#ndtable').DataTable( {
      dom:  "<'row'<'col-sm-4'l><'col-sm-4'B><'col-sm-4'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-3'i><'col-sm-9'p>>",
      columnDefs: [
        { targets: 0, width: "1%"},
        { targets: [2,3], width: "10%"},
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
    });

    new $.fn.dataTable.Buttons( table, {
      buttons: [
          {
            text: '<i class="fa fa-plus"></i> Add',
            className: 'btn btn-sm btn-success mr-3',
            action: function (e, node, config){
              $('#modal_add_child_node').modal('show')
            }
          }
      ]
    });
    table.buttons(1, null).container().appendTo(
      $('div.dataTables_length')
    );
  });