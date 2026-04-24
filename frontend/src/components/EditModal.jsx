import {createPortal} from 'react-dom';
import React, {useState} from "react";
import api from "../api/api.js";
import dayjs from 'dayjs';

const EditModal = ({data, onClose, isOpen, handleModifyTodo}) => {
    console.log(data._id)


    const [formState, setFormState] = useState({
        ...data, date: new Date(data.date)
    });

    if (!isOpen) return null;

    const saveFormInput = async (e) => {
        e.preventDefault();
        console.log(formState)
        const {data} = await api.put(`put-task/${formState._id}`, {
            ...formState,
            date: new Date(formState.date)
        })
        console.log(data)

        handleModifyTodo()
        onClose()
    }
    const portalRoot = document.getElementById('modal-root');
    return createPortal(<>
        <div
            className="fixed inset-0 bg-base-300/80 backdrop-blur-sm z-10"
            onClick={onClose}/>
        <div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-base-100 p-6 sm:p-8 border-2 border-secondary shadow-2xl shadow-secondary/50 rounded-3xl max-w-xl w-[95%] sm:w-[90%] md:w-full z-20 max-h-[90vh] overflow-y-auto">
            <button
                className="btn btn-circle btn-sm btn-ghost absolute top-3 right-3 text-error"
                onClick={onClose}>
                ✕
            </button>
            <form
                className="flex flex-col items-center gap-4 sm:gap-6 w-full mt-4 sm:mt-0">
                <div className="bg-linear-to-r from-primary to-secondary p-3 sm:p-4 rounded-xl w-full text-center shadow-lg">
                     <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-primary-content tracking-wider wrap-break-word">
                         ✨ Edit Todo Wizard ✨
                     </h2>
                </div>
                
                <section className="flex gap-4 flex-col w-full px-0 sm:px-2">
                    <div className="form-control w-full">
                        <label className="label px-0">
                            <span className="label-text font-bold text-accent">Task Description</span>
                        </label>
                        <textarea
                            value={formState.title}
                            onChange={e => {
                                setFormState(prev => ({
                                    ...prev,
                                    title: e.target.value
                                }))
                            }}
                            name="title"
                            className="textarea textarea-bordered h-24 sm:h-28 textarea-info rounded-xl focus:textarea-secondary text-sm sm:text-base md:text-lg shadow-inner text-purple-600 font-semibold bg-blue-50/50 w-full resize-none"
                            placeholder="Edit your todo ❤️"></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full h-auto sm:h-28">
                        <div className="form-control flex-1 bg-base-200 p-3 sm:p-4 rounded-xl border border-base-300 shadow-sm w-full flex flex-col justify-center h-full min-w-0">
                             <label className="label cursor-pointer flex justify-between items-center w-full px-0 h-full">
                                 <span className="label-text font-bold text-success text-base sm:text-lg whitespace-nowrap">Mark as Done</span>
                                 <input type="checkbox"
                                        onChange={e => {
                                            setFormState(prev => ({
                                                ...prev,
                                                status: e.target.checked
                                            }))
                                        }}
                                        checked={formState.status}
                                        name="status"
                                        className="toggle toggle-success toggle-md sm:toggle-lg ml-2"
                                 />
                             </label>
                        </div>
                        
                        <div className="form-control flex-1 bg-base-200 p-3 sm:p-4 rounded-xl border border-base-300 shadow-sm w-full flex flex-col justify-between h-full min-w-0">
                            <label className="label pb-2 pt-0 px-0">
                                <span className="label-text font-bold text-warning text-base sm:text-lg">Target Date</span>
                            </label>
                            <input type="datetime-local"
                                   onChange={e => {
                                       setFormState(prev => ({
                                           ...prev,
                                           date: e.target.value
                                       }))
                                   }}
                                   value={dayjs(formState.date).format('YYYY-MM-DDTHH:mm')}
                                   name="date"
                                   className="input input-bordered input-warning w-full focus:input-secondary font-mono text-xs sm:text-sm shadow-inner text-orange-600 font-semibold bg-orange-50/50 min-w-0"/>
                        </div>
                    </div>

                    <button
                        className="btn btn-secondary btn-block mt-2 sm:mt-4 text-base sm:text-lg font-bold shadow-md hover:shadow-lg hover:shadow-secondary/50 rounded-xl"
                        onClick={saveFormInput}>
                        💾 Save Changes
                    </button>
                </section>
            </form>
        </div>
    </>, portalRoot);

};

export default EditModal
