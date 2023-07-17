import BaseControl from "../basecontrol/BaseControl";
import IButton from "./IButton";
export default class Button extends BaseControl{
    /**
     *
     */
    constructor(button: IButton) {
        super(button);
        const me= this;
        if (button) {
            me.readonly = button.readonly
        }
    }

    readonly?: boolean;
}