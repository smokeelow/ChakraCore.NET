﻿import { V1,F1 } from 'Module1';
import { echo } from 'sdk@Echo';
export class app {
    main() {
        let a = V1;
        let b = a;
        let c = a + b;
        let f=this.abc(c);
        let o = { a: a, b: b, c: c, d: 123 };
        let o2 = { o: o, text: "text" };
        let ff = function (a) {
            return a + a;
        };
        // eval("let abc=1;"); 
        let ff2=F1(1,2);
        ff(1);
        //exceptionFunction();
        // this.longRunning();
        echo("---Script Finish---");
    }
    abc(v){
        return v+v;
    }

    longRunning(){
        for (let index = 0; index < 1000000; index++) {
            const element = index+123;
        }
    }
}