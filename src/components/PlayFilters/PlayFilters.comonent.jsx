import React from 'react';
import { Disclosure } from '@headlessui/react';
import {BiChevronUp,BiChevronDown} from "react-icons/bi"

const PlayFilters = (props) => {
    return (
       
           <Disclosure>
     {({open})=>(
         <>
          <Disclosure.Button className="py-2 flex gap-3">
              {open ? <BiChevronUp/>:<BiChevronDown/>}
          <span className={open ?"text-red-500":"text-gray-700"}>{props.title}</span>
        </Disclosure.Button>
        <Disclosure.Panel className="text-gray-500">
        <div className="flex flex-wrap items-center gap-3">
            {props.tags.map((tag)=>(
                 <div className="border-2 border-gray-300 px-3 py-2">
                 <span className="text-red-500">{tag}</span>
             </div>
            ))}
        </div>
        </Disclosure.Panel>
        </>
     )}
    </Disclosure>  
        
    )
}

export default PlayFilters;
