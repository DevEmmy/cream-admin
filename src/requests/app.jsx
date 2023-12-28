import axios from "axios"

const axiosConfig = axios.create({
    baseURL: "https://king-david-elites.onrender.com"
})


export const getAdminDetails = async ()=>{
    let lOfUsers = await getListOfUsers()
    

    return  [
        {
            baseText: "Total Users",
            value: lOfUsers.length
        },
        {
            baseText: "Total Buyers",
            value: "50"
        },
        {
            baseText: "Total Listings",
            value: "1,500"
        },
        {
            baseText: "Total Requests",
            value: "200"
        },
        {
            baseText: "Total Blogs",
            value: "20"
        },
    
    ]
}

const getNumberOfUsers = ()=>{

}

const getNumberOfListings = ()=>{

}

const getNumberOfBuyers = ()=>{
    
}

const getNumberOfTotalRequests = ()=>{

}

const getNumberOfBlogs = ()=>{

}

export const getListOfUsers = async ()=>{
    let response;
    await axiosConfig.get("/users/all-users")
    .then(resp => {
        response = resp.data.users
    })
    
    return response
}

export const getVisitors = async ()=>{
    let response;
    await axiosConfig.get("/analytics/aggregated")
    .then(resp => {
        response = resp.data


    })
    
    return [
        {
            title:"Daily Visitors",
            value: response.dailyVisits
        },
        {
            title: "Weekly Visitors",
            value: response.weeklyVisits
        },
        {
            title: "Monthly Visitors",
            value: response.monthlyVisits
        }
    ]
}

export const searchUserByName = ()=>{

}

export const getAllListings = ()=>{

}

export const deleteListings = ()=>{

}

// export const 