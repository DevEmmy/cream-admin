"use client"
import React, { useEffect, useState } from "react";
import Line from "./Line";
import { EyeOutline, PencilAltOutline, TrashOutline } from "heroicons-react";
import { getListOfUsers } from "@/requests/app";

const Board = ({max = 3}) => {
  
  const [users, setUsers] = useState([])

  const fetchData = getListOfUsers()

  useEffect(()=>{
    fetchData.then(resp => {
      console.log(resp)
      setUsers(resp)
    })
  }, [])
  
  return (
    <div className="text-black w-full flex flex-col border rounded-3xl p-6">
      <div>
        <div className="flex justify-between text-start tHead">
          <div className="text-start w-[30%]">Name</div>
          <div className="text-center w-[30%]">Email</div>
          <div className="text-center w-[20%]">Joined</div>
          <div className="text-center w-[20%]">Actions</div>
        </div>
      </div>

      <Line />
      <div className="flex flex-col gap-3 text-gray-500">
        {users?.slice(0, max)?.map((data, i) => {
          return (
            // <TableData key={i} values={Object.values(data)}/>
            <div
              className={`tRow py-3 px-2 rounded-lg flex justify-between`}
              key={i}
            >
              <div className="w-[30%]">{data.firstName + " " + data.lastName}</div>
              {/* <div className="flex gap-3 w-[50%]">
                <img src={data.profilePicture} alt="" className="w-6 h-6 rounded-lg" />
                {data.fullName}
              </div> */}
              <div className="text-center w-[30%]">{data.email}</div>
              <div className="w-[20%] text-center">2 Days ago</div>
              <div className="w-[20%] gap-[20px] flex items-center justify-center">
                <EyeOutline size="16px" />
                <PencilAltOutline size="16px" />
                <TrashOutline
                    size="16px"
                />
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
