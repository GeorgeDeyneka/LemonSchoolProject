import {
    getAllContacts,
    delContact,
    addNewContact,
    getContactByID,
    updateContact
} from "../api/contacts";



const container = document.querySelector('.container')
const tbody = document.querySelector('tbody')
const userName = document.querySelector('.user-name');
const logoutBtn = document.querySelector('.logout');


function renderUserEmail(){
    userName.textContent=localStorage.getItem('login')
}
renderUserEmail()

function logout(){
    localStorage.removeItem('login')
    localStorage.removeItem('token')
    logoutBtn.removeEventListener('click',logout)
    document.location.href = '/'
}

logoutBtn.addEventListener('click',logout)

function createNode(data) {
    let tr = document.createElement('tr')
    tr.dataset.id = data.id
    for (let item in data) {
        if(item!=='id'){
            let td = document.createElement('td')
            td.textContent = data[item]
            tr.append(td)
        }
    }

    let td = document.createElement('td')
    td.className = 'action-group'
    td.insertAdjacentHTML('beforeend',
        '<i class="fa fa-trash action-group__delete"></i>\n' +
              '<i class="fa fa-edit action-group__edit"></i>')
    tr.append(td)
    return tr
}

function deleteAllNodes(){
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}

async function getContacts() {
    let resp = await getAllContacts()
    deleteAllNodes()
    renderAllContacts(resp)
}

getContacts()

function renderAllContacts(data) {
    data.forEach(async (item) => {
        await tbody.append(createNode(item))
    })
}

container.addEventListener('click', clickHandler)

function clickHandler(e) {
    const parentBlock = e.target.closest('TR')
    const id = parentBlock.dataset.id
    if(e.target.classList.contains('action-group__delete')){
            deleteContact(parentBlock,id)
     }else if(e.target.classList.contains('action-group__edit')){
        console.log('in progress... (function "updateContact" is not connected)')
    }
}

async function deleteContact(node,id){
    try{
        let resp = await delContact(id)
        node.remove()
    }catch(e){
        console.log(e.message,'this is error messages')
    }

}
