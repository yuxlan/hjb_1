const http = "http://127.0.0.1:8080"
const imgUrl = "/images/"

function _post(url, data, suc, fail) {
    my.httpRequest({
        url: http + url,
        method: 'POST',
        data: data,
        dataType: 'json',
        success: function(res) {
            suc(res.data)
        },
        fail: function(res) {
            fail(res)
        }
    })
}

function data(e) {
    let id = e.currentTarget.dataset.id
    return data = [id]
}

export default {
    utils: {
        http,
        imgUrl,
        _post,
        data
    }
}