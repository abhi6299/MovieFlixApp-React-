// When testing global scope
    //import './headingOne.css';
//Using Module.css
    import styleByModule from './headingOne.module.css';

export default function HeadingOne(){
    return (
        <div className="wrapper">
            <h1>Heading 1</h1>
            {/* When trying global scope concept */}
                {/* <button className="headBtn">Button1</button> */}
            {/* Using module.css concept */}
            <button className={styleByModule.headBtn}>Button1</button>
        </div>
    )
}