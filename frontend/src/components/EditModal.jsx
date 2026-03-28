import {createPortal} from 'react-dom';
import React, {useState} from "react";
import api from "../api/api.js";
import dayjs from 'dayjs';

const EditModal = ({children, data, onClose, isOpen, handleModifyTodo}) => {
    console.log(data._id)


    const [formState, setFormState] = useState({
        ...data, date: new Date(data.date)
    });

    // const {_id, title, status, date} = data;
    if (!isOpen) return null;
    // Get the modal root element from the DOM

    /*const handleFormState = (e) => {
        if (e.target.name === 'status') {
            setFormState({
                ...formState,
                [e.target.name]: !formState.status
            });
        } else {
            setFormState({
                ...formState,
                [e.target.name]: e.target.value
            });
        }
    }*/

    const saveFormInput = async (e) => {
        e.preventDefault();
        console.log(formState)
        const {data} = await api.put(`put-task/${formState._id}`, {...formState, date: new Date(formState.date)})
        console.log(data)

        handleModifyTodo()
        onClose()
    }
    const portalRoot = document.getElementById('modal-root');
    return createPortal(<>
        <div
            className="fixed inset-0 bg-primary-base/30 backdrop-blur-md z-10"
            onClick={onClose}/>
        <div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5 border border-gray-100 rounded-2xl max-w-xl w-full z-20">
            <button
                className="absolute top-3 right-3 bg-none border-none text-md cursor-pointer"
                onClick={onClose}>
                &times;
            </button>
            <form
                className="flex flex-col items-center gap-3">
                <h2 className="text-md sm:text-3xl md:text-5xl  font-bold text-primary underline underline-offset-4">
                    Edit Todo Wizard
                </h2>
                <section className="flex gap-3 flex-col">
                    <textarea
                        value={formState.title}
                        onChange={e => {
                            setFormState(prev => ({
                                ...prev,
                                title: e.target.value
                            }))
                        }}
                        name="title"
                        className="textarea h-24 textarea-primary rounded-md placeholder:text-primary textarea-xs sm:textarea-sm md:textarea-md lg:textarea-lg xl:textarea-xl"
                        placeholder="Edit your todo ❤️"></textarea>


                    <label
                        className="input-primary flex justify-start gap-3">

                        <span
                            className="label text-primary label-xs sm:label-sm md:label-md lg:label-lg xl:label-xl">Status</span>
                        <input type="checkbox"
                               onChange={e => {
                                   setFormState(prev => ({
                                       ...prev,
                                       status: e.target.checked
                                   }))
                               }}
                               checked={formState.status}
                               name="status"
                               className="checkbox checkbox-success checkbox-xs sm:checkbox-sm md:checkbox-md lg:checkbox-lg
                        xl:checkbox-xl"
                        />

                    </label>
                    <label className="flex items-center gap-3">
                        <span
                            className="label text-primary label-xs sm:label-sm md:label-md lg:label-lg xl:label-xl">Date</span>
                        <input type="datetime-local"
                               onChange={e => {
                                   setFormState(prev => ({
                                       ...prev,
                                       date: e.target.value
                                   }))
                               }}
                               value={dayjs(formState.date).format('YYYY-MM-DDTHH:mm')}
                               name="date"
                               className="input input-primary input-xs sm:input-sm md:input-md lg:input-lg xl:input-xl placeholder:text-primary text-primary"
                               placeholder="Edit your todo ❤️"/>
                    </label>


                    <button
                        className="btn btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
                        onClick={saveFormInput}>Save
                    </button>
                </section>


            </form>

        </div>

    </>, portalRoot);

};

export default EditModal
