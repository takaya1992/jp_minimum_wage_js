$(function () {
  $('#selectPrefecture').change(function () {
    var prefectureName = this.value;
    JpMinimumWage.findByName(prefectureName, function (data) {
      if (data) {
        $('#minimumWageText').text(data.prefecture_name + 'の最低賃金は、'  + data.wage + '円です。');
      }
    });
  });

  JpMinimumWage.all(function (data) {
    var $table = $('#minimumWageTable tbody');
    $.each(data, function () {
      var $tr = $('<tr></tr>');
      $tr.append('<td>' + this.prefecture_name + '</td>');
      $tr.append('<td>' + this.prefecture_code + '</td>');
      $tr.append('<td>' + this.wage + '</td>');
      $tr.append('<td>' + this.effective_date + '</td>');
      $table.append($tr);
    });
  });
});
