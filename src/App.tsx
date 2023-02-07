import { type } from '@testing-library/user-event/dist/type';
import { log } from 'console';
import * as React from 'react';

export interface IAppProps {
}

let color:string='red'
let year:number= 2020

//!tupel
let mySexToy:[x:number,y:boolean,z:string] =[5,true,'my pip']

export default function App(props: IAppProps) {

 console.log(mySexToy[0]);
 
 
  return (
    <>
      <div>
        HELLO WOLRD
      </div>
    </>
  );
}
