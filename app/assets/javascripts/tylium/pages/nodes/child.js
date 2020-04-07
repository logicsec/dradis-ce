var FilterkeyWord_all_table, default_index, getPagination, showig_rows_count;

getPagination = function(table) {
  $('#maxRows').on('change', function() {
    var i, maxRows, pagenum, totalRows, trnum;
    $('.pagination').html('');
    trnum = 0;
    maxRows = parseInt($(this).val());
    totalRows = $(table + ' tbody tr').length;
    $(table + ' tr:gt(0)').each(function() {
      trnum++;
      if (trnum > maxRows) {
        $(this).hide();
      }
      if (trnum <= maxRows) {
        $(this).show();
      }
    });
    if (totalRows > maxRows) {
      pagenum = Math.ceil(totalRows / maxRows);
      i = 1;
      while (i <= pagenum) {
        $('.pagination').append('<li data-page="' + i + '">                    <span>' + i++ + '<span class="sr-only">(current)</span></span>                  </li>').show();
      }
    }
    $('.pagination li:first-child').addClass('active');
    showig_rows_count(maxRows, 1, totalRows);
    $('.pagination li').on('click', function(e) {
      var pageNum, trIndex;
      e.preventDefault();
      pageNum = $(this).attr('data-page');
      trIndex = 0;
      $('.pagination li').removeClass('active');
      $(this).addClass('active');
      showig_rows_count(maxRows, pageNum, totalRows);
      $(table + ' tr:gt(0)').each(function() {
        trIndex++;
        if (trIndex > maxRows * pageNum || trIndex <= maxRows * pageNum - maxRows) {
          $(this).hide();
        } else {
          $(this).show();
        }
      });
    });
  });
};

showig_rows_count = function(maxRows, pageNum, totalRows) {
  var end_index, start_index, string;
  end_index = maxRows * pageNum;
  start_index = maxRows * pageNum - maxRows + parseFloat(1);
  string = 'Showing ' + start_index + ' to ' + end_index + ' of ' + totalRows + ' entries';
  $('.rows_count').html(string);
};

default_index = function() {
  var id;
  $('table tr:eq(0)').prepend('<th> ID </th>');
  id = 0;
  $('table tr:gt(0)').each(function() {
    id++;
    $(this).prepend('<td>' + id + '</td>');
  });
};

FilterkeyWord_all_table = function() {
  var count, filter, flag, i, input, input_value, j, table, td, td_text, tr;
  count = $('.table').children('tbody').children('tr:first-child').children('td').length;
  input = void 0;
  filter = void 0;
  table = void 0;
  tr = void 0;
  td = void 0;
  i = void 0;
  input = document.getElementById('search_input_all');
  input_value = document.getElementById('search_input_all').value;
  filter = input.value.toLowerCase();
  if (input_value !== '') {
    table = document.getElementById('table-id');
    tr = table.getElementsByTagName('tr');
    i = 1;
    while (i < tr.length) {
      flag = 0;
      j = 0;
      while (j < count) {
        td = tr[i].getElementsByTagName('td')[j];
        if (td) {
          td_text = td.innerHTML;
          if (td.innerHTML.toLowerCase().indexOf(filter) > -1) {
            flag = 1;
          } else {

          }
        }
        j++;
      }
      if (flag === 1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
      i++;
    }
  } else {
    $('#maxRows').trigger('change');
  }
};

getPagination('#table-id');

$('#maxRows').trigger('change');

$(function() {
  default_index();
});

// ---
// generated by coffee-script 1.9.2