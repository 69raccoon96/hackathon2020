import * as axios from 'axios';

const ax=axios.default.create({
    baseURL:'http://185.68.21.29:8000/api/',
})


const ipX = axios.default.create({
    baseURL:"http://api.ipstack.com/"

})

export const GetUser = (id = 0) => {
    return ax.get('').then(res => {
        return res.data;
    });
}
/*
* Returns altitude and longitude by {}
* */
export const Location = async () => {
    return  UserIP().then(res => {
        return ipX.get(res+"?access_key=e648314645aecec0fa722f1f1ee67825")
            .then(res => {
            return {latitude: res.data.latitude, longitude: res.data.longitude};
        })
    })
}

export const UserIP = async() =>{
    return  axios.default.get("https://api.ipify.org/?format=json")
        .then(data => {return data.data.ip})
}

/* IPromise
* Sending POST req to register User
* Input: user{email:"", password:"", lastname:"", firstname:""
* Output: {config:{}, data:{token:""}, headers:{}, status: int}
*/
export const Register = async (user) => {
    return ax.post("register",{
        "email":user.email,
        "password":user.password,
        "first_name":user.firstName,
        "last_name":user.lastName
    },{
        headers: {
            "Authorization":"GeoAssist"
        }
    }).then(res => {
        return res
    });
}


/*IPromise
* Sending POST req to auth User by email, password
* Input: user{email:"", password:""}
* Result: {config:{}, data:{token:""}, headers:{}, status: int}
*/
export const Auth = async (user) =>{
    return ax.post("auth",{
        "email":user.email,
        "password":user.password
    },
        {
        headers:{
            "Authorization": "GeoAssist "+user.token
        }
    });
}
/*IPromise
* Sending POST req to register as favourite user place
* Input: Place{name:"", category:""}, user{token:""}
* Result: {config:{}, data:{token:""}, headers:{}, status: int}
*/
export const addPlace = async (place, user)=>{
    return ax.post("add_place",{
        "name": place.name,
        "category": place.category
    },{
        headers:{
            "Authorization": "GeoAssist "+user.token
        }
    });
}