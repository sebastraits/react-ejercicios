import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  {
    id: 1,
    name: "Leonard Cohen",
    genero: "blues / jazz",
  },
  {
    id: 2,
    name: "Sabina",
    genero: "Cantaautor",
  },
  {
    id: 3,
    name: "Mark Knopfler",
    genero: "Country/rock",
  },
  {
    id: 4,
    name: "Michael Jackson",
    genero: "Pop",
  },
  {
    id: 5,
    name: "Alan Parson",
    genero: "Rock experimental",
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);

  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    console.log(data);
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(`Desea eliminar el item con id=${id}?`);
    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD APP</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          deleteData={deleteData}
          setDataToEdit={setDataToEdit}
        />
      </article>
    </div>
  );
};

export default CrudApp;
