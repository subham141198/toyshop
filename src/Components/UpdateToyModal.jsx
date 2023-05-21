import React from 'react';
import { Button, Spinner } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useEffect } from 'react';
import { useForm } from "react-hook-form";

const UpdateToyModal = ({ show, onHide, toy, handleToyUpdate, updatingdata }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();


  useEffect(() => {
    if (toy) {
      setValue('toyName', toy.toyName);
      setValue('imageurl', toy.imageurl);
      setValue('sname', toy.sname);
      setValue('category', toy.category);
      setValue('price', toy.price);
      setValue('rating', toy.rating);
      setValue('quantity', toy.quantity);
      setValue('_id', toy._id);
    }
  }, [toy, setValue]);


  function onSubmit(data) {
    handleToyUpdate(data)
  }
  return (

    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered

    >
      <Modal.Header closeButton>
        <Modal.Title
          className="text-center w-100 m-auto"
          id="contained-modal-title-vcenter"
        >
          Update Toy
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          className="container text-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          {errors.exampleRequired && <span>This field is required</span>}
          <input
            className="text-input form-control"
            {...register("toyName")}
            placeholder="Toy Name"

          />
          <input
            className="text-input d-none"
            {...register("_id")}

          />

          <input
            className="text-input form-control"
            {...register("imageurl", { required: true })}
            placeholder="Toy Image"

          />
          <input
            className="text-input form-control"
            {...register("sname", { required: true })}
            placeholder="Seller Name"

          />
          <input
            className="text-input form-control"
            placeholder="category"
            {...register("category")}

          />
          <input
            className="text-input form-control"
            placeholder="price"
            {...register("price")}

          />
          <input
            className="text-input form-control"
            placeholder="rating"
            {...register("rating")}

          />
          <input
            className="text-input form-control"
            placeholder="Available Quantity"
            {...register("quantity")}

          />

          <Button className='outline-primary' value="Update" type="submit" >{updatingdata ? <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          /> :
            "Update"}</Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
        {/* <button className="bg-danger">Update</button> */}
      </Modal.Footer>
    </Modal>

  );
};

export default UpdateToyModal;