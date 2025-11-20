const url_location = "../tabs/";

$(document).ready(function(){ 
   var filename = findFileName(localStorage.getItem("songID"));
   displayTab(filename);
});

function displayTab(filename){
    $("#tabs").attr('data', url_location + filename);
}

function findFileName(id){
    const song = songArray.find(song => song.ID == id);
    
    if (song) {
        return song.FileName;
    }

    return null;
}


