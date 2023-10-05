export function NotAuthenticated() {

    let auth : boolean;
    auth = true;
    const token = localStorage.getItem("token");
    if (!token) {
        window.location.href = "/";
        auth = false;
    }
   
    return auth
}