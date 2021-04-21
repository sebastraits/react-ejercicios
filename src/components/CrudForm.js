import React, { useState, useEffect } from "react";

const initialForm = {
  name: "",
  genero: "",
  id: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.genero) {
      alert("Datos incompletos");
      return;
    }

    if (form.id == null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(false);
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar": "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={form.name}
          type="text"
          name="name"
          placeholder="Nombre"
        />
        <input
          onChange={handleChange}
          value={form.genero}
          type="text"
          name="genero"
          placeholder="Genero"
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
