import "./form.css";
import React, {useState,useEffect} from "react";
import {useSelector, useDispatch} from "react-redux"
import Modal from "./Modal";
import {addBeautyAsync, deleteBeautyAsync, getBeautyAsync, updateBeautyAsync} from "./redux/thunk";



export default function CreateForm() {
    let dispatch = useDispatch();
    const beautyList = useSelector((state) => state.beauty.beautyList);
    useEffect(() => {
        dispatch(getBeautyAsync());
    }, []);






    const [id, setid] = useState("");
    const [Name, setName] = useState("");
    const [Spouse, setSpouse] = useState("");
    const [Title, setTitle] = useState("");
    const [Introduction, setIntro] = useState("");
    const [isOpen, setIsOpen] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addBeautyAsync({Name,Spouse,Title,Introduction}));
        setName('');
        setSpouse('');
        setTitle('');
        setIntro('');
    };


    const handleSubmit1 = (e) => {
        e.preventDefault();
        dispatch(updateBeautyAsync({id,Name,Spouse,Title,Introduction}));
        setid('');
        setName('');
        setSpouse('');
        setTitle('');
        setIntro('');
    };

    const clearForm=()=>{
        setid('');
        setName('');
        setSpouse('');
        setTitle('');
        setIntro('');
    }




    return (
        <div className="container">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <form className="add" onSubmit={handleSubmit} >
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
                <input type="text"   value={Introduction}
                       onChange={(event) => {setIntro(event.target.value);}}/>

                <p></p>
                <p></p>

                <div className = "press">
                    <button  id = "1"  type = 'submit'>
                        Add Beauty
                    </button>
                    <button  id = "2" type= 'reset'
                             onClick={clearForm}
                    >
                        Clear Form
                    </button>
                </div>
            </form>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="display">
                {beautyList.map((beauty) => {
                    return (
                        <div className='dd'>
                            <h1> {beauty.Name}</h1>
                            <h1> Spouse: {beauty.Spouse}</h1>
                            <h1> Title: {beauty.Title}</h1>
                            <h4>ID: {beauty._id}</h4>
                            <button
                                onClick={()=>{
                                    dispatch(deleteBeautyAsync(beauty._id));
                                    console.log(beauty._id);
                                }}>
                                Delete Beauty
                            </button>
                            <button onClick={()=>{
                                setIsOpen(beauty._id);
                            }}>View in popup</button>
                            <Modal open={isOpen === beauty._id} onClose={()=>setIsOpen(undefined)}>
                                <h3> {beauty.Introduction}</h3>
                            </Modal>


                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>


                            <form className="update"  onSubmit={handleSubmit1}>
                                <h2>Update Information</h2>
                                <label htmlFor= "ID">id</label>
                                <input type="text"    value={id}
                                       onChange={(event) => {setid(event.target.value);}}/>
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
                                <input type="text"   value={Introduction}
                                       onChange={(event) => {setIntro(event.target.value);}}/>
                                <p></p>

                                <div className = "press">
                                    <button  id = "1"  type = 'submit'>
                                        Update Beauty
                                    </button>
                                    <button  id = "2" type= 'reset'
                                             onClick={clearForm}
                                    >
                                        Clear Form
                                    </button>
                                </div>
                            </form>




                        </div>
                    );})}
            </div>
        </div>
    );
}
