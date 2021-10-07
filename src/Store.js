import { makeAutoObservable } from "mobx";

class Store {


searchTerm="";

searchitem(e){

    this.searchTerm=e;
}
constructor(){

    makeAutoObservable(this);
}


}  

export default Store;