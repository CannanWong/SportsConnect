import { useState, useRef } from 'react';
import { db } from "./firebase_setup/firebase";
import { doc, updateDoc } from "firebase/firestore";

function User() {
    const input = useRef()
    const [user, setUser] = useState([])

    function updatePresetUser() {
        const userRef = doc(db, "presetUser", "testUser")
        updateDoc(userRef, {name: input.current.value})
        setUser(input.current.value)
        input.current.value = ""
    }


    return (
      <div className="card mx-auto" style={{width: "90%"}}> 
      <h1 className="card-title mx-auto">Preset User:</h1>
        <div className="card-body">
            <h4>Curr Preset: {user}</h4>
			<input type= "text" className="form-control" ref={input} />
            <button onClick={() => updatePresetUser()}>Update</button>
		</div>
      </div>
    )
  }
  
  export default User;