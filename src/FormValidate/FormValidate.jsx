import React, { Component } from "react";

export default class FormValidate extends Component {
  state = {
    values: {
      id: "",
      image: "",
      name: "",
      type: "",
      price: "",
      description: "",
    },
    errors: {
      id: "",
      image: "",
      name: "",
      type: "",
      price: "",
      description: "",
    },
  };

  hanleInput = (event) => {
    const { value, name } = event.target;
    // console.log(value);
    // console.log(`value: ${value} / name: ${name}`);

    let errorText = "";

    // id: phải là số
    if (name === "id") {
      const reg = /^\d+$/;
      if (!reg.test(value)) {
        errorText = "Trường này phải là số";
      }
    }

    // image: phải là đường đãn
    if (name === "image") {
      const reg = /(https?:\/\/[^\s]+)/g;
      if (!reg.test(value)) {
        errorText = "Trường này phải là đường dẫn";
      }
    }
    //kiểm tra năme
    if (name === "name") {
      const reg =
        /[^a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u;
      if (reg.test(value)) {
        errorText = "Trường này phải là đường dẫn";
        // ==> SAI
      }
    }

    //kiểm tra loại sản phẩm
    if (name === "type") {
      if (value === "0") {
        errorText = "Bạn chưa chọn loại sản phẩm";
      }
    }

    //kiểm tra giá sản phẩm
    if (name === "price") {
      const reg = /^\d+$/;
      if (!reg.test(value)) {
        errorText = "Trường này phải là số";
      }
    }

    // kiểm tra trống
    if (value.trim() === "") {
      errorText = "Không được trống";
    }

    this.setState(
      {
        values: { ...this.state.values, [name]: value },
        errors: { ...this.state.errors, [name]: errorText },
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSubmit = (event) => {
    // ngăn chặn reload trang khi submit
    event.preventDefault();
    let isValid = true;

    for (const key in this.state.values) {
      // console.log(`values=> key: ${key} / value:${this.state.values[key]}`);
      if (this.state.values[key] === "") isValid = false;
    }

    for (const key in this.state.values) {
      // console.log(`errors=> key: ${key} / value:${this.state.values[key]}`);
      if (this.state.errors[key] !== "") isValid = false;
    }

    // Phải có value &&
    // Error phải rỗng
    // if (this.state.values.id === "") isValid = false;
    // if (this.state.values.image === "") isValid = false;
    // if (this.state.values.name === "") isValid = false;
    // if (this.state.values.type === "") isValid = false;
    // if (this.state.values.price === "") isValid = false;
    // if (this.state.values.description === "") isValid = false;


    // if (this.state.errors.image !== "") isValid = false;
    // if (this.state.errors.name !== "") isValid = false;
    // if (this.state.errors.type !== "") isValid = false;
    // if (this.state.errors.price !== "") isValid = false;
    // if (this.state.errors.description !== "") isValid = false;

    if (isValid === false) {
      console.log("Lỗi không cho submit");
      return
    }


    console.log("Dữ liệu hợp cho phép người dùng submit");
  };

  render() {
    return (
      <form
        onSubmit={(event) => {
          this.handleSubmit(event);
        }}
        className="row row-gap-5"
      >
        <div className="col-6">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="id"
              flag="nhi"
              name="id"
              value={this.state.value}
              onChange={(event) => {
                this.hanleInput(event);
              }}
            />
            <label>id</label>
            <span className="text-danger fst-italic">
              *{this.state.errors.id}
            </span>
          </div>
        </div>
        <div className="col-6">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="image"
              name="image"
              onChange={(event) => {
                this.hanleInput(event);
              }}
            />
            <label>image</label>
            <span className="text-danger fst-italic">
              *{this.state.errors.image}
            </span>
          </div>
        </div>
        <div className="col-6">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              onChange={(event) => {
                this.hanleInput(event);
              }}
            />
            <label>Name</label>
            <span className="text-danger fst-italic">
              *{this.state.errors.name}
            </span>
          </div>
        </div>
        <div className="col-6">
          <select
            name="type"
            className="form-select form-select-lg"
            onChange={(event) => {
              this.hanleInput(event);
            }}
          >
            <option value={0}>Product Type</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
          <span className="text-danger fst-italic">
            *{this.state.errors.type}
          </span>
        </div>
        <div className="col-6">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Price"
              name="price"
              onChange={(event) => {
                this.hanleInput(event);
              }}
            />
            <label htmlFor="floatingInput">Price</label>
            <span className="text-danger fst-italic">
              *{this.state.errors.price}
            </span>
          </div>
        </div>
        <div className="col-6">
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Description"
              name="description"
              onChange={(event) => {
                this.hanleInput(event);
              }}
            ></textarea>
            <label htmlFor="floatingInput">Description</label>
            <span className="text-danger fst-italic">
              *{this.state.errors.description}
            </span>
          </div>
        </div>
        <div className="col">
          <button
            type="submit"
            className="btn btn-success "
            style={{ width: "100%" }}
          >
            submit
          </button>
        </div>
      </form>
    );
  }
}
