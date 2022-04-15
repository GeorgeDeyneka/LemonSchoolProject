import service from './request.js'

export function getAllContacts(){
    return service({
        method: "GET",
        url: '/contact',
    })
}

export function addNewContact(data){
    return service({
        method: "POST",
        url: `/contact`,
        data
    })
}

export function delContact(id){
    return service({
        method: "DELETE",
        url: `/contact/${id}`,
    })
}


export function updateContact(data){
    return service({
        method: "PUT",
        url: `/contact/${data.id}`,
        data
    })
}

export function getContactByID(id){
    return service({
        method: "GET",
        url: `/contact/${id}`,
    })
}




