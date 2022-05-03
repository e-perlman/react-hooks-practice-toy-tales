import React from "react";

function ToyCard({toy,onDeleteToy,onUpdateToy}) {
  function handleDeleteClick(){
    fetch(`http://localhost:3001/toys/${toy.id}`, {
    method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDeleteToy(toy));
  }
  function handleUpdateLikes(e){
    const updatedLikes=toy.likes+1;
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: updatedLikes,
      }),
    })
    .then((r) => r.json())
    .then((updatedToy) => onUpdateToy(updatedToy))
  }
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleUpdateLikes}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
