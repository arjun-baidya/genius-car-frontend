import React from 'react'
import { useForm } from "react-hook-form";

function AddService() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div>
            <h3>Add a service</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("Name", { required: true, maxLength: 20 })} placeholder="name" />
            <input {...register("price")} placeholder="price"/>
            <input {...register("description")} placeholder="description" />
            <input type="submit" />
            </form>
        </div>
    )
}

export default AddService
