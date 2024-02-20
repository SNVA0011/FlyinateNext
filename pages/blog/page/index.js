import React from "react"; 
import Error from "next/error";

const index = () => {
  return (
    <>
     <Error statusCode={400} />
    </>
  );
};

export default index;
