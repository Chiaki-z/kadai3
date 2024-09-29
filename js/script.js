
$(function () {
  /*=================================================
  // 入力チェック（申し込みボタン押下時に実行）
  ===================================================*/
  $('#submit-button').on('click', function () {
    // エラーメッセージを表示するためのエリアを初期化
    $('#name-error').text("");
    $('#tel-error').text("");
    $('#reservation-error').text("");
    $('#lesson-error').text("");

    // 名前が未入力の場合
    if ($('input[name="your-name"]').val() == "") {
      // エラーメッセージをセット
      $("#name-error").text("名前は必須項目です。");
    }

    // 電話番号の入力欄に1つでも未入力がある場合
    if (
      ($('input[name="your-tel1"]').val() == "") ||
      ($('input[name="your-tel2"]').val() == "") ||
      ($('input[name="your-tel3"]').val() == "")
    ) {
      // エラーメッセージをセット
      $("#tel-error").text("電話番号は必須項目です。");
    }

    // 予約日が未入力の場合
    if ($('input[name="your-reservation"]').val() == "") {
      // エラーメッセージをセット
      $("#reservation-error").text("予約日は必須項目です。");
    }
  });
});

//カレンダー↓
$(function(){
  $('#datepicker').datepicker();
});

 //会場↓
 function formSwitch() {
  hoge = document.getElementsByName('place1')
  if (hoge[0].checked) {
      // 好きな食べ物が選択されたら下記を実行します
      document.getElementById('online').style.display = "";
      document.getElementById('offline').style.display = "none";
  } else if (hoge[1].checked) {
      // 好きな場所が選択されたら下記を実行します
      document.getElementById('online').style.display = "none";
      document.getElementById('offline').style.display = "";
  } else {
      document.getElementById('online').style.display = "none";
      document.getElementById('offline').style.display = "none";
  }
}
window.addEventListener('load', formSwitch()); 
