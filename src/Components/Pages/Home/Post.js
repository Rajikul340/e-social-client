import React, { useContext, useState } from "react";
import { AuthUser } from "../../AuthContext/AuthContext";
import "../Style/Style.css";
import { MdPermMedia } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const { user } = useContext(AuthUser);
  const navigate = useNavigate();
  const [photo, setphoto] = useState(null);
  const handleInputChange = (event) => {
    setphoto(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmt = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.files[0];
    const message = form.message.value;
    console.log(photo, message);
    const time = new Date()
    // const time = current.toLocaleTimeString('en-US');

    const formData = new FormData();
    formData.append("image", photo);
    fetch(
      "https://api.imgbb.com/1/upload?key=19900dd0d8e1013079c1d14e32346566",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const profile = {
          message,
          postImg: data?.data?.url,
          image: user?.photoURL,
          name: user?.displayName,
          time,
          email:user?.email,
        };

        fetch("http://localhost:5000/mediadata", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body:JSON.stringify(profile),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate("/media");
            form.reset();
          })
          .catch(err=>{
            console.log(err);
          })
      });
  };

  return (
    <div className="mt-8 mx-10">
      {/* The button to open modal */}
      <div className="">
        <div className="">
          {user?.email ? (
            <>
              <div className="flex gap-2 my-4 items-center">
                <img
                  title={user?.displayName}
                  src={user?.photoURL}
                  alt=""
                  referrerPolicy="no-referrer"
                  className="w-16 userImg"
                />
                <p>{user?.displayName}</p>
              </div>
            </>
          ) : (
            ""
          )}
          <label
            className="border post px-20 py-3 hover:pointer"
            htmlFor="my-modal-3"
          >
            {" "}
            start a post{" "}
          </label>
        </div>
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
          <h3 className="text-lg font-bold">Create Post</h3>
          <form className="py-4" onSubmit={handleSubmt}>
            <textarea
              className="textarea textarea-bordered w-full "
              name="message"
              placeholder=" share Your feelings"
            ></textarea>
            <label for="input" className=" border " id="upload">
              {" "}
              <MdPermMedia
                title="upload image"
                className="border w-full  my-3 "
                size="40px"
              />{" "}
            </label>
            <input
              type="file"
              name="photo"
              className="w-full border p-2 form-control hidden "
              onChange={handleInputChange}
              id="input"
            />
            {photo ? (
              <>
                {" "}
                <img
                  src={photo}
                  className="w-80 h-60 mx-auto"
                  alt="Image_Photo"
                />
              </>
            ) : (
              ""
            )}

            <button
              type="submit"
              className="w-full border p-2 mt-2 hover:bg-[#A4A7AB] "
            >
              post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
