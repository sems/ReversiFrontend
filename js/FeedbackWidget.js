class FeedbackWidget{
    constructor(elementClass){
        this._element = $('.' + elementClass)
    }

    get ElementById(){
        return this.element;
    }

    show(message, type){
        this._element.removeClass("widget-hidden")
        this._element.addClass("widget-show")
        this._element.InnerText = message;
        
        // type == "success" 
        // ? this._element.classList.add("alert-success") 
        // : this._element.classList.add("alert-danger");

        this.log({
            message: message,
            type: type
        });
    }

    hide(){
        this._element.removeClass("widget-show")
        this._element.addClass("widget-hidden")
    }

    log(message){
        if (localStorage.getItem("feedback_widget") === null) {
            // New object for storage
            let stor = {
                messages: [message]
            }
            localStorage.setItem('feedback_widget', JSON.stringify(stor))
        } else {
            let stor = JSON.parse(localStorage.getItem('feedback_widget'));
            stor.messages.unshift(message)
            
            // Not longer then 10 items: 0 -> 9
            if(stor.messages.length > 10) 
                stor.messages.pop();

            localStorage.setItem('feedback_widget', JSON.stringify(stor))
        }
    }

    removeLog(){
        localStorage.removeItem('feedback_widget');
    }

    history(){
        let stor = JSON.parse(localStorage.getItem('feedback_widget'));
        
        let string = "";
        stor.messages.forEach(element => {
            string = string + element.type +" - " + element.message + " \n "
        });
        
        console.log(string);
    }
}

$(function() {
    let s = new FeedbackWidget("widget-success");
    let d = new FeedbackWidget("widget-danger");

    $(".btn_ok").on("click", function(){
        s.show("Hier ben ik!", "success");
    });
    
    $(".btn_hide").on("click", function(){
        s.hide();
    });
});