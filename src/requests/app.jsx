import axios from "axios"

const axiosConfig = axios.create({
    baseURL: "https://king-david-elites.onrender.com"
})


export const getAdminDetails = async ()=>{
    let response;
    await axiosConfig.get("/users/admin/details")
    .then(resp => {
        response = resp.data
    })

    console.log(response)

    return  [
        {
            baseText: "Total Users",
            value: response.users
        },
        {
            baseText: "Total Buyers",
            value: response.buyers
        },
        {
            baseText: "Total Listings",
            value: response.totalListings
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