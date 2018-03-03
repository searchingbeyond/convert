function bindHandler(){
	var btn = document.getElementsByTagName("button");
	var length = btn.length;
	for ( var i = 0; i < length; i++){
		btn[i].onclick = function(){
            var content = document.getElementById("content").value;
            var type = this.getAttribute("id");
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                if ( xhr.readyState == 4 && xhr.status == 200 ){
                    var res = xhr.responseText;
                    document.write( res );
                }
            }
            xhr.open("POST", "./transfer.php", true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send("type=" + type + "&content=" + content);
        }
    }
}

window.onload = bindHandler;
