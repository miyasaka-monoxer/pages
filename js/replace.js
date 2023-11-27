void function () {
    const contentTable = {
        "R051202": "contents/R051202.html",
        "not_found": "not_found.html",
        "top": "top.html",
    }
    const routingTable = {
        "/pages/R051202": "contents/R051202.html",
        "/pages/": "top.html",
        "/pages": "top.html",
        "/": "top.html",
        "": "top.html",
    }
    const fallBackSource = [
        "<head><title>エラー</title></head>",
        "<body><h1>エラー</h1><p>予期しないエラーです。管理者にご連絡ください。</p></body>"
    ].join("\n")

    console.log(location.href)
    const url = new URL(location.href)

    const routingName = url.pathname
    const routedPath = routingTable[routingName]

    const searchParams = new URLSearchParams(url.search)
    const queryName = searchParams.get("p") ?? ""
    const queryPath = contentTable[queryName]

    const filePath = (queryName ? queryPath : routedPath) ?? "not_found.html"

    const request = new Request(filePath)
    fetch(request)
        .then(response => {
            if (response.ok) return response.blob()
            else return Promise.resolve(new Blob([fallBackSource]))
        })
        .then(blob => blob.text())
        .then(text => document.body.innerHTML = text)
}();
