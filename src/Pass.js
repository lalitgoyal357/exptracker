import React,{useState} from "react";

const Pass = () => {
  const [records, setRecords] = useState();
  const [data, setData] = useState({
    name: "",
    email: "",
    address: "",
    phone: ""
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...data, id: new Date().getTime().toString() };
    console.log(newRecord);
    setRecords(...records, newRecord);
    setData({ name: "", email: "", address: "", phone: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <>
          <lable>userName</lable>
          <input
            type="text"
            name="name"
            autoComplete="off"
            value={data.name}
            onChange={handleInput}
          />
        </>
        <br />
        <>
          <lable>email</lable>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={handleInput}
          />
        </>
        <br />
        <>
          <lable>address</lable>
          <input
            type="text"
            name="address"
            value={data.address}
            onChange={handleInput}
          />
        </>
        <br />
        <lable>phone</lable>
        <input
          type="text"
          name="phone"
          value={data.phone}
          onChange={handleInput} 
        />
        <br />
        <button type="submit"> submit </button>
        

      </form>
      <div>
          {
              records.map((cuelm)=>{
                  return (
                      <div>
                          <p>{cuelm.email}</p>
                      </div>
                  )

              })
          }
      </div>
      </div>
   
      

    
  )
};

export default Pass;