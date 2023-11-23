"use client";

import { useRouter } from "next/navigation";
//username : trashtrash462
//password : 1cATRbeIdhxsRA4z

import React, { useEffect, useState } from "react";

const Home = () => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [regNo, setRegNo] = useState("");
    const [age, setAge] = useState("");

    const [students, setStudents] = useState([]);

    const handleSetClick = () => {
        fetch("http://localhost:3000/api/setData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({ name, regNo, age }), // body data type must match "Content-Type" header
        });
    };

    const handleGetClick = () => {
        fetch("http://localhost:3000/api/getData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setStudents(data.users);
                router.refresh();
            });
    };

    // Inline styles
    const inputStyle = {
        marginBottom: "10px",
        padding: "8px",
        color: "black",
    };

    const buttonStyle = {
        padding: "10px",
        margin: "5px",
        cursor: "pointer",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            {/* Input fields */}
            <label>
                Name :
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={inputStyle}
                />
            </label>
            <br />
            <label>
                Reg No:
                <input
                    type="text"
                    value={regNo}
                    onChange={(e) => setRegNo(e.target.value)}
                    style={inputStyle}
                />
            </label>
            <br />
            <label>
                Age :
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    style={inputStyle}
                />
            </label>
            <br />

            <button onClick={() => handleSetClick()} style={buttonStyle}>
                Button 1
            </button>
            <button onClick={() => handleGetClick()} style={buttonStyle}>
                Button 2
            </button>

            <div className="relative overflow-x-auto max-w-xl m-auto top-7">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                RegNo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Age
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => {
                            return (
                                <tr
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                    key={index}
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {student.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {student.regNo}
                                    </td>
                                    <td className="px-6 py-4">{student.age}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
