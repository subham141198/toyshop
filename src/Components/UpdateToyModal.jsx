import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

const UpdateToyModal = ({toy, handleToyUpdate, show, onHide}) => {
  console.log(toy)
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
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
    }
  }, [toy, setValue]);
  
  
  function onSubmit(data){
      handleToyUpdate(data)
      onHide();
  }
  return (

    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
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
            defaultValue={toy?.toyName}
          />
          <input
            className="text-input d-none"
            {...register("_id")}
            value={toy?._id}
          />

          <input
            className="text-input form-control"
            {...register("imageurl", { required: true })}
            placeholder="Toy Image"
            defaultValue={toy?.imageurl}
          />
          <input
            className="text-input form-control"
            {...register("sname", { required: true })}
            placeholder="Seller Name"
            defaultValue={toy?.sname}
          />
          <input
            className="text-input form-control"
            placeholder="category"
            {...register("category")}
            defaultValue={toy?.category}
          />
          <input
            className="text-input form-control"
            placeholder="price"
            {...register("price")}
            defaultValue={toy?.price}
          />
          <input
            className="text-input form-control"
            placeholder="rating"
            {...register("rating")}
            defaultValue={toy?.rating}
          />
          <input
            className="text-input form-control"
            placeholder="Available Quantity"
            {...register("quantity")}
            defaultValue={toy?.quantity}
          />

          <Button className='outline-primary' value="Update" type="submit" >Update</Button>
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