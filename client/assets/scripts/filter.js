function filter(){
    $("#circles-slider").slider({
        min: 0,
        max: 10,
        values: [5, 10],
        range: true,
        step: .5,
    }).slider("pips")
      .slider("float");
    $(".year-slider").slider({
        min: 1888,
        max: 2017,
        values: [1888, 2017],
        range: true,
    }).slider("pips")
      .slider("float");
}
