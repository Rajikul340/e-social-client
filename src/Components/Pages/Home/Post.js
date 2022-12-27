import React, { useContext, useState } from "react";
import { AuthUser } from "../../AuthContext/AuthContext";
import '../Style/Style.css'
import { MdPermMedia } from "react-icons/md";

const Post = () => {
    const{user} = useContext(AuthUser)

    const [photo, setphoto] = useState(null);
    const handleInputChange = (event) => {
      setphoto(URL.createObjectURL(event.target.files[0]));
    }








  return (
    <div className="mt-8 mx-10">
      {/* The button to open modal */}
      <div className="">
        <label className="border post px-20 py-3 hover:pointer" htmlFor="my-modal-3"> start a post </label>
 
      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
          Create Post 
          </h3>
          <form className="py-4">
          <textarea className="textarea textarea-bordered w-full " placeholder=" share Your feelings"></textarea>
           <label for='input' className=" border " id="upload"> <MdPermMedia title="upload image" className="border w-full  my-3 " size='40px'/> </label>
          <input  type="file" className="w-full border p-2 form-control " onChange={handleInputChange}  id="input"/>
          {
            photo ? <> <img  src={photo} className alt="Image_Photo" /></>: ''
          }
                  
   
          <button type="submit" className="w-full border p-2 ">post</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
