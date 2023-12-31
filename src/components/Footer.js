import React from "react";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <>
    <center style={{marginTop:"3em"}} ><img src="/foot_preview_rev_1.png" ></img></center>
    <div className="footer  p-3 flex justify-between bg-gray-800 items-center">
      <div className="container">
          <h3>Copyright © {year} Shubham Mohite </h3>
        </div> 
       
        <div  className="container" >
          <h3>Made with ❤️ by Shubham </h3>
        </div>

         <div className="footer-body flex justify-between text-2xl">
          <a href="https://github.com/shubham-mohit" target="_blank" className="mx-2.5 "> <i class="fab fa-github"></i></a>

         

          <a href="https://www.linkedin.com/in/shubham-mohite-838591268/" target="_blank" className="mx-3.5 ">
          <i class="fab fa-linkedin"></i>
          </a>

          
        </div>
      </div>
          </>

  );
};
export default Footer;