jQuery(function()
{
    "use strict";
	var d = new Date();
	var startdate = ("0" + d.getDate()).slice(-2) + "/" + ("0"+(d.getMonth()+1)).slice(-2) + "/" + d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":00";
    var options = {
        wrapper: ".wrapper",
        minHeight: 500
    };

    function setHeight()
    {
        var documentHeight = $(window).height();

        if (documentHeight > options.minHeight)
        {
            $(options.wrapper).height(documentHeight);
        }
    }

    setHeight();

    $(window).resize(function()
    {
        setHeight();
    })

    $(".countdown").countDown(
    {
        date: startdate,
        offset: 0
    });
});