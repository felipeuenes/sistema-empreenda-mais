import { Proto } from "./App";

export function LocalStorage() {
    
    // let nome = Proto.name
    // console.log(nome);

    localStorage.setItem(`name`, `${nome}`)
  
    const name = localStorage.getItem(`name`)
    console.log(name);
}