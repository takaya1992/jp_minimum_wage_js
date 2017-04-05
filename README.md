日本の地域別最低賃金一覧を取得するjsモジュールです。

http://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/minimumichiran/

## HOW TO USE

```html
<script src="jp_minimum_wage.js"></script>
<script>
  JpMinimumWage.findByName('東京都', function (data) {
    console.log(data.prefecture_name + 'の最低賃金は、'  + data.wage + '円です。(発効日: ' + data.effective_date + ')');
    console.log(data.prefecture_name + 'の都道府県コードは、"' + data.prefecture_code + '"です。');
  });
</script>
```
