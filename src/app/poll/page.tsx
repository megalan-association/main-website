import React from "react";

export default function Poll () {


  return (
    <div className="w-full bg-white ">
      <div className=" w-full flex flex-col" id="strawpoll_bVg8oMG13nY">
        <iframe
          title="StrawPoll Embed"
          id="strawpoll_iframe_bVg8oMG13nY"
          className="static visible block w-full h-full "
          src="https://strawpoll.com/embed/bVg8oMG13nY"
        >
          Loading...
        </iframe>
        <script
          async
          src="https://cdn.strawpoll.com/dist/widgets.js"
          // charset="utf-8"
        ></script>
      </div>
    </div>
  );

}