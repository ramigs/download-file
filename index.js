const downloadFile = () => {
    const data = `name, email
    Joe, Joe@gmail.com
    Anna, anna@gmail.com`

    const blob = new Blob([data], { type: "octet-stream" })

    const href = URL.createObjectURL(blob)

    const a = Object.assign(document.createElement("a"), {
        href, style: "display: none", download: "myData.csv"
    })

    a.click()

    URL.revokeObjectURL(href)
}
