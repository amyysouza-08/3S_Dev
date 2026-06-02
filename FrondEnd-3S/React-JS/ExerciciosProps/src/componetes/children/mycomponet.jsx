import './mycomponet.css';
const MyComponet =(props)=>{
    return(
        <div className="container">
         {props.childen}
        </div>
    );
}
export default MyComponet;