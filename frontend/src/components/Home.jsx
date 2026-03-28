import React, {useEffect, useState} from 'react'
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import api from "../api/api.js";

const Home = () => {

    const [todos, setTodos] = useState([]);

    const [input, setInput] = useState("");

    const saveTodo = async () => {
        try {
            console.log("hi")

            if (input === "") {
                return;
            }
            await api.post('/add-task', {
                status: false,
                title: input
            });

            const {data} = await api.get('/get-all-tasks');

            setTodos(data);
            console.log(todos)

            // setTodos(data);
            setInput("");
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {

        const fetchTodos = async () => {
            const {data} = await api.get('/get-all-tasks');

            setTodos(data);

        }


        fetchTodos();
        return () => {

        };
    }, []);

    console.log(todos)


    return (<div
        className=" min-h-screen flex max-w-4/5 gap-2 mx-auto flex-col items-center justify-center">

        <main
            className="border-2 border-primary rounded-2xl p-4 flex flex-col gap-2 min-w-md max-w-4/5">

            <div className="flex justify-between items-center">
                <h1 className="self-start text-primary text-2xl">Todo
                                                                 Application</h1>
                <ThemeSwitcher/>

            </div>
            <section className="flex gap-3">
                <input type="text" onChange={(e => setInput(e.target.value))}
                       value={input}
                       className="input flex-1 input-primary rounded-md placeholder:text-primary input-xs sm:input-sm md:input-md lg:input-lg xl:input-xl"
                       placeholder="Enter a todo to save ❤️"/>
                <button
                    className="btn btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
                    onClick={saveTodo}>Save
                </button>
            </section>
            <ul className="flex flex-col gap-3">
                {
                    todos.map(({_id, title, status, date}) => (
                        <li className="flex flex-col outline-1 outline-primary p-4 gap-2 rounded-md"
                            key={_id}>
                            <p className="text-primary">{title}</p>
                            <section className="flex gap-2 justify-between">

                                <div
                                    className="me-2 justify-self-start items-center justify-between flex gap-2">
                                    <p>{
                                        status ?
                                            <div
                                                className="badge badge-xs sm:badge-sm md:badge-md lg:badge-lg xl:badge-xl badge-primary">
                                                <svg className="size-[1em]"
                                                     xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 24 24">
                                                    <g fill="currentColor"
                                                       strokeLinejoin="miter"
                                                       strokeLinecap="butt">
                                                        <circle cx="12" cy="12"
                                                                r="10"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeLinecap="square"
                                                                strokeMiterlimit="10"
                                                                strokeWidth="2"></circle>
                                                        <polyline
                                                            points="7 13 10 16 17 8"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeLinecap="square"
                                                            strokeMiterlimit="10"
                                                            strokeWidth="2"></polyline>
                                                    </g>
                                                </svg>
                                                Completed
                                            </div>


                                            :
                                            <div
                                                className="badge badge-xs sm:badge-sm md:badge-md lg:badge-lg xl:badge-xl badge-warning">
                                                <svg className="size-[1em]"
                                                     xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 18 18">
                                                    <g fill="currentColor">
                                                        <path
                                                            d="M7.638,3.495L2.213,12.891c-.605,1.048,.151,2.359,1.362,2.359H14.425c1.211,0,1.967-1.31,1.362-2.359L10.362,3.495c-.605-1.048-2.119-1.048-2.724,0Z"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="1.5"></path>
                                                        <line x1="9" y1="6.5"
                                                              x2="9"
                                                              y2="10"
                                                              fill="none"
                                                              stroke="currentColor"
                                                              strokeLinecap="round"
                                                              strokeLinejoin="round"
                                                              strokeWidth="1.5"></line>
                                                        <path
                                                            d="M9,13.569c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z"
                                                            fill="currentColor"
                                                            data-stroke="none"
                                                            stroke="none"></path>
                                                    </g>
                                                </svg>
                                                Pending
                                            </div>
                                    }
                                    </p>
                                    <p className="text-primary">{

                                        new Intl.DateTimeFormat("en-IN", {
                                            timeZone: "Asia/Kolkata",
                                            year: "numeric",
                                            month: "2-digit",
                                            day: "2-digit",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                            second: "2-digit",
                                            hour12: true // Use true for 12-hour
                                            // format
                                        }).format(new Date(date))
                                    }</p>


                                </div>
                                <div className="flex gap-2">
                                    <button
                                        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-primary">Edit
                                    </button>
                                    <button
                                        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-primary">Delete
                                    </button>
                                </div>

                            </section>

                        </li>
                    ))
                }
            </ul>

        </main>
    </div>)
}
export default Home
