$(document).ready(function(){
    $('.dk1').hide();
    $('.submit').click(function(){
        if($('#lastname').val()=="" || $('#lastname').val()==null){
            alert("Vui lòng điền họ tên");
            return false;
        }
        if($('#name').val()=="" || $('#name').val()==null){
            alert("Vui lòng điền tên");
            return false;
        }
        if($('#boy').val()=="" && $('#boy').val()=="null" && $('#girl').val()=="" && $('#girl').val()=="null"){
            alert("Vui lòng chọn giới tính");
            console.log($('#boy').val());
            console.log($('#girl').val());
            return false;
        }
        if($('#myEmail').val()=="" || $('#myEmail').val()==null){
            alert("Vui lòng điền Email");
            return false;
        }
        if($('#myPassword').val()=="" || $('#myPassword').val()==null){
            alert("Vui lòng điền mật khẩu");
            return false;
        }
        if($('#againmyPassword').val()=="" || $('#againmyPassword').val()==null){
            alert("Vui lòng điền lại mật khẩu");
            return false;
        }
        if($('#againmyPassword').val()!=$('#myPassword').val()){
            alert("Mật khẩu điền lại không giống với mật khẩu gốc");
            return false;
        }
        if($('#check').val()=="" || $('#check').val()==null){
            alert("Vui lòng đồng ý với điều khoản");
            return false;
        }
    })
})

