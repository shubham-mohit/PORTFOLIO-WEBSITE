import React from "react";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <>
    <center>
    <img src="/foot_preview_rev_1.png" ></img>
    </center>
    <div className="footer headerTop p-3 flex justify-between bg-gray-800 items-center">
    
      <div className="container">
          <h3>Copyright © {year} Vijay Kumar Singh. All rights reserved</h3>
        </div>
        <div className="footer-body flex justify-between text-2xl">
          <a href="https://github.com/Rajesh270712" target="_blank" className="mx-2.5 "> <i class="fab fa-github"></i></a>

          <a href="https://www.linkedin.com/in/rajesh-bagul/" target="_blank" className="mx-3.5 ">
            <i class="fab fa-linkedin"></i>
          </a>

   
        </div>
      </div>
    </>

  );
};
export default Footer;
