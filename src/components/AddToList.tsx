import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

interface IState {
    input: {
        name: string
        age: string
        url: string
        note: string
    }
}

const AddToList : React.FC<IProps> = ({ people, setPeople }) => {

    const [input, setInput] = useState<IState["input"]>({ url: "", age: "", name: "", note: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) : void => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleClick = (): void => {
        if (!input.name || !input.age || !input.url) {
            return;
        }

        setPeople([ ...people, { name: input.name, age: parseInt(input.age), note: input.note, url: input.url } ]);
    };

    return (
        <div className="AddToList">
            <input className="AddToList-input" type="text" name="name" value={input.name} placeholder="Name" onChange={handleChange} />
            <input className="AddToList-input" type="number" name="age" value={input.age} placeholder="Age" onChange={handleChange} />
            <input className="AddToList-input" type="text" name="url" value={input.url} placeholder="Url" onChange={handleChange} />
            <textarea className="AddToList-input" name="note" value={input.note} placeholder="Note" onChange={handleChange} />
            <button className="AddToList-btn" onClick={handleClick}>Add to list</button>
        </div>
    );
}

export default AddToList;