$(document).ready(function() {
    // get vpn type
    let vpnSelect = $('#selectVpn');
    vpnSelect.empty();

    vpnSelect.append('<option>Choose type</option>');
    vpnSelect.prop('selectedIndex', 0);

    const url = self.location.origin + '/data/vpnje.json';

    $.getJSON(url, function(data) {
        $.each(data.vpnType, function(key, entry) {
            vpnSelect.append($('<option></option>').attr('value', entry).text(key));
        })
    });
});