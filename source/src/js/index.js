function OurTeam(){
    alert("Now you our teammate")
}

function MoreDetails(){
    document.title = 'This is more details'
}

function NewModul(){
    var id = 'but'
    var refresh = '<div id="but"><input class="newtextinput" type="text"><input type="button" onclick="NewTextModul()" value="Join Us"></div>';
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