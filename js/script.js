function Tasks(task, dayRecorded, Deadline){
    this.task = task;
    this.dayRecorded = dayRecorded;
    this.Deadline = Deadline;
}

$(document).ready(function(){
    $("form#newtask").submit(function(event){
        event.preventDefault();

        if($("input#task" !== '')){
            var inputtedtask = $("input#task").val();
            return inputtedtask;
        }else{
            $("span.error").append("this cannot be empty")
        }

        if($("input#day-record" !== "")){
            var inputteddayrecord = $("input#day-record").val();
            return inputteddayrecord;
        }
        else{
            $("span.error").append("this cannot be empty")
        }
        
        if($("input#day-record" !== "")){
            var inputteddeadline = $("input#deadline").val();
            return inputteddeadline;
        }else{
            $("span.error").append("this cannot be empty")
        }
        
        var newTask = new Tasks(inputtedtask, inputteddayrecord, inputteddeadline);
        var status = "pending";

        // $("form").append("<input type =checkbox");
        $("ul#").append("<li>"+ inputtedtask + "</li>");
        $("ul#").append("<li>"+ inputteddayrecord + "</li>");
        $("ul#").append("<li>"+ inputteddeadline + "</li>");
        $("ul#").append("<li>" + status + "</li>");
    });
});