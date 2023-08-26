import { data } from './data.js';

let dat = { "data": data }

var main_cont = document.createElement("div")
main_cont.classList.add("container")

let heading = document.createElement("h1")
heading.innerHTML = "PAGINATION"

let table = document.createElement("table")
table.classList.add("tab")

let th1 = document.createElement("th")
let th2 = document.createElement("th")
let th3 = document.createElement("th")

var tr_head = document.createElement("tr")
let idhead = document.createElement("p")
idhead.innerHTML = "ID"
let namehead = document.createElement("p")
namehead.innerHTML = "Name"
let mailhead = document.createElement("p")
mailhead.innerHTML = "Email"

th1.append(idhead)
th2.append(namehead)
th3.append(mailhead)
tr_head.append(th1, th2, th3)


function items(obj, count, page) {

    table.appendChild(tr_head)

    for (let i = ((0 + 1) * (page - 1)) * 10; i < count * page; i++) {

        var tr = document.createElement("tr")
        var td1 = document.createElement("td")
        var td2 = document.createElement("td")
        var td3 = document.createElement("td")

        let item_id = document.createElement("div")
        item_id.classList.add("item_id")
        let id = document.createElement("p")
        id.innerHTML = obj.data[i].id
        item_id.append(id)

        let item_name = document.createElement('div')
        item_name.classList.add("item_name")
        let name = document.createElement("p")
        name.innerHTML = obj.data[i].name
        item_name.append(name)

        let item_mail = document.createElement('div')
        item_mail.classList.add("item_mail")
        let mail = document.createElement("p")
        mail.innerHTML = obj.data[i].email
        item_mail.append(mail)

        td1.append(item_id)
        td2.append(item_name)
        td3.append(item_mail)
        tr.append(td1, td2, td3)
        table.append(tr)
    }

}

let pager = document.createElement("div")
pager.classList.add("pagination")

var current_page = 1;
var p_count = 10;

function pageNum(page, sam) {
    if (sam) {
        let cp = document.getElementById(`${current_page}`)
        cp.classList.add("active")
        cp.classList.remove("active")
    }
    if (page == 0) {
        if (current_page != 1) {
            current_page--
        }
    } else if (page == -1) {
        if (current_page < 10) {
            current_page++
        }
    } else {
        current_page = page
    }
    if (sam) {
        let cp = document.getElementById(`${current_page}`)
        cp.classList.add("active")
    }
    table.innerHTML = ""
    items(dat, p_count, current_page)
}

let prev = document.createElement("a")
prev.innerHTML = "Previous"
prev.href = "#"
prev.onclick = function () { pageNum(0, true) }
pager.append(prev)

let page_count = dat.data.length / p_count

for (let i = 0; i < page_count; i++) {
    let num = document.createElement("a")
    num.innerHTML = `${i + 1}`
    if (i == 0) {
        num.classList.add("active")
    }
    num.href = "#"
    num.id = `${i + 1}`
    num.onclick = function () { pageNum(i + 1, true) }
    pager.append(num)
}


pageNum(1)

let next = document.createElement("a")
next.innerHTML = "Next"
next.href = "#"
next.onclick = function () { pageNum(-1, true) }
pager.append(next)


main_cont.append(heading, pager, table)
document.body.append(main_cont)