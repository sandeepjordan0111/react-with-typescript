import React, { useState } from "react";
import {IState as Props} from '../App';

// interface IProps{
//     people: Props["people"]
//     setPeople: React.Dispatch<React.SetStateAction<{
//         name: string;
//         age: number;
//         url: string;
//         note?: string | undefined;
//     }[]>>
// }
interface IProps{
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}
export const  AddToList:React.FC<IProps> = ({people,setPeople}) =>{
    const[input, setInput] = useState({
        name: "",
        age: '',
        image: "",
        note: ""
    })
    const handleChange = (e:any): void =>{
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const handleClick = (): void =>{
            if(!input.name || !input.age ||!input.image){
                return
            }
            setPeople([
                ...people,
                {
                    name: input.name,
                    age: parseInt(input.age),
                    url: input.image,
                    note: input.note
                }
            ])
            setInput({
                name: "",
                age: '',
                image: "",
                note: ""
            })
    }
    return(
        <div className="AddToList">
            <input type="text" placeholder="name"
            className="AddToList-input"
            value={input.name}
            onChange={handleChange}
            name="name"/>
             <input type="text" placeholder="age"
            className="AddToList-input"
            value={input.age}
            onChange={handleChange}
            name="age"/>
             <input type="text" placeholder="url"
            className="AddToList-input"
            value={input.image}
            onChange={handleChange}
            name="image"/>
             <input type="text" placeholder="note"
            className="AddToList-input"
            value={input.note}
            name="note"
            onChange={handleChange}/>
            <button className="AddToList-btn"
            onClick={handleClick}>
                Add to List
            </button>
        </div>
    )
}
