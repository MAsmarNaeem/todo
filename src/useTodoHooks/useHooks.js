import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteval, updatevalue, addvalue } from "../Store/Slice";

export default function useHooks() {
  const [input, setinput] = useState("");
  const data = "";
  const [selecteditemid, setseleteditem] = useState(null);
  const [toggle, settoggle] = useState(false);
  const [edit, setedit] = useState({});
  const dispatch = useDispatch();

  const setvalue = (e) => {
    setinput(e.target.value);
  };
  const addvaluemy = () => {
    dispatch(addvalue(input));
    setinput("");
  };

  const deletehandler = (item) => {
    dispatch(deleteval(item));
  };
  const updatehandler = (item) => {
    setseleteditem(item.id);
    settoggle(!toggle);
    setedit(item);
  };
  const editinput = (item) => {
    dispatch(updatevalue(item));
  };

  return {
    input,
    setinput,
    setvalue,
    addvaluemy,
    deletehandler,
    selecteditemid,
    toggle,
    updatehandler,
    settoggle,
    edit,
    setedit,
    editinput,
    data,
  };
}
