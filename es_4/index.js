const h1 = document.createElement("h1")
h1.textContent = "Hello world"
h1.className = "header"
console.log(h1)

// restituisce solo l'elemento html puro
// <h1 class="header">

const element = <h1 className="header">This is JSX</h1>
console.log(element)

//restituisce un oggetto che react può interpretare e
//renderizzare a schermo

/*
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {
        className: "header", 
        children: "This is JSX"
    }, 
    _owner: null, 
    _store: {}
}
 */

// JSX
ReactDOM.render(element, document.getElementById("root"));


//esempio più complesso

/*
const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root"))

console.log dell'elemento navbar =

{
    type: "nav",
    key: null, 
    ref: null, 
    props: {children: [
                {type: "h1", key: null, ref: null, props: {children: "Bob's Bistro"}, _owner: null, _store: {}}, 
                {type: "ul", key: null, ref: null, props: {children: [{type: "li", key: null, ref: null, props: {children: "Menu"}, _owner: null, _store: {}}, 
                {type: "li", key: null, ref: null, props: {children: "About"}, _owner: null, _store: {}}, 
                {type: "li", key: null, ref: null, props: {children: "Contact"}, _owner: null, _store: {}}]}, _owner: null, _store: {}}]}, _owner: null, _store: {}}

*/