import IBaseControl from "./IBaseControl";

export default class BaseControl{
    constructor(control : IBaseControl) {
        const me= this;
        if (control) {
            me.fieldText = control.fieldText
        }
        
    }

    /**
     * Text hiển thị
     */
    fieldText?:string;
}