import React from 'react'
import axios, { post } from 'axios';


//const axiosInstance = axios.create({ baseURL: "http://localhost:3001/" });

class UploadStudentPicture extends React.Component {

  constructor(props) {

    super(props);

    this.state ={
      file:null
    }

    this.handlClick = this.handlClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.sendUplodRequest = this.sendUplodRequest.bind(this);

  }

  onChange(e) {
    this.setState({file:e.target.files[0]})
  }

  handlClick(e){

    e.preventDefault();

    const file = this.state.file;

    const formData = new FormData();

    formData.append('file',file);
    formData.append('_id',this.props.match.params._id);
    formData.append('firstName',this.props.match.params.firstName);

    this.sendUplodRequest(formData);

  }

  async sendUplodRequest(formData) {

    const res1 = await axios.post("/uploadFile", formData, {
      "content-type": "multipart/form-data"
    });

    const uploadResp = await res1.data.uploadResp;

    if(uploadResp != "OK") return alert("Error: Picture not uploaded!!!");

    alert("Picture updeted successfully...") ;
    this.props.history.push("/");

  }

  render() {
    return (
      <form >
        <h1>File Upload</h1>
        <input type="file" onChange={this.onChange} />
        <button onClick={this.handlClick}>Upload</button>
      </form>
   )
  }
}



export default UploadStudentPicture;