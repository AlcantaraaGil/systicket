import React from 'react'

export const Updatecase = () => {
    return (
        <>
          <div classNameName='newCase-form'>
        <form>
            <div className="w-full max-w-md mx-auto mt-3">
                <label for="subject" className="text-gray-700 mr-2">Subject<span className="text-red-500">*</span></label>
                <input type="text" id="subject" name="subject" placeholder="Enter your subject" className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"/>
            </div>
    
            <div className="w-full max-w-md mx-auto mt-3">
                <label for="dueDate" className="text-gray-700 mr-2">Set due to date<span className="text-red-500">*</span></label>
                
                <input type="date" id="dueDate" name="dueDate" className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"/>
            </div>
    
            <div className="w-full max-w-md mx-auto mt-3">
                <label for="assignTo" className="text-gray-700 mr-2">Assign to<span className="text-red-500">*</span></label>
               
                <select id="assignTo" name="assignTo" className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white">
                    <option value="option1">Antonio Campos</option>
                    <option value="option2">Jonathan Campos</option>
                    <option value="option3">Juan Campos</option>
                </select>
            </div>
    
            <div className="w-full max-w-md mx-auto mt-3">
                <label for="assignTo" classNameName="text-gray-700 mr-2">Priority<span className="text-red-500">*</span></label>
               
                <select id="assignTo" name="assignTo" className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white">
                    <option value="option1">Low</option>
                    <option value="option2">High</option>
                    <option value="option3">Critical</option>
                </select>
            </div>
    
            <div className="w-full max-w-md mx-auto mt-3">
                <label for="tag" className="text-gray-700 mr-2">Tag</label>
                <input type="text" id="tag" name="tag" placeholder="Enter your tag" className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"/>
            </div>
    
            <div className="w-full max-w-md mx-auto mt-3">
                <label for="notes" className="text-gray-700 mr-2">Notes</label>
               
                <textarea id="notes" name="notes" placeholder="Enter your notes" className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"></textarea>
            </div>

            <div className="w-full max-w-md mx-auto mt-3">
                <label for="assignTo" className="text-gray-700 mr-2">Status<span className="text-red-500">*</span></label>
               
                <select id="assignTo" name="assignTo" className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white">
                    <option value="option1">In Progress</option>
                    <option value="option2">Completed</option>
                    <option value="option3">Standby</option>
                </select>
            </div>

            <div className="w-full max-w-md mx-auto mt-3 text-gray-400" >
                <p>Created By Jonathan Campos on April 4th, 2023 08:30 AM </p>
                <p>Last Updated By Antonio Campos on April 4th, 2023 08:55 AM </p>
            </div>


            <div className="w-full max-w-md mx-auto mt-6 mb-6">
              <button type="submit" className=" mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Update
              </button>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Delete
              </button>
            </div>
    
    
    
        </form>
    </div>
        </>
      )
}
