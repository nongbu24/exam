import React, { useState } from "react";

const CreatePage = ({ onAdd, items }) => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [date, setDate] = useState('');

    const handleIdChange = (newId) => {
        if (items.some(item => item.id === newId)) {
            alert("중복된 ID입니다. 다른 ID를 입력해주세요.");
            return;
        }
        setId(newId);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (id.trim() !== "" && title.trim() !== "" && genre.trim() !== "" && date.trim() !== "") {
            const newItem = {
                id,
                title,
                genre,
                date
            };

            onAdd(newItem);
            setId("");
            setTitle("");
            setGenre("");
            setDate("");
        }
    };

    return (
        <div>
            <h1>Create Movie</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        value={id}
                        onChange={(event) => handleIdChange(event.target.value)}
                        placeholder="Input movie id"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        placeholder="Input movie title"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        value={genre}
                        onChange={(event) => setGenre(event.target.value)}
                        placeholder="Input movie genre"
                    />
                </div>
                <div>
                <input
                    type="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                />
                </div>
                <button type="submit">Add Movie</button>
            </form>
        </div>
    );
};

export default CreatePage;