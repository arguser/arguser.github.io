$('a').click(function () {
    var $this = $(this);
    $this.css('color', greyscale($(this).css('color')));
    return false;
});

function greyscale (rgb) {
    // Match rbg(x, y, z);
    var m = rgb.match(/(\d+), *(\d+), *(\d+)/);

    if (! m.length) return undefined;

    var r = parseInt(m[1]), g = parseInt(m[2]), b = parseInt(m[3]);

    // Math c/o http://en.wikipedia.org/wiki/Grayscale
    var grey = parseInt(r * 0.3) + parseInt(g * 0.59) + parseInt(b * 0.11);

    //console.log(rgb, r, g, b, grey);
    return 'rgb(' + [grey, grey, grey].join(', ') + ')';
};
