const GetUser = async() =>{
    const userId = Math.round(Math.random()*9)+1

    const url = "https://jsonplaceholder.typicode.com/users/"+userId
    const response = await fetch(url);
    const user = await response.json();

    return user;
}

export default GetUser