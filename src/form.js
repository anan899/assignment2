import "./form.css";
import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux"
import {addBeauty,deleteB} from "./beauty";
import Modal from "./Modal";


export default function CreateForm() {
    const dispatch = useDispatch();
    const beautyList = useSelector((state) => state.beauty.value);

    const [Name, setName] = useState("");
    const [Spouse, setSpouse] = useState("");
    const [Title, setTitle] = useState("");
    const [Intro, setIntro] = useState("");
    const [isOpen, setIsOpen] = useState();

    const formFields = {Name:"",Spouse:"",Title:"",Intro:""};
    const [params, setParams] = useState(formFields);
    const clearForm=()=>setParams(formFields);




    return (
        <div className="container">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="add" >
                <h2>Western Royal Beauty</h2>
                <label htmlFor= "name">Name</label>
                <input type="text"    value={Name}
                       onChange={(event) => {setName(event.target.value);}}/>
                <label htmlFor= "spouse">Spouse</label>
                <input type="text"    value ={Spouse}
                       onChange={(event) => {setSpouse(event.target.value);}}/>
                <label htmlFor= "Title">Title</label>
                <input type="text"  value={Title}
                       onChange={(event) => {setTitle(event.target.value);}}/>
                <label htmlFor= "Intro">Introduction</label>
                <input type="text"   value={Intro}
                       onChange={(event) => {setIntro(event.target.value);}}/>

                <p></p>
                <p></p>

                <div className = "press">
                    <button  id = "1"
                        onClick={() => {
                            dispatch(addBeauty({
                            id: beautyList[beautyList.length - 1].id + 1, Name:Name, Spouse:Spouse, Title:Title, Introduction:Intro}));
                        }}>
                        Add Beauty
                    </button>
                    <button  id = "2"
                             onClick={clearForm}
                             >
                        Clear Form
                    </button>
                </div>
            </div>

            <div className="display">
                {beautyList.map((beauty) => {
                    return (
                            <div>
                                <h1> {beauty.Name}</h1>
                                <h1> Spouse: {beauty.Spouse}</h1>
                                <h1> Title: {beauty.Title}</h1>
                                <button onClick={() => {
                                    dispatch(deleteB({ id: beauty.id }));}}>
                                    Delete Beauty
                                </button>
                                    <button onClick={()=>{
                                        setIsOpen(beauty.id);
                                    }}>View in popup</button>
                                    <Modal open={isOpen === beauty.id} onClose={()=>setIsOpen(undefined)}>
                                        <h3> {beauty.Introduction}</h3>
                                    </Modal>

                            </div>
                    );})}
            </div>
        </div>
    );
}



