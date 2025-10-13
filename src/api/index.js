import Api from "../services/Api"


export async function contactSubmit(body) {
    console.log("here??")
    const response = await Api.post("/mustafa-kamal-users", {
        body,
    })
    console.log(response)
    return response
}