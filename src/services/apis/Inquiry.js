import { api } from "../index"


export const LoginUser = (data) => {
    return api({
        url : 'Login',
        method : 'POST',
        data
    }, true)
}

export const Session = () => {

    let data = { 
        // UserID: JSON.parse(localStorage.getItem("branch")).id,
        BranchID: JSON.parse(localStorage.getItem("branch")).ID,
        Computer: "asissnt",
    }

    return api({
        url : 'Login',
        method : 'PATCH',
        data
    })
}
