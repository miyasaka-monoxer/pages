void function () {
    const contentTable = {
        "R051202": "R051202.html",
        "not_found": "not_found.html",
        "top": "top.html",
    }
    const routingTable = {
        "pages/R051202": "contents/R051202.html",
    }
    const fallBackSource = [
        "<head><title>エラー</title></head>",
        "<body><h1>エラー</h1><p>予期しないエラーです。管理者にご連絡ください。</p></body>"
    ].join("\n")

    console.log(location.href)
    const url = new URL(location.href)
    const name = url.pathname;
    const filePath = routingTable[name] ?? "not_found.html"

    const request = new Request(filePath)
    fetch(request)
        .then(response => response.blob())
        .then(blob => blob.text())
        .then(text => document.body.innerHTML = text)
}();
