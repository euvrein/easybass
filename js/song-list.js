$(document).ready(function(){
    searchSong();
});

function openBassTab(ID){
    localStorage.setItem("songID",ID);

    window.location.href = "./bass-tabs.html";
}


function searchSong(){
  $("#searchbar").on("keyup", function() {

    var value = $(this).val().toLowerCase();

    $("#songlist li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });

  });
}

function listSongs(){
    let songs=sortList('Artist');
    
    $.each(songs, function(key, value){
        $("#songlist").append(
            '<li class="mt-2">' + 
                '<a href="#" onclick="openBassTab(' + value.ID + ')">' +
                    value.Artist + ' - ' + value.Title + ' [' + value.Difficulty + ']'
                + '</a>'
            + '</li>'
        );
    });
}

function sortList(field){
    let results = songArray.sort(
        (a, b) => (a[field] || "").toString().localeCompare(
            (b[field] || "").toString()
        )
    );
    return results;
}

