import React, { useState } from "react";

const SongForm = ({ handleSearch }) => {
  const initialForm = {
    artist: "",
    song: "",
  };
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.artist || !form.song) {
        alert("Datos incompletos")
        return
    } else {
        handleSearch(form);
        setForm(initialForm)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Nombre del interprete"
          onChange={handleChange}
          value={form.artist}
        />
        <input
          type="text"
          name="song"
          placeholder="Nombre de la cancion"
          onChange={handleChange}
          value={form.song}
        />
        <input type="submit" value="enviar" />
      </form>
    </div>
  );
};

export default SongForm;
