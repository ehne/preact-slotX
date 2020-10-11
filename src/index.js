// Licence (you must include this if you choose to copy&paste):
/*
MIT License

Copyright (c) 2020 darcy lugt-falk

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/


import {createContext, html, useState, useMemo, useEffect} from "htm/preact"


const SlotsContext = createContext({
    named: {},
    changed: []
})

/*
    {
        named:{
            "foo":Component
        },
        changed:["foo"]
    }
*/

export function Slot({name, children}) {
    const context = useContext(SlotsContext);
    const [content, setContent] = useState(children)

    // only run this code if the the "changed" array has changed in regards to the name.
    // note: this will run twice, once when name is added, and once when it is removed. (because the array changed both times)
    useEffect(()=>{
        
        setContent(context.named[name])

        // cleanup function, removes name from the array so we can change it later.
        return () => {
            context.changed = context.changed.filter((val)=>(val!=name))
            console.log(context)
        }
        
    }, [context.changed.filter((val)=>(val===name))])

    // checks if there is no SlotContent component defined for the specific name.
    if (context.named[name] === undefined) {
        return children
    } else {
        return content

    }
} 


export function SlotContent({name,children}) {
    const context = useContext(SlotsContext)

    // defines the component
    context.named[name] = children
    // runs this code when the children change.
    useMemo(() => {
        // set slot value
        context.named[name] = children
        // add name to array so that Slot knows to update
        context.changed.push(name)
    }, [children]);

    //console.log(context)
    return null
}

export function SlotProvider({children}) {
    const [named, setNamed] = useState({});
    const [changed, setChanged] = useState([]);
    
    return html`<${SlotsContext.Provider} value=${ {
        named, changed
    } }>
        ${children}
    <//>
    `
}