$(function(){
    watchLiveStream(0, 0);
    initThumbnails();

    $('.watch-live-stream').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        watchLiveStream($(this).data('masjid-index'), $(this).data('khateeb-index'));
    });

});

function loadVideo(url){
    $("#livestream-iframe").attr("src", url);
}

function watchLiveStream(masjid_index, khutbah_index){
    var masjid = MASJIDS[masjid_index];
    var khutbah = masjid.khutbas[khutbah_index];
    $("#mosque-info").html(
        MOSQUE_INFO_TEMPLATE({
            masjid_name: masjid.name,
            khateeb_name: khutbah.khateeb_name,
            masjid_address: masjid.address
        })
    );
    loadVideo(MASJIDS[masjid_index].khutbas[khutbah_index].livestream_url);
}

function initThumbnails(){
    var masjid_index = 0;
    MASJIDS.forEach(function(masjid){
        var khateeb_index = 0;
        masjid.khutbas.forEach(function(khutbah){
            $("#thumbnail-previews").append(HOME_THUMBNAILS_TEMPLATE({
                masjid_name: masjid.name,
                masjid_address: masjid.address,
                masjid_index: masjid_index,
                khateeb_index: khateeb_index
            }));
            khateeb_index++;
            masjid_index++;
        });
    });
}