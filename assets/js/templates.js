var HOME_THUMBNAILS_TEMPLATE = _.template('<div class="3u 12u$(medium)">' +
    '<span class="image fit"><img src="images/pic02.jpg" alt="" /></span>' +
    '<h3><%= masjid_name %></h3>' +
    '<p><%= masjid_address %></p>' +
    '<ul class="actions">' +
    '<li><a href="#" class="button watch-live-stream" data-masjid-index="<%= masjid_index %>" data-khateeb-index="<%= khateeb_index %>">Watch</a></li>' +
    '</ul></div>');

var MOSQUE_INFO_TEMPLATE = _.template(
    '<header class="major">' +
        '<h2><%= masjid_name %></h2>' +
        '</header>' +
        '<p><%= masjid_address %></p>' +
        '<p><%= khateeb_name %></p>'
);