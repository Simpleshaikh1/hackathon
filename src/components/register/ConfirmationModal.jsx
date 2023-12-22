/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { done } from "../../utilities/utils"


const ConfirmationModal = ({ isVisible, onClose }) => {

    if (!isVisible) {
        return null;
    }
    
  return (
    <>
    <div className="bg-mainBlue fixed inset-0 bg-opacity-25 z-50 backdrop-blur-sm flex justify-center items-center">
        <div className="w-2/4 main-modal">
            <img className="w-full" src={done} alt="" onClick={onClose}/>
        </div>
    </div>
    </>
  )
}

export default ConfirmationModal