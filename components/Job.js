import ReactMarkdown from "react-markdown";
import {useState} from 'react'
export default function Job({ job }) {
  const [show,setShow] = useState("hidden");
  const [btnName,setBtnName] = useState("View Details");
  function handleButton(){
    if(show ==="hidden"){
      setShow("block");
      setBtnName("Hide Details");
    }else if(show ==="block"){
      setBtnName("View Details");
      setShow("hidden");
    }
  }
  return (
    <div className="  mb-10 bg-white rounded overflow-hidden shadow-lg mx-auto w-2/3 md:max-w-6xl xl:max-w-4xl">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 flex flex-wrap justify-between">
          <div>
            {job.title} -{" "}
            <span className="font-normal  text-gray-400">{job.company}</span>
          </div>

          
        </div>
        <div className="text-sm text-gray-600 mb-2">
          {new Date(job.created_at).toLocaleDateString()}
        </div>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {job.type}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {job.location}
        </span>
        <div className="flex flex-wrap" style={{ wordBreak: "break-all" }}>
          <ReactMarkdown
            className=" mt-2 "
            children={job.how_to_apply}
            escapeHtml={false}
          />
        </div>

        <button onClick={handleButton} class=" mt-4 bg-blue-500 hover:bg-blue-700 text-white  font-semibold py-2 px-4 border border-gray-400 rounded shadow">
         {btnName}
        </button>
        <div className={`mt-4 transition duration-700 ease-in-out ${show}`}>
          <ReactMarkdown
            className=" mt-2 mb-2 "
            children={job.description}
            escapeHtml={false}
          />
        </div>
        
      </div>
    </div>
  );
}
