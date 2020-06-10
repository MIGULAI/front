function OurTeam(){
    alert("Now you our teammate")
}

function MoreDetails(){
    document.title = 'This is more details'
}

function NewModul(){
    var id = 'but'
    var refresh = '<div id="but"><input id="newtextinput" class="newtextinput" type="email" ><input type="button" onclick="ValidateEmail()" value="Join Us"></div>';
    var obj=document.getElementById(id);
    var o=document.createElement('div');
    o.innerHTML= refresh;
    obj.innerHTML=o.children[0].innerHTML;

}

function NewTextModul(){
    var id = 'but'
    var refresh = '<div class="but"><div class="subbuttext"> Thanks for your join</div></div>';
    var obj=document.getElementById(id);
    var o=document.createElement('div');
    o.innerHTML= refresh;
    obj.innerHTML=o.children[0].innerHTML;
}

function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}

function ValidateEmail() 
{
    var text = document.getElementById('newtextinput')
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(text.value.match(mailformat))
    {
        NewTextModul()
    }
    else
    {
        alert("Erorr");
    }
}