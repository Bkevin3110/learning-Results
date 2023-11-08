
$(document).ready( () =>{

    $.getJSON("./data.json", function(jsonData){
        Reaction = jsonData[0]
        Memory = jsonData[1]
        Verbal = jsonData[2]
        Visual = jsonData[3]

    $('#title-reaction').text(Reaction.category);
    $('#summary-icon-reaction').attr("src", Reaction.icon)
    $('#reaction-score').text(Reaction.score)

    $('#title-memory').text(Memory.category);
    $('#summary-icon-memory').attr("src", Memory.icon)
    $('#memory-score').text(Memory.score)

    $('#title-verbal').text(Verbal.category);
    $('#summary-icon-verbal').attr("src", Verbal.icon)
    $('#verbal-score').text(Verbal.score)

    $('#title-visual').text(Visual.category);
    $('#summary-icon-visual').attr("src", Visual.icon)
    $('#visual-score').text(Visual.score)

    });
    
    
});
