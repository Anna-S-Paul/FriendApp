import React, { useEffect, useState } from 'react'
import NavFriend from './NavFriend'
import axios from 'axios'

const ViewFriend = () => {
    const [data, setData] = useState([])
    const fetchData=()=>{
        axios.get(" https://friendsapi-re5a.onrender.com/view").then(
            (response)=>{
                setData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavFriend />
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Friend's Name</th>
                                    <th scope="col">Friend Nickname</th>
                                    <th scope="col">Describe your friend</th>
                                    <th scope="col">__V</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value,index)=>{
return <tr>
                                    <td>{value._id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.friendName}</td>
                                    <td>{value.friendNickName}</td>
                                    <td>{value.DescribeYourFriend}</td>
                                    <td>{value.__v}</td>
                                </tr>
            }
                                )
    }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>    </div>
    )
}

export default ViewFriend