import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form";

function AddService() {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/services',data)
        .then(res=>{
            if(res.data.insertedId){
                alert('addedd successfully');
                reset();
            }
        })
    };

    return (
        <div>
            <h3>Add a service</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("Name", { required: true, maxLength: 20 })} placeholder="name" />
            <input {...register("price")} placeholder="price"/>
            <input {...register("description")} placeholder="description" />
            <input {...register("image")} placeholder="image url" />
            <input type="submit" />
            </form>
        </div>
    )
}

export default AddService
